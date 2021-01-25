package com.fsd.mod;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.feign.EnableFeignClients;

@SpringBootApplication
@EnableEurekaClient // Register this microservice into Eureka upon startup
@EnableDiscoveryClient // Service discovery
@EnableFeignClients
public class AuthApp_8110 {

	public static void main(String[] args) {
		SpringApplication.run(AuthApp_8110.class, args);

	}

}
