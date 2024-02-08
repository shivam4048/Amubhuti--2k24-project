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
                    <strong>Watch Live</strong>
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
                                        📢 Watch Live Updates Here:
                                    </p>
                                    <a href="https://cricheroes.in/tournament/890604/Anubhuti-Cricket-Tournament-2k24" className="reg-btn">
                                        WatchLive
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
                                        📢 Watch Live Updates Here:
                                    </p>
                                    <div className="reg-btn-kabbadi">
                                        <a href="https://www.tournifyapp.com/live/mmitanubhuti2024kabaddi" className="reg-btn">
                                            WatchLive
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
                                        📢 Watch Live Updates Here:
                                    </p>
                                    <a href="https://www.tournifyapp.com/live/mmitanubhuti2024football" className="reg-btn">
                                        WatchLive
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
                                        📢 Watch Live Updates Here:
                                    </p>
                                    <a href="https://www.tournifyapp.com/live/mmitanubhuti2024volleyball" className="reg-btn">
                                        WatchLive
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
                                        📢 Watch Live Updates Here:
                                    </p>
                                    <a href="https://www.tournifyapp.com/live/mmitanubhuti2024throwball" className="reg-btn">
                                        WatchLive
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
                                        📢 Watch Live Updates Here:
                                    </p>
                                    <a href="https://www.tournifyapp.com/live/mmitanubhuti2024badminton" className="reg-btn">
                                        WatchLive
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
                                        📢 Watch Live Updates Here:
                                    </p>
                                    <a href="https://www.tournifyapp.com/live/mmitanubhuti2024tabletennis" className="reg-btn">
                                        WatchLive
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
                                        📢 Watch Live Updates Here:
                                    </p>
                                    <a
                                        href="https://www.tournifyapp.com/live/mmitanubhuti2024carrom"
                                        className="reg-btn"
                                    >
                                        WatchLive
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
                                        📢 Watch Live Updates Here:
                                    </p>
                                    <a href="https://www.tournifyapp.com/live/mmitanubhuti2024chess" className="reg-btn">
                                        WatchLive
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
                                        📢 Watch Live Updates Here:
                                    </p>
                                    <a href="https://www.tournifyapp.com/live/mmitanubhuti2024running" className="reg-btn">
                                        WatchLive
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
                                        📢 Watch Live Updates Here:
                                    </p>
                                    <a href="https://www.tournifyapp.com/live/mmitanubhuti2024shotput" className="reg-btn">
                                        WatchLive
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
                                        📢 Watch Live Updates Here:
                                    </p>
                                    <a href="https://www.tournifyapp.com/live/mmitanubhuti2024javelin" className="reg-btn">
                                        WatchLive
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
                                        📢 Watch Live Updates Here:
                                    </p>
                                    <a href="https://www.tournifyapp.com/live/mmitanubhuti2024discusthrow" className="reg-btn">
                                        WatchLive
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
