package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
	public ResponseEntity<Proposal> addProposal(@RequestBody Proposal userMentorData) {
		Proposal proposal = proposalService.saveProposal(userMentorData);
		if (proposal != null)
			return new ResponseEntity<Proposal>(proposal, HttpStatus.OK);
		else
			return new ResponseEntity<Proposal>(proposal, HttpStatus.CONFLICT);
	}

	@GetMapping("/proposal/getUserProposal/{userId}")
	public ResponseEntity<List<Proposal>> getUserProposal(@PathVariable("userId") Long userId) {
		List<Proposal> userProposal = proposalService.getUserProposal(userId);
		if (userProposal != null)
			return new ResponseEntity<List<Proposal>>(userProposal, HttpStatus.OK);
		else
			return new ResponseEntity<List<Proposal>>(userProposal, HttpStatus.CONFLICT);
	}
}
