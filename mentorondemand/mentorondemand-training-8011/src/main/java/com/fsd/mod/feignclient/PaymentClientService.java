package com.fsd.mod.feignclient;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.fsd.mod.entities.Payment;
import com.fsd.mod.entities.Training;

@FeignClient(value = "mentorondemand-payment")
public interface PaymentClientService {

	@GetMapping(value = "/payments/{trainingId}")
	public Payment getPaymentByTrainingId(@PathVariable("trainingId") Long trainingId);
	
	@PostMapping(value = "/payments/savePayment")
	public Payment savePayment(@RequestBody Payment payment);
}
