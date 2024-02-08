// About.js
// import React, { useState } from 'react';
import Navbar from "./Navbar";
import "./About.css";
import Footer from "./Footer";

const About = () => {
  //   const [selectedMember, setSelectedMember] = useState(null);

  //   const handleMemberClick = (member) => {
  //     setSelectedMember(member);
  //   };

  const redirectToMMIT = () => {
    window.location.href = "https://mmit.edu.in/";
  };

  return (
    <div>
      <Navbar title="Anubhuti" mode="dark" />

      {/* About College */}
      <div className="aboutcollege">
        <section className="hero">
          <div className="heading">
            <h1 className="main-head">About us</h1>
          </div>
          <div className="container2">
            <div className="hero-image">
              <img src="/Images/college.jpg" alt="" />
            </div>
            <div className="hero-content">
              <h2>Welcome to MMIT</h2>
              <p>
                The Marathwada Mitramandal’s Institute of Technology, Lohgaon
                was established in 2008. The institution is affiliated to
                Savitribai Phule Pune University, Pune and is approved by AICTE,
                New Delhi, recognized by DTE, Government of Maharashtra. The
                institute is accrediated with "A" Grade by NAAC..
              </p>

              <button
                className="btn btn-warning"
                // style={myStyle}
                type="button"
                onClick={redirectToMMIT}
              >
                Learn more
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* About college end */}

      {/* Main lead cards */}
      <div className="team-section">
        <div className="container3">
          <div className="heading">
            <h1 className="main-head">Our Main Leads</h1>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque modi tenetur eum tempora aperiam saepe excepturi exercitationem voluptatem molestias incidunt?</p> */}
          </div>
          <div className="team-card">
            <div className="card">
              <div className="image-section">
                <img src="/Images/principal.png" alt="" />
              </div>
              <div className="content">
                <h3>Dr Rupesh Bhortake</h3>
                <h4>Principal MMIT</h4>
                <p>
                  Award for Best Social work in the field of Education by Pune
                  Municipal Corporation <br />
                  Best Track Paper Award-2016 IEOM Detroit Conference, U.S.A.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="image-section">
                <img src="/Images/aishwarya.jpeg" alt="" />
              </div>
              <div className="content">
                <h3>Prof Aishwarya Pawar</h3>
                <h4> Director of Physical Education and sports</h4>
                <p>
                  Played 2 All-India Inter-University Savitribai Phule Pune
                  University. <br />5 West zones Inter University matches for
                  Savitribai Phule Pune University
                </p>
              </div>
            </div>

            <div className="card">
              <div className="image-section">
                <img src="/Images/kurhe.png" alt="" />
              </div>
              <div className="content">
                <h3>Prof. Eknath Kurhe</h3>
                <h4>Anubhuti Head</h4>
                <p>
                  M.E. (Heat Power) PhD <br />
                  Head of Anubhuti event
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-section">
        <div className="container3">
          <div className="heading">
            <h1 className="main-head">Secretories</h1>
            {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque modi tenetur eum tempora aperiam saepe excepturi exercitationem voluptatem molestias incidunt?</p> */}
          </div>
          <div className="team-card">
            <div className="card">
              <div className="image-section">
                <img src="/Images/GS.jpg" alt="" />
              </div>
              <div className="content">
                <h3>Abhijeet Todkar</h3>
                <h4>General Secretary</h4>
                <h4>Contact:9172640902</h4>
                <p>
                  As the General Secretary of the College, I oversee communication between students and administration, striving to enhance campus life through events and initiatives.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="image-section">
                <img src="/Images/SS.jpg" alt="" />
              </div>
              <div className="content">
                <h3>Shivam Devkar</h3>
                <h4>Sport Secretary</h4>
                <h4>Contact:9822814048</h4>
                <p>
                  "As the Sports Secretary, I lead the charge in organizing thrilling sports events, fostering team unity, and promoting an active and inclusive sports community on campus."
                </p>
              </div>
            </div>

            <div className="card">
              <div className="image-section">
                <img src="/Images/COSS.jpg" alt="" />
              </div>
              <div className="content">
                <h3>Abhijit Pawar</h3>
                <h4>Co. Sports Secretary</h4>
                <h4>Contact:9168840453</h4>
                <p>
                  As the Co-Sports Secretary, I play a key role in supporting the Sports Secretary. I assist in organizing exciting sports events, nurturing team spirit, and contributing to a vibrant and inclusive sports culture at our college.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="image-section">
                <img src="/Images/CS.jpg" alt="" />
              </div>
              <div className="content">
                <h3>Smeet Kadam</h3>
                <h4>Cultural Secretary</h4>
                <h4>Contact:9359901013</h4>
                <p>
                  As the Cultural Secretary, I'm passionate about creating a lively cultural atmosphere. My role involves organizing vibrant events, celebrating diversity, and fostering a sense of community through cultural initiatives.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="image-section">
                <img src="/Images/LR.jpg" alt="" />
              </div>
              <div className="content">
                <h3>Anushka Mhaske</h3>
                <h4>Ladies Representative</h4>
                <h4>Contact:9518542068</h4>
                <p>
                  As the Ladies Representative, my focus is on amplifying the voice of female students. I work to address their concerns, organize events, and ensure an inclusive environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="about-container">
        {teamMembersData.map((member) => (
          <div key={member.id} className="team-member" onClick={() => handleMemberClick(member)}>
            <div className="member-info">
              <h2>{member.name}</h2>
              <p>{member.position}</p>
            </div>
            <img src={member.image} alt={member.name} className="member-image" />
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="selected-member-info">
          <h2>{selectedMember.name}</h2>
          <p>{selectedMember.bio}</p>
          <div className="socials">
            {selectedMember.socials.map((social) => (
              <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
                {social.platform}
              </a>
            ))}
          </div>
          <button onClick={() => setSelectedMember(null)}>Close</button>
        </div>
      )} */}

      <Footer />
    </div>
  );
};

export default About;
