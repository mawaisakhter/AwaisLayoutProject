import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../src/assets/css/Animation.css";

const Root = () => {
  const [count, setCount] = useState(1);
  const [isStartClicked, setIsStartClicked] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (count < 10 && !isStartClicked) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 200);
      return () => clearInterval(timer);
    }
  }, [count, isStartClicked]);

  const handleStartClick = () => {
    setIsStartClicked(true);
    setIsExpanding(true);

    setTimeout(() => {
      navigate("/home");
    }, 400);
  };

  return (
    <div className={`flex font-kanit items-center justify-center h-screen bg-black text-white relative overflow-hidden transition-all duration-1000
      ${isExpanding ? "bg-[#B1D627]" : ""}`}>
      {isExpanding && (
        <div className="absolute top-0 left-0 w-full h-full bg-[#B1D627] transition-transform duration-1000 scale-0 animate-expand"></div>
      )}

      <div className={`absolute font-kanit bottom-10 text-center text-5xl font-bold transition-opacity duration-500
        ${isExpanding ? "opacity-0" : "opacity-100"}`}>
        WE CREATE UNIQUE DIGITAL EXPERIENCES GLOBALLY
      </div>

      <div className="absolute bottom-28 right-10 flex items-center">
        <button
          className={`w-56 h-56 rounded-full flex items-center justify-center text-3xl font-bold transition-all duration-500 ease-in-out z-10
            ${count === 10 ? "bg-black border border-white hover:bg-[#B1D627] hover:border-[#B1D627]" : "bg-transparent"}
            ${isStartClicked ? "bg-[#B1D627] scale-[50] opacity-0 transition-all duration-1000 ease-in-out" : ""}`}
          onClick={handleStartClick}
        >
          {count === 10 ? (isStartClicked ? "" : "Enter Site") : (
            <span className="text-[240px] font-semibold text-[#ACD026]">{count}</span>
          )}
        </button>
      </div>

      <style>
        {`
          
        `}
      </style>
    </div>
  );
};

export default Root;
