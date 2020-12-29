package com.fsd.mod.feignclient;

import java.util.List;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.fsd.mod.entities.Training;

@FeignClient(value = "mentorondemand-training")
public interface TrainingClientService {

	@GetMapping("/trainings")
	public List<Training> getTrainings();

	@GetMapping("/trainings/{trainingId}")
	public Training getTraining(@PathVariable Long trainingId);

	@PostMapping("/trainings/existingTraining")
	public Training findExistingTraining(@RequestBody Training trainingData);

	@PostMapping(value = "/trainings")
	public ResponseEntity<Training> addTraining(@RequestBody Training training);

	@PutMapping(value = "/trainings")
	public void updateTraining(@RequestBody Training training);

	@GetMapping(value = "/trainings/user/{userId}")
	public ResponseEntity<List<Training>> getUserTraining(@PathVariable Long userId);

	@GetMapping(value = "/trainings/mentor/{mentorId}")
	public ResponseEntity<List<Training>> getMentorTraining(@PathVariable Long mentorId);

}
