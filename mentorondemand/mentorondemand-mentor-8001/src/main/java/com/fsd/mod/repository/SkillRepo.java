package com.fsd.mod.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.fsd.mod.entities.Skill;

public interface SkillRepo extends CrudRepository<Skill, Long> {
	
	public List<Skill> findBySkillNameAndMentorId(String skillName, Long mentorId);
	
	public List<Skill> findBySkillNameAndMentorIdAndSkillIdNot(String skillName, Long mentorId, Long skillId);
}
