package com.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.DTO.UserDTO;
import com.entity.User;
import com.service.UserService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class UserController {
@Autowired
UserService uservice;

@PostMapping("/register")
public String register(@RequestBody User u) 
{
	return uservice.register(u);
}

@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody UserDTO userdto)
{
	if(userdto.getUsername().equals("admin") && userdto.getPassword().equals("admin@1234")) {
		User adminuser=new User();
		adminuser.setUsername("admin");
		adminuser.setPassword("admin@1234");
		adminuser.setUrole("admin");
		return ResponseEntity.ok(adminuser);
		
	}
	User u=uservice.login(userdto.getUsername(), userdto.getPassword());
	
	if(u!=null) {
		return ResponseEntity.ok(u);
	}
	else {
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
				.body("Invalid Username and password");
	}
	
}

@GetMapping("findbyusername/{uname}")
public Optional<User> findByUsername(@PathVariable String username){
	return uservice.findByUsername(username);
}


}
