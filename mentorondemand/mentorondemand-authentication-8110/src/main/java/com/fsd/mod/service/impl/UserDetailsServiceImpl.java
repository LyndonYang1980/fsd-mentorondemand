package com.fsd.mod.service.impl;

import static org.hamcrest.CoreMatchers.nullValue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fsd.mod.entities.Mentor;
import com.fsd.mod.entities.User;
import com.fsd.mod.feignclient.MentorClientService;
import com.fsd.mod.feignclient.UserClientService;
import com.fsd.mod.service.CustomUserDetailsService;

@Service("userDetailsServiceImpl")
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	UserClientService userClientService;
	
	@Autowired
	MentorClientService mentorClientService;
	
	
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		User user = userClientService.getUserByName(userName);

		if (user == null) {
			throw new UsernameNotFoundException("User Not Found with userEmail: " + userName);
		}

		return UserDetailsImpl.build(user);
	}
	
	@Transactional
	public UserDetails loadUserByUsername(String userName, String userRole) throws UsernameNotFoundException {		
		
		if ("USER".equals(userRole)) {
			User user = userClientService.getUserByName(userName);
			
			if (user == null) {
				throw new UsernameNotFoundException("User Not Found with user name: " + userName);
			}
			return UserDetailsImpl.build(user);
		}else if ("MENTOR".equals(userRole)) {
			Mentor mentor = mentorClientService.getMentorByName(userName);
			if (mentor == null) {
				throw new UsernameNotFoundException("Mentor Not Found with mentor name: " + userName);
			}
			return UserDetailsImpl.build(mentor);
		}
		return null;
		
	}
}
