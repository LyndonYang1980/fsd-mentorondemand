package com.fsd.mod;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableEurekaClient // Register this microservice into Eureka upon startup
@EnableDiscoveryClient // Service discovery
@EnableScheduling
@EnableFeignClients
public class TrainingApp_8011 {

	public static void main(String[] args) {

		SpringApplication.run(TrainingApp_8011.class, args);
	}
}
