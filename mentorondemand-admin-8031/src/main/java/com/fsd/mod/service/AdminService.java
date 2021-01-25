package com.fsd.mod.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsd.mod.entities.User;
import com.fsd.mod.repository.AdminRepo;

@Service
public class AdminService {

	@Autowired
	AdminRepo adminRepo;
	
	public User getAdmin(Long adminId) {		
		return adminRepo.findOne(adminId);
	}
	
	public void addAdmin(User adminUser) {
		adminRepo.save(adminUser);
	}
	
	public void updateAdmin(User adminUser) {
		adminRepo.save(adminUser);
	}
	
}
