package com.fsd.mod.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.fsd.mod.entities.Payment;
import com.fsd.mod.entities.Training;

public interface PaymentRepo extends CrudRepository<Payment, Long> {
	
	public Payment findByTraining(@Param("training") Training training);
	
	@Query(value = "select * from payment where training_id = :trainingId", nativeQuery = true)
	public Payment findByTrainingId(@Param("trainingId") Long trainingId);
}
