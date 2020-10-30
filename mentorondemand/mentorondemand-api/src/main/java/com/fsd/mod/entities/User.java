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
@Table(name = "user")
@NoArgsConstructor
@Data
@Accessors(chain = true)
public class User {
	
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Set<Training> trainings = new HashSet<>();

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id")
	private long userId;

	@Column(name = "user_name")
	private String userName;

	@Column(name = "password")
	private String password;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "contact_number")
	private Long contactNumber;

	@Column(name = "reg_code")
	private String regCode = "";

	@Column(name = "confirmed_signup")
	private Boolean confirmedSignUp = false;

	@Column(name = "reset_password")
	private Boolean resetPassword = false;

	@Column(name = "reset_password_date")
	private Date resetPasswordDate;

}
