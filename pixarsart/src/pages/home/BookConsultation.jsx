import React from "react";
import "../../assets/css/Animation.css";
import Vector from "../../assets/images/Vector-11.svg";

const BookConsultation = () => {
  return (
    <div className="relative font-[FaSolid] w-full bg-dark py-32 border-y-[0.5px]">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee text-white text-9xl font-bold">
          Book A Free Consultation  
        </div>
      </div>
      <div className="absolute top-24 left-[30%] ">
        <div>
          <button className="button-hover relative w-36 md:w-48 h-36 md:h-48 rounded-full border border-gray-500 text-gray-500 hover:bg-[#B1D627] hover:border-[#B1D627] bg-dark hover:text-black transition-all flex items-center justify-center overflow-hidden">
            <span className="font-medium md:font-semibold md:text-sm text-xs">Book an Appointment</span>
            <div className="ml-0 md:ml-2">
              <img src={Vector} alt="icon" className="w-4 md:w-6 h-4 md:h-6" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
