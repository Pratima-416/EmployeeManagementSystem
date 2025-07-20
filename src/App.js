import logo from './logo.svg';
import './App.css';
import EmployeeInformation from './EmployeeInformation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Update from './Update';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import GetEmployee from './GetEmployee';
import EmployeeDashboard from './EmployeeDashboard';
import LeaveApplication from './LeaveApplication';

import UpdateLeave from './UpdateLeave';
import ViewLeaveDetails from './ViewLeaveDetails';
import LeaveIssue from './LeaveIssue';
import RegisterUser from './RegisterUser';

import ContactUs from './ContactUs';
import Service from './Service';
import AboutUs from './AboutUs';
import Home from './Home';

function App() {
 return (
  <div className="App">
    <div style={{ height: "150px" }}>
      <div className="d-flex justify-content-between align-items-center bg-info p-3 rounded shadow">
        
        {/* Left Side - Logo and Text */}
        <div className="d-flex align-items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_a7Z66PXXF1iFPI7b5yCdOZfq8Gy4_YgKdA&s"
            alt="Logo"
            style={{ width: "80px", height: "80px", borderRadius: "10px", marginRight: "20px" }}
          />
          <div>
            <h1 className="text-dark mb-2 justify-content-center align-items-center" style={{ fontSize: "32px" }}>
              Hefshine Employee Management System
            </h1>
            <marquee className="text-dark fw-bold" scrollamount="10">
  We are bound to your place...
</marquee>
          </div>
        </div>

        {/* Right Side - Registration Button */}
        <button
          className="btn btn-outline-danger btn-sm"
          style={{ height: "40px" }}
          onClick={() => window.location.href = "/registeruser"} // or use navigate('/register')
        >
          Registration
        </button>

      </div>
    </div>
  



      <BrowserRouter>
      <Routes>
        
        
      
        <Route path='/EmplpoyeeInformation' element={<EmployeeInformation></EmployeeInformation>}></Route>
       
        <Route path="/update/:id" element={<Update/>}></Route>


        <Route path="/LeaveApplication" element={<LeaveApplication />} />
          <Route path="/updateleave/:id" element={<UpdateLeave />} />
          <Route path="/viewleavedeatils" element={<ViewLeaveDetails></ViewLeaveDetails>}/>
 <Route path="/updateleavestatus" element={ <LeaveIssue></LeaveIssue>}></Route>
   <Route path="/admindashboard" element={<GetEmployee></GetEmployee>}> </Route>
 <Route path='/employeedashboard' element={<EmployeeDashboard></EmployeeDashboard>}></Route>
 <Route path='/registeruser' element={<RegisterUser></RegisterUser>}></Route>
 <Route path="/" element={<Home />} />
       <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/service" element={<Service />} />
       
      </Routes>
   
      </BrowserRouter>
    
     
    </div>
  );
}

export default App;
