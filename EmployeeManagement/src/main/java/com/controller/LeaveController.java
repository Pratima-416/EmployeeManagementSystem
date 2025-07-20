package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.LeaveApllication;
import com.service.LeaveService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class LeaveController {

	@Autowired
	LeaveService lservice;
	
	@PostMapping("/saveleave")
	public String saveLeave(@RequestBody LeaveApllication leave) {
		 return lservice.saveLeave(leave);
	}

	@GetMapping("/findallleave")
	public List<LeaveApllication> findallleave(){
		return lservice.findallleave();
	}

	@PutMapping("/updateleave/{id}")
	public String updateleave(@PathVariable int id, @RequestBody LeaveApllication leaveupdate) {
		return lservice.updateleave(id, leaveupdate);
	}
	
	@DeleteMapping("/cancelleave/{id}")
	public String deletebyid(@PathVariable int id) {
		return lservice.deletebyid(id);
		
	}
	
	@GetMapping("/findleavebyid/{id}")
	public LeaveApllication findbyid(@PathVariable int id) {
		return lservice.findbyid(id);
	}
	
	@GetMapping("/employeeleave/{eid}")
	public List<LeaveApllication> findByEid(@PathVariable int eid){
		return lservice.findByEid(eid);
	}

	@PutMapping("/approve/{id}")
	public LeaveApllication approveLeave(@PathVariable int id) {
		return lservice.approveLeave(id);
	}

	
	@PutMapping("/reject/{id}")
	public LeaveApllication rejectLeave(@PathVariable int id) {
		return lservice.rejectLeave(id);
	}
}
