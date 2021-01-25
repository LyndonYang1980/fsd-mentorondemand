package com.fsd.mod.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsd.mod.entities.Mentor;
import com.fsd.mod.repository.MentorRepo;
import com.fsd.mod.utils.MD5Util;

@Service
public class MentorService {

	@Autowired
	MentorRepo mentorRepo;

	public List<Mentor> getMentors() {
		List<Mentor> list = new ArrayList<>();
		mentorRepo.findAll().forEach(list::add);
		return list;
	}

	public Mentor getMentor(Long mentorId) {
		return mentorRepo.findOne(mentorId);
	}

	public Mentor getMentorByName(String mentorName) {
		return mentorRepo.findByMentorName(mentorName);
	}

	public Mentor getMentorByEmail(String mentorEmail) {
		return mentorRepo.findByMentorEmail(mentorEmail);
	}

	public Mentor addMentor(Mentor mentor) {
		mentor.setMentorPassword(MD5Util.encode(mentor.getMentorPassword()));
		return mentorRepo.save(mentor);
	}

	public Mentor saveMentor(Mentor mentor) {
		mentor.setMentorPassword(MD5Util.encode(mentor.getMentorPassword()));
		return mentorRepo.save(mentor);
	}

	public Mentor updateMentor(Mentor mentor) {
		Long mentorId = mentor.getMentorId();
		Mentor oldMentor = mentorRepo.findOne(mentorId);
		oldMentor.setMentorName(mentor.getMentorName());
		oldMentor.setMentorEmail(mentor.getMentorEmail());
		oldMentor.setMentorExperience(mentor.getMentorExperience());
		oldMentor.setMentorPassword(MD5Util.encode(mentor.getMentorPassword()));
		oldMentor.setSkills(mentor.getSkills());
		oldMentor.setCalendars(mentor.getCalendars());
		return mentorRepo.save(oldMentor);
	}

	public void deleteMentor(Long id) {
		mentorRepo.delete(id);
	}

	public Mentor loginMentor(String mentorEmail, String mentorPassword) {
		return mentorRepo.findByMentorEmailAndMentorPassword(mentorEmail, mentorPassword);
	}

	public boolean isMentorExisted(String mentorEmail) {
		if (mentorRepo.findByMentorEmail(mentorEmail) != null)
			return true;
		else
			return false;
	}

	public List<Mentor> searchMentorByKey(String searchKey) {
		return mentorRepo.searchMentorByKey(searchKey);
	}

}
