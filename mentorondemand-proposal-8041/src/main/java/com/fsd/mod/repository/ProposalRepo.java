package com.fsd.mod.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.fsd.mod.entities.Proposal;

public interface ProposalRepo extends CrudRepository<Proposal, Long> {

	@Query(value = "select * from proposal where user_id = :userId and mentor_id = :mentorId and skill_id = :skillId", nativeQuery = true)
	public Proposal findByUserIdAndMentorIdAndSkillId(@Param("userId") Long userId, @Param("mentorId") Long mentorId,
			@Param("skillId") Long skillId);

	@Query(value = "select * from proposal where user_id = :userId", nativeQuery = true)
	public List<Proposal> findByUserId(@Param("userId") Long userId);

	@Query(value = "select * from proposal where mentor_id = :mentorId", nativeQuery = true)
	public List<Proposal> findByMentorId(@Param("mentorId") Long mentorId);

}
