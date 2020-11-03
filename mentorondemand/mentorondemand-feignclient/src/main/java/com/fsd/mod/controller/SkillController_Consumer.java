package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Skill;
import com.fsd.mod.feignclient.MentorClientService;

@RestController
public class SkillController_Consumer {

	@Autowired
	MentorClientService mentorClientService;

	@RequestMapping("/feign/skills/getSkills")
	public List<Skill> getSkills() {
		return mentorClientService.getSkills();
	}

	@GetMapping("/feign/skills/{id}")
	public Skill getSkills(@PathVariable Long skillId) {
		return mentorClientService.getSkills(skillId);
	}

	@PostMapping(value = "/feign/skills/{mentorId}")
	public ResponseEntity<Skill> setSkills(@RequestBody Skill skill, @PathVariable Long mentorId) {
		return mentorClientService.setSkills(skill, mentorId);
	}

}
