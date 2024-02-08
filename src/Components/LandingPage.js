import React from "react";
import "./LandingPage.css";
import DataSection from "./DataSection";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

import Navbar from "./Navbar"; // Import the Navbar component
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="landingpage">
        <Navbar title="Anubhuti" mode="transparent" className="navbar" />{" "}
        {/* Include the Navbar component */}
        <video
          src="/videos/BG"
          autoPlay
          loop
          muted
          className="video-bg"
        ></video>
        <div className="bg-overlay"></div>
        <section id="hero_section" className="top_cont_outer">
          <div className="hero_wrapper">
            <div className="container">
              <div className="hero_section">
                <div className="row">
                  <div className="col-md-12">
                    <div className="top_left_cont zoomIn wow animated">
                      <h2 className="abcd text-center">Anubhuti 2K24</h2>
                      <h3>MMIT Lohegaon</h3>
                      <div className="underline"></div>
                      <Link to="/Events" className="read_more2">
                        Events
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="Cont1">
        <DataSection />

        <Testimonials />

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
