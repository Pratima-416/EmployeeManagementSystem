import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterUser.css'; // Optional: external CSS if needed

export default function RegisterUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactno, setContactno] = useState('');
  const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [conformpassword, setConformpassword] = useState('');
  const [urole, setUrole] = useState('');
  const [isalreadyregistered, setIsAlreadyRegistered] = useState(false);

  const navigate = useNavigate();

  const validation = () => {
    if (contactno.length !== 10) {
      alert("Please enter contact no with 10 digits");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter valid email address");
      return false;
    } else if (password !== conformpassword) {
      alert("Password and confirm password not matching");
      return false;
    } else if (password.length < 8 || password.length > 13) {
      alert("Please enter password with 8 to 13 characters");
      return false;
    }
    return true;
  };

  const register = (event) => {
    event.preventDefault();
    if (!validation()) return;

    const userdata = { name, urole, email, contactno, gender, password, conformpassword, username };
    axios.post("http://localhost:8083/register", userdata)
      .then((response) => {
        if (response.data === "Please enter another username.This is one is already exists") {
          alert("Please enter another username. This one already exists");
        } else {
          alert("Registration successful");
          setName('');
          setEmail('');
          setGender('');
          setPassword('');
          setConformpassword('');
          setUrole('');
          setUsername('');
          setContactno('');
           navigate("/registeruser");
        }
      })
      .catch(() => alert("Registration failed"));
  };

  const login = (event) => {
    event.preventDefault();
    const logindata = { username, password };
    axios.post(`http://localhost:8083/login`, logindata)
      .then((response) => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
          const userdata = JSON.parse(localStorage.getItem("user"));
          if (userdata.urole.trim().toLowerCase() === "admin") {
            navigate("/admindashboard");
          } else {
            navigate("/employeedashboard");
          }
        }
      })
      .catch(() => alert("Login failed"));
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <div className="d-flex ">
        {!isalreadyregistered ? 
          <div className="shadow rounded p-4 bg-secodary" style={{ width: "650px" }}>
            <h4 className="text-center mb-3 d-grid shadow rounded p-4 bg-white">Registration</h4>
            <form onSubmit={register}>
              <input type="text" required className="form-control mb-2" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" required className="form-control mb-2" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" required className="form-control mb-2" placeholder="Contact No" value={contactno} onChange={(e) => setContactno(e.target.value)} />
              <select required className="form-select mb-2" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input type="text" required className="form-control mb-2" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="password" required className="form-control mb-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <input type="password" required className="form-control mb-2" placeholder="Confirm Password" value={conformpassword} onChange={(e) => setConformpassword(e.target.value)} />
              <select required className="form-select mb-3" value={urole} onChange={(e) => setUrole(e.target.value)}>
                <option>Select Role</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
              </select>
              <div className="d-grid mb-2">
                <input type="submit" value="Register" className="btn btn-primary" />
              </div>
              <div className="text-center">
                <small>Already have an account? <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => setIsAlreadyRegistered(true)}>Login here</span></small>
              </div>
            </form>
          </div>
         :
          <div className="shadow rounded p-4 bg-white" style={{ width: "350px" }}>
            <h4 className="text-center mb-3">LOGIN</h4>
            <form onSubmit={login}>
              <input type="text" required className="form-control mb-2" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="password" required className="form-control mb-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              </div>
              <div className="d-grid mb-2">
                <input type="submit" value="LOGIN" className="btn btn-primary" />
              </div>
              <div className="text-center mb-2">
                <small><a href="#" className="text-decoration-none">Forgot Username / Password?</a></small>
              </div>
              <div className="text-center">
                <small>Don't have an account? <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => setIsAlreadyRegistered(false)}>Register here</span></small>
              </div>
            </form>
          </div>
        }
      </div>
    </div>
  );
}
