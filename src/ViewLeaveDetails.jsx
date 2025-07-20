import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


export default function ViewLeaveDetails() {
let[eid,setEid]=useState(0);
let [leavelist,setLeaveList]=useState([]);



const { id } = useParams();
  const navigate = useNavigate();

let feachdata=(event)=>{
  if(event){
    event.preventDefault();
  }
 axios.get(`http://localhost:8083/employeeleave/${eid}`)
 .then((response)=>{
    if(response.data){
        setLeaveList(response.data);
        
    }
 })
 .catch((error)=>{
    alert("Can not found leave deatils")
 })
}


  const cancelLeave = (id) => {
    axios.delete(`http://localhost:8083/cancelleave/${id}`)
      .then((response) => {
        if (response.data != null) {
          alert("Record deleted successfully");
          feachdata();
          navigate("/employeedashboard")
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      

        <form onSubmit={feachdata}>
  

   Enter Employee Id:<input type='text' value={eid} onChange={(event)=>{setEid(event.target.value)}}></input>
 <input type='Submit' value="Search" className="btn btn-success btn-sm"></input>
  
        </form>
        {
            eid &&
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
                        <th colSpan="2">Action</th>
                    </tr>
                   </thead>
                   <tbody>
                    {
                        leavelist.map((leave)=>

                            <tr>
                                <td>{leave.id}</td>
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
                        )
                    }
                   </tbody>

            </table>

        }
    </div>
  )
}
