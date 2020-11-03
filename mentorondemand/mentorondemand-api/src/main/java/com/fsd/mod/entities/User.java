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
	
	@Column(name = "email")
	private String email;

	@Column(name = "contact_number")
	private Long contactNumber;
	
	@Column(name = "status", columnDefinition="tinyint(1) default 1")
	private boolean status = false;

}
