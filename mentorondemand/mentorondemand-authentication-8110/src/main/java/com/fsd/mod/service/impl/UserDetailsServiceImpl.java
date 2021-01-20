package com.fsd.mod.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fsd.mod.entities.User;
import com.fsd.mod.feignclient.UserClientService;

@Service("userDetailsServiceImpl")
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	UserClientService userClientService;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
		User user = userClientService.getUserByEmail(userEmail);

		if (user == null) {
			throw new UsernameNotFoundException("User Not Found with userEmail: " + userEmail);
		}

		return UserDetailsImpl.build(user);
	}
	
	@Transactional
	public UserDetails loadUserByUseremail(String userEmail) throws UsernameNotFoundException {
		User user = userClientService.getUserByEmail(userEmail);

		if (user == null) {
			throw new UsernameNotFoundException("User Not Found with userEmail: " + userEmail);
		}

		return UserDetailsImpl.build(user);
	}
}
