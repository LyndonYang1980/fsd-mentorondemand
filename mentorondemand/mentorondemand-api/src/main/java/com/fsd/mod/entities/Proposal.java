package com.fsd.mod.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
	
//	@JsonBackReference(value = "user")
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id", referencedColumnName = "user_id")
	private User user;

//	@JsonBackReference(value = "mentor")
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JoinColumn(name = "mentor_id", referencedColumnName = "mentor_id")
	private Mentor mentor;

//	@JsonBackReference(value = "skill")
	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JoinColumn(name = "skill_id", referencedColumnName = "skill_id")
	private Skill skill;

	@Column(name = "user_proposal")
	private boolean userProposal;

	@Column(name = "mentor_proposal")
	private Boolean mentorProposal;

	@Column(name = "user_reconfirm_proposal")
	private Boolean userReconfirmProposal;

	public Proposal(Long proposalId, User user, Mentor mentor, Skill skill, boolean userProposal,
			Boolean mentorProposal, Boolean userReconfirmProposal) {
		super();
		this.proposalId = proposalId;
		this.user = user;
		this.mentor = mentor;
		this.skill = skill;
		this.userProposal = userProposal;
		this.mentorProposal = mentorProposal;
		this.userReconfirmProposal = userReconfirmProposal;
	}
	
	@Override
	public String toString() {
		return "Proposal [user=" + user + ", mentor=" + mentor + ", skill=" + skill + ", proposalId=" + proposalId
				+ ", userProposal=" + userProposal + ", mentorProposal=" + mentorProposal + ", userReconfirmProposal="
				+ userReconfirmProposal + "]";
	}
}
