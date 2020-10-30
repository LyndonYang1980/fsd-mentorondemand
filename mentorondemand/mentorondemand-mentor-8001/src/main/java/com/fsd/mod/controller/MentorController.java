package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Mentor;
import com.fsd.mod.service.MentorService;

@RestController
public class MentorController {
	
	@Autowired
	MentorService mentorService;
	
	@RequestMapping("/mentors")
	public List<Mentor> getMentors(){
		return mentorService.getMentors();
	}
	
	@RequestMapping("/mentors/{id}")
	public Mentor getMentor(@PathVariable Long mentorId) {
		return mentorService.getMentor(mentorId);
	}
	
	@RequestMapping(value = "/mentors", method = RequestMethod.POST)
	public void addMentor(@RequestBody Mentor mentor) {
		mentorService.saveMentor(mentor);
	}
	
	@RequestMapping(value = "/mentors", method = RequestMethod.PUT)
	public void updateMentor(@RequestBody Mentor mentor) {
		mentorService.updateMentor(mentor);
	}
	
}
