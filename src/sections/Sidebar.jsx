import React, { useState } from 'react';
// import './Sidebar.css';

function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive); 
  };

  return (
    <div className={`sidebar-contact ${isActive ? 'active' : ''}`}>
      <div className="toggle" onClick={toggleSidebar}>
        Quick Enquiry
        <div className={`icon ${isActive ? 'active' : ''}`}></div>
      </div>
      <h2>Contact Us</h2>
      <div className="scroll">
        <form>
          <input type="text" name="" placeholder="Name" />
          <input type="email" name="" placeholder="Email" />
          <input type="tel" name="" placeholder="Phone Number" />
          <textarea placeholder="Message here.."></textarea>
          <input type="submit" name="" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Sidebar;