package com.fsd.mod.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.User;
import com.fsd.mod.feignclient.UserClientService;
import com.fsd.mod.response.JwtResponse;
import com.fsd.mod.response.MessageResponse;
import com.fsd.mod.service.impl.UserDetailsImpl;
import com.fsd.mod.utils.JwtUtils;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
//@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserClientService userClientService;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping("/users/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody User user) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(user.getUserEmail(), user.getUserPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt, 
												 userDetails.getId(), 
												 userDetails.getUsername(), 
												 userDetails.getEmail(), 
												 roles));
	}

	@PostMapping("/users/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody User user) {
		if (userClientService.getUserByEmail(user.getUserEmail()) != null) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: User email is already taken!"));
		}

		if (userClientService.getUserByName(user.getUserName()) != null) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: User name is already in use!"));
		}
		
		userClientService.addUser(user);
		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
}
