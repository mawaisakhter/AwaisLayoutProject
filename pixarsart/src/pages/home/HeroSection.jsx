import { motion } from "framer-motion";

const text = "ARTISTS";
const headline = "WE'RE THE FURIOUS DIGITAL";
const images = [
  "/src/assets/images/Portfolio-1.webp",
  "/src/assets/images/Portfolio-1.webp",
  "/src/assets/images/Portfolio-1.webp",
];

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 flex justify-center font-[FaSolid] items-center flex-col">
      <motion.div
        className="absolute top-0 left-0 w-full h-full hidden md:flex"
        initial={{ x: "-100%" }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Scrolling Image"
            className="w-auto h-full mx-4"
          />
        ))}
      </motion.div>

      <h1 className="absolute top-50 md:left-16 text-white text-3xl md:text-4xl font-bold text-center px-4">
        {headline}
      </h1>

      <div className="absolute bottom-20 md:right-80 flex justify-center items-center w-full">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="text-white text-7xl md:text-[130px] font-bold mx-1 inline-block"
            animate={{
              scaleY: [1, 1.3, 1.6, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1.5,
              delay: index % 2 === 0 ? 0 : 0.75,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
