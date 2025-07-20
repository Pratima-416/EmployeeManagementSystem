package com.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.User;
import com.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository uresp;
	
	public String register(User u) {
		//
		User existinguser=uresp.findByUsername(u.getUsername()).orElse(null);
		if(existinguser!=null) {
			return "Please enter another username.This is one is already exists";
		}
		else {
			uresp.save(u);
			return "Your registration completed sucessfully";
		}
		
	}
	public User login(String username,String password) {
		User existinguser=uresp.findByUsername(username).orElse(null);
		if(existinguser!=null) {
			if(existinguser.getPassword().equals(password)) {
				return existinguser;
			}
			
		}
		
		return null;
	}

	public Optional<User> findByUsername(String username){
		return uresp.findByUsername(username);
	}
}
