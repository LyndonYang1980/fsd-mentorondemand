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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

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
	
	@Column(name = "prerequisites", nullable = false)

	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "skills")
//	@JoinTable(name = "mentor", joinColumns = { @JoinColumn(name = "mentor_id") }, inverseJoinColumns = {
//			@JoinColumn(name = "skill_id") })
	private Set<Mentor> mentors = new HashSet<>();

}
