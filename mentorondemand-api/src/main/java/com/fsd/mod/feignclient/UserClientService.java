package com.fsd.mod.feignclient;

import java.util.List;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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

	@RequestMapping("/users/{userId}")
	public User getUser(@PathVariable("userId") Long userId);

	@GetMapping("/users/getUserByName/{userName}")
	public User getUserByName(@PathVariable("userName") String userName);

	@GetMapping("/users/getUserByEmail/{userEmail}")
	public User getUserByEmail(@PathVariable("userEmail") String userEmail);

	@PostMapping(value = "/users/addUser")
	public User addUser(@RequestBody User user);

	@PutMapping(value = "/users")
	public User updateUser(@RequestBody User user);

	@DeleteMapping(value = "/users/{userId}")
	public Boolean deleteUser(@PathVariable("userId") Long userId);

	@PutMapping(value = "/users/updatePassword")
	public User updatePassword(@RequestBody User user);

}
