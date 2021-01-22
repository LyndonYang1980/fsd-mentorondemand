package com.fsd.mod.service.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fsd.mod.entities.Calendar;
import com.fsd.mod.entities.Mentor;
import com.fsd.mod.entities.Payment;
import com.fsd.mod.entities.Skill;
import com.fsd.mod.entities.Training;

import lombok.Data;

@Data
public class MentorDetailsImpl implements UserDetails {

	private Long mentorId;

	private String mentorName;

	private String mentorPassword;

	private String password;

	private String mentorEmail;

	private Float mentorExperience;

	private Long contactNumber;

	private Long rating;

	private String active;

	private String role;

	private Set<Skill> skills;

	private Set<Training> trainings = new HashSet<>();

	private Set<Calendar> calendars = new HashSet<>();

	private Set<Payment> payments = new HashSet<>();

	private Collection<? extends GrantedAuthority> authorities;

	public MentorDetailsImpl(Long mentorId, String mentorName, String mentorPassword, String password,
			String mentorEmail, Float mentorExperience, Long contactNumber, Long rating, String active, String role,
			Set<Skill> skills, Set<Training> trainings, Set<Calendar> calendars, Set<Payment> payments,
			Collection<? extends GrantedAuthority> authorities) {
		super();
		this.mentorId = mentorId;
		this.mentorName = mentorName;
		this.mentorPassword = mentorPassword;
		this.password = mentorPassword;
		this.mentorEmail = mentorEmail;
		this.mentorExperience = mentorExperience;
		this.contactNumber = contactNumber;
		this.rating = rating;
		this.active = active;
		this.role = role;
		this.skills = skills;
		this.trainings = trainings;
		this.calendars = calendars;
		this.payments = payments;
		this.authorities = authorities;
	}

	public static MentorDetailsImpl build(Mentor mentor) {

		List<GrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority(mentor.getRole()));

		return new MentorDetailsImpl(mentor.getMentorId(), mentor.getMentorName(), mentor.getMentorPassword(),
				mentor.getMentorPassword(), mentor.getMentorEmail(), mentor.getMentorExperience(),
				mentor.getContactNumber(), mentor.getRating(), mentor.getActive(), mentor.getRole(), mentor.getSkills(),
				mentor.getTrainings(), mentor.getCalendars(), mentor.getPayments(), authorities);
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return false;
	}

}
