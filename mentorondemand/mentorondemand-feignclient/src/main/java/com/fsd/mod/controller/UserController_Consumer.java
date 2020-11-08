package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.User;
import com.fsd.mod.feignclient.UserClientService;

@RestController
public class UserController_Consumer {

	@Autowired
	UserClientService userClientService;

	@RequestMapping("/feign/users/getUsers")
	public ResponseEntity<List<User>> getUsers() {
		return userClientService.getUsers();
	}

	@RequestMapping("/feign/users/{id}")
	public ResponseEntity<User> getUser(@PathVariable Long userId) {
		return userClientService.getUser(userId);
	}

	@PostMapping(value = "/feign/users/signup")
	public ResponseEntity<User> addUser(@RequestBody User user) {
		return userClientService.addUser(user);
	}

	@PutMapping(value = "/feign/users/{id}")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		return userClientService.updateUser(user);
	}

	@DeleteMapping(value = "/feign/users/{id}")
	public ResponseEntity<Boolean> deleteUser(@PathVariable Long userId) {
		userClientService.deleteUser(userId);
	}

	@PostMapping(value = "/feign/users/login")
	public ResponseEntity<User> loginUser(@RequestBody User user) {
		return userClientService.loginUser(user);
	}

	@PatchMapping(value = "/feign/users/updatePassword")
	public ResponseEntity<User> updatePassword(@RequestBody User user) {
		return userClientService.updatePassword(user);
	}

}
