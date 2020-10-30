package com.fsd.mod.entities;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

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

	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Skill> skills = new HashSet<>();

	@Column(name = "mentor_name")
	private String mentorName;

	@Column(name = "password")
	private String password;
	
	@Column(name = "email")
	private String email;

	@Column(name = "contact_number")
	private Long contactNumber;

	@Column(name = "reg_code")
	private String regCode = "";

	@Column(name = "linkedin_url")
	private String linkedinUrl = null;

	@Column(name = "years_of_experience")
	private Float yearsOfExperience;

	@Column(name = "confirmed_signup")
	private Boolean confirmedSignUp = false;

	@Column(name = "reset_password")
	private Boolean resetPassword = false;

	@Column(name = "reset_password_date")
	private Date resetPasswordDate;
}
