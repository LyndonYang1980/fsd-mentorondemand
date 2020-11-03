package com.fsd.mod.service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsd.mod.entities.Mentor;
import com.fsd.mod.entities.Skill;
import com.fsd.mod.repository.SkillRepo;

@Service
public class SkillService {

	@Autowired
	SkillRepo skillRepo;

	@Autowired
	MentorService mentorService;

	/**
	 * @param skill
	 * @param userId
	 */
	public Boolean setSkills(Skill skill, Long mentorId) {

		Mentor mentor = mentorService.getMentor(mentorId);
		
		mentor.getSkills().add(skill);		
		if (mentorService.saveMentor(mentor) != null) {
			return true;
		}else {
			return false;
		}
	}

	/**
	 * @return
	 */
	public List<Skill> getSkills() {
		List<Skill> skillList = new ArrayList<>();
		skillRepo.findAll().forEach(skillList::add);
		return skillList;
	}

	/**
	 * @param skillId
	 * @return
	 */
	public Skill getSkill(Long skillId) {

		return skillRepo.findOne(skillId);
	}
}
