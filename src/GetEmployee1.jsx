// EmployeeDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    axios.get("http://localhost:8083/findallid")
      .then(response => setEmployees(response.data))
      .catch(error => alert("Error fetching data: " + error));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Employee Dashboard</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.eid}>
              <td>{emp.eid}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
