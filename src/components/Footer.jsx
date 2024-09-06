import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faBuilding,
  faChessRook,
} from "@fortawesome/free-solid-svg-icons";

const Dock = ({ children }) => {
  return (
    <div className="fixed top-20  md:top-auto md:fixed md:bottom-3 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-1 md:space-x-8 bg-slate-100 bg-opacity-15 p-4 rounded-lg backdrop-blur-sm">
      {children}
    </div>
  );
};

const DockIcon = ({ icon, label, timeframe, textColor, onClick }) => {
  return (
    <div
      className={`flex flex-col items-center hover:scale-110 transition-all ${textColor} cursor-pointer`} // Added cursor-pointer class
      onClick={onClick}
    >
      <div className="flex items-center space-x-0 md:space-x-2">
        <FontAwesomeIcon icon={icon} className="mr-1" />
        <span>{label}</span>
      </div>
      <span className="text-xs">{timeframe}</span>
    </div>
  );
};


function Footer({ onPeriodChange }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const textColor = isScrolled ? "text-black" : "text-white";

  return (
    <div className="z-0">
      <Dock>
        <DockIcon
          icon={faChessRook}
          label=".ANCIENT."
          timeframe="6BCE-1488CE"
          textColor={textColor}
          onClick={() => onPeriodChange("ancient")}
        />
        <span className={textColor}>|</span>
        <DockIcon
          icon={faLandmark}
          label=".MEDIEVAL."
          timeframe="1488CE-1858CE"
          textColor={textColor}
          onClick={() => onPeriodChange("medieval")}
        />
        <span className={textColor}>|</span>
        <DockIcon
          icon={faBuilding}
          label=".MODERN."
          timeframe="1858CE-2024CE"
          textColor={textColor}
          onClick={() => onPeriodChange("modern")}
        />
      </Dock>
    </div>
  );
}

export default Footer;