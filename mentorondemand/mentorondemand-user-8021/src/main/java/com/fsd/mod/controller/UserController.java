package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.fsd.mod.service.UserService;

@RestController
public class UserController {

	@Autowired
	UserService userService;

	@RequestMapping("/users/getUsers")
	public List<User> getUsers() {
		return userService.getUsers();
	}

	@RequestMapping("/users/{id}")
	public User getUser(@PathVariable Long userId) {
		return userService.getUser(userId);
	}

	@PostMapping(value = "/users/addUser")
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	}

	@PutMapping(value = "/users/{id}")
	public void updateUser(@RequestBody User user) {
		userService.updateUser(user);
	}

	@DeleteMapping(value = "/users/{id}")
	public void deleteUser(@PathVariable Long userId) {
		userService.deleteUser(userId);
	}

	@PostMapping(value = "/users/login")
	public ResponseEntity<User> loginUser(@RequestBody User user) {
		User userData = userService.userLogin(user.getEmail(), user.getPassword());
		if (userData != null) {
			return new ResponseEntity<User>(userData, HttpStatus.ACCEPTED);
		} else {
			return new ResponseEntity<User>(userData, HttpStatus.NOT_FOUND);
		}
	}
	
	@PatchMapping(value = "/users/updatePassword")
	public ResponseEntity<User> updatePassword(@RequestBody User user){
		return new ResponseEntity<User>(userService.updateUser(user), HttpStatus.OK);
	}

}
