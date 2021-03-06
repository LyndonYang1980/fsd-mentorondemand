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

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	private String active;
	
	@Column(name = "role")
	private String role;
	
	@OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY, mappedBy = "mentorId", targetEntity = Skill.class)
	private Set<Skill> skills = new HashSet<>();
	
	@OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY, mappedBy = "mentorId", targetEntity = Training.class)
	private Set<Training> trainings = new HashSet<>();
	
	@OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY, mappedBy = "mentorId", targetEntity = Calendar.class)
	private Set<Calendar> calendars = new HashSet<>();
	
	@OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY, mappedBy = "mentor", targetEntity = Payment.class)
	private Set<Payment> payments = new HashSet<>();
	
}
