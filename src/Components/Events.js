// Events.js
import React from "react";
import { useSpring, animated } from "react-spring";
import "./Events.css";
import Navbar from "./Navbar";

export default function Events() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="Main">
      <Navbar title="Anubhuti" mode="dark" />
      <center className="mt-5 mb-5">
        <h1>
          <strong>Games</strong>
        </h1>
      </center>

      <animated.div style={fadeIn}>
        <div className="container-fluid">
          <div className="row">
            {/* Event Card 1 */}
            <div className="col-sm d-flex flex-column justify-content-center align-items-center">
              <div className="event-card">
                <div className="event-content">
                  <h2 className="event-head">Cricket</h2>
                  <p>
                    A cricket event is a thrilling gathering of teams and
                    players competing in matches.
                  </p>
                  <a href="https://forms.gle/LDqo1qmydoctPFu86" className="reg-btn">
                    Register
                  </a>
                </div>
                <img src="/Images/cricket.png" alt="cricket" />
              </div>
            </div>

            <div className="col-sm d-flex flex-column justify-content-center align-items-center">
              <div className="event-card">
                <div className="event-content">
                  <h2 className="event-head">Kabbadi</h2>
                  <p>
                    An exhilarating contact sport deeply rooted in cultural
                    heritage.
                  </p>
                  <div className="reg-btn-kabbadi">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdu09n0QCeId3oP3-6YILDnXtarRCIpJPxFmZrMWXvhUa6sVw/viewform?vc=0&c=0&w=1&flr=0" className="reg-btn">
                      Register
                    </a>
                  </div>
                </div>
                <div className="bad-img">
                  <img src="/Images/Kabbadi.png" alt="Kabbadi" />
                </div>
              </div>
            </div>

            <div className="col-sm d-flex flex-column justify-content-center align-items-center">
              <div className="event-card">
                <div className="event-content">
                  <h2 className="event-head">Football</h2>
                  <p>
                    A globally adored sport that unites fans through
                    exhilarating and exciting matches.
                  </p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSc4NZ2ZoCHEqLkWw1xyZXRvA2I3J48yu-1C6ZnUEuKVgU9bbg/viewform" className="reg-btn">
                    Register
                  </a>
                </div>
                <img src="/Images/Football.png" alt="cricket" />
              </div>
            </div>

            <div className="col-sm d-flex flex-column justify-content-center align-items-center">
              <div className="event-card">
                <div className="event-content">
                  <h2 className="event-head">VolleyBall</h2>
                  <p>
                    It is a dynamic sport celebrated for its fast-paced action
                    and energetic spirit.
                  </p>
                  <a href="https://forms.gle/dpZucHBHYzqsSH3M7" className="reg-btn">
                    Register
                  </a>
                </div>
                <img src="/Images/Volleyball.png" alt="volleyball" />
              </div>
            </div>

            <div className="col-sm d-flex flex-column justify-content-center align-items-center">
              <div className="event-card">
                <div className="event-content">
                  <h2 className="event-head">Throwball</h2>
                  <p>
                    A dynamic competition tailored for Throwball enthusiasts seeking strategic thrills!
                  </p>
                  <a href="https://forms.gle/fHarFHHJdLP4bVXr7" className="reg-btn">
                    Register
                  </a>
                </div>
                <img src="/Images/throwball.png" alt="cricket" />
              </div>
            </div>

            <div className="col-sm d-flex flex-column justify-content-center align-items-center">
              <div className="event-card">
                <div className="event-content">
                  <h2 className="event-head">Badminton</h2>
                  <p>
                    The badminton event showcases athleticism as competitors
                    engaged in fast-paced rallies.
                  </p>
                  <a href="https://forms.gle/ZBiPBQSvrqRTqpDt9" className="reg-btn">
                    Register
                  </a>
                </div>
                <div className="bad-img">
                  <img src="/Images/badminton.png" alt="cricket" />
                </div>
              </div>
            </div>

            <div className="col-sm d-flex flex-column justify-content-center align-items-center">
              <div className="event-card">
                <div className="event-content">
                  <h2 className="event-head">Table Tennis</h2>
                  <p>
                    Fast-paced rallies and precision shorts.
                  </p>
                  <a href="https://forms.gle/J9QbRE3ux11zQ84D8" className="reg-btn">
                    Register
                  </a>
                </div>
                <img src="/Images/ttimage.png" alt="cricket" />
              </div>
            </div>

            <div className="col-sm d-flex flex-column justify-content-center align-items-center">
              <div className="event-card">
                <div className="event-content">
                  <h2 className="event-head">Carrom</h2>
                  <p>
                    Strategic flicks, precise angles, favorite board game and a
                    timeless blend of skill.
                  </p>
                  <a
                    href="https://forms.gle/KNwzdTtUCffkpfXi7"
                    className="reg-btn"
                  >
                    Register
                  </a>
                </div>
                <img src="/Images/carrom.png" alt="cricket" />
              </div>
            </div>

            <div className="col-sm d-flex flex-column justify-content-center align-items-center">
              <div className="event-card">
                <div className="event-content">
                  <h2 className="event-head">Chess</h2>
                  <p>
                    A strategic, intellectually engaging and mind challenging
                    competition for chess enthusiats.
                  </p>
                  <a href="https://forms.gle/pLCXhUPhDFBzSJNn6" className="reg-btn">
                    Register
                  </a>
                </div>
                <img src="/Images/Chess.png" alt="cricket" />
              </div>
            </div>

            <div className="col-sm d-flex flex-column justify-content-center align-items-center">
              <div className="event-card">
                <div className="event-content">
                  <h2 className="event-head">Running</h2>
                  <p>
                    Endurance, rhythm , and the freedom of the open road—a
                    simple yet best event for all.
                  </p>
                  <a href="https://forms.gle/EaVmz8Pzm31uEq8v9" className="reg-btn">
                    Register
                  </a>
                </div>
                <div className="bad-img">
                  <img src="/Images/Running.png" alt="Running" />
                </div>
              </div>
            </div>

            <div className="col-sm d-flex flex-column justify-content-center align-items-center">
              <div className="event-card">
                <div className="event-content">
                  <h2 className="event-head">Shotput</h2>
                  <p>
                    A field event showcasing strength, explosiveness, power,
                    determination and athleticism.
                  </p>
                  <a href="https://forms.gle/EaVmz8Pzm31uEq8v9" className="reg-btn">
                    Register
                  </a>
                </div>
                <div className="bad-img">
                  <img src="/Images/Shotput.png" alt="shotput" />
                </div>
              </div>
            </div>

            <div className="col-sm d-flex flex-column justify-content-center align-items-center">
              <div className="event-card">
                <div className="event-content">
                  <h2 className="event-head">Javelin</h2>
                  <p>
                    An exhilarating competition designed exclusively for Javelin enthusiasts.
                  </p>
                  <a href="https://forms.gle/EaVmz8Pzm31uEq8v9" className="reg-btn">
                    Register
                  </a>
                </div>
                <img src="/Images/javelin.png" alt="cricket" />
              </div>
            </div>

            <div className="col-sm d-flex flex-column justify-content-center align-items-center">
              <div className="event-card">
                <div className="event-content">
                  <h2 className="event-head">Discus throw</h2>
                  <p>
                    Showcase your precision, strength, and strategic finesse in this gripping event.
                  </p>
                  <a href="https://forms.gle/EaVmz8Pzm31uEq8v9" className="reg-btn">
                    Register
                  </a>
                </div>
                <div className="bad-img">
                  <img src="/Images/discusthrow.png" alt="shotput" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </animated.div>
    </div>
  );
}

const cardsData = [
  {
    id: 2,
    image: "/Images/carrom.jpg",
    title: "Carrom",
    text: "Strategic flicks, precise angles, family-favorite board game a timeless blend of skill and entertainment.",
    link: "https://forms.gle/KNwzdTtUCffkpfXi7",
  },

  {
    id: 11,
    image: "/Images/javelin.jpg",
    title: "Javeline Throw",
    text: "Precision in motion, aerodynamic flights, and explosive releases—a track and field spectacle of strength and skill.",
    link: "replace_with_actual_url4",
  },
  {
    id: 12,
    image: "/Images/throwball.jpg",
    title: "Throwball",
    text: " Dynamic team throws, strategic plays, and net action—blending elements of volleyball and teamwork for spirited competition.",
    link: "replace_with_actual_url4",
  },
];
