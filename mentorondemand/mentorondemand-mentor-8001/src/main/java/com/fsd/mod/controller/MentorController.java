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
	public ResponseEntity<List<Mentor>> getMentors() {
		List<Mentor> mentors = mentorService.getMentors();
//		List<Mentor> mentors = mentorService.getAllMentorsAndSkills();
		if (mentors != null) {
			return new ResponseEntity<List<Mentor>>(mentors, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<Mentor>>(mentors, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/mentors/{id}")
	public ResponseEntity<Mentor> getMentor(@PathVariable Long mentorId) {
		Mentor mentorData = mentorService.getMentor(mentorId);
		if (mentorData != null) {
			return new ResponseEntity<Mentor>(mentorData, HttpStatus.OK);
		} else {
			return new ResponseEntity<Mentor>(mentorData, HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(value = "/mentors/addMentor")
	public ResponseEntity<Mentor> addMentor(@RequestBody Mentor mentor) {

		System.out.println("To add mentor: " + mentor.toString());
		boolean existFlag = mentorService.isMentorExisted(mentor.getMentorEmail());
		if (existFlag) {
			System.out.println("Mentor already exist");
			return new ResponseEntity<Mentor>(mentor, HttpStatus.CONFLICT);
		} else {
			Mentor addedMentor = mentorService.addMentor(mentor);
			System.out.println("Mentor added: " + addedMentor.toString());
			return new ResponseEntity<Mentor>(addedMentor, HttpStatus.ACCEPTED);
		}
	}

	@PutMapping(value = "/mentors/updateMentor")
	public ResponseEntity<Mentor> updateMentor(@RequestBody Mentor mentor) {
		Mentor mentorData = mentorService.updateMentor(mentor);
		if (mentorData != null) {
			return new ResponseEntity<Mentor>(mentorData, HttpStatus.OK);
		} else {
			return new ResponseEntity<Mentor>(mentor, HttpStatus.NOT_MODIFIED);
		}
	}

	@PostMapping("/mentors/login")
	public ResponseEntity<Mentor> loginMentor(@RequestBody Mentor mentor) {
		Mentor mentorData = mentorService.loginMentor(mentor.getMentorEmail(), mentor.getMentorPassword());
		if (mentorData != null) {
			return new ResponseEntity<Mentor>(mentorData, HttpStatus.OK);
		} else {
			return new ResponseEntity<Mentor>(mentor, HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/mentors/getMentorProposalByUser")
	public ResponseEntity<List<Mentor>> getMentorProposalByUser(@RequestBody Long[] mentorIds) {
		List<Mentor> mentorList = new ArrayList<Mentor>();
		for (int i = 0; i < mentorIds.length; i++) {
			mentorList.add(mentorService.getMentor(mentorIds[i]));
		}

		return new ResponseEntity<List<Mentor>>(mentorList, HttpStatus.OK);
	}

}
