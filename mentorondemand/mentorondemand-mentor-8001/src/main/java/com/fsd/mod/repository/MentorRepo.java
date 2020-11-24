package com.fsd.mod.repository;

import org.springframework.data.repository.CrudRepository;

import com.fsd.mod.entities.Mentor;

public interface MentorRepo extends CrudRepository<Mentor, Long> {

	public Mentor findByMentorEmail(String mentorEmail);
	public Mentor findByMentorEmailAndMentorPassword(String mentorEmail, String mentorPassword);
}