package com.fsd.mod.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
	
	@PostMapping("/feign/users/signin/{userName}/{userPassword}")
	public ResponseEntity<?> authenticateUser(@PathVariable String userName, @PathVariable String userPassword){
		return authClientService.authenticateUser(userName, userPassword);
	}
	
	@PostMapping("/feign/users/signup")
	public ResponseEntity<?> registerUser(@RequestBody User user) {
		return authClientService.registerUser(user);
	}

}
