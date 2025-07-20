package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.entity.LeaveApllication;

@Repository
public interface LeaveRepository extends JpaRepository<LeaveApllication,Integer> {

	public List<LeaveApllication> findByEid(int eid);
}
