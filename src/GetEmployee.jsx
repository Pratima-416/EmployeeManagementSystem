import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Update from './Update';
import { useNavigate } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';

export default function GetEmployee() {

  let [searchname,setSearchName]=useState('');
  let [searchrole,setSearchRole]=useState('');
  let[searchdepartment,setSearchDepartment]=useState('');
  let[searchresult,setSearchResult]=useState([]);
let searchbyname=()=>{
  axios.get(`http://localhost:8083/findbyname?name=${searchname}`)
      .then((response) => {
        if(response.data){
 setSearchResult(response.data);
 setSearchName('');
        }})
      .catch((error) => alert(error));

}

let searchbyrole=()=>{
  axios.get(`http://localhost:8083/findbyrole?role=${searchrole}`)
   .then((response) => {
        if(response.data){
 setSearchResult(response.data);
 setSearchRole('');
        }})
      .catch((error) => alert(error));
}

let searchbydepartment=()=>{
  axios.get(`http://localhost:8083/findbydepart?dept=${searchdepartment}`)
      .then((response) => {
        if(response.data){
 setSearchResult(response.data);
 setSearchDepartment('');
        }})
      .catch((error) => alert(error));
}
 
  let [name, setName] = useState('');
  let [department, setDepartment] = useState('');
  let [role, setRole] = useState('');
  let [email, setEmail] = useState('');
  let [contactno, setContactno] = useState('');
  let [address, setAddress] = useState('');
  let [salary, setSalary] = useState('');
  let [img, setImg] = useState('');
  let [joiningdate, setJoiningdate] = useState('');
  let [gender, setGender] = useState('');
  let [dob, setDob] = useState('');
  let [employee, setEmployee] = useState([]);
   //let [isupdate, setIsupdate] = useState(false);

    
    
  let navigate=useNavigate();
  
    
  
  let handleimg=(event)=>{
    let file=event.target.files[0];//upload multiple file as object
    let fullpath=`./img/${file.name}`;
    setImg(fullpath);
    console.log(img);
   } 
 

  useEffect(() => {
    fetchEmployee();
  }, []);

  let fetchEmployee = () => {
    axios.get("http://localhost:8083/findallid")
      .then((response) => setEmployee(response.data))
      .catch((error) => alert(error));
  };

 
  let deleteEmp = (eid) => {
    axios.delete(`http://localhost:8083/deleteemp/${eid}`)
      .then((response) => {
        if (response.data != null) {
          alert("Record deleted successfully");
          fetchEmployee();
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="container">
  {/* Spacing below navbar */}
  <div className="mb-4">
    <AdminNavBar />
  </div>

  {/* Search Fields */}
  <div className="row g-3 mb-4">
    <div className="col-md-4 d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Enter name to search"
        value={searchname}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <button className="btn btn-secondary" onClick={searchbyname}>Search</button>
    </div>
    <div className="col-md-4 d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Enter role to search"
        value={searchrole}
        onChange={(e) => setSearchRole(e.target.value)}
      />
      <button className="btn btn-secondary" onClick={searchbyrole}>Search</button>
    </div>
    <div className="col-md-4 d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Enter department to search"
        value={searchdepartment}
        onChange={(e) => setSearchDepartment(e.target.value)}
      />
      <button className="btn btn-secondary" onClick={searchbydepartment}>Search</button>
    </div>
  </div>

  {/* Employee Cards */}
  <div className="row">
    {(searchresult.length > 0 ? searchresult : employee).map((emp) => (
      <div className="col-md-4 mb-4" key={emp.eid}>
        <div className="card h-100 shadow-sm">
          <img
            src={emp.img}
            className="card-img-top"
            alt="Employee"
            height="200"
            style={{ objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{emp.name}</h5>
            <p className="card-text">
              <strong>Department: </strong>{emp.department}<br />
              <strong>Email: </strong>{emp.email}<br />
              <strong>DOB: </strong>{emp.dob}<br />
              <strong>Joining Date: </strong>{emp.joiningdate}<br />
              <strong>Contact No: </strong>{emp.contactno}
            </p>
            <div className='d-flex justify-content-center gap-4'>
              <button
                className="btn btn-warning btn-sm"
                onClick={() => navigate(`/update/${emp.eid}`)}
              >
                Update
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteEmp(emp.eid)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
