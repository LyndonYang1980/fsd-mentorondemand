package com.fsd.mod.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Mentor;
import com.fsd.mod.entities.User;
import com.fsd.mod.feignclient.AuthClientService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AuthControl_Consumer {

	@Autowired
	AuthClientService authClientService;

	@PostMapping("/feign/users/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody User user) {
		return authClientService.authenticateUser(user);
	}

	@PostMapping("/feign/users/signup")
	public ResponseEntity<?> registerUser(@RequestBody User user) {
		return authClientService.registerUser(user);
	}

	@PostMapping("/feign/mentors/signin")
	public ResponseEntity<?> authenticateMentor(@RequestBody Mentor mentor) {
		return authClientService.authenticateMentor(mentor);
	}

	@PostMapping("/feign/mentors/signup")
	public ResponseEntity<?> registerMentor(@RequestBody Mentor mentor) {
		return authClientService.registerMentor(mentor);
	}

}
