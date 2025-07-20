import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavBar.css'; // Optional: if you want custom CSS

export default function AdminNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-2 px-4 rounded-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4 text-white" to="/">
          Admin Dashboard
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
          aria-controls="adminNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white px-3">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/EmplpoyeeInformation" className="nav-link text-white px-3">
                Add Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/updateleavestatus" className="nav-link text-white px-3">
                Leave Data
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link text-white px-3">
                About Company
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link text-white px-3">
                Our Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contactus" className="nav-link text-white px-3">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
