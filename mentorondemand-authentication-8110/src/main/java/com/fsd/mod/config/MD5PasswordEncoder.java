package com.fsd.mod.config;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.fsd.mod.utils.MD5Util;

public class MD5PasswordEncoder implements PasswordEncoder {

	@Override
	public String encode(CharSequence rawPassword) {
		return MD5Util.encode((String)rawPassword);
	}

	@Override
	public boolean matches(CharSequence rawPassword, String encodedPassword) {
		return encodedPassword.equals(MD5Util.encode((String)rawPassword));
	}
	
}
