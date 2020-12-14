package com.fsd.mod.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name = "training")
@Data
@NoArgsConstructor
@Accessors(chain = true)
public class Training {

	

	@Id
	@Column(name = "training_id")
	private Long trainingId;
	
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
