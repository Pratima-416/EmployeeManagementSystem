package com.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityrules(HttpSecurity http) throws 
	Exception
	{
		
		http
		 .cors() // add this line to enable Spring to use your CorsFilter
		    .and()
		.csrf().disable()
		
		.authorizeHttpRequests(auth->auth
				
				 .requestMatchers("/register").permitAll()
				 .requestMatchers("/login").permitAll()
.requestMatchers("/findallid","/findbyid","/findbyname/**",
				          "/findbydepart/**",
				          "/findbysalary/**",
				          "/findbysalgreater/**",
				          "/findbysalaryless/**",
				          "/findbyrole/**","/findbyjoindate","/findbydob").permitAll()
			      // All employee-related endpoints
			      .requestMatchers(
			          "/saveallemp",
			          "/deleteemp/**",
			          "/updateemp/**"
			          
			      ).permitAll()
				.requestMatchers("/saveleave","/findallleave/**", "/updateleave/*", "/cancelleave/*","/findleavebyid/**", "/employeeleave/*").permitAll()
			      .requestMatchers("findbyusername/**", "/approve/*", "/reject/*").permitAll()
				.anyRequest().authenticated()
				
				);
		//.formLogin();
		
		return http.build();
		//slist.foreach(stud->System.out.println(stud))

		
	}
	@Bean
	public PasswordEncoder createobject()
	{
		return new BCryptPasswordEncoder();
	}
	
	
	


}
