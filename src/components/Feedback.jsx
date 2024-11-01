import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Feedback({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Load SMTP.js dynamically
    const script = document.createElement("script");
    script.src = "https://smtpjs.com/v3/smtp.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleFeedback = async (e) => {
    e.preventDefault();
    const res = await fetch("https://backend-node-y6o2.onrender.com/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    if (res.ok) {
      setStatus("Feedback sent successfully!");
    }

    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setStatus("");
    }, 5000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 mt-16">
      <div className="relative flex flex-col items-center p-4 bg-[#f5e0c3] rounded-lg font-serif h-[72vh] md:h-[80vh] w-[80vw] md:w-[60vw] overflow-y-auto md:overflow-hidden shadow-2xl border border-[#8b5e3c]">
        <button
          className="absolute top-2 right-2 text-2xl text-[#8b5e3c] hover:text-[#a3724d]"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="text-4xl font-bold my-4 text-center text-[#8b5e3c]">Feedback</div>
        <form
          className="w-full max-w-lg bg-[#f2dcc4] p-6 rounded-lg shadow-md border border-[#8b5e3c]"
          onSubmit={handleFeedback}
        >
          <div className="mb-4">
            <label
              className="block text-[#6e4d31] text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border border-[#8b5e3c] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              style={{ backgroundColor: "#f5e0c3" }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[#6e4d31] text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border border-[#8b5e3c] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              style={{ backgroundColor: "#f5e0c3" }}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-[#6e4d31] text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border border-[#8b5e3c] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              style={{ backgroundColor: "#f5e0c3" }}
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-[#8b5e3c] hover:bg-[#a3724d] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Feedback
            </button>
          </div>
        </form>
        {status && <p className="mt-4 text-center text-[#6e4d31]">{status}</p>}
      </div>
    </div>
  );
}
Feedback.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Feedback;
