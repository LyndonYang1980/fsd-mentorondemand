package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Skill;
import com.fsd.mod.feignclient.MentorClientService;

@RestController
public class SkillController_Consumer {

	@Autowired
	MentorClientService mentorClientService;

	@RequestMapping("/consumer/skills")
	public List<Skill> getSkills() {
		return mentorClientService.getSkills();
	}

	@RequestMapping("/consumer/skills/{id}")
	public Skill getSkills(@PathVariable Long skillId) {
		return mentorClientService.getSkills(skillId);
	}

	@RequestMapping(value = "/consumer/skills/{mentorId}", method = RequestMethod.POST)
	public void setSkills(@RequestBody Skill skill, @PathVariable Long mentorId) {
		mentorClientService.setSkills(skill, mentorId);
	}

}
