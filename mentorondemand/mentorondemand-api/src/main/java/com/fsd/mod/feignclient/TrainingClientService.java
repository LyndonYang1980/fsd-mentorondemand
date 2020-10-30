package com.fsd.mod.feignclient;

import java.util.List;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.fsd.mod.entities.Training;

@FeignClient(value = "mentorondemand-training")
public interface TrainingClientService {
	
	@GetMapping("/trainings")
	public List<Training> getTrainings();
	
	@RequestMapping("/trainings/{trainingId}")
	public Training getTraining(@PathVariable Long trainingId);
	
	@PostMapping(value = "/trainings")
	public void addTraining(@RequestBody Training training);
	
	@PutMapping(value = "/trainings")
	public void updateTraining(@RequestBody Training training);
	
	@RequestMapping(value = "/trainings/user/{userId}")
	public List<Training> getUserTrainings(@PathVariable Long userId);
	
	@RequestMapping(value = "/trainings/mentor/{mentorId}/{skillId}")
	public List<Training> getMentorTrainings(@PathVariable Long mentorId, @PathVariable Long skillId);
	
}
