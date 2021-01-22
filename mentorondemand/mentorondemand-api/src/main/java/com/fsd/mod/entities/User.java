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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Entity
@Table(name = "user")
@NoArgsConstructor
@Data
@Accessors(chain = true)
public class User {

	@OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY, mappedBy = "userId", targetEntity = Proposal.class)
	private Set<Proposal> proposals = new HashSet<>();

	@OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY, mappedBy = "userId", targetEntity = Training.class)
	private Set<Training> trainings = new HashSet<>();

//	@ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
//	@JoinTable(name = "user_training", joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "user_id"), inverseJoinColumns = @JoinColumn(name = "training_id", referencedColumnName = "training_id"))
//	private Set<Training> trainings = new HashSet<>();

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id")
	private Long userId;

	@Column(name = "user_name")
	private String userName;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "user_password")
	private String userPassword;

	@Column(name = "user_email")
	private String userEmail;

	@Column(name = "contact_number")
	private Long contactNumber;

	@Column(name = "reg_date")
	private Date regDate;

	@Column(name = "status", columnDefinition = "tinyint(1) default 1")
	private boolean status = false;

	@Column(name = "role")
	private String role;

}
