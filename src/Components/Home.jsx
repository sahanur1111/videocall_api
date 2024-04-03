import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  const [input, setInput] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(`/room/${input}`);
  };

  return (
    <div className="home-container">
      <div
        className={`input-container ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter Your Name.."
        />
        <button className="button" onClick={submitHandler}>
          Join
        </button>
      </div>
    </div>
  );
};

export default Home;
