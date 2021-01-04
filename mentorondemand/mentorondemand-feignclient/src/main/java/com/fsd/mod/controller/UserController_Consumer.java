package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.User;
import com.fsd.mod.feignclient.UserClientService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController_Consumer {

	@Autowired
	UserClientService userClientService;

	@GetMapping("/feign/users/getUsers")
	public ResponseEntity<List<User>> getUsers() {
		return userClientService.getUsers();
	}

	@GetMapping("/feign/users/{userId}")
	public ResponseEntity<User> getUser(@PathVariable Long userId) {
		return userClientService.getUser(userId);
	}

	@PostMapping(value = "/feign/users/addUser")
	public ResponseEntity<User> addUser(@RequestBody User user) {
		return userClientService.addUser(user);
	}

	@PutMapping(value = "/feign/users/{userId}")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		return userClientService.updateUser(user);
	}

	@DeleteMapping(value = "/feign/users/{userId}")
	public ResponseEntity<Boolean> deleteUser(@PathVariable Long userId) {
		return userClientService.deleteUser(userId);
	}

	@PostMapping(value = "/feign/users/login")
	public User loginUser(@RequestBody User user) {
		return userClientService.loginUser(user);
	}

	@PutMapping(value = "/feign/users/updatePassword")
	public ResponseEntity<User> updatePassword(@RequestBody User user) {
		return userClientService.updatePassword(user);
	}

}
