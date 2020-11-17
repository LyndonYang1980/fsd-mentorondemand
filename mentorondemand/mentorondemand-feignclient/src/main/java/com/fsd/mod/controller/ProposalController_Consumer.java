package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Proposal;
import com.fsd.mod.feignclient.ProposalClientService;

@RestController
public class ProposalController_Consumer {

	@Autowired
	ProposalClientService proposalClientService;

	@PostMapping("/feign/proposal/addProposal")
	public ResponseEntity<Proposal> addProposal(@RequestBody Proposal proposalData) {
		return proposalClientService.addProposal(proposalData);
	}

	@GetMapping("/feign/proposal/getUserProposal/{userId}")
	public ResponseEntity<List<Proposal>> getUserProposal(@PathVariable("userId") Long userId) {
		return proposalClientService.getUserProposal(userId);
	}
}
