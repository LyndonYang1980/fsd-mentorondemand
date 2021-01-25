package com.fsd.mod.service.impl;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fsd.mod.entities.Training;
import com.fsd.mod.entities.User;

import lombok.Data;

@Data
public class UserDetailsImpl implements UserDetails {

	private static final long serialVersionUID = 1L;

	private String username;
	private String password;

	private Long userId;

	private String userName;

	private String firstName;

	private String lastName;

	private String userPassword;

	private String userEmail;

	private Long contactNumber;

	private Date regDate;

	private Integer status;

	private Collection<? extends GrantedAuthority> authorities;

	private Set<Training> trainings;

	public UserDetailsImpl(Long userId, String userName, String firstName, String lastName, String userPassword,
			String userEmail, Long contactNumber, Date regDate, Integer status,
			Collection<? extends GrantedAuthority> authorities, Set<Training> trainings) {

		this.username = userName;
		this.password = userPassword;

		this.userId = userId;
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.userPassword = userPassword;
		this.userEmail = userEmail;
		this.contactNumber = contactNumber;
		this.regDate = regDate;
		this.status = status;
		this.authorities = authorities;
		this.trainings = trainings;

	}

	public static UserDetailsImpl build(User user) {

		List<GrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority(user.getRole()));

		UserDetailsImpl userDetailsImpl = new UserDetailsImpl(user.getUserId(), user.getUserName(), user.getFirstName(),
				user.getLastName(), user.getUserPassword(), user.getUserEmail(), user.getContactNumber(),
				user.getRegDate(), user.getStatus(), authorities, user.getTrainings());
		return userDetailsImpl;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
}
