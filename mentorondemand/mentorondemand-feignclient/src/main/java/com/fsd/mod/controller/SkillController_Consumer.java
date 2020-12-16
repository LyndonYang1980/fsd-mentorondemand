package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Skill;
import com.fsd.mod.feignclient.MentorClientService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SkillController_Consumer {

	@Autowired
	MentorClientService mentorClientService;

	@GetMapping("/feign/skills/getSkills")
	public ResponseEntity<List<Skill>> getSkills() {
		return mentorClientService.getSkills();
	}

	@GetMapping("/feign/skills/{skillId}")
	public ResponseEntity<Skill> getSkill(@PathVariable Long skillId) {
		return mentorClientService.getSkill(skillId);
	}

	@PostMapping("/feign/skills/addSkill")
	public ResponseEntity<Skill> addSkill(@RequestBody Skill skill) {
		return mentorClientService.addSkill(skill);
	}

	@PostMapping(value = "/feign/skills/{mentorId}")
	public ResponseEntity<Skill> setSkills(@RequestBody Skill skill, @PathVariable Long mentorId) {
		return mentorClientService.setSkills(skill, mentorId);
	}

	@GetMapping(value = "/feign/skills/getMentorSkills/{mentorId}")
	public ResponseEntity<List<Skill>> getMentorSkills(@PathVariable Long mentorId) {
		return mentorClientService.getMentorSkills(mentorId);
	}

}
