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
import com.fsd.mod.feignclient.UserClientService;

@RestController
public class UserController_Consumer {

	@Autowired
	UserClientService userClientService;
	
	@RequestMapping("/consumer/users")
	public List<User> getUsers() {
		return userClientService.getUsers();
	}
	
	@RequestMapping("/consumer/users/{id}")
	public User getUser(@PathVariable Long userId) {
		return userClientService.getUser(userId);
	}
	
	@PostMapping(value = "/consumer/users/signup")
	public void addUser(@RequestBody User user) {
		userClientService.addUser(user);		
	}
	
	@PutMapping(value = "/consumer/users/{id}")
	public void updateUser(@RequestBody User user) {
		userClientService.updateUser(user);
	}
	
	@DeleteMapping(value = "/consumer/users/{id}")
	public void deleteUser(@PathVariable Long userId) {
		userClientService.deleteUser(userId);
	}	
	
}
