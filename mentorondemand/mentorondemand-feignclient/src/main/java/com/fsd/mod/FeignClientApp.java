package com.fsd.mod;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableEurekaClient
@EnableFeignClients(basePackages = {"com.fsd.mod"})
@ComponentScan("com.fsd.mod")
public class FeignClientApp {

	public static void main(String[] args) {
		SpringApplication.run(FeignClientApp.class, args);
	}

}
