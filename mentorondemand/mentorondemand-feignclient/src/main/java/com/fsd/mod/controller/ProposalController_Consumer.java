package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Proposal;
import com.fsd.mod.feignclient.ProposalClientService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProposalController_Consumer {

	@Autowired
	ProposalClientService proposalClientService;

	@PostMapping("/feign/proposal/addProposal")
	public ResponseEntity<List<Proposal>> addProposal(@RequestBody List<Proposal> proposalDataList) {
		return proposalClientService.addProposal(proposalDataList);
	}

	@GetMapping("/feign/proposal/getUserProposal/{userId}")
	public ResponseEntity<List<Proposal>> getUserProposal(@PathVariable("userId") Long userId) {
		return proposalClientService.getUserProposal(userId);
	}

	@GetMapping("feign/proposal/getMentorProposal/{mentorId}")
	public ResponseEntity<List<Proposal>> getMentorProposal(@PathVariable("mentorId") Long mentorId) {
		return proposalClientService.getMentorProposal(mentorId);
	}

	@PutMapping("feign/proposal/acceptProposal/{proposalId}")
	public ResponseEntity<Proposal> acceptProposal(@PathVariable("proposalId") Long proposalId) {
		return proposalClientService.acceptProposal(proposalId);
	}

	@PutMapping("feign/proposal/rejectProposal/{proposalId}")
	public ResponseEntity<Proposal> rejectProposal(@PathVariable("proposalId") Long proposalId) {
		return proposalClientService.rejectProposal(proposalId);
	}

	@PutMapping("feign/proposal/reconfirmProposal/{proposalId}")
	public ResponseEntity<Proposal> reconfirmProposal(@PathVariable("proposalId") Long proposalId) {
		return proposalClientService.reconfirmProposal(proposalId);
	}
}
