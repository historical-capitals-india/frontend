import React from "react";
import BgImage2 from "../assets/bgImage.jpg";
import { FaArrowRight } from "react-icons/fa";

const bgImage2 = {
  backgroundImage: `url(${BgImage2})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const HistContext = ({ sharedVariable }) => {
  return (
    <div style={bgImage2} className="overflow-hidden" id="HistContext">
      <section className="relative min-h-[90vh] min-w-[100vw] mt-[3%]">
        <div className="flex flex-col items-center text-black text-center mt-12 px-4 lg:pl-5 ">
          <h1 className="text-3xl lg:text-7xl font-bold my-4 font-serif justify-start">
            Historical Context
          </h1>
          <div className="flex space-x-8 w-100vw">
            <h1 className="text-2xl md:text-4xl font-serif font-semibold">
              Location:{" "}
              <span className="text-md font-normal">
                {sharedVariable["city"]}
              </span>
            </h1>
            <h1 className="text-2xl md:text-4xl font-serif font-semibold">
              Era:{" "}
              <span className="text-md font-normal">
                {sharedVariable["year"]}
              </span>
            </h1>
          </div>
          <div className="w-[90vw] md:w-[80vw] h-[60vh] bg-white/50 rounded-md text-xl text-left px-[3%] pt-[2%] overflow-y-auto font-serif">
            <div className="pb-8">
              <h1 className="text-2xl md:text-3xl font-bold font-serif">
                Dynasty:{" "}
                <span className="text-md font-normal">
                  {sharedVariable["dynasty"]}
                </span>
              </h1>
              <h1 className="text-2xl md:text-3xl font-bold font-serif">
                Empire:{" "}
                <span className="text-md font-normal">
                  {sharedVariable["empire"]}
                </span>
              </h1>
            </div>
            {sharedVariable["information"]}
            <div className="pt-4">
              <h1 className="text-xl md:text-2xl font-serif font-semibold">
                References:
              </h1>
              <ul className="list-disc pl-5 text-sm font-normal">
                {Array.isArray(sharedVariable["reference"]) &&
                sharedVariable["reference"].length > 0 ? (
                  <ul className="list-disc pl-5 text-sm font-normal">
                    {sharedVariable["reference"].map((ref, index) => (
                      <li key={index} className="my-1">
                        <a
                          href={ref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {ref}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No references available.</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistContext;
