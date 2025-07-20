import React from 'react'

export default function ContactUs() {
 return (
    <div className="container mt-5">
      <h2 className="text-center text-primary fw-bold mb-2">Contact Us</h2>
      <p className="text-center mb-4">
        If you have any queries, suggestions, or partnership interests, feel free to contact us.
      </p>

      <div className="row">
        {/* Our Office Section */}
        <div className="col-md-6 mb-4">
          <div className="border rounded p-4 h-100">
            <h5 className="text-success text-center fw-bold">Our Office</h5>
            <p><strong>Address:</strong> HefShine Private Limited, Pune, Maharashtra, India</p>
            <p><strong>Email:</strong> support@hefshine.com</p>
            <p><strong>Phone:</strong> +91-9876543210</p>
          </div>
        </div>

        {/* Send Us a Message Form */}
        <div className="col-md-6 mb-4">
          <div className="border rounded p-4 h-100">
            <h5 className="text-success text-center fw-bold">Send Us a Message</h5>
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Write your message here"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
