import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useNavigate } from 'react-router-dom';

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [contactno, setContactno] = useState('');
  const [address, setAddress] = useState('');
  const [salary, setSalary] = useState('');
  const [img, setImg] = useState('');
  const [joiningdate, setJoiningdate] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8083/findbyid?eid=${id}`)
      .then((response) => {
        const data = response.data;
        setName(data.name);
        setEmail(data.email);
        setAddress(data.address);
        setContactno(data.contactno);
        setDepartment(data.department);
        setGender(data.gender);
        setImg(data.img);
        setDob(data.dob);
        setJoiningdate(data.joiningdate);
        setRole(data.role);
        setSalary(data.salary);
      })
      .catch((error) => alert(error));
  }, [id]);

  const updateEmployee = (event) => {
    event.preventDefault();
    const update = { name, email, address, contactno, gender, salary, department, dob, joiningdate, img, role };
    axios.put(`http://localhost:8083/updateemp/${id}`, update)
      .then((response) => {
        if (response.data) {
          alert("Employee record updated successfully");
          navigate("/admindashboard");
        }
      })
      .catch((error) => alert(error));
  };

  const handleimg = (event) => {
    const file = event.target.files[0];
    const fullpath = `./img/${file.name}`;
    setImg(fullpath);
    console.log(fullpath);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg rounded-4 p-4">
            <div className="bg-primary text-white text-center py-2 rounded mb-3">
            <h2 className="text-center  mb-4">Update Employee</h2></div>
            <form onSubmit={updateEmployee}>
  

  {/* Row 1: Name & Department */}
  <div className="row mb-3">
    <div className="col-md-6 d-flex">
      <label className="col-4 col-form-label">Name</label>
      <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
    </div>
    <div className="col-md-6 d-flex">
      <label className="col-4 col-form-label">Department</label>
      <input type="text" className="form-control" value={department} onChange={e => setDepartment(e.target.value)} required />
    </div>
  </div>

  {/* Row 2: Role & Email */}
  <div className="row mb-3">
    <div className="col-md-6 d-flex">
      <label className="col-4 col-form-label">Role</label>
      <input type="text" className="form-control" value={role} onChange={e => setRole(e.target.value)} required />
    </div>
    <div className="col-md-6 d-flex">
      <label className="col-4 col-form-label">Email</label>
      <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
    </div>
  </div>

  {/* Row 3: Contact & Address */}
  <div className="row mb-3">
    <div className="col-md-6 d-flex">
      <label className="col-4 col-form-label">Contact</label>
      <input type="number" className="form-control" value={contactno} onChange={e => setContactno(e.target.value)} required />
    </div>
    <div className="col-md-6 d-flex">
      <label className="col-4 col-form-label">Address</label>
      <input type="text" className="form-control" value={address} onChange={e => setAddress(e.target.value)} required />
    </div>
  </div>

  {/* Row 4: Salary & Image */}
  <div className="row mb-3">
    <div className="col-md-6 d-flex">
      <label className="col-4 col-form-label">Salary</label>
      <input type="number" className="form-control" value={salary} onChange={e => setSalary(e.target.value)} required />
    </div>
    <div className="col-md-6 d-flex">
      <label className="col-4 col-form-label">Image</label>
      <input type="file" className="form-control" onChange={handleimg} />
    </div>
  </div>

  {/* Row 5: Joining Date & DOB */}
  <div className="row mb-3">
    <div className="col-md-6 d-flex">
      <label className="col-4 col-form-label">Joining Date</label>
      <input type="text" className="form-control" placeholder="Joining Date"
         onFocus={(e) => (e.target.type = "date")}
  onBlur={(e) => e.target.value === "" && (e.target.type = "text")} value={joiningdate} onChange={e => setJoiningdate(e.target.value)} required />
    </div>
    <div className="col-md-6 d-flex">
      <label className="col-4 col-form-label">DOB</label>
      <input type="text" className="form-control" placeholder="Birth Date"
         onFocus={(e) => (e.target.type = "date")}
  onBlur={(e) => e.target.value === "" && (e.target.type = "text")} value={dob} onChange={e => setDob(e.target.value)} required />
    </div>
  </div>

  {/* Row 6: Gender */}
  <div className="row mb-4">
    <div className="col-md-6 d-flex">
      <label className="col-4 col-form-label">Gender</label>
      <select className="form-select" value={gender} onChange={e => setGender(e.target.value)} required>
        <option value="">-- Select Gender --</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>
  </div>

  {/* Submit Button */}
  <div className="text-center">
    <input type="submit" className="btn btn-success px-5" value="Update Employee" />
  </div>
</form>

          </div>
        </div>
      </div>
    </div>
  );
}
