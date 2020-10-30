package com.fsd.mod.repository;

import org.springframework.data.repository.CrudRepository;

import com.fsd.mod.entities.User;


public interface UserRepo extends CrudRepository<User, Long> {
	
	
}
