import React from "react";

const Partners = () => {
  const images = [
    "/src/assets/images/Partners/Group-18966-1024x683.png",
    "/src/assets/images/Partners/Frame-26.webp",
    "/src/assets/images/Partners/Group-18963.png",
    "/src/assets/images/Partners/Group-18964-1024x683.png",
    "/src/assets/images/Partners/Group-1000001031.webp",
    "/src/assets/images/Partners/Frame-23.webp",
    "/src/assets/images/Partners/Frame-24.webp",
    "/src/assets/images/Partners/Group-18965.webp",
    "/src/assets/images/Partners/Group-18967.png",
    "/src/assets/images/Partners/Group-18968-1024x683.png",
  ];

  return (
    <section className="bg-dark font-[FaSolid] text-white px-6 py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <h2 className="text-3xl md:text-4xl mb-10 font-bold w-full md:w-3/12 text-left">
          Partners And Certifications
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:w-3/4">
          {images.map((src, index) => (
            <div key={index} className="border border-neutral-400 flex items-center justify-center">
              <img src={src} alt={`Partner ${index + 1}`} className="w-full h-auto object-contain animate-fade-in" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
