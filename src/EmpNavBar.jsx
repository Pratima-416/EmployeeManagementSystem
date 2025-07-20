import React from 'react'
import { Link } from 'react-router-dom'


export default function EmpNavBar() {
   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-2 px-4 rounded-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white" to="/">Employee Dashboard</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#empNavbar"
          aria-controls="empNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="empNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white px-3">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/LeaveApplication" className="nav-link px-3 text-white">Apply for Leave</Link>
            </li>
            <li className="nav-item">
              <Link to="/viewleavedeatils" className="nav-link px-3 text-white">View Leave Details</Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link px-3 text-white">About Company</Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link px-3 text-white">Our Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/contactus" className="nav-link px-3 text-white">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}