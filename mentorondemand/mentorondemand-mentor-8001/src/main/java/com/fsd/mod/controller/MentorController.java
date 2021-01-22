package com.fsd.mod.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Mentor;
import com.fsd.mod.service.MentorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MentorController {

	@Autowired
	MentorService mentorService;

	@GetMapping("/mentors/getMentors")
	public List<Mentor> getMentors() {
		List<Mentor> mentors = mentorService.getMentors();
		return mentors;
	}

	@GetMapping("/mentors/{mentorId}")
	public Mentor getMentor(@PathVariable("mentorId") Long mentorId) {
		Mentor mentorData = mentorService.getMentor(mentorId);
		return mentorData;
	}
	
	@GetMapping("/mentors/getMentorByName/{mentorName}")
	public Mentor getMentorByName(@PathVariable("mentorName") String mentorName) {
		Mentor mentor = mentorService.getMentorByName(mentorName);
		return mentor;
	}

	@GetMapping("/mentors/getMentorByEmail/{mentorEmail:.+}")
	public Mentor getMentorByEmail(@PathVariable("mentorEmail") String mentorEmail) {
		Mentor mentor = mentorService.getMentorByEmail(mentorEmail);
		return mentor;
	}

	@PostMapping(value = "/mentors/addMentor")
	public Mentor addMentor(@RequestBody Mentor mentor) {

		boolean existFlag = mentorService.isMentorExisted(mentor.getMentorEmail());
		if (existFlag) {
			return mentor;
		} else {
			Mentor addedMentor = mentorService.addMentor(mentor);
			return addedMentor;
		}
	}

	@PutMapping(value = "/mentors/updateMentor")
	public Mentor updateMentor(@RequestBody Mentor mentor) {
		return mentorService.updateMentor(mentor);
	}

	@PostMapping("/mentors/login")
	public Mentor loginMentor(@RequestBody Mentor mentor) {
		return mentorService.loginMentor(mentor.getMentorEmail(), mentor.getMentorPassword());
	}

	@PostMapping("/mentors/getMentorProposalByUser")
	public ResponseEntity<List<Mentor>> getMentorProposalByUser(@RequestBody Long[] mentorIds) {
		List<Mentor> mentorList = new ArrayList<Mentor>();
		for (int i = 0; i < mentorIds.length; i++) {
			mentorList.add(mentorService.getMentor(mentorIds[i]));
		}

		return new ResponseEntity<List<Mentor>>(mentorList, HttpStatus.OK);
	}

	@GetMapping("/mentors/searchMentorByKey/{searchKey}")
	public List<Mentor> searchMentorByKey(@PathVariable("searchKey") String searchKey) {
		return mentorService.searchMentorByKey(searchKey);
	}

}
