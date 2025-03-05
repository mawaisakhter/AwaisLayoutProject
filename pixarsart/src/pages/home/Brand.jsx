import React from "react";
import { motion } from "framer-motion";

const brands = [
  "src/assets/images/brands/9to5google.webp",
  "src/assets/images/brands/9to5mac.webp",
  "src/assets/images/brands/art-hyve.webp",
  "src/assets/images/brands/drive-points.webp",
  "src/assets/images/brands/fixtrack.webp",
  "src/assets/images/brands/Group-1000001016.webp",
  "src/assets/images/brands/Group-1000001019.webp",
  "src/assets/images/brands/Group-1000001020.webp",
  "src/assets/images/brands/harvest.webp",
  "src/assets/images/brands/hyprov.webp",
  "src/assets/images/brands/ifixamerica.webp",
  "src/assets/images/brands/ifix-your-i.webp",
  "src/assets/images/brands/margot-1.webp",
  "src/assets/images/brands/point.webp",
  "src/assets/images/brands/send-ir.webp",
  "src/assets/images/brands/shiftfhish.webp",
  "src/assets/images/brands/softtouch.webp",
  "src/assets/images/brands/somomarketing.webp",
  "src/assets/images/brands/srk.webp",
  "src/assets/images/brands/stampbox.webp",
  "src/assets/images/brands/starwars.webp",
  "src/assets/images/brands/star-wars.webp",
  "src/assets/images/brands/walt-disnep.webp",
  "src/assets/images/brands/world-economic-forum.webp"
];

const Brand = () => {
  return (
    <div className="py-10 font-[FaSolid] bg-dark">
      <p className="text-xl text-white pl-5 mt-10">International Brands</p>
      <h2 className="text-2xl md:text-4xl font-bold mt-2 text-white pl-5">
        We are happy to work with global <br /> largest brands
      </h2>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 md:px-12">
        {brands.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: index * 0.1 }} 
            className="flex justify-center items-center border p-6"
          >
            <img
              src={logo}
              alt={`Brand ${index}`}
              className="w-36 h-auto object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
