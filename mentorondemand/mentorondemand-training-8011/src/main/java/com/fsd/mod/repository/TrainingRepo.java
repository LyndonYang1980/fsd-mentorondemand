package com.fsd.mod.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.fsd.mod.entities.Training;

public interface TrainingRepo extends CrudRepository<Training, Long> {

//	@Query(value = "select * from user_trainings ut, training t where ut.trainings_training_id = t.training_id && ut.users_user_id = :userId", nativeQuery = true)
	public List<Training> findByUserId(@Param("userId") Long userId);

//	@Query(value = "select * from training where mentor_id = :mentorId", nativeQuery = true)
	public List<Training> findByMentorId(@Param("mentorId") Long mentorId);

	@Query(value = "select * from training where user_id = :userId && mentor_id = :mentorId && skill_id = :skillId && status in ('proposed', 'confirmed proposed', 'started') limit 1", nativeQuery = true)
	public Training findExistingTrainingForUser(@Param("userId") Long userId, @Param("mentorId") Long mentorId,@Param("skillId") Long skillId);
}
