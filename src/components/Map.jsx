import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowUrl: markerShadow,
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

function Map({ selectedPeriod, sharedVariable, setSharedVariable }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [currData, setCurrData] = useState([]);
  const [location, setLocation] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const markersRef = useRef([]);
  const [mapCenter, setMapCenter] = useState([23.512, 80.329]);
  const [mapZoom, setMapZoom] = useState(4);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let dataUrl = `https://backend-node-y6o2.onrender.com/${selectedPeriod}/data`;
        let locationUrl = `https://backend-node-y6o2.onrender.com/${selectedPeriod}/location`;

        const [dataResponse, locationResponse] = await Promise.all([
          fetch(dataUrl),
          fetch(locationUrl),
        ]);

        if (!dataResponse.ok || !locationResponse.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await dataResponse.json();
        const locData = await locationResponse.json();

        setCurrData(data.points);
        setFilteredData(data.points);
        setLocation(locData);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, [selectedPeriod]);

  const handlePlaceClick = (index) => {
    const marker = markersRef.current[index];
    if (marker) {
      const latLng = marker.getLatLng();
      setMapCenter(latLng);
      setMapZoom(6);
      setSharedVariable(filteredData[index]);
      marker.openPopup();
    } else {
      console.error("Marker not found at index:", index);
    }
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = currData.filter((place) =>
      place.city.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  const MapController = ({ center, zoom }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-center text-blue-400 mx-5 rounded-md md:space-x-3 md:space-y-0 h-[70vh]">
      <div className="bg-slate-200 rounded-lg md:mb-0 md:w-9/12 w-full h-full align-middle overflow-hidden z-0">
        <MapContainer
          center={mapCenter}
          zoom={mapZoom}
          style={{ height: "700px", width: "100%" }}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapController center={mapCenter} zoom={mapZoom} />
          {filteredData.map((place, index) => {
            const coordinates = location[place.city];
            if (coordinates) {
              return (
                <Marker
                  key={index}
                  position={coordinates}
                  icon={customIcon}
                  ref={(el) => (markersRef.current[index] = el)}
                  eventHandlers={{
                    click: () => handlePlaceClick(index),
                  }}
                >
                  <Popup>{place.city}</Popup>
                </Marker>
              );
            }
            return null;
          })}
        </MapContainer>
      </div>

      <div
        className={`bg-slate-200 opacity-60 rounded-lg md:w-3/12 w-4/5 md:h-full text-black ${
          isSidebarVisible
            ? "absolute top-0 right-0 h-full w-3/5 z-30"
            : "hidden md:block"
        } justify-center`}
      >
        <div className="flex justify-center text-2xl font-bold font-serif py-4 underline">
          LOCATIONS LIST
        </div>
        <button
          className="z-30 md:hidden absolute top-1/2 -left-10 transform -translate-y-1/2 bg-yellow-800 text-white px-3 py-2 rounded-e-md"
          onClick={toggleSidebar}
        >
          {isSidebarVisible ? ">" : "<"}
        </button>
        <div className="places-list px-4 overflow-y-auto h-5/6">
          <input
            type="text"
            placeholder="Search locations..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 mb-4 text-black rounded"
          />
          <ul className="space-y-2">
            {filteredData.map((place, index) => (
              <li
                key={index}
                className="text-black font-serif hover:scale-105 hover:bg-yellow-800/40 text-lg group"
                title={place.current_name} 
              >
                <a href="#" onClick={() => handlePlaceClick(index)} className="group-hover:underline">
                  {index + 1}. {place.city}
                  {place.current_name && (
                    <span className="hidden group-hover:inline text-sm">
                      {" "} (Currently: {place.current_name})
                    </span>
                  )}
                </a>
              </li>
            ))}
            {filteredData.length === 0 && (
              <li className="text-black font-serif text-lg">No results found</li>
            )}
          </ul>
        </div>
      </div>

      {!isSidebarVisible && (
        <button
          className="md:hidden absolute top-1/2 right-0 transform -translate-y-1/2 bg-yellow-800/90  text-white px-3 py-2 rounded-s-md"
          onClick={toggleSidebar}
        >
          {"<"}
        </button>
      )}
    </div>
  );
}

export default Map;
