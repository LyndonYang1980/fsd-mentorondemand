package com.fsd.mod.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

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
	 * @return
	 */
	public Skill addSkill(Skill skill) {
		return skillRepo.save(skill);
	}

	/**
	 * @param skill
	 * @return
	 */
	public Skill updateSkill(Skill skill) {
		return skillRepo.save(skill);
	}

	/**
	 * @param skill
	 * @return
	 */
	public List<Skill> findExistingSkills(String skillName, Long mentorId) {
		return skillRepo.findBySkillNameAndMentorId(skillName, mentorId);
	}

	public List<Skill> findExistingSkills(Skill skill) {
		return skillRepo.findBySkillNameAndMentorIdAndSkillIdNot(skill.getSkillName(), skill.getMentorId(),
				skill.getSkillId());
	}

	/**
	 * @param skill
	 * @param userId
	 */
	public Boolean setSkills(Skill skill, Long mentorId) {

		Mentor mentor = mentorService.getMentor(mentorId);

		mentor.getSkills().add(skill);
		if (mentorService.saveMentor(mentor) != null) {
			return true;
		} else {
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

	/**
	 * @param mentorId
	 * @return
	 */
	public List<Skill> getMentorSkills(Long mentorId) {
		Mentor mentor = mentorService.getMentor(mentorId);
		List<Skill> skillList = new ArrayList<>();
		skillList.addAll(mentor.getSkills());
		return skillList;
	}

	/**
	 * @param skillId
	 * @return
	 */
	@Transactional
	public void deleteSkill(Long skillId) {
		skillRepo.delete(skillId);
	}
}
