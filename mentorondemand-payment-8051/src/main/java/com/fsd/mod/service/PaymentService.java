package com.fsd.mod.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fsd.mod.entities.Payment;
import com.fsd.mod.entities.Training;
import com.fsd.mod.repository.PaymentRepo;

@Service
public class PaymentService {
	
	@Autowired
	PaymentRepo paymentRepo;
	
	public Payment getPaymentByTraining(Training training) {
		return paymentRepo.findByTraining(training);
	}
	
	public Payment getPaymentByTrainingId(Long trainingId) {
		return paymentRepo.findByTrainingId(trainingId);
	}
	
	public Payment savePayment(Payment payment) {
		return paymentRepo.save(payment);
	}
}
