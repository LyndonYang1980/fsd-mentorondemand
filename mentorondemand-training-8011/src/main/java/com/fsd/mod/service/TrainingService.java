package com.fsd.mod.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsd.mod.entities.Training;
import com.fsd.mod.repository.TrainingRepo;

@Service
public class TrainingService {
	
	@Autowired
	TrainingRepo trainingRepo;
	
	public List<Training> getTrainings(){
		List<Training> list = new ArrayList<>();
		trainingRepo.findAll().forEach(list::add);
		return list;
	}
	
	public Training getTraining(Long trainingId) {
		return trainingRepo.findOne(trainingId);
	}
	
	public void addTraining(Training training) {
		trainingRepo.save(training);
	}
	
	public void saveTraining(Training training) {
		trainingRepo.save(training);
	}
	
	public void updateTraining(Training training) {
		trainingRepo.save(training);
	}
	
	public List<Training> getUserTrainings(Long userId){
		return trainingRepo.findByUserId(userId);
	}
	
	public List<Training> getMentorTrainings(Long mentorId, Long skillId){
		return trainingRepo.findByMentorIdAndSkillId(mentorId, skillId);
	}
}
