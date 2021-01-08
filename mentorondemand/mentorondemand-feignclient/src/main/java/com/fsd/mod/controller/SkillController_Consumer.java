package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	public Skill getSkill(@PathVariable Long skillId) {
		return mentorClientService.getSkill(skillId);
	}

	@PostMapping("/feign/skills/addSkill")
	public Skill addSkill(@RequestBody Skill skill) {
		return mentorClientService.addSkill(skill);
	}

	@PutMapping(value = "/feign/skills")
	public Skill updateSkill(@RequestBody Skill skill) {
		return mentorClientService.updateSkill(skill);
	}

	@PostMapping(value = "/feign/skills/{mentorId}")
	public ResponseEntity<Skill> setSkills(@RequestBody Skill skill, @PathVariable Long mentorId) {
		return mentorClientService.setSkills(skill, mentorId);
	}

	@PostMapping(value = "/feign/skills/findExistingSkills1/{skillName}/{mentorId}")
	public Boolean findExistingSkills(@PathVariable("skillName") String skillName,
			@PathVariable("mentorId") Long mentorId) {
		return mentorClientService.findExistingSkills(skillName, mentorId);
	}

	@PostMapping(value = "/feign/skills/findExistingSkills2")
	public Boolean findExistingSkills(@RequestBody Skill skill) {
		return mentorClientService.findExistingSkills(skill);
	}

	@GetMapping(value = "/feign/skills/getMentorSkills/{mentorId}")
	public ResponseEntity<List<Skill>> getMentorSkills(@PathVariable Long mentorId) {
		return mentorClientService.getMentorSkills(mentorId);
	}

	@DeleteMapping(value = "/feign/skills/{skillId}")
	public Boolean deleteSkill(@PathVariable("skillId") Long skillId) {
		return mentorClientService.deleteSkill(skillId);
	}

}
