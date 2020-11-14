package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

	@RequestMapping("/users/getUsers")
	public ResponseEntity<List<User>> getUsers() {
		List<User> users = userService.getUsers();
		if (users != null) {
			return new ResponseEntity<List<User>>(users, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<User>>(users, HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping("/users/{id}")
	public ResponseEntity<User> getUser(@PathVariable Long userId) {

		User user = userService.getUser(userId);
		if (user != null) {
			return new ResponseEntity<User>(user, HttpStatus.OK);
		} else {
			return new ResponseEntity<User>(user, HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(value = "/users/addUser")
	public ResponseEntity<User> addUser(@RequestBody User user) {

		boolean existFlag = userService.isUserExisted(user.getEmail());
		if (existFlag) {
			System.out.println("User already exist");
			return new ResponseEntity<User>(user, HttpStatus.CONFLICT);
		} else {
			User addedUser = userService.addUser(user);
			return new ResponseEntity<User>(addedUser, HttpStatus.ACCEPTED);
		}
	}

	@PutMapping(value = "/users/{id}")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		User updUser = userService.updateUser(user);
		if (updUser != null) {
			return new ResponseEntity<User>(updUser, HttpStatus.OK);
		} else {
			return new ResponseEntity<User>(updUser, HttpStatus.NOT_MODIFIED);
		}
	}

	@DeleteMapping(value = "/users/{id}")
	public ResponseEntity<Boolean> deleteUser(@PathVariable Long userId) {
		Boolean delFlag = userService.deleteUser(userId);
		if (delFlag) {
			return new ResponseEntity<Boolean>(delFlag, HttpStatus.OK);
		} else {
			return new ResponseEntity<Boolean>(delFlag, HttpStatus.NOT_MODIFIED);
		}
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

	@PutMapping(value = "/users/updatePassword")
	public ResponseEntity<User> updatePassword(@RequestBody User user) {
		return this.updateUser(user);
	}

}
