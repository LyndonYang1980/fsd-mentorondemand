package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Proposal;
import com.fsd.mod.service.ProposalService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProposalController {

	@Autowired
	private ProposalService proposalService;

	@PostMapping("/proposal/addProposal")
	public ResponseEntity<List<Proposal>> addProposal(@RequestBody List<Proposal> proposalDataList) {

		Proposal addProposal = null;
		List<Proposal> addedProposalList = null;
		try {
			addedProposalList = proposalService.saveProposal(proposalDataList);
			return new ResponseEntity<List<Proposal>>(addedProposalList, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<List<Proposal>>(proposalDataList, HttpStatus.NOT_ACCEPTABLE);
		}
	}

	@GetMapping("/proposal/getUserProposal/{userId}")
	public ResponseEntity<List<Proposal>> getUserProposal(@PathVariable("userId") Long userId) {
		List<Proposal> userProposal = proposalService.getUserProposal(userId);
		if (userProposal != null)
			return new ResponseEntity<List<Proposal>>(userProposal, HttpStatus.OK);
		else
			return new ResponseEntity<List<Proposal>>(userProposal, HttpStatus.CONFLICT);
	}

	@GetMapping("/proposal/getMentorProposal/{mentorId}")
	public ResponseEntity<List<Proposal>> getMentorProposal(@PathVariable("mentorId") Long mentorId) {
		List<Proposal> mentorProposal = proposalService.getMentorProposal(mentorId);
		if (mentorProposal != null)
			return new ResponseEntity<List<Proposal>>(mentorProposal, HttpStatus.OK);
		else
			return new ResponseEntity<List<Proposal>>(mentorProposal, HttpStatus.CONFLICT);
	}

	@PutMapping("/proposal/acceptProposal/{proposalId}")
	public ResponseEntity<Proposal> acceptProposal(@PathVariable("proposalId") Long proposalId) {

		Proposal targetProposal = proposalService.acceptProposal(proposalId);
		if (targetProposal != null)
			return new ResponseEntity<Proposal>(targetProposal, HttpStatus.OK);
		else
			return new ResponseEntity<Proposal>(targetProposal, HttpStatus.NOT_MODIFIED);
	}

	@PutMapping("/proposal/rejectProposal/{proposalId}")
	public ResponseEntity<Proposal> rejectProposal(@PathVariable("proposalId") Long proposalId) {

		Proposal targetProposal = proposalService.rejectProposal(proposalId);
		if (targetProposal != null)
			return new ResponseEntity<Proposal>(targetProposal, HttpStatus.OK);
		else
			return new ResponseEntity<Proposal>(targetProposal, HttpStatus.NOT_MODIFIED);
	}
	
	@PutMapping("/proposal/reconfirmProposal/{proposalId}")
	public ResponseEntity<Proposal> reconfirmProposal(@PathVariable("proposalId") Long proposalId) {

		Proposal targetProposal = proposalService.reconfirmProposal(proposalId);
		if (targetProposal != null)
			return new ResponseEntity<Proposal>(targetProposal, HttpStatus.OK);
		else
			return new ResponseEntity<Proposal>(targetProposal, HttpStatus.NOT_MODIFIED);
	}

}
