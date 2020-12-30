package com.fsd.mod.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsd.mod.entities.Training;
import com.fsd.mod.repository.TrainingRepo;

@Service
public class TrainingService {

	@Autowired
	TrainingRepo trainingRepo;

	public List<Training> getTrainings() {
		List<Training> list = new ArrayList<>();
		trainingRepo.findAll().forEach(list::add);
		return list;
	}

	public Training getTraining(Long trainingId) {
		return trainingRepo.findOne(trainingId);
	}

	public Training findExistingTraining(Training trainingData) {
		return trainingRepo.findExistingTrainingForUser(trainingData.getUserId(), trainingData.getMentorId(),
				trainingData.getSkillId());
	}

	@Transactional
	public Training saveTraining(Training trainingData) {

		return trainingRepo.save(trainingData);
	}

	@Transactional
	public Training updateTraining(Training training) {
		return trainingRepo.save(training);
	}

	public List<Training> getUserTraining(Long userId) {
		return trainingRepo.findByUserId(userId);
	}

	public List<Training> getMentorTraining(Long mentorId) {
		return trainingRepo.findByMentorId(mentorId);
	}
}
