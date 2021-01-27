package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Training;
import com.fsd.mod.feignclient.TrainingClientService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TrainingController_Consumer {

	@Autowired
	TrainingClientService trainingClientService;

	@GetMapping("/feign/trainings")
	public List<Training> getTrainings() {
		return trainingClientService.getTrainings();
	}

	@GetMapping("/feign/trainings/{trainingId}")
	public Training getTraining(@PathVariable("trainingId") Long trainingId) {
		return trainingClientService.getTraining(trainingId);
	}

	@PostMapping("/feign/trainings/existingTraining")
	public Training findExistingTraining(@RequestBody Training trainingData) {
		return trainingClientService.findExistingTraining(trainingData);
	}

	@PostMapping(value = "/feign/trainings")
	public ResponseEntity<Training> addTraining(@RequestBody Training training) {
		return trainingClientService.addTraining(training);
	}
	
	@PostMapping(value = "/feign/trainings/addTrainings")
	public ResponseEntity<List<Training>> addTrainings(@RequestBody List<Training> trainingList){
		return trainingClientService.addTrainings(trainingList);
	}

	@PutMapping(value = "/feign/trainings")
	public Training updateTraining(@RequestBody Training training) {
		return trainingClientService.updateTraining(training);
	}

	@GetMapping(value = "/feign/trainings/user/{userId}")
	public ResponseEntity<List<Training>> getUserTraining(@PathVariable("userId") Long userId) {
		return trainingClientService.getUserTraining(userId);
	}

	@GetMapping(value = "/feign/trainings/mentor/{mentorId}")
	public ResponseEntity<List<Training>> getMentorTraining(@PathVariable("mentorId") Long mentorId) {
		return trainingClientService.getMentorTraining(mentorId);
	}
}
