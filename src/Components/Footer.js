import React from "react";
import "./Footer.css"; // Make sure to import your custom CSS file

const Footer = () => {
  return (
    <div className="body-footer">
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="https://www.facebook.com/MMITLOHGOAN/" className="icon-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/mmitlohgaonpune/" className="icon-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/school/marathwada-mitra-mandal's-institute-of-technology-lohgaon-tal-haveli-pune-32/?originalSubdomain=in" className="icon-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://mmit.edu.in/" className="icon-link">
            <i className="fab fa-google"></i>
          </a>
        </div>
        <div className="footerNav">
          <ul>
            <li>
              <a href="/" className="nav-link">Home</a>
            </li>
            <li>
              <a href="/events" className="nav-link">Events</a>
            </li>
            <li>
              <a href="/about" className="nav-link">About us</a>
            </li>
            <li>
              <a href="/gallery" className="nav-link">Gallery</a>
            </li>
            <li>
              <a href="/OurTeam" className="nav-link">Our team</a>
            </li>
          </ul>
        </div>
        <div className="footerBottom">
          <p className="copyright">Copyright &copy; 2022; designed by MMIT</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
