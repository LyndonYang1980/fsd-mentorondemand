package com.fsd.mod.feignclient;

import java.util.List;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.fsd.mod.entities.Proposal;

@FeignClient(value = "mentorondemand-proposal")
public interface ProposalClientService {
	
	@PostMapping("/proposal/addProposal")
	public ResponseEntity<List<Proposal>> addProposal(@RequestBody List<Proposal> proposalDataList);

	@GetMapping("/proposal/getUserProposal/{userId}")
	public ResponseEntity<List<Proposal>> getUserProposal(@PathVariable("userId") Long userId);

	@GetMapping("/proposal/getMentorProposal/{mentorId}")
	public ResponseEntity<List<Proposal>> getMentorProposal(@PathVariable("mentorId") Long mentorId);
}
