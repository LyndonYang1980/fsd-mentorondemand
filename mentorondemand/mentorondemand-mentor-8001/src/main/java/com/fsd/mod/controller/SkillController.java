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
	public List<Skill> getSkills() {

		return skillService.getSkills();
	}

	@GetMapping("/skills/{mentorId}")
	public Skill getSkills(@PathVariable Long skillId) {

		return skillService.getSkill(skillId);
	}

	@PostMapping(value = "/skills/{mentorId}")
	public ResponseEntity<Skill> setSkills(@RequestBody Skill skill, @PathVariable Long mentorId) {

		if (skillService.setSkills(skill, mentorId)) {
			return new ResponseEntity<Skill>(skill, HttpStatus.OK);
		} else {
			return new ResponseEntity<Skill>(skill, HttpStatus.NOT_MODIFIED);
		}
	}
}
