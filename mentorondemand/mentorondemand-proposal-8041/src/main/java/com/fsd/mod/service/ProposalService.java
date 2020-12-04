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
	
	
	public Proposal saveProposal(Proposal proposalData) {
		
		Proposal proposal = proposalRepo.findByUserIdAndMentorIdAndSkillId(proposalData.getUserId(), proposalData.getMentorId(),
				proposalData.getSkillId());
		if (proposal == null) {
			return proposalRepo.save(proposalData);
		} else {
			return null;
		}
	}

	public List<Proposal> getUserProposal(Long userId) {
		return proposalRepo.findByUserId(userId);
	}

	public List<Proposal> getMentorProposal(Long mentorId) {
		return proposalRepo.findByMentorId(mentorId);
	}
}
