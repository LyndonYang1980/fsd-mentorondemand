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

	@Column(name = "skill_name", nullable = false)
	private String skillName;

	@Column(name = "skill_duration", nullable = true)
	private int skillDuration;

	@Column(name = "prerequisites", nullable = true)
	private String prerequisites;

//	@JsonBackReference(value = "proposals")
	@JsonIgnore
	@OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY, mappedBy = "skillId", targetEntity = Proposal.class)
	private Set<Proposal> proposals = new HashSet<>();

//	@JsonBackReference(value = "trainings")
	@JsonIgnore
	@OneToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY, mappedBy = "skillId", targetEntity = Training.class)
	private Set<Training> trainings = new HashSet<>();

//	@JsonManagedReference(value = "mentor")
//	@ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY, targetEntity = Mentor.class)
//	@JoinColumn(name = "mentor_id", referencedColumnName = "mentor_id")
//	private Mentor mentor;

//	@JsonIgnore
//	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "skills")
//	private Set<Mentor> mentors;

}
