package com.fsd.mod.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsd.mod.entities.Mentor;
import com.fsd.mod.repository.MentorRepo;

@Service
public class MentorService {

	@Autowired
	MentorRepo mentorRepo;

	public List<Mentor> getMentors() {

		List<Mentor> list = new ArrayList<>();
		mentorRepo.findAll().forEach(list::add);
		return list;
	}

	public Mentor getMentor(Long id) {

		return mentorRepo.findOne(id);
	}

	public void addMentor(Mentor mentor) {
		mentorRepo.save(mentor);
	}

	public Mentor saveMentor(Mentor mentor) {
		return mentorRepo.save(mentor);
	}

	public void updateMentor(Mentor mentor) {
		mentorRepo.save(mentor);
	}

	public void deleteMentor(Long id) {
		mentorRepo.delete(id);
	}

}
