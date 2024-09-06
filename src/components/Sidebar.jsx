import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa"; // Import arrow icon
import Logo1 from "../assets/logo1.png"; // Logo for the sidebar

const Sidebar = ({ isOpen, toggleSidebar, toggleContact, toggleFeedback, toggleAbout }) => {
  return (
    <div className={`fixed inset-0 bg-white z-30 flex flex-col overflow-y-auto transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex items-center justify-between p-4 border-b">
        <img src={Logo1} alt="Logo" className="h-8" />
      </div>
      <div className="flex flex-col p-4">
        <div className="relative my-4" onClick={toggleAbout}>
          
          <a href="#" className="flex justify-between items-center text-black text-2xl pb-4 w-full pl-4 mt-16">
            About
            <FaChevronRight />
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 to-yellow-500" />
        </div>
        <div className="relative my-4" onClick={toggleContact}>
          <a href="#" className="flex justify-between items-center text-black text-2xl pb-4 w-full pl-4">
            Contact
            <FaChevronRight />
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 to-yellow-500" />
        </div>
        <div className="relative my-4" onClick={toggleFeedback}>
          <a href="#" className="flex justify-between items-center text-black text-2xl pb-4 w-full pl-4">
            Feedback
            <FaChevronRight />
          </a>
          <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 to-yellow-500" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
