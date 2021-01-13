package com.fsd.mod.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.fsd.mod.entities.Training;

public interface TrainingRepo extends CrudRepository<Training, Long> {

	public List<Training> findByUserId(@Param("userId") Long userId);
	
	public List<Training> findByMentorId(@Param("mentorId") Long mentorId);

	@Query(value = "select * from training where user_id = :userId && mentor_id = :mentorId && skill_id = :skillId && status in ('proposed', 'confirmed proposed', 'started') limit 1", nativeQuery = true)
	public Training findExistingTrainingForUser(@Param("userId") Long userId, @Param("mentorId") Long mentorId,@Param("skillId") Long skillId);
	
	public List<Training> findByMentorIdAndStatus(@Param("mentorId") Long mentorId, @Param("status") String status);
	
	public List<Training> findByStatus(@Param("status") String status);
}
