package com.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Employee;
import com.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRepository eresp;
	
	public String saveemp(Employee e) {
		eresp.save(e);
		return "Employee Data Added Sucessfully..!!";
	}
	
	public List<Employee> findalleid(){
		return eresp.findAll();
	}
	
	public Employee findbyeid(int eid){
		return eresp.findById(eid).orElse(null);
	}
	
	public String deletebyid(int eid) {
		Employee existingemp=eresp.findById(eid).orElse(null);
		if(existingemp!=null) {
			eresp.deleteById(eid);
			return"Employee record deleted sucessfully..";
		}
		else {
			return "No record found for given id";
		}
	}
	
	public String update(int eid,Employee newemp) {
		Employee existingemp=eresp.findById(eid).orElse(null);
		if(existingemp==null) {
			return"Employee record not found for updation";
		}
		if(newemp.getName()==null && newemp.getAddress()==null && newemp.getContactno()==0 &&
				newemp.getDepartment()==null && newemp.getDob()==null && newemp.getEmail()==null 
				&& newemp.getGender()==null && newemp.getImg()==null && newemp.getJoiningdate()==null 
				&& newemp.getRole()==null && newemp.getSalary()==0.0) {
			return "No data provide for updation";
		}
		if(newemp.getName()!=null) {
			existingemp.setName(newemp.getName());
		}
		if(newemp.getAddress()!=null) {
			existingemp.setAddress(newemp.getAddress());
		}
		if(newemp.getContactno()!=0) {
			existingemp.setContactno(newemp.getContactno());
		}
		if(newemp.getDepartment()!=null) {
			existingemp.setDepartment(newemp.getDepartment());
		}
		if(newemp.getDob()!=null) {
			existingemp.setDob(newemp.getDob());
		}
		if(newemp.getEmail()!=null) {
			existingemp.setEmail(newemp.getEmail());
		}
		if(newemp.getGender()!=null) {
			existingemp.setGender(newemp.getGender());
		}
		if(newemp.getImg()!=null) {
			existingemp.setImg(newemp.getImg());
		}
		if(newemp.getJoiningdate()!=null) {
			existingemp.setJoiningdate(newemp.getJoiningdate());
		}
		if(newemp.getRole()!=null) {
			existingemp.setRole(newemp.getRole());
		}
		if(newemp.getSalary()!=0.0) {
			existingemp.setSalary(newemp.getSalary());
		}
		eresp.save(existingemp);
		return"Employee Record Updated Sucessfully..";
		
	}
	
public List<Employee> findByName(String name){
	return eresp.findByName(name);
}
	
	public List<Employee> findByDepartment(String dept){
		return eresp.findByDepartment(dept);
	}
	
	public List<Employee> findBySalary(double sal){
		return eresp.findBySalary(sal);
	}
	
	public List<Employee> findBySalaryGreaterThan(double sal){
		return eresp.findBySalaryGreaterThan(sal);
	}
	
	public List<Employee> findBySalaryLessThan(double sal){
		return eresp.findBySalaryLessThan(sal);
		
	}
	
	public List<Employee> findByRole(String role){
		return eresp.findByRole(role);
	}
	
	public List<Employee> findByJoiningDate(LocalDate date){
		return eresp.findByJoiningdate(date);
	}
	
	public List<Employee> findByDob(LocalDate dob){
		return eresp.findByDob(dob);
	}
}
