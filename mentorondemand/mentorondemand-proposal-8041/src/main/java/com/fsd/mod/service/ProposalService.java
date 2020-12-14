package com.fsd.mod.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsd.mod.entities.Proposal;
import com.fsd.mod.repository.ProposalRepo;

@Service
public class ProposalService {

	@Autowired
	ProposalRepo proposalRepo;

	@Transactional
	public List<Proposal> saveProposal(List<Proposal> proposalDataList) {

		List<Proposal> savedProposalList = new ArrayList<>();

		for (Proposal proposalData : proposalDataList) {
			Proposal existingProposal = proposalRepo.findByUserIdAndMentorIdAndSkillId(proposalData.getUser().getUserId(),
					proposalData.getMentor().getMentorId(), proposalData.getSkill().getSkillId());
			if (existingProposal == null) {
				System.out.println("Saved proposal: " + proposalData.toString());
				savedProposalList.add(proposalRepo.save(proposalData));
			} else {
				System.out.println("Existing proposal: " + proposalData.toString());
			}
		}

		return savedProposalList;

	}

	public List<Proposal> getUserProposal(Long userId) {
		return proposalRepo.findByUserId(userId);
	}

	public List<Proposal> getMentorProposal(Long mentorId) {
		return proposalRepo.findByMentorId(mentorId);
	}
}
