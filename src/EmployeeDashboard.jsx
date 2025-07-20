import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmpNavBar from './EmpNavBar';

export default function EmployeeDashboard() {
  const [searchname, setSearchName] = useState('');
  const [searchrole, setSearchRole] = useState('');
  const [searchdepartment, setSearchDepartment] = useState('');
  const [searchresult, setSearchResult] = useState([]);
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = () => {
    axios.get("http://localhost:8083/findallid")
      .then(response => setEmployee(response.data))
      .catch(error => alert(error));
  };

  const searchbyname = () => {
    axios.get(`http://localhost:8083/findbyname?name=${searchname}`)
      .then(response => {
        if (response.data) {
          setSearchResult(response.data);
          setSearchName('');
        }
      })
      .catch(error => alert(error));
  };

  const searchbyrole = () => {
    axios.get(`http://localhost:8083/findbyrole?role=${searchrole}`)
      .then(response => {
        if (response.data) {
          setSearchResult(response.data);
          setSearchRole('');
        }
      })
      .catch(error => alert(error));
  };

  const searchbydepartment = () => {
    axios.get(`http://localhost:8083/findbydepart?dept=${searchdepartment}`)
      .then(response => {
        if (response.data) {
          setSearchResult(response.data);
          setSearchDepartment('');
        }
      })
      .catch(error => alert(error));
  };

  return (
    <div className="container">
      {/* NavBar with margin below */}
      <div className="mb-4">
        <EmpNavBar />
      </div>

      {/* Search Inputs Row */}
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
            <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
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
                  <strong>Department:</strong> {emp.department}<br />
                  <strong>Email:</strong> {emp.email}<br />
                  <strong>DOB:</strong> {emp.dob}<br />
                  <strong>Joining Date:</strong> {emp.joiningdate}<br />
                  <strong>Contact No:</strong> {emp.contactno}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
