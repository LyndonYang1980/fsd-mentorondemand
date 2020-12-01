package com.fsd.mod.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsd.mod.entities.Proposal;
import com.fsd.mod.repository.ProposalRepo;

@Service
public class ProposalService {

	@Autowired
	ProposalRepo proposalRepo;
	
	
	public Proposal saveProposal(Proposal userMentorData) {
		if (proposalRepo.findByUserIdAndMentorIdAndSkillId(userMentorData.getUserId(), userMentorData.getMentorId(),
				userMentorData.getSkillId()) == null)
			return proposalRepo.save(userMentorData);
		else
			return null;
	}

	public List<Proposal> getUserProposal(Long userId) {
		return proposalRepo.findByUserId(userId);
	}

	public List<Proposal> getMentorProposal(Long mentorId) {
		return proposalRepo.findByMentorId(mentorId);
	}
}
