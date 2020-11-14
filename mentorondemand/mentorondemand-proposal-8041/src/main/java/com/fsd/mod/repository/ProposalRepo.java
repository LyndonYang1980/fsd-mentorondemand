package com.fsd.mod.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.fsd.mod.entities.Proposal;

public interface ProposalRepo extends CrudRepository<Proposal, Long> {

	public Proposal findByUserIdAndMentorIdAndSkillId(Long userId, Long mentorId, Long skillId);

	public List<Proposal> findByUserId(Long userId);

	public List<Proposal> findByMentorId(Long mentorId);
}
