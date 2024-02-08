import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Events from './Components/Events';
import Gallery from './Components/Gallery';
import OurTeam from './Components/OurTeam';
import About from './Components/About';
import LiveEvents from './Components/LiveEvents';
// import Reg_TT from './Components/Reg_TT';

// import Footer from './Components/Footer';
// import LandingPage from './Components/LandingPage';


function App() {
    return (
        <Router>
            {/* <Navbar title="Anubhuti" mode='transparent' /> */}
            {/* <Footer/> */}
            <div >
                {/* <LandingPage /> */}
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/OurTeam" element={<OurTeam />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/LiveEvents" element={<LiveEvents />} />

                    {/* <Route path="/Reg_TT" element={<Reg_TT />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
