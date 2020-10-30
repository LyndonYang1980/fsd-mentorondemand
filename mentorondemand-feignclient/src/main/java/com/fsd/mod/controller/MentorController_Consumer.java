package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Mentor;
import com.fsd.mod.feignclient.MentorClientService;

@RestController
public class MentorController_Consumer {

	@Autowired
	MentorClientService mentorClientService;

	@RequestMapping("/consumer/mentors")
	public List<Mentor> getMentors() {
		return mentorClientService.getMentors();
	}

	@RequestMapping("/consumer/mentors/{id}")
	public Mentor getMentor(@PathVariable Long mentorId) {
		return mentorClientService.getMentor(mentorId);
	}

	@RequestMapping(value = "/consumer/mentors", method = RequestMethod.POST)
	public void addMentor(@RequestBody Mentor mentor) {
		mentorClientService.addMentor(mentor);
	}

	@RequestMapping(value = "/consumer/mentors", method = RequestMethod.PUT)
	public void updateMentor(@RequestBody Mentor mentor) {
		mentorClientService.updateMentor(mentor);
	}

}
