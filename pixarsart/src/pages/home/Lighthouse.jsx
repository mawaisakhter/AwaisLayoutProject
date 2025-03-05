import React from "react";
import Vector from "../../assets/images/Vector-11.svg";
import Image from "../../assets/images/image-21-1.png";
import Button from "../../components/Button";

const Lighthouse = () => {
  return (
    <div className="relative w-full h-full pb-60 font-[FaSolid] bg-dark overflow-hidden flex flex-col items-center justify-center py-16 px-6"  style={{ backgroundImage: `url(${Image})`, backgroundSize: "150%", backgroundPosition: "center",}}>
      <section className="relative z-10 mt-72 text-white w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-5xl  font-bold">Who we are?</h2>
            <p className="text-lg mt-4 font-semibold">
              You get to work with some of the most talented web developers,
              designers, creative thinkers and innovators in our team. Website
              designing and development catered just for you.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Button text="Contact Us" icon={Vector} onClick={() => alert("Button Clicked!")} />
          </div>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 gap-10 font-semibold mt-16 items-center pl-[20%] px-10">
          <p>
            We value you and your brand. Analysis of your goals is a primary
            step in our work process. We want to get to know you and your
            business goals and then collaborate together to turn your ideas into
            reality.
          </p>
          <p>
            Our goal is to give your products the futuristic and present edge to
            lead the way through. We partner with you in idea generation and
            build the path towards success for you and us. Our work.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Lighthouse;
