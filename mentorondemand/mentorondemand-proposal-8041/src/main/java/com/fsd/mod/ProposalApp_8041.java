package com.fsd.mod;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient // Register this microservice into Eureka upon startup
@EnableDiscoveryClient // Service discovery
public class ProposalApp_8041 {

	public static void main(String[] args) {
		SpringApplication.run(ProposalApp_8041.class, args);
	}

}
