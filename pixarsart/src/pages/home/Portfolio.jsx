import React, { useState } from "react";

const portfolioItems = [
  {
    title: "World Economic Forum",
    subtitle: "Committed To Improving The State Of The World",
    image: "/src/assets/images/portfolio/World-Economic-Forum-1-1.jpg",
  },
  {
    title: "Hyprov",
    subtitle: "Improv Under Hypnosis",
    image: "/src/assets/images/portfolio/Hyprov-1-1.jpg",
  },
  {
    title: "Margot Community",
    subtitle: "Online Community Connecting Women with Mentors",
    image: "/src/assets/images/portfolio/Margot-Community-1-1.webp",
  },
  {
    title: "Pixie Cup",
    subtitle: "Silicone Storage Cup",
    image: "/src/assets/images/portfolio/Pixie-Cup-1-1-1.jpg",
  },
  {
    title: "Legends of the Galaxy",
    subtitle: "Community Driven Roleplaying Experience",
    image: "/src/assets/images/portfolio/Legends-of-the-Galaxy-1-1.jpg",
  },
  {
    title: "Women Entrepreneurs",
    subtitle: "ERP System",
    image: "/src/assets/images/portfolio/Legends-of-the-Galaxy-2-1-1.webp",
  },
  {
    title: "Stampbox",
    subtitle:
      "An all-in-one platform for both beginners and expert philatelists",
    image: "/src/assets/images/portfolio/image-18-1.jpg",
  },
  {
    title: "Point App",
    subtitle: "Now Everyone is in League",
    image: "/src/assets/images/portfolio/image-19.jpg",
  },
  {
    title: "FixTrack",
    subtitle:
      "Transforming Device Management Through Tailored Digital Ecosystems",
    image: "/src/assets/images/portfolio/Fixtrack-1.webp",
  },
];

const Portfolio = () => {
  const [Index, setIndex] = useState(null);

  return (
    <div className="flex flex-col font-[FaSolid] md:flex-row w-full h-auto md:h-96 overflow-hidden transition-all duration-500">
      {portfolioItems.map((data, idx) => (
        <div
          key={idx}
          className={`relative h-64 md:h-full transition-all duration-500 ease-in-out transform ${
            Index === idx ? "md:w-2/5 md:scale-105" : "md:w-1/5 md:scale-100"
          } w-full`}
          onMouseEnter={() => setIndex(idx)}
          onMouseLeave={() => setIndex(null)}
          style={{
            backgroundImage: `url(${data.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 bg-black bg-opacity-30 transition-all duration-500">
            <h3 className="text-lg font-bold z-10">{data.title}</h3>
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 transition-all duration-500 hover:opacity-100">
            <p className="text-sm mt-4 md:mt-20 text-white text-center">
              {data.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
