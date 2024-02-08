import React, { useEffect } from "react";
import Gallery from "react-image-gallery";
import "./OurTeam.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "./DataSection.css"; // Import your custom CSS file for DataSection'
// import Testimonials from './Testimonials';

const images = [
  {
    original: "/Images/Gallery/2.jpg",
    thumbnail: "/Images/Gallery/2.jpg",
    // description: 'Kabaddi is basically a combative sports court and touching as many defense players as possible without getting caught on a single breath.',
  },
  {
    original: "/Images/Gallery/3.jpg",
    thumbnail: "/Images/Gallery/3.jpg",
    // description: 'Description for image 2 Kabaddi is basically a combative sports court and touching as many defense players as possible without getting caught on a single breath.',
  },
  {
    original: "/Images/Gallery/4.jpg",
    thumbnail: "/Images/Gallery/4.jpg",
    // description: 'Description for image 2Kabaddi is basically a combative sports court and touching as many defense players as possible without getting caught on a single breath.',
  },
  {
    original: "/Images/Gallery/5.jpg",
    thumbnail: "/Images/Gallery/5.jpg",
    // description: 'Description for image 2 Kabaddi is basically a combative sports court and touching as many defense players as possible without getting caught on a single breath.',
  },
  {
    original: "/Images/Gallery/6.jpg",
    thumbnail: "/Images/Gallery/6.jpg",
    // description: 'Description for image 2 Kabaddi is basically a combative sports court and touching as many defense players as possible without getting caught on a single breath.',
  },
  // Add more images with original, thumbnail, and description properties
  {
    original: "/Images/Gallery/7.jpg",
    thumbnail: "/Images/Gallery/7.jpg",
    // description: 'Description for image 2 Kabaddi is basically a combative sports court and touching as many defense players as possible without getting caught on a single breath.',
  },
];

const DataSection = () => {
  const redirectToMMIT = () => {
    window.location.href = "https://mmit.edu.in/";
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="text-center my-5">
        <h1 className="media" style={{ color: "#111" }}>
          <h1 className="main-head mt-5">Our Numbers</h1>
        </h1>
      </div>

      <section data-aos="zoom-in-up" className="page-contain data-section">
        <div className="data-card">
          <h3 className="black-text">2k+</h3>
          <h4 className="black-text">Students</h4>
        </div>
        <div className="data-card">
          <h3 className="black-text">15+</h3>
          <h4 className="black-text">Days</h4>
        </div>
        <div className="data-card">
          <h3 className="black-text">5k+</h3>
          <h4 className="black-text">Footfall</h4>
        </div>
        <div className="data-card">
          <h3 className="black-text">10k+</h3>
          <h4 className="black-text">Eyeballs</h4>
        </div>
        {/* <div className="data-card">
          <h3 className="black-text">5k+</h3>
          <h4 className="black-text">Participants</h4>
        </div> */}
      </section>

      {/* About us  */}
      <div className="aboutcollege">
        <section className="hero">
          <div className="heading1">
            <h1 className="main-head mt-5">About us</h1>
          </div>
          <div className="container2">
            <div className="hero-content">
              <h2>Welcome to Anubhuti</h2>
              <p>
                Aubhuti is a significant event at our college, featuring a
                diverse range of activities such as multiple sports events, as
                well as enjoyable occasions like Miss-match day, traditional
                day, rose day, and many others. The primary objective behind
                organizing the Anubhuti event is to unearth the hidden talents
                of our students. Our dedicated team is working diligently to
                inspire students to participate in as many events as possible,
                fostering a spirit of enthusiasm and showcasing the rich talents
                within our college community..
              </p>
              <button
                className="btn btn-warning"
                type="button"
                onClick={redirectToMMIT}
              >
                Learn more
              </button>
            </div>
            <div data-aos="zoom-in" className="hero-image">
              <img src="/Images/college.jpg" alt="" />
            </div>
          </div>
        </section>
      </div>

      {/* Gallery */}
      <div>
        <div className="text-center my-5">
          <h1 className="media" style={{ color: "#111" }}>
            <h1 className="main-head mt-5">Gallery</h1>
          </h1>
        </div>

        <Gallery items={images} />
        <div className="text-center my-5"></div>
      </div>

      {/*testimonial*/}
    </>
  );
};

export default DataSection;
