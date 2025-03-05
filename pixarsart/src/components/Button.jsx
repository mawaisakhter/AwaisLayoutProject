import React from "react";
import "../assets/css/Animation.css";

const Button = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="button-hover relative w-36 h-36 rounded-full border border-gray-500 text-gray-500 hover:bg-LimeGreen hover:border-LimeGreen hover:text-black transition-all flex items-center justify-center overflow-hidden"
    >
      <span>{text}</span>
      {icon && (
        <div className="ml-2">
          <img src={icon} alt="icon" className="w-6 h-6" />
        </div>
      )}
    </button>
  );
};

export default Button;
