package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Mentor;
import com.fsd.mod.feignclient.MentorClientService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MentorController_Consumer {

	@Autowired
	MentorClientService mentorClientService;

	@GetMapping("/feign/mentors/getMentors")
	public ResponseEntity<List<Mentor>> getMentors() {
		return mentorClientService.getMentors();
	}

	@GetMapping("/feign/mentors/{id}")
	public ResponseEntity<Mentor> getMentor(@PathVariable Long mentorId) {
		return mentorClientService.getMentor(mentorId);
	}

	@PostMapping(value = "/feign/mentors/addMentor")
	public ResponseEntity<Mentor> addMentor(@RequestBody Mentor mentor) {
		return mentorClientService.addMentor(mentor);
	}

	@PutMapping(value = "/feign/mentors/updateMentor")
	public ResponseEntity<Mentor> updateMentor(@RequestBody Mentor mentor) {
		return mentorClientService.updateMentor(mentor);
	}
	
	@PostMapping("/feign/mentors/login")
	public ResponseEntity<Mentor> loginMentor(@RequestBody Mentor mentor){
		return mentorClientService.loginMentor(mentor);
	}

}
