package com.fsd.mod.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Entity
@Table(name = "mentor")
@NoArgsConstructor
@Data
@Accessors(chain = true)
public class Mentor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "mentor_id")
	private Long mentorId;

	@Column(name = "mentor_name")
	private String mentorName;

	@Column(name = "mentor_password")
	private String mentorPassword;

	@Column(name = "mentor_email")
	private String mentorEmail;

	@Column(name = "mentor_experience")
	private Float mentorExperience;

	@Column(name = "contact_number")
	private Long contactNumber;

	@Column(name = "rating")
	private Long rating;

	@Column(name = "active")
	private boolean active;
	
	@ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
	@JoinTable(name = "mentor_skills", joinColumns = @JoinColumn(name = "mentor_id", referencedColumnName = "mentor_id"), inverseJoinColumns = @JoinColumn(name = "skill_id", referencedColumnName = "skill_id"))
	private Set<Skill> skills;
	
//	@JsonManagedReference(value = "proposals")
	@OneToMany(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY, mappedBy = "mentor")
	private Set<Proposal> proposals = new HashSet<>();

//	@JsonManagedReference(value = "trainings")
	@OneToMany(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY, mappedBy = "mentor")
	private Set<Training> trainings = new HashSet<>();

//	@Column(name = "reg_code")
//	private String regCode = "";
//
//	@Column(name = "linkedin_url")
//	private String linkedinUrl = null;

//	@Column(name = "confirmed_signup")
//	private Boolean confirmedSignUp = false;
//
//	@Column(name = "reset_password")
//	private Boolean resetPassword = false;
//
//	@Column(name = "reset_password_date")
//	private Date resetPasswordDate;
}
