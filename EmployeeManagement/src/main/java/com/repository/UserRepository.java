package com.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer>{

	public Optional<User> findByUsername(String username);
	
	//at registration time , it checks is username is duplicate or not 
	//at login time , it check username exists in db or not.if exist then 
	//valid user
}
