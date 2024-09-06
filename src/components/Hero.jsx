import React, { useState } from "react";
import BgImage from "../assets/bgImage.jpg";
import Navbar from "./Navbar";
import { FaArrowRight } from "react-icons/fa";
import Map from "./Map";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = ({sharedVariable,setSharedVariable}) => {
  const [selectedPeriod, setSelectedPeriod] = useState("all"); // Default to 'all'
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <main style={bgImage} className="overflow-hidden">
      <section className="relative min-h-[100vh] lg:min-h-[100vh] w-full overflow-hidden flex flex-col justify-center">
        {/* Navbar */}
        <div className="z-20">
          <Navbar />
        </div>
        {/* Map Content */}
        <div className="mt-24 h-[70vh] z-0">
          <Map selectedPeriod={selectedPeriod} sharedVariable={sharedVariable} setSharedVariable={setSharedVariable} />
        </div>
        {/* Footer Content */}
        <div className="z-10">
          <Footer onPeriodChange={handlePeriodChange} />
        </div>
      </section>
    </main>
  );
};

export default Hero;