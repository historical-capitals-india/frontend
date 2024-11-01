import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Contact from "./Contact";
import Feedback from "./Feedback";
import About from "./About";
import Logo1 from "../assets/logo1.png";
import { FaBars } from "react-icons/fa";

function Navbar() {
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const openSearch = () => {
  //   setIsSearchOpen(true);
  // };

  // const closeSearch = () => {
  //   setIsSearchOpen(false);
  // };

  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleSearchSubmit = () => {
  //   onSearch(searchTerm);
  // };

  const isMobile = windowWidth < 1024;
  const bgColor = isMobile || isScrolled ? "bg-white/60" : "bg-transparent";
  const logo = Logo1;
  const textColor = isMobile || isScrolled ? "text-black" : "text-white";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };
  const toggleFeedback = () => {
    setIsFeedbackOpen(!isFeedbackOpen);
  };
  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 w-[100vw] transition-colors duration-300 ${bgColor} flex flex-col rounded-b-lg shadow-lg`}
      >
        <div className="container flex items-center justify-between py-2 pl-10 space-x-2 w-[100vw]">
          {/* 1st FlexBox - Logo*/}
          <div className="flex justify-evenly space-x-8  text-md md:text-2xl">
            <a href="https://historical-capitals-india.netlify.app/" className="flex justify-center">
              <img
                src={logo}
                alt="Logo"
                className="h-14 w-18 mr-2 rounded-lg"
              />
              <div className="flex flex-col justify-center">
                <h1
                  className={`${textColor} leading-tight font-serif font-semibold`}
                >
                  Historical Capitals
                </h1>
                <h1
                  className={`${textColor} leading-tight font-serif font-semibold`}
                >
                  Of India
                </h1>
              </div>
            </a>
          </div>

          {/* 2nd Flexbox - sidebar*/}
          <div className="flex items-center space-x-5 m-0 md:mr-5">
            {isMobile && (
              <button
                onClick={toggleSidebar}
                className={`text-2xl ${textColor}`}
              >
                <FaBars />
              </button>
            )}
          </div>

          {/* 3rd Flexbox- about,contact and feedback */}
          <div className="hidden lg:flex items-center justify-end space-x-5 font-serif font-semibold text-2xl pr-0">
            <div
              className={`flex items-center ${textColor} relative hover:text-yellow-800 hover:scale-[1.05] duration-200 ease-in-out`}
              onMouseEnter={() => handleMouseEnter("About")}
              onMouseLeave={handleMouseLeave}
              onClick={toggleAbout}
            >
              <a href="#">About</a>
            </div>
            <div
              className={`flex items-center ${textColor} relative  hover:text-yellow-800 hover:scale-[1.05] duration-200 ease-in-out`}
              onMouseEnter={() => handleMouseEnter("Feedback")}
              onMouseLeave={handleMouseLeave}
              onClick={toggleFeedback}
            >
              <a href="#">Feedback</a>
            </div>
            <div
              className={`flex items-center ${textColor} relative mr-5  hover:text-yellow-800 hover:scale-[1.05] duration-200 ease-in-out`}
              onMouseEnter={() => handleMouseEnter("Contact")}
              onMouseLeave={handleMouseLeave}
              onClick={toggleContact}
            >
              <a href="#" className="mr-10">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {isContactOpen && <Contact onClose={toggleContact} />}
      {isFeedbackOpen && <Feedback onClose={toggleFeedback} />}
      {isAboutOpen && <About onClose={toggleAbout} />}

      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        toggleContact={toggleContact}
        toggleFeedback={toggleFeedback}
        toggleAbout={toggleAbout}
      />
    </>
  );
}

export default Navbar;
