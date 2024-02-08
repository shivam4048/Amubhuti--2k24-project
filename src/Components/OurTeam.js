import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./OurTeam.css";
import "./OurTeam.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Navbar title="Anubhuti" mode="dark" />
      {/* Contact us */}

      <div data-aos="zoom-in-up" className="aboutcollege">
        <section className="hero">
          <div className="heading1">
            <h1 className="main-head">Our Team</h1>
          </div>
          <div className="container2">
            <div className="hero-content">
              <h2>Prof. Aishwarya Pawar</h2>
              <h4>
                Director of Physical Education and sports (Project Manager)
              </h4>
              <p>
                Played & did Captaincy for 4 School Nationals for Maharashtra
                State. <br />
                Played 2 All-India Inter-University Savitribai Phule Pune
                University. <br />5 West zones Inter University matches for
                Savitribai Phule Pune University.
              </p>
              <a
                href="https://www.instagram.com/ayesha_107?igsh=OGQ5ZDc2ODk2ZA=="
                className="icon-link4"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/aishwarya-pawar-064807246/?originalSubdomain=in"
                className="icon-link4"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              {/* <button className=" button cta-button">Learn More</button> */}
            </div>
            <div className="mam-image-box">
              <div className="img-avatar">
                <img className="img1" src="/Images/aishwarya.jpeg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Main lead cards */}
      <div className="team-section">
        <div className="container3">
          <div className="heading1">
            <h1 className="main-head mt-5">Our Development Team</h1>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque modi tenetur eum tempora aperiam saepe excepturi exercitationem voluptatem molestias incidunt?</p> */}
          </div>
          <div className="team-section">
            <div className="container3">
              <div className="team-card">
                <div className="col-md-4">
                  <div className="box">
                    <div className="content">
                      <div className="avatar">
                        <img src="/Images/shivam.jpg" alt="" />
                      </div>
                      <h3>Shivam Devkar</h3>
                      <h5>Project Architect</h5>
                      <p>
                        As a Project Architect, I design and plan project to create aesthetically pleasing spaces.
                      </p>
                      <a
                        href="https://www.instagram.com/shivamdevkar_14?igsh=OGQ5ZDc2ODk2ZA=="
                        className="social-icon"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/shivam-devkar-910240249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="social-icon"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="mid-box">
                    <div className="content">
                      <div className="avatar">
                        <img src="/Images/Abhijeet.jpg" alt="" />
                      </div>
                      <h3>Abhijeet Todkar</h3>
                      <h5>Designer</h5>
                      <p>
                        I create stylish and functional designs, bringing ideas to life with attention to detail.
                      </p>
                      <a
                        href="https://www.instagram.com/_abhijeet_todkar?igsh=OGQ5ZDc2ODk2ZA=="
                        className="social-icon"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/abhijeet-todkar-05811420a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="social-icon"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="box">
                    <div className="content">
                      <div className="avatar">
                        <img src="/Images/shubham.jpg" alt="" />
                      </div>
                      <h3>Shubham Argade</h3>
                      <h5>Backend Developer</h5>
                      <p>
                        I build and maintain the server-side of websites for smooth and efficient functionality.
                      </p>
                      <a
                        href="https://www.instagram.com/shubham_argade0009?igsh=OGQ5ZDc2ODk2ZA=="
                        className="social-icon"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/shubham-argade-8a3a5a211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        className="social-icon"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="heading1">
            <h1 className="main-head mt-5">Our Support Team</h1>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque modi tenetur eum tempora aperiam saepe excepturi exercitationem voluptatem molestias incidunt?</p> */}
          </div>
          <div className="team-section">
            <div className="container3">
              <div className="team-card">
                <div className="col-md-4">
                  <div className="box">
                    <div className="content">
                      <div className="avatar">
                        <img src="/Images/akki.png" alt="" />
                      </div>
                      <h3>Akash Padir</h3>
                      <h5>Technical Support and Maintenance</h5>
                      <p>
                        I maintain website for a smooth user experience.
                      </p>
                      <a
                        href="https://www.instagram.com/cric.akash77?igsh=MXJ3d3E3M3pyZGFtOQ=="
                        className="social-icon"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/akash-padir-65868a218/"
                        className="social-icon"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="mid-box">
                    <div className="content">
                      <div className="avatar">
                        <img src="/Images/imran2.jpg" alt="" />
                      </div>
                      <h3>Imran Shaikh</h3>
                      <h5>Technical Support</h5>
                      <p>
                        I assist with any website issues you face, making your experience smooth.
                      </p>
                      <a
                        href="https://www.instagram.com/official_imran_91?igsh=MTR2N2RkdWQ2a2hteA=="
                        className="social-icon"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/imran-shaikh-a84081266/"
                        className="social-icon"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="box">
                    <div className="content">
                      <div className="avatar">
                        <img src="/Images/anshull.png" alt="" />
                      </div>
                      <h3>Anshul Patil</h3>
                      <h5>Technical Support</h5>
                      <p>
                        I'm here to make sure your website experience is trouble-free.
                      </p>
                      <a
                        href="https://www.instagram.com/anshul_patil_31?igsh=ejV2YTFzY28zbGFp"
                        className="social-icon"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/anshul-patil-326197219/"
                        className="social-icon"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
