package com.fsd.mod.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

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
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "training_id")
	private Long trainingId;
	
	@Column(name = "user_id")
	private Long userId;
	
	@Column(name = "mentor_id")
	private Long mentorId;

//	@JsonManagedReference(value = "skill")
//	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
//	@JoinColumn(name = "skill_id", referencedColumnName = "skill_id")
	private Long skillId;
	
	@Column(name = "fee")
	private Float fee;

	@Column(name = "status")
	private String status;

	@Column(name = "progress")
	private Integer progress = 0;

	@Column(name = "rating")
	private Integer rating = 0;

	@Column(name = "start_date")
	@JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
	private Date startDate;

	@Column(name = "end_date")
	@JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
	private Date endDate;

	@Column(name = "amount_received")
	private Float amountReceived = 0.0f;

}
