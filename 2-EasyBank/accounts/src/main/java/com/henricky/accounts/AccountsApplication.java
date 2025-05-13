package com.henricky.accounts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class AccountsApplication {

	public static void main(String[] args) {
//		Dotenv dotenv = Dotenv.load();
//		System.setProperty("SPRING_DATASOURCE_URL", dotenv.get("SPRING_DATASOURCE_URL"));
//		System.setProperty("SPRING_DATASOURCE_USERNAME", dotenv.get("SPRING_DATASOURCE_USERNAME"));
//		System.setProperty("SPRING_DATASOURCE_PASSWORD", dotenv.get("SPRING_DATASOURCE_PASSWORD"));
//		System.setProperty("SPRING_DRIVER_CLASS_NAME", dotenv.get("SPRING_DRIVER_CLASS_NAME"));
		SpringApplication.run(AccountsApplication.class, args);
	}
}
