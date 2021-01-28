package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	public List<User> getUsers() {
		return userClientService.getUsers();
	}

	@GetMapping("/feign/users/{userId}")
	public User getUser(@PathVariable("userId") Long userId) {
		return userClientService.getUser(userId);
	}

	@GetMapping("/feign/users/getUserByName/{userName}")
	public User getUserByName(@PathVariable("userName") String userName) {
		return userClientService.getUserByName(userName);
	}

	@GetMapping("/feign/users/getUserByEmail/{userEmail}")
	public User getUserByEmail(@PathVariable("userEmail") String userEmail) {
		return userClientService.getUserByEmail(userEmail);
	}

	@PutMapping(value = "/feign/users")
	public User updateUser(@RequestBody User user) {
		return userClientService.updateUser(user);
	}

	@DeleteMapping(value = "/feign/users/{userId}")
	public Boolean deleteUser(@PathVariable("userId") Long userId) {
		return userClientService.deleteUser(userId);
	}

	@PutMapping(value = "/feign/users/updatePassword")
	public User updatePassword(@RequestBody User user) {
		return userClientService.updatePassword(user);
	}

}
