package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.User;
import com.fsd.mod.service.AdminService;

@RestController
public class AdminController {

	@Autowired
	AdminService adminService;
	
	@PostMapping(value="/admin/add", produces = "application/json")
	public void addAdmin(@RequestBody User adminUser) {
		adminService.addAdmin(adminUser);
	}
	
}
