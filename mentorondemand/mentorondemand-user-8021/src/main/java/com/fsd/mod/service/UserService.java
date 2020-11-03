package com.fsd.mod.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsd.mod.entities.User;
import com.fsd.mod.repository.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo userRepo;

	public List<User> getUsers() {

		List<User> userList = new ArrayList<>();
		userRepo.findAll().forEach(userList::add);
		return userList;
	}

	public User getUser(Long userId) {
		return userRepo.findOne(userId);
	}

	public User addUser(User user) {
		return userRepo.save(user);
	}

	public User saveUser(User user) {
		return userRepo.save(user);
	}

	public User updateUser(User user) {
		return userRepo.save(user);
	}

	public void deleteUser(Long userId) {
		userRepo.delete(userId);
	}
	
	public User userLogin(String email, String password) {
		return userRepo.findByEmailAndPassword(email, password);
	}

}
