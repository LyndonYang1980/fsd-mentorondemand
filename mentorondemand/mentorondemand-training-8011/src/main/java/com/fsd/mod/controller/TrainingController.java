package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Training;
import com.fsd.mod.service.TrainingService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TrainingController {

	@Autowired
	TrainingService trainingService;

	@GetMapping("/trainings")
	public List<Training> getTrainings() {
		return trainingService.getTrainings();
	}

	@RequestMapping("/trainings/{trainingId}")
	public Training getTraining(@PathVariable Long trainingId) {
		return trainingService.getTraining(trainingId);
	}

	@PostMapping(value = "/trainings")
	public void addTraining(@RequestBody Training training) {
		trainingService.addTraining(training);
	}

	@PutMapping(value = "/trainings")
	public void updateTraining(@RequestBody Training training) {
		trainingService.updateTraining(training);
	}

	@RequestMapping(value = "/trainings/user/{userId}")
	public List<Training> getUserTrainings(@PathVariable Long userId) {
		return trainingService.getUserTrainings(userId);
	}

	@RequestMapping(value = "/trainings/mentor/{mentorId}/{skillId}")
	public List<Training> getMentorTrainings(@PathVariable Long mentorId, @PathVariable Long skillId) {
		return trainingService.getMentorTrainings(mentorId, skillId);
	}
}
