package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Mentor;
import com.fsd.mod.service.MentorService;

@RestController
public class MentorController {

	@Autowired
	MentorService mentorService;

	@GetMapping("/mentors")
	public ResponseEntity<List<Mentor>> getMentors() {
		List<Mentor> mentors = mentorService.getMentors();
		if (mentors != null) {
			return new ResponseEntity<List<Mentor>>(mentors, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<Mentor>>(mentors, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/mentors/{id}")
	public ResponseEntity<Mentor> getMentor(@PathVariable Long mentorId) {
		Mentor mentor = mentorService.getMentor(mentorId);
		if (mentor != null) {
			return new ResponseEntity<Mentor>(mentor, HttpStatus.OK);
		} else {
			return new ResponseEntity<Mentor>(mentor, HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping(value = "/mentors")
	public ResponseEntity<Mentor> addMentor(@RequestBody Mentor mentor) {
		Mentor addedMentor = mentorService.saveMentor(mentor);
		if (addedMentor != null) {
			return new ResponseEntity<Mentor>(addedMentor, HttpStatus.OK);
		} else {
			return new ResponseEntity<Mentor>(mentor, HttpStatus.NOT_MODIFIED);
		}
	}

	@PutMapping(value = "/mentors")
	public ResponseEntity<Mentor> updateMentor(@RequestBody Mentor mentor) {
		Mentor updMentor = mentorService.updateMentor(mentor);
		if (updMentor != null) {
			return new ResponseEntity<Mentor>(updMentor, HttpStatus.OK);
		} else {
			return new ResponseEntity<Mentor>(mentor, HttpStatus.NOT_MODIFIED);
		}
	}

}
