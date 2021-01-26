package com.fsd.mod;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient // Register this microservice into Eureka upon startup
@EnableDiscoveryClient // Service discovery
public class MentorApp_8001 extends SpringBootServletInitializer {

	public static void main(String[] args) {

		SpringApplication.run(MentorApp_8001.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(MentorApp_8001.class);
	}
}
