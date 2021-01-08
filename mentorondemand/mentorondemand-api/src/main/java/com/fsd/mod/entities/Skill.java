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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Entity
@Table(name = "skill")
@Data
@NoArgsConstructor
@Accessors(chain = true)
public class Skill {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "skill_id")
	private Long skillId;

	@Column(name = "mentor_id")
	private Long mentorId;

	@Column(name = "skill_name", nullable = false)
	private String skillName;

	@Column(name = "prerequisites", nullable = true)
	private String prerequisites;

	@Column(name = "year_of_exp", nullable = true)
	private int yearsOfExp;

	@JsonIgnore
	@OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY, mappedBy = "skillId", targetEntity = Training.class)
	private Set<Training> trainings = new HashSet<>();

//	@JsonIgnore
//	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "skills")
//	private Set<Mentor> mentors;

}
