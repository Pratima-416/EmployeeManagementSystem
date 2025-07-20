import React from 'react'
import  { useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

export default function LeaveIssue() {
    const [leaves, setLeaves] = useState([]);
let navigate=useNavigate();

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = () => {
    axios.get("http://localhost:8083/findallleave")
      .then(response => setLeaves(response.data))
      .catch(error => alert("Error fetching data: " + error));
  };

  let updatestatus=(id,action)=>{
    axios.put(`http://localhost:8083/${action}/${id}`)
    .then((response)=>
    {
        if(response.leave){
            alert("Leave status updated sucessfully");
            fetchLeaves();
            navigate("/admindashboard")
            
        }
    })
    .catch((error)=>{
        alert("Error in updating leave status");
    })

  }
  return (
     <div className="container mt-5">
      <h2 className="mb-4">Leave Dashboard</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
             <th>Leave Id</th>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Reason</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Status</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {leaves.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">No leave records found.</td>
            </tr>
          ) : (
            leaves.map(leave => (
                <tr>
              <td>{leave.id}</td>
                <td>{leave.eid}</td>
                <td>{leave.employeename}</td>
                <td>{leave.reason}</td>
                <td>{leave.fromDate}</td>
                <td>{leave.toDate}</td>
                
                <td>{leave.status}</td>
               
                <td>
                  <button className="btn btn-primary btn-sm" onClick={()=>updatestatus(leave.id,"approve")}>Approve</button>
                </td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={()=>updatestatus(leave.id,"reject")}>Reject</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <button onClick={()=>{navigate("/admindashboard")}}>Go to home Page</button>
    </div>
 
  )
}
