package com.fsd.mod.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Proposal;
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

	@GetMapping("/trainings/{trainingId}")
	public Training getTraining(@PathVariable Long trainingId) {
		Training training = trainingService.getTraining(trainingId);
		return training;
	}

	@PostMapping("/trainings/existingTraining")
	public Training findExistingTraining(@RequestBody Training trainingData) {
		Training existingTrain = trainingService.findExistingTraining(trainingData);
		return existingTrain;
	}

	@PostMapping(value = "/trainings")
	public ResponseEntity<Training> addTraining(@RequestBody Training trainingData) {
		Training addedTraining = null;
		try {
			addedTraining = trainingService.saveTraining(trainingData);
			return new ResponseEntity<Training>(addedTraining, HttpStatus.ACCEPTED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Training>(addedTraining, HttpStatus.NOT_ACCEPTABLE);
		}
	}
	
	@PostMapping(value = "/trainings/addTrainings")
	public ResponseEntity<List<Training>> addTrainings(@RequestBody List<Training> trainingList) {
		
		List<Training> addedTrainingList = null;
		try {
			addedTrainingList = trainingService.saveTrainings(trainingList);
			return new ResponseEntity<List<Training>>(addedTrainingList, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<List<Training>>(addedTrainingList, HttpStatus.NOT_ACCEPTABLE);
		}
	}

	@PutMapping(value = "/trainings")
	public Training updateTraining(@RequestBody Training training) {
		Training updTraining = null;

		try {
			updTraining = trainingService.updateTraining(training);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			return updTraining;
		}
	}

	@GetMapping(value = "/trainings/user/{userId}")
	public ResponseEntity<List<Training>> getUserTraining(@PathVariable Long userId) {
		List<Training> userTrainings = trainingService.getUserTraining(userId);
		if (userTrainings != null) {
			return new ResponseEntity<List<Training>>(userTrainings, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<Training>>(userTrainings, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping(value = "/trainings/mentor/{mentorId}")
	public ResponseEntity<List<Training>> getMentorTraining(@PathVariable Long mentorId) {
		List<Training> mentorTrainings = trainingService.getMentorTraining(mentorId);
		if (mentorTrainings != null) {
			return new ResponseEntity<List<Training>>(mentorTrainings, HttpStatus.OK);
		} else {
			return new ResponseEntity<List<Training>>(mentorTrainings, HttpStatus.NOT_FOUND);
		}
	}

}
