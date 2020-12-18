package com.fsd.mod.entities;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Entity
@Table(name = "training")
@Data
@NoArgsConstructor
@Accessors(chain = true)
public class Training {

	
	@Id
	@Column(name = "training_id")
	private Long trainingId;
	
	@JsonIgnore
	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "trainings")
	private Set<User> users = new HashSet<>();
	
//	@JsonManagedReference(value = "user")
//	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
//	@JoinColumn(name = "user_id", referencedColumnName = "user_id")
//	private Long userId;

//	@JsonManagedReference(value = "mentor")
//	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
//	@JoinColumn(name = "mentor_id", referencedColumnName = "mentor_id")
	private Long mentorId;

//	@JsonManagedReference(value = "skill")
//	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
//	@JoinColumn(name = "skill_id", referencedColumnName = "skill_id")
	private Long skillId;

	@Column(name = "status")
	private String status;

	@Column(name = "progress")
	private Integer progress = 0;

	@Column(name = "rating")
	private Integer rating = 0;

	@Column(name = "start_date")
	private Date startDate;

	@Column(name = "end_date")
	private Date endDate;

	@Column(name = "amount_received")
	private Float amountReceived = 0.0f;

}
