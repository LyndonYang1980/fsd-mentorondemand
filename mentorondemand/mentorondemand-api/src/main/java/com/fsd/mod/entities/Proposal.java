package com.fsd.mod.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Entity
@Table(name = "proposal")
@NoArgsConstructor
@Data
@Accessors(chain = true)
public class Proposal {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "proposal_id")
	private Long proposalId;
	
	@Column(name = "user_id")
	private Long userId;
	
	@Column(name = "mentor_id")
	private Long mentorId;
	
	@Column(name = "skill_id")
	private Long skillId;

	@Column(name = "user_proposal")
	private boolean userProposal;

	@Column(name = "mentor_proposal")
	private boolean mentorProposal;

	@Column(name = "user_reconfirm_proposal")
	private boolean userReconfirmProposal;

	@Column(name = "user_rating")
	private double userRating;

	@Column(name = "user_progress")
	private int userProgress;

	@Column(name = "feedback")
	private String feedback;

	public Proposal(Long proposalId, Long userId, Long mentorId, Long skillId, boolean userProposal, boolean mentorProposal,
			boolean userReconfirmProposal, double userRating, int userProgress, String feedback) {
		
		super();
		this.proposalId = proposalId;
		this.userId = userId;
		this.mentorId = mentorId;
		this.skillId = skillId;
		this.userProposal = userProposal;
		this.mentorProposal = mentorProposal;
		this.userReconfirmProposal = userReconfirmProposal;
		this.userRating = userRating;
		this.userProgress = userProgress;
		this.feedback = feedback;
	}

	@Override
	public String toString() {
		return "Proposal [proposalId=" + proposalId + ", userId=" + userId + ", mentorId=" + mentorId + ", skillId=" + skillId
				+ ", userProposal=" + userProposal + ", mentorProposal=" + mentorProposal + ", userReconfirmProposal="
				+ userReconfirmProposal + ", userRating=" + userRating + ", userProgress=" + userProgress
				+ ", feedback=" + feedback + "]";
	}
}