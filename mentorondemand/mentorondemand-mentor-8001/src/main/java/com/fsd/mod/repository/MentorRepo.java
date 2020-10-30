package com.fsd.mod.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.fsd.mod.entities.Mentor;
import com.fsd.mod.entities.User;

public interface MentorRepo extends CrudRepository<Mentor, Long> {
	
	
	
}