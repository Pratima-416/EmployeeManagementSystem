package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.entity.LeaveApllication;
import com.repository.LeaveRepository;

@Service
public class LeaveService {

	@Autowired
	LeaveRepository lresp;
	
	
	public String saveLeave(LeaveApllication leave) {
		leave.setStatus("Pending");
	 lresp.save(leave);
	 return"Data aaded";
}

	public LeaveApllication findbyid(int id) {
		return lresp.findById(id).orElse(null);
	}
public List<LeaveApllication> findallleave(){
	return lresp.findAll();
}
public List<LeaveApllication> findByEid(int eid){
	return lresp.findByEid(eid);
}

public LeaveApllication approveLeave(int id) {
	LeaveApllication leave=lresp.findById(id).orElse(null);
	leave.setStatus("Approved");
	return lresp.save(leave);
}

public LeaveApllication rejectLeave(int id) {
	LeaveApllication leave = lresp.findById(id).orElse(null);
	leave.setStatus("Rejected");
	return lresp.save(leave);
}

public String updateleave(int id,LeaveApllication leaveupdate) {
	LeaveApllication existingleave=lresp.findById(id).orElse(null);
	
	if(existingleave==null){
		return "No leave data found";

	}
	if(leaveupdate.getEmployeename()==null && leaveupdate.getReason()==null && leaveupdate.getFromDate()==null &&
			leaveupdate.getToDate()==null ) {
		return "No data provide for updation";
	} 
	
	if(leaveupdate.getEmployeename()!=null) {
		existingleave.setEmployeename(leaveupdate.getEmployeename());
	}
	
	if(leaveupdate.getReason()!=null) {
		existingleave.setReason(leaveupdate.getReason());
		
	}
	
	if(leaveupdate.getFromDate()!=null) {
		existingleave.setFromDate(leaveupdate.getFromDate());
	}
	
	if(leaveupdate.getToDate()!=null) {
		existingleave.setToDate(leaveupdate.getToDate());
	}
lresp.save(existingleave);
return"Leave details updated sucessfuly";
}

public String deletebyid(int id) {
	LeaveApllication existingleave=lresp.findById(id).orElse(null);
	if(existingleave!=null) {
		lresp.deleteById(id);
		return"Leave record deleted sucessfully..";
	}
	else {
		return "No record found for given id";
	}
}
}
