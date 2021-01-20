package com.fsd.mod.feignclient;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.fsd.mod.entities.User;

@FeignClient(value = "mentorondemand-authentication")
public interface AuthClientService {

	@PostMapping("/users/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody User user);

	@PostMapping("/users/signup")
	public ResponseEntity<?> registerUser(@RequestBody User user);
}
