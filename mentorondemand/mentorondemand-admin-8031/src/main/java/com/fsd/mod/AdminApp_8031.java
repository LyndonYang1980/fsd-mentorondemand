package com.fsd.mod;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
//@EnableEurekaClient // Register this microservice into Eureka upon startup
//@EnableDiscoveryClient // Service discovery
public class AdminApp_8031 {

	public static void main(String[] args) {

		SpringApplication.run(AdminApp_8031.class, args);
	}

}
