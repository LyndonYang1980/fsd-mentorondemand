package com.fsd.mod.response;

import java.util.HashMap;
import java.util.Map;

import lombok.Data;

@Data
public class JwtResponse {
	
	private String token;
	private String type = "Bearer";
	
	private Map<String, Object> objData = new HashMap<>();

	public JwtResponse(String accessToken, Long id, String username, String email, String key, Object obj) {
		this.token = accessToken;
//		this.id = id;
//		this.username = username;
//		this.email = email;
		this.add(key, obj);
	}
	
	public JwtResponse add(String key, Object obj) {
    	this.getObjData().put(key, obj);
    	return this;
    }

	public String getAccessToken() {
		return token;
	}

	public void setAccessToken(String accessToken) {
		this.token = accessToken;
	}

	public String getTokenType() {
		return type;
	}

	public void setTokenType(String tokenType) {
		this.type = tokenType;
	}

}
