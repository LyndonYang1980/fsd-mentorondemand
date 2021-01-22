package com.fsd.mod.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.config.MD5PasswordEncoder;
import com.fsd.mod.entities.User;
import com.fsd.mod.feignclient.UserClientService;
import com.fsd.mod.response.JwtResponse;
import com.fsd.mod.response.MessageResponse;
import com.fsd.mod.service.impl.UserDetailsImpl;
import com.fsd.mod.utils.JwtUtils;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserClientService userClientService;

	@Autowired
	MD5PasswordEncoder md5PasswordEncoder;

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping("/users/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody User user) {

		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority(user.getRole()));

		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(user.getUserName(),
				user.getUserPassword(), authorities);

		Authentication authentication = authenticationManager.authenticate(authToken);

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication, user.getRole());

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		
		BeanUtils.copyProperties(userDetails, user, "userPassword");
		
		return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUserId(), userDetails.getUsername(),
				userDetails.getUserEmail(), "userObj", user));
	}

	@PostMapping("/users/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody User user) {
		if (userClientService.getUserByEmail(user.getUserEmail()) != null) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: User email is already taken!"));
		}

		if (userClientService.getUserByName(user.getUserName()) != null) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: User name is already in use!"));
		}

		user.setUserPassword(md5PasswordEncoder.encode(user.getUserPassword()));
		user.setRegDate(new Date());
		userClientService.addUser(user);
		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
}
