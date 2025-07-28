import React from "react";
import "../Header/Home.css"
import headerlogo from "../../assets/header-logo.jpg"

const Homepage = () => {
  return (
    <div className="header-main-section">
      <div className="header-logo-section">
        <img src={headerlogo} alt="" />
      </div>
      <div className="menu-list">
        <ul className="unorderlist-items">
          <li className="list-items">
            support@automed.com
            <a href="mailto:support@automed.com">write to us</a>
          </li>
          <li className="list-items">
            +91 123456789
            <a href="tel:+91 123456789">call us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
