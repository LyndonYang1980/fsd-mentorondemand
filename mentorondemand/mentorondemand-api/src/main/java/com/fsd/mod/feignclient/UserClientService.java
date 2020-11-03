package com.fsd.mod.feignclient;

import java.util.List;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.fsd.mod.entities.User;

@FeignClient(value = "mentorondemand-user")
public interface UserClientService {

	@RequestMapping("/users/getUsers")
	public List<User> getUsers();
	
	@RequestMapping("/users/{id}")
	public User getUser(@PathVariable Long userId);
	
	@PostMapping(value = "/users/signup")
	public User addUser(@RequestBody User user);
	
	@PutMapping(value = "/users/{id}")
	public User updateUser(@RequestBody User user);
	
	@DeleteMapping(value = "/users/{id}")
	public void deleteUser(@PathVariable Long userId);
	
	@PostMapping(value = "/users/login")
	public ResponseEntity<User> loginUser(@RequestBody User user);
	
	@PatchMapping(value = "/users/updatePassword")
	public ResponseEntity<User> updatePassword(@RequestBody User user);
	
}