package com.fsd.mod.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fsd.mod.entities.Payment;
import com.fsd.mod.service.PaymentService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PaymentController {

	@Autowired
	PaymentService paymentService;

	@GetMapping(value = "/payments/{trainingId}")
	public Payment getPaymentByTrainingId(@PathVariable("trainingId") Long trainingId) {
		try {
			return paymentService.getPaymentByTrainingId(trainingId);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@PostMapping(value = "/payments/savePayment")
	public Payment savePayment(@RequestBody Payment payment) {
		return paymentService.savePayment(payment);
	}
}
