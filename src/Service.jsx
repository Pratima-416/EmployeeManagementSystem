import React from 'react'

export default function Service() {
return (
    <div className="container mt-5">
      <h2 className="text-center text-primary fw-bold">Our Services</h2>
      <p className="text-center mb-4">
        At HefShine Private Limited, we offer comprehensive, hands-on training programs tailored to help you become industry-ready.
      </p>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm h-100">
            <h5 className="text-success fw-bold">Full Stack Development Training</h5>
            <p>Master technologies like Java, Spring Boot, React, and MySQL with real-world project exposure.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm h-100">
            <h5 className="text-success fw-bold">Live Project Experience</h5>
            <p>Gain confidence by working on actual software projects guided by experienced mentors.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm h-100">
            <h5 className="text-success fw-bold">Campus Training</h5>
            <p>Custom training programs for colleges to improve student placement rates and industry readiness.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm h-100">
            <h5 className="text-success fw-bold">Job Placement Support</h5>
            <p>Resume building, mock interviews, and job referrals to help trainees land their first job.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm h-100">
            <h5 className="text-success fw-bold">Corporate Training</h5>
            <p>Upskill your employees with custom, technology-focused training from our expert team.</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="border rounded p-3 shadow-sm h-100">
            <h5 className="text-success fw-bold">Internship Opportunities</h5>
            <p>Get hands-on experience through internships designed to simulate actual software development environments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
