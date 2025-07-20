package com.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Employee;
import com.service.EmployeeService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class EmployeeController {

	@Autowired
	EmployeeService eservice;
	
	@PostMapping("/saveallemp")
	public String saveemp(@RequestBody Employee e) {
		return eservice.saveemp(e);
	}
	
	@GetMapping("/findallid")
	public List<Employee> findalleid(){
		return eservice.findalleid();
	}
	
	@GetMapping("/findbyid")
	public Employee findbyeid(@RequestParam int eid){
		return eservice.findbyeid(eid);
	}
	
	@DeleteMapping("/deleteemp/{eid}")
	public String deletebyid(@PathVariable int eid) {
		return eservice.deletebyid(eid);
	}
	
	@PutMapping("/updateemp/{eid}")
	public String update(@PathVariable int eid, @RequestBody Employee newemp) {
		return eservice.update(eid, newemp);
	}
	
	@GetMapping("/findbyname")
	public List<Employee> findByName(@RequestParam String name){
		return eservice.findByName(name);
	}
	@GetMapping("/findbydepart")
		public List<Employee> findByDepartment(@RequestParam String dept){
			return eservice.findByDepartment(dept);
		}
		
	@GetMapping("/findbysalary")
		public List<Employee> findBySalary(@RequestParam double sal){
			return eservice.findBySalary(sal);
		}
		
	@GetMapping("/findbysalgreater")
		public List<Employee> findBySalaryGreaterThan(@RequestParam double sal){
			return eservice.findBySalaryGreaterThan(sal);
		}
		
	@GetMapping("/findbysalaryless")
		public List<Employee> findBySalaryLessThan(@RequestParam double sal){
			return eservice.findBySalaryLessThan(sal);
			
		}
		
	@GetMapping("/findbyrole")
		public List<Employee> findByRole(@RequestParam String role){
			return eservice.findByRole(role);
		}
		
	@GetMapping("/findbyjoindate")
		public List<Employee> findByJoiningDate(@RequestParam LocalDate date){
			return eservice.findByJoiningDate(date);
		}
	
	@GetMapping("/findbydob")
		public List<Employee> findByDob(@RequestParam LocalDate dob){
			return eservice.findByDob(dob);
		}
	
}
