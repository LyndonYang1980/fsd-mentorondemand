package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
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

	@RequestMapping("/users")
	public List<User> getUsers() {
		return userService.getUsers();
	}

	@RequestMapping("/users/{id}")
	public User getUser(@PathVariable Long userId) {
		return userService.getUser(userId);
	}

	@PostMapping(value = "/users/signup")
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	}

	@PutMapping(value = "/users/{id}")
	public void updateUser(@RequestBody User user) {
		userService.updateUser(user);
	}

	@DeleteMapping(value = "user/{id}")
	public void deleteUser(@PathVariable Long userId) {
		userService.deleteUser(userId);
	}

}
