import React, { useState } from 'react';
import axios from 'axios';
//import GetLeave from './GetLeave';
import { useNavigate } from 'react-router-dom';

export default function LeaveApplication() {
  const [employeename, setEmployeename] = useState('');
  const [reason, setReason] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const[eid,setEid]=useState(0);
  //const[status,setStatus]=useState('');
let navigate=useNavigate();
  const applyforleave = (event) => {
    event.preventDefault();

    const leavedata = { employeename, reason, fromDate, toDate,eid };
    axios
      .post('http://localhost:8083/saveleave', leavedata)
      .then((response) => {
        if (response.data != null) {
          alert('Leave application added successfully.');
          navigate("/employeedashboard")
        }
      })
      .catch((error) => alert("Failed to apply leave"));
  };

  return (
    <div className="container mt-5">
  <form 
    onSubmit={applyforleave} 
    className="shadow-lg p-4 bg-light rounded" 
    style={{ width: "500px", margin: "0 auto" }}>
    <div className="bg-primary text-white text-center py-2 rounded mb-3">
      <h5 className="m-0">Leave Application</h5>
    </div>

    <div className="mb-3">
      
      <input 
        type="number" 
        className="form-control form-control-sm" 
        placeholder="Enter Employee Id" 
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
        placeholder="Enter Leave Reason" 
        value={reason} 
        onChange={(e) => setReason(e.target.value)} 
        required 
      />
    </div>

    <div className="mb-3">
          <input 
        type="text" 
        className="form-control form-control-sm"      placeholder="Form date"
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
      <button type="submit" className="btn btn-primary btn-sm">Apply</button>
    </div>
  </form>



      {/*<GetLeave />*/}
    </div>
  );
}
