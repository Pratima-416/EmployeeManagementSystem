import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function GetLeave() {
  const [leaves, setLeaves] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = () => {
    axios.get("http://localhost:8083/findallleave")
      .then(response => setLeaves(response.data))
      .catch(error => alert("Error fetching data: " + error));
  };

  const cancelLeave = (id) => {
    axios.delete(`http://localhost:8083/cancelleave/${id}`)
      .then((response) => {
        if (response.data != null) {
          alert("Record deleted successfully");
          fetchLeaves();
          navigate("/employeedashboard")
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Leave Dashboard</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Reason</th>
            <th>From Date</th>
            <th>To Date</th>
           
           <th>Status</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {leaves.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">No leave records found.</td>
            </tr>
          ) : (
            leaves.map(leave => (
              <tr key={leave.id}>
                <td>{leave.eid}</td>
                <td>{leave.employeename}</td>
                <td>{leave.reason}</td>
                <td>{leave.fromDate}</td>
                <td>{leave.toDate}</td>
                
                <td>{leave.status}</td>
               
                <td>
                  <button className="btn btn-primary btn-sm" onClick={() => navigate(`/updateleave/${leave.id}`)}>Update</button>
                </td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => cancelLeave(leave.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
