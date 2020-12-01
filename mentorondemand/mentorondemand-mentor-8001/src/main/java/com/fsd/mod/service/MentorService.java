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

	public Mentor addMentor(Mentor mentor) {
		return mentorRepo.save(mentor);
	}

	public Mentor saveMentor(Mentor mentor) {
		return mentorRepo.save(mentor);
	}

	public Mentor updateMentor(Mentor mentor) {
		Long mentorId = mentor.getMentorId();
		Mentor oldMentor = mentorRepo.findOne(mentorId);
		oldMentor.setMentorName(mentor.getMentorName());
		oldMentor.setMentorEmail(mentor.getMentorEmail());
		oldMentor.setMentorExperience(mentor.getMentorExperience());
		oldMentor.setMentorPassword(mentor.getMentorPassword());
		oldMentor.setSkills(mentor.getSkills());
		mentorRepo.save(oldMentor);
		return oldMentor;		
	}

	public void deleteMentor(Long id) {
		mentorRepo.delete(id);
	}

	public Mentor loginMentor(String mentorEmail, String mentorPassword) {
		return mentorRepo.findByMentorEmailAndMentorPassword(mentorEmail, mentorPassword);
	}
	
	public boolean isMentorExisted(String mentorEmail) {
		if(mentorRepo.findByMentorEmail(mentorEmail) != null)
			return true;
		else
			return false;
	}

}
