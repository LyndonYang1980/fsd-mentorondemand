package com.fsd.mod.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Entity
@Table(name = "payment")
@NoArgsConstructor
@Data
@Accessors(chain = true)
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "payment_id")
	private long paymentId;

	@ManyToOne(cascade = CascadeType.REFRESH)
	@JoinColumn(name = "mentor_id")
	private Mentor mentor;

	@ManyToOne(targetEntity = Training.class)
	@JoinColumn(name = "training_id")
	private Long trainingId;

	@Column(name = "amount")
	private Float amount;

	@Column(name = "pay_date")
	private Date payDate;

	@Column(name = "remarks")
	private String remarks;

	@Column(name = "skill_name")
	private String skillName;
}
