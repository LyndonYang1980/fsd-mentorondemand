package com.fsd.mod.repository;

import org.springframework.data.repository.CrudRepository;

import com.fsd.mod.entities.User;


public interface UserRepo extends CrudRepository<User, Long> {
	
	public User findByUserName(String userName);
	public User findByUserEmail(String userEmail);
	public User findByUserEmailAndUserPassword(String userEmail,String userPassword);
}
