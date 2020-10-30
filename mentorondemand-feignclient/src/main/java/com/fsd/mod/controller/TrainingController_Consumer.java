package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Training;
import com.fsd.mod.feignclient.TrainingClientService;

@RestController
public class TrainingController_Consumer {

	@Autowired
	TrainingClientService trainingClientService;

	@GetMapping("/consumer/trainings")
	public List<Training> getTrainings() {
		return trainingClientService.getTrainings();
	}

	@RequestMapping("/consumer/trainings/{trainingId}")
	public Training getTraining(@PathVariable Long trainingId) {
		return trainingClientService.getTraining(trainingId);
	}

	@PostMapping(value = "/consumer/trainings")
	public void addTraining(@RequestBody Training training) {
		trainingClientService.addTraining(training);
	}

	@PutMapping(value = "/consumer/trainings")
	public void updateTraining(@RequestBody Training training) {
		trainingClientService.updateTraining(training);
	}

	@RequestMapping(value = "/consumer/trainings/user/{userId}")
	public List<Training> getUserTrainings(@PathVariable Long userId) {
		return trainingClientService.getUserTrainings(userId);
	}

	@RequestMapping(value = "/consumer/trainings/mentor/{mentorId}/{skillId}")
	public List<Training> getMentorTrainings(@PathVariable Long mentorId, @PathVariable Long skillId) {
		return trainingClientService.getMentorTrainings(mentorId, skillId);

	}
}
