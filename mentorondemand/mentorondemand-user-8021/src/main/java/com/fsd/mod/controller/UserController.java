package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.User;
import com.fsd.mod.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

	@Autowired
	UserService userService;

	@RequestMapping("/users/getUsers")
	public List<User> getUsers() {
		List<User> users = userService.getUsers();
		return users;
	}

	@RequestMapping("/users/{userId}")
	public User getUser(@PathVariable("userId") Long userId) {
		User user = userService.getUser(userId);
		return user;
	}

	@GetMapping("/users/getUserByName/{userName:.+}")
	public User getUserByName(@PathVariable("userName") String userName) {
		User user = userService.getUserByName(userName);
		return user;
	}

	@GetMapping("/users/getUserByEmail/{userEmail:.+}")
	public User getUserByEmail(@PathVariable("userEmail") String userEmail) {
		User theUser = userService.getUserByEmail(userEmail);
		return theUser;
	}

	@PostMapping(value = "/users/addUser")
	public User addUser(@RequestBody User user) {
		User addedUser = userService.addUser(user);
		return addedUser;
	}

	@PutMapping(value = "/users")
	public User updateUser(@RequestBody User user) {		
		User updUser = userService.updateUser(user);
		return updUser;
	}

	@DeleteMapping(value = "/users/{userId}")
	public Boolean deleteUser(@PathVariable Long userId) {
		Boolean delFlag = userService.deleteUser(userId);
		return delFlag;
	}

//	@PostMapping(value = "/users/signin")
	public User loginUser(@RequestBody User user) {
		return userService.userLogin(user.getUserEmail(), user.getUserPassword());
	}

	@PutMapping(value = "/users/updatePassword")
	public User updatePassword(@RequestBody User user) {
		return this.updateUser(user);
	}

}
