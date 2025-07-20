import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateLeave() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employeename, setEmployeename] = useState('');
  const [reason, setReason] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const[eid,setEid]=useState('');

  useEffect(() => {
    axios.get(`http://localhost:8083/findleavebyid/${id}`)
      .then((response) => {
        const data = response.data;
        setEmployeename(data.employeename);
        setReason(data.reason);
        setFromDate(data.fromDate);
        setToDate(data.toDate);
      })
      .catch((error) => alert("Error fetching leave: " + error.message));
  }, [id]);

  const updateLeaves = (event) => {
    event.preventDefault();
    const updateleave = { employeename, reason, fromDate, toDate };

    axios.put(`http://localhost:8083/updateleave/${id}`, updateleave)
      .then((response) => {
        if (response.data) {
          alert("Leave updated successfully");
          navigate("/employeedashboard"); // ← Better redirect
        }
      })
      .catch((error) => alert("Update failed: " + error.message));
  };

  return (
    <form 
  onSubmit={updateLeaves} 
  className="shadow-lg p-4 bg-light rounded" 
  style={{ width: "500px", margin: "50px auto" }}
>
  <div className="bg-primary text-white text-center py-2 rounded mb-3">
    <h5 className="m-0">Update Leave</h5>
  </div>

  <div className="mb-3">
 
    <input
      type="number"
      className="form-control form-control-sm"
      placeholder="Enter Employee ID"
      value={eid}
      onChange={(e) => setEid(e.target.value)}
      required
    />
  </div>

  <div className="mb-3">
   
    <input
      type="text"
      className="form-control form-control-sm"
      placeholder="Enter Employee Name"
      value={employeename}
      onChange={(e) => setEmployeename(e.target.value)}
      required
    />
  </div>

  <div className="mb-3">
    
    <textarea
      className="form-control form-control-sm"
      rows="3"
      placeholder="Enter Leave Reason"
      value={reason}
      onChange={(e) => setReason(e.target.value)}
      required
    />
  </div>

  <div className="mb-3">
    
    <input
      type="text"
      className="form-control form-control-sm"
        placeholder="Form Date"
         onFocus={(e) => (e.target.type = "date")}
  onBlur={(e) => e.target.value === "" && (e.target.type = "text")}
      value={fromDate}
      onChange={(e) => setFromDate(e.target.value)}
      required
    />
  </div>

   <div className="mb-4">
    
      <input 
        type="text" 
        className="form-control form-control-sm" 
         placeholder="To Date"
         onFocus={(e) => (e.target.type = "date")}
  onBlur={(e) => e.target.value === "" && (e.target.type = "text")}
        value={toDate} 
        onChange={(e) => setToDate(e.target.value)} 
        required 
      />
    </div>

  <div className="text-center">
    <button type="submit" className="btn btn-primary btn-sm">Update Leave</button>
  </div>
</form>

  );
}
