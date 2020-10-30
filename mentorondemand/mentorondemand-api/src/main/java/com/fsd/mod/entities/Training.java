package com.fsd.mod.entities;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Entity
@Table(name = "training")
@Data
@NoArgsConstructor
@Accessors(chain = true)
public class Training {

	@ManyToOne(targetEntity = Skill.class)
	@JoinColumn(name = "skill_id")
	private Skill skill;

	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "trainings")
//	@JoinTable(name = "user", joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = {
//			@JoinColumn(name = "training_id") })
	private Set<User> users = new HashSet<>();

	@ManyToOne(targetEntity = Mentor.class)
	@JoinColumn(name = "mentor_id")
	private Long mentorId;

	@Id
	@Column(name = "training_id")
	private Long trainingId;

	@Column(name = "status")
	private String status;

	@Column(name = "progress")
	private Integer progress = 0;

	@Column(name = "fees")
	private Float fees = 0.0f;

	@Column(name = "time_slot")
	private String timeSlot;

	@Column(name = "commission_amount")
	private Float commissionAmount = 0.0f;

	@Column(name = "rating")
	private Integer rating = 0;

	@Column(name = "start_date")
	private Date startDate;

	@Column(name = "end_date")
	private Date endDate;

	@Column(name = "amount_received")
	private Float amountReceived = 0.0f;

	@Column(name = "razorpay_payment_id")
	private String razorpayPaymentId;

}
