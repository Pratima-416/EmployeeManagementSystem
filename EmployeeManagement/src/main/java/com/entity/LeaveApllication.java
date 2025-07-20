package com.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class LeaveApllication {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;
private	 String employeename;
private	 String reason;
private	 LocalDate fromDate;
private	 LocalDate toDate;
private	 String status="Pending";
	 private int eid;
	public LeaveApllication() {
		super();
	}
	public LeaveApllication(int id, String employeename, String reason, LocalDate fromDate, LocalDate toDate,
			String status, int eid) {
		super();
		this.id = id;
		this.employeename = employeename;
		this.reason = reason;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.status = status;
		this.eid = eid;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmployeename() {
		return employeename;
	}
	public void setEmployeename(String employeename) {
		this.employeename = employeename;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public LocalDate getFromDate() {
		return fromDate;
	}
	public void setFromDate(LocalDate fromDate) {
		this.fromDate = fromDate;
	}
	public LocalDate getToDate() {
		return toDate;
	}
	public void setToDate(LocalDate toDate) {
		this.toDate = toDate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	
	 
}
