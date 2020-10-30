package com.fsd.mod.feignclient;

import java.util.List;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.fsd.mod.entities.User;

@FeignClient(value = "mentorondemand-user")
public interface UserClientService {

	@RequestMapping("/users")
	public List<User> getUsers();
	
	@RequestMapping("/users/{id}")
	public User getUser(@PathVariable Long userId);
	
	@PostMapping(value = "/users/signup")
	public void addUser(@RequestBody User user);
	
	@PutMapping(value = "/users/{id}")
	public void updateUser(@RequestBody User user);
	
	@DeleteMapping(value = "user/{id}")
	public void deleteUser(@PathVariable Long userId);
	
}
