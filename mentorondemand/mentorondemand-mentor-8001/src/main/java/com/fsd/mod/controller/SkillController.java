package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Skill;
import com.fsd.mod.service.SkillService;

@CrossOrigin(origins = "http://localhost:4200")
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
	public Skill getSkill(@PathVariable Long skillId) {
		Skill skill = skillService.getSkill(skillId);
		return skill;
	}

	@PostMapping("/skills/addSkill")
	public Skill addSkill(@RequestBody Skill skill) {
		return skillService.addSkill(skill);
	}

	@PostMapping(value = "/skills/{mentorId}")
	public ResponseEntity<Skill> setSkills(@RequestBody Skill skill, @PathVariable Long mentorId) {

		if (skillService.setSkills(skill, mentorId)) {
			return new ResponseEntity<Skill>(skill, HttpStatus.OK);
		} else {
			return new ResponseEntity<Skill>(skill, HttpStatus.NOT_MODIFIED);
		}
	}

	@PostMapping(value = "/skills/findExistingSkills1/{skillName}/{mentorId}")
	public Boolean findExistingSkills(@PathVariable("skillName") String skillName,
			@PathVariable("mentorId") Long mentorId) {
		List<Skill> skills = skillService.findExistingSkills(skillName, mentorId);
		if (skills.size() > 0) {
			return true;
		} else {
			return false;
		}
	}
	
	@PostMapping(value = "/skills/findExistingSkills2")
	public Boolean findExistingSkills(@RequestBody Skill skill) {
		List<Skill> skills = skillService.findExistingSkills(skill);
		if (skills.size() > 0) {
			return true;
		} else {
			return false;
		}
	}

	@PutMapping(value = "/skills")
	public Skill updateSkill(@RequestBody Skill skill) {
		Skill updSkill = skillService.updateSkill(skill);
		return updSkill;
	}

	@GetMapping("/skills/getMentorSkills/{mentorId}")
	public ResponseEntity<List<Skill>> getMentorSkills(@PathVariable Long mentorId) {
		System.out.println("Skill: " + mentorId);
		return new ResponseEntity<List<Skill>>(skillService.getMentorSkills(mentorId), HttpStatus.OK);
	}

	@DeleteMapping(value = "/skills/{skillId}")
	public Boolean deleteSkill(@PathVariable("skillId") Long skillId) {
		try {
			skillService.deleteSkill(skillId);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
