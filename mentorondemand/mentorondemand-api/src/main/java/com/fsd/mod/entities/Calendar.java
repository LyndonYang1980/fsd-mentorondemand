package com.fsd.mod.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name = "calendar")
@Data
@NoArgsConstructor
@Accessors(chain = true)
public class Calendar {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "calendar_id")
	private Integer calendarId;

	@Column(name = "time_slot")
	private String timeSlot;

	@ManyToOne(targetEntity = Mentor.class)
	@JoinColumn(name = "mentor_id")
	private Long mentorId;
}
