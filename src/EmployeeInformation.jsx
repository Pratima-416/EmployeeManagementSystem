import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EmployeeDashboard from './EmployeeDashboard';


export default function EmployeeInformation() {
    let[name,setName]=useState('');
    let[department,setDepartment]=useState('');
    let[role,setRole]=useState('');
    let[email,setEmail]=useState('');
    let[contactno,setContactno]=useState('');
    let[address,setAddress]=useState('');
    let[salary,setSalary]=useState('');
    let[img,setImg]=useState('');
    let[joiningdate,setJoiningdate]=useState('');
    let[gender,setGender]=useState('');
    let[dob,setDob]=useState('');

    

let[error,setError]=useState('');
 let navigate=useNavigate();
let validation=()=>{
    if(name.trim()==''|| department.trim()==''|| email.trim()==''|| gender.trim()==''||role.trim()==''||
    salary.trim()==0||contactno.trim()==0 || address.trim()==''|| joiningdate.trim()==''||dob.trim()==''||img.trim()=='' )
    {
        alert("Please fill all the field");
        return false;
    }
    else if(contactno.length<10 || contactno.length>10){
        alert("Please enter contact no with 10 digits");
        return false;
    }
    else if(salary<0){
        alert("Please enter valid salary amount");
        return false;
    }
    else if(!/\S+@\S+\.\S+/.test(email)){
        alert("Please enter valid email address");
        return false;
    }
    else{
        return true;

    }
    

}

    let addemp=(event)=>{
        event.preventDefault();
        if(!validation()){
            return;

        }
        else{
        let empdata={name,department,role,email,contactno,address,salary,img,joiningdate,gender,dob};
        axios.post("http://localhost:8083/saveallemp",empdata)
        
        
        .then((response)=>{
            if(response.data!=null){
                alert("Employee data added sucessfully..");
               console.log(img);
               navigate("/employeedashboard");
            }
        })
        .catch((error)=>{alert(error)})
         

    }
}
   let handleimg=(event)=>{
    let file=event.target.files[0];//upload multiple file as object
    let fullpath=`./img/${file.name}`;
    setImg(fullpath);
    console.log(img);
   } 
  /* let handlsubmit=(event)=>{
    event.preventDefault();
    console.log(img);
   }*/
  return (
    <div className='p-1'>
    <form 
  onSubmit={addemp} 
  className="shadow-lg p-3 bg-light rounded" 
  style={{ width: "600px", margin: "50px auto" }}
>
  <div className="bg-primary text-white text-center py-2 rounded mb-3">
    <h5 className="m-0">Employee Information</h5>
  </div>

  {/* Row 1: Name & Department */}
  <div className="row mb-3">
    <div className="col-md-6">
      <input type="text" className="form-control form-control-sm" placeholder="Enter Employee Name" value={name} onChange={(e) => setName(e.target.value)} required />
    </div>
    <div className="col-md-6">
      <input type="text" className="form-control form-control-sm" placeholder="Enter Department" value={department} onChange={(e) => setDepartment(e.target.value)} required />
    </div>
  </div>

  {/* Row 2: Role & Email */}
  <div className="row mb-3">
    <div className="col-md-6">
      <input type="text" className="form-control form-control-sm" placeholder="Enter Role" value={role} onChange={(e) => setRole(e.target.value)} required />
    </div>
    <div className="col-md-6">
      <input type="email" className="form-control form-control-sm" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    </div>
  </div>

  {/* Row 3: Contact & Address */}
  <div className="row mb-3">
    <div className="col-md-6">
      <input type="text" className="form-control form-control-sm" placeholder="Enter Contact No" value={contactno} onChange={(e) => setContactno(e.target.value)} required />
    </div>
    <div className="col-md-6">
      <input type="text" className="form-control form-control-sm" placeholder="Enter Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
    </div>
  </div>

  {/* Row 4: Salary & Image */}
  <div className="row mb-3">
    <div className="col-md-6">
      <input type="number" className="form-control form-control-sm" placeholder="Enter Salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
    </div>
    <div className="col-md-6">
      <input type="file" className="form-control form-control-sm" accept="image/*" onChange={handleimg} />
    </div>
  </div>

  {/* Row 5: Joining Date & DOB */}
  <div className="row mb-3">
    <div className="col-md-6">
      <input type="text" className="form-control form-control-sm" placeholder="Joining Date"
         onFocus={(e) => (e.target.type = "date")}
  onBlur={(e) => e.target.value === "" && (e.target.type = "text")} value={joiningdate} onChange={(e) => setJoiningdate(e.target.value)} required />
    </div>
    <div className="col-md-6">
      <input type="text" className="form-control form-control-sm" placeholder="Birth Date"
         onFocus={(e) => (e.target.type = "date")}
  onBlur={(e) => e.target.value === "" && (e.target.type = "text")} value={dob} onChange={(e) => setDob(e.target.value)} required />
    </div>
  </div>

  {/* Row 6: Gender */}
  <div className="row mb-4">
    <div className="col-md-6">
      <select className="form-select form-select-sm" value={gender} onChange={(e) => setGender(e.target.value)} required>
        <option value="">-- Select Gender --</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>
  </div>

  {/* Submit Button */}
  <div className="text-center">
    <input type="submit" value="Register" className="btn btn-success btn-sm px-4" />
  </div>
</form>




</div>
  )
}
