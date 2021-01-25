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

	public Proposal getProposal(Long proposalId) {
		return proposalRepo.findOne(proposalId);
	}

	@Transactional
	public List<Proposal> saveProposal(List<Proposal> proposalDataList) {

		List<Proposal> savedProposalList = new ArrayList<>();

		for (Proposal proposalData : proposalDataList) {
			Proposal existingProposal = proposalRepo.findByUserIdAndMentorIdAndSkillId(proposalData.getUserId(),
					proposalData.getMentorId(), proposalData.getSkillId());
			if (existingProposal == null) {
				System.out.println("Saved proposal: " + proposalData.toString());
				savedProposalList.add(proposalRepo.save(proposalData));
			} else {
				System.out.println("Existing proposal: " + proposalData.toString());
			}
		}

		return savedProposalList;
	}

	@Transactional
	public Proposal saveProposal(Proposal proposalData) {
		Proposal existingProposal = proposalRepo.findOne(proposalData.getProposalId());
		if (existingProposal == null) {
			System.out.println("Saved proposal: " + proposalData.toString());
			return proposalRepo.save(proposalData);
		} else {
			System.out.println("Existing proposal: " + proposalData.toString());
			return null;
		}
	}

	@Transactional
	public Proposal acceptProposal(Long proposalId) {
		Proposal targetProposal = proposalRepo.findOne(proposalId);
		if (targetProposal == null) {
			System.out.println("Proposal not found: " + proposalId.toString());
			return null;
		} else {
			System.out.println("Proposal accepted: " + proposalId.toString());
			targetProposal.setMentorProposal(true);
			return proposalRepo.save(targetProposal);
		}
	}

	@Transactional
	public Proposal rejectProposal(Long proposalId) {
		Proposal targetProposal = proposalRepo.findOne(proposalId);
		if (targetProposal == null) {
			System.out.println("Proposal not found: " + proposalId.toString());
			return null;
		} else {
			System.out.println("Proposal accepted: " + proposalId.toString());
			targetProposal.setMentorProposal(false);
			return proposalRepo.save(targetProposal);
		}
	}

	@Transactional
	public Proposal reconfirmProposal(Long proposalId) {
		Proposal targetProposal = proposalRepo.findOne(proposalId);
		if (targetProposal == null) {
			System.out.println("Proposal not found: " + proposalId.toString());
			return null;
		} else {
			System.out.println("Proposal confirmed: " + proposalId.toString());
			targetProposal.setUserReconfirmProposal(true);
			return proposalRepo.save(targetProposal);
		}
	}

	@Transactional
	public Proposal updateProposal(Proposal proposalData) {
		Proposal targetProposal = proposalRepo.findOne(proposalData.getProposalId());
		if (targetProposal == null) {
			System.out.println("Proposal not found: " + proposalData.toString());
			return null;
		} else {
			System.out.println("Proposal updated: " + proposalData.toString());
			return proposalRepo.save(proposalData);
		}
	}

	public List<Proposal> getUserProposal(Long userId) {
		return proposalRepo.findByUserId(userId);
	}

	public List<Proposal> getMentorProposal(Long mentorId) {
		return proposalRepo.findByMentorId(mentorId);
	}
}
