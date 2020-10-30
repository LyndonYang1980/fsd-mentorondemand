package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Skill;
import com.fsd.mod.service.SkillService;

@RestController
public class SkillController {
	
	@Autowired
	SkillService skillService;	
	
	@RequestMapping("/skills")
	public List<Skill> getSkills() {
		
		return skillService.getSkills();
	}
	
	@RequestMapping("/skills/{id}")
	public Skill getSkills(@PathVariable Long skillId) {
		
		return skillService.getSkill(skillId);
	}
	
	@RequestMapping(value = "/skills/{mentorId}", method = RequestMethod.POST)
	public void setSkills(@RequestBody Skill skill, @PathVariable Long mentorId) {
		
		skillService.setSkills(skill, mentorId);
	}
}
