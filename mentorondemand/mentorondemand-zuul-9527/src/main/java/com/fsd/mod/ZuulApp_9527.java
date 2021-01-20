package com.fsd.mod;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableZuulProxy
public class ZuulApp_9527 {

	public static void main(String args[]) {
		SpringApplication.run(ZuulApp_9527.class, args);
	}
}
