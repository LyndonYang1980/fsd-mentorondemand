package com.fsd.mod.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.fsd.mod.entities.Mentor;

public interface MentorRepo extends CrudRepository<Mentor, Long> {

	public Mentor findByMentorEmail(String mentorEmail);

	public Mentor findByMentorEmailAndMentorPassword(String mentorEmail, String mentorPassword);
	
	@Query(value = "select distinct m.* from mentor m, skill s where m.mentor_id = s.mentor_id and s.skill_name like CONCAT('%',:searchKey,'%')", nativeQuery = true)
	public List<Mentor> searchMentorByKey(@Param("searchKey") String searchKey);
}