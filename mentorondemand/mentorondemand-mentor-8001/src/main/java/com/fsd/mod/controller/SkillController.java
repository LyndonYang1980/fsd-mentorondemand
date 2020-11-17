package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Skill;
import com.fsd.mod.service.SkillService;

@RestController
public class SkillController {

	@Autowired
	SkillService skillService;

	@GetMapping("/skills/getSkills")
	public ResponseEntity<List<Skill>> getSkills() {

		List<Skill> skills = skillService.getSkills();
		if (skills != null) {
			return new ResponseEntity<List<Skill>>(skills, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<Skill>>(skills, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/skills/{skillId}")
	public ResponseEntity<Skill> getSkill(@PathVariable Long skillId) {
		Skill skill = skillService.getSkill(skillId);
		if (skill != null) {
			return new ResponseEntity<Skill>(skill, HttpStatus.OK);
		} else {
			return new ResponseEntity<Skill>(skill, HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/skills/addSkill")
	public ResponseEntity<Skill> addSkill(@RequestBody Skill skill) {
		return new ResponseEntity<Skill>(skillService.addSkill(skill), HttpStatus.OK);
	}

	@PostMapping(value = "/skills/{mentorId}")
	public ResponseEntity<Skill> setSkills(@RequestBody Skill skill, @PathVariable Long mentorId) {

		if (skillService.setSkills(skill, mentorId)) {
			return new ResponseEntity<Skill>(skill, HttpStatus.OK);
		} else {
			return new ResponseEntity<Skill>(skill, HttpStatus.NOT_MODIFIED);
		}
	}

	@GetMapping("/skills/getMentorSkills/{mentorId}")
	public ResponseEntity<List<Skill>> getMentorSkills(@PathVariable Long mentorId) {
		System.out.println("Skill: " + mentorId);
		return new ResponseEntity<List<Skill>>(skillService.getMentorSkills(mentorId), HttpStatus.OK);
	}
}
