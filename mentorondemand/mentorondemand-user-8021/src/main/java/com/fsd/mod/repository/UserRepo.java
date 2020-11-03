package com.fsd.mod.repository;

import org.springframework.data.repository.CrudRepository;

import com.fsd.mod.entities.User;


public interface UserRepo extends CrudRepository<User, Long> {
	
	public User findByEmail(String email);
	public User findByEmailAndPassword(String email,String password);
}
