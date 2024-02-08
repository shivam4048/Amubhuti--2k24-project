import React, { useEffect } from "react";
import "./Testimonials.css"; // Import your custom CSS file for styling
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="team-section">
      <div className="container3">
        <div className="heading1 text-center">
          <h1 className="main-head mt-5">Testimonials</h1>
        </div>
        <div className="team-card">
          <div data-aos="flip-left" className="testimonial-box text-center">
            <div className="content">
              <div className="avatar">
                <img
                  src="/Images/testimonial1.jpeg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>Omkar Deokar</h3>
              <h5>GS-2022</h5>
              <p className="test-text">
                "Participating in the Anubhuti event was an incredible
                experience! The variety of sports events and the fun activities
                like traditional day made it a memorable occasion. Anubhuti
                brings out the hidden talents of students, and I felt inspired
                to participate in it."
              </p>
            </div>
          </div>

          <div data-aos="flip-left" className="mid-testimonial-box text-center">
            <div className="content">
              <div className="avatar">
                <img
                  src="/Images/testimonial2.jpeg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>Aniket Thosar</h3>
              <h5>SS-2022</h5>
              <p className="test-text">
                "Aubhuti exceeded all expectations! The diverse range of sports,
                the competitive spirit, and the incredible team behind it made
                for an unforgettable event. It's not just a sports day; it's a
                celebration of unity and college pride."
              </p>
            </div>
          </div>

          <div data-aos="flip-left" className="testimonial-box text-center">
            <div className="content">
              <div className="avatar">
                <img
                  src="/Images/testimonial3.jpeg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <h3>Manthan Shinde</h3>
              <h5>SS-2023</h5>
              <p className="test-text">
                "Aubhuti was a fantastic blend of athleticism and college
                spirit. The organizers nailed it with engaging activities,
                vibrant decorations, and a seamless schedule. As a participant,
                I felt a sense of belonging and accomplishment."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
