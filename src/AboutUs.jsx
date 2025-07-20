import React from 'react'

export default function AboutUs() {
return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center text-primary fw-bold mb-4">About HefShine Private Limited</h2>
        
        <p className="text-center">
          HefShine Private Limited is a leading software training and development company focused on
          empowering fresh graduates and IT enthusiasts with real-world skills.
        </p>
        
        <p className="text-center">
          We believe in combining <strong>practical training</strong> with <strong>real project work</strong>. Our Employee Management System is an in-house
          project built by trainees to simulate real industry development.
        </p>

        <p className="text-center">
          Our team consists of talented students and mentors who collaborate to build enterprise-ready applications using
          modern technologies such as:
        </p>

        <div className="text-center mb-3">
          <p><span role="img" aria-label="check">✅</span> Spring Boot (Java Backend)</p>
          <p><span role="img" aria-label="check">✅</span> ReactJS Frontend</p>
          <p><span role="img" aria-label="check">✅</span> MySQL Database</p>
          <p><span role="img" aria-label="check">✅</span> REST APIs</p>
        </div>

        <p className="text-center">
          We are committed to creating <strong>learning opportunities</strong> through hands-on experience, mentoring, and job-oriented
          training programs.
        </p>
      </div>
    </div>
  );
}
