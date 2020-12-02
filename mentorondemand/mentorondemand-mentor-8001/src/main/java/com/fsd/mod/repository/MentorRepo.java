package com.fsd.mod.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.fsd.mod.entities.Mentor;

public interface MentorRepo extends CrudRepository<Mentor, Long> {

	public Mentor findByMentorEmail(String mentorEmail);

	public Mentor findByMentorEmailAndMentorPassword(String mentorEmail, String mentorPassword);

	@Query(value = "select A.*, B.skill_name from (select mentor.*, mentorskills.skill_id from mentorondemand.mentor mentor right join mentorondemand.mentor_skills mentorskills on mentor.mentor_id = mentorskills.mentor_id) as A, mentorondemand.skill as B where A.skill_id = B.skill_id", nativeQuery = true)
	public List<Mentor> getAllMentorsAndSkills();
}