import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function About({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 mt-16">
      <div className="relative flex flex-col items-center p-4 bg-[#f5e0c3] rounded-lg font-serif h-[72vh] md:h-[80vh] w-[80vw] md:w-[60vw] overflow-y-auto shadow-2xl border border-[#8b5e3c]">
        <button
          className="absolute top-2 right-2 text-2xl text-[#8b5e3c] hover:text-[#a3724d]"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="text-4xl font-bold my-4 text-center text-[#8b5e3c]">About This Website</div>

        {/* Project/Website Brief */}
        <div className="my-4 p-4 bg-[#f2dcc4] rounded-lg shadow-lg text-center border border-[#8b5e3c]">
          <h2 className="text-3xl font-semibold mb-2 text-[#6e4d31]">Project Aim</h2>
          <p className="text-base text-[#6e4d31]">
            The aim of the project is to develop a web application that visualizes and educates users about the historical cities of India through an interactive map interface using Leaflet. This facilitates the exploration of their significance under various dynasties and empires. Users can click on map markers or a synchronized list to view detailed information about each city, including names, historical significance, and associated dynasties or empires. This aims to provide an engaging educational experience and promote cultural heritage awareness.
          </p>
        </div>

        {/* Components Section */}
        <div className="my-4 w-full">
          <h2 className="text-3xl font-semibold text-center mb-4 text-[#6e4d31]">Website Components</h2>

          {/* Component Section */}
          <div className="flex flex-col md:flex-row md:justify-evenly mb-4 mr-10">
            {/* Navbar Component */}
            <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-[#f2dcc4] rounded-lg shadow-lg py-2 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-[#8b5e3c] overflow-y-auto">
              <h3 className="font-semibold text-lg text-[#6e4d31]">Navbar</h3>
              <p className="text-sm text-[#6e4d31]">
                The Navbar consists of three buttons: <strong>About</strong>, <strong>Feedback</strong>, and <strong>Contact Us</strong>, providing information about the website, collecting feedback, and offering contact details, respectively.
              </p>
            </div>

            {/* Map Component */}
            <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-[#f2dcc4] rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-[#8b5e3c] overflow-y-auto">
              <h3 className="font-semibold text-lg text-[#6e4d31]">Map</h3>
              <p className="text-sm text-[#6e4d31]">
                The Map displays the current location selected from the Locations List, providing a visual representation of historical cities.
              </p>
            </div>

            {/* Locations List Component */}
            <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-[#f2dcc4] rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-[#8b5e3c] overflow-y-auto">
              <h3 className="font-semibold text-lg text-[#6e4d31]">Locations List</h3>
              <p className="text-sm text-[#6e4d31]">
                The Locations List shows all the capitals of India based on the era you choose (by default, all capitals are displayed).
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-evenly mb-4 mr-10">
            {/* Historical Context Component */}
            <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-[#f2dcc4] rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-[#8b5e3c] overflow-y-auto">
              <h3 className="font-semibold text-lg text-[#6e4d31]">Historical Context</h3>
              <p className="text-sm text-[#6e4d31]">
                This section shows the detailed history of the selected location, along with an AI-generated image depicting what it might have looked like during that time.
              </p>
            </div>

            {/* Know More/Less Component */}
            <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-[#f2dcc4] rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-[#8b5e3c] overflow-y-auto">
              <h3 className="font-semibold text-lg text-[#6e4d31]">Know More/Less</h3>
              <p className="text-sm text-[#6e4d31]">
                By clicking the button on the left side of the map, you can directly access the historical context of the currently viewed location.
              </p>
            </div>

            {/* Chatbot Component */}
            <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-[#f2dcc4] rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-[#8b5e3c] overflow-y-auto">
              <h3 className="font-semibold text-lg text-[#6e4d31]">Chatbot</h3>
              <p className="text-sm text-[#6e4d31]">
                An AI chatbot, specifically fine-tuned for this website, is available to answer queries and provide guidelines for navigating the site.
              </p>
            </div>
          </div>

          {/* Footer Component */}
          <div className="flex flex-col md:flex-row md:justify-evenly mb-4 p-2 mr-3">
            <div className="flex-shrink-0 w-full m-2 md:w-1/3 h-[20vh] flex flex-col items-center bg-[#f2dcc4] rounded-lg shadow-lg py-5 px-4 transform transition-all hover:scale-105 hover:shadow-xl border border-[#8b5e3c] overflow-y-auto">
              <h3 className="font-semibold text-lg text-[#6e4d31]">Footer</h3>
              <p className="text-sm text-[#6e4d31]">
                The Footer lets you choose the era (namely ancient, medieval, and modern) so that you can search for the capitals of India from that specific time period only.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
About.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default About;