import React, { useState } from 'react';

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    appointmentDate: '',
    appointmentTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with formData
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-12 d-flex flex-column justify-content-center">
            <h1>Quick <span className='text-danger'> Support</span> !</h1>
          <form className='bg-dark d-flex flex-column gap-3 p-5 rounded-4 main-contact-form' onSubmit={handleSubmit}>
            <div className="mb-3">
               
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                id="number"
                placeholder="Enter your number"
                name="number"
                value={formData.number}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 d-flex gap-5">
              <input
                type="date"
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
        
              <input
                type="time"
                className="form-control"
                id="appointmentTime"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                min={new Date().toLocaleTimeString('en-US', { hour12: false })}
                max="23:59"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-6 col-12">
          <iframe
            title="Google Map"
            className="w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.1608751516083!2d79.11195157616685!3d21.10615148056261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b98c5a79f4ad%3A0x9461e1dbd62a9ab!2sTSS%20Computer%20Repairing!5e0!3m2!1sen!2sin!4v1701693947384!5m2!1sen!2sin"
            height="500"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
