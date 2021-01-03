package com.fsd.mod.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.fsd.mod.entities.Mentor;

public interface MentorRepo extends CrudRepository<Mentor, Long> {

	public Mentor findByMentorEmail(String mentorEmail);

	public Mentor findByMentorEmailAndMentorPassword(String mentorEmail, String mentorPassword);

	@Query(value = "select A.*, B.skill_name from (select mentor.*, mentorskills.skill_id from mentorondemand.mentor mentor right join mentorondemand.mentor_skills mentorskills on mentor.mentor_id = mentorskills.mentor_id) as A, mentorondemand.skill as B where A.skill_id = B.skill_id", nativeQuery = true)
	public List<Mentor> getAllMentorsAndSkills();
	
	@Query(value = "select m.* from mentor m, mentor_skills ms, skill s where m.mentor_id = ms.mentor_id and ms.skill_id = s.skill_id and s.skill_name like CONCAT('%',:searchKey,'%')", nativeQuery = true)
	public List<Mentor> searchMentorByKey(@Param("searchKey") String searchKey);
}