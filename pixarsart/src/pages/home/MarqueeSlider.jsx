import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "../../assets/images/Group-1000003157.webp";
const languages = [
  "JavaScript", "Python", "C++", "Java", "C#", "Go", "Ruby", "Swift", "PHP", "TypeScript",
  "Kotlin", "Rust", "Dart", "Scala", "Perl", "Lua", "Haskell", "R", "Objective-C", "Elixir"
];

const MarqueeSlider = () => {
  const { scrollYProgress } = useScroll();
  const [scrollOffset, setScrollOffset] = useState(2);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      setScrollOffset(latest * 50); 
    });
  }, [scrollYProgress]);

  return (
    <div className="bg-dark font-[FaSolid] text-white py-32" style={{ backgroundImage: `url(${Image})`, backgroundSize: "112%", backgroundPosition: "center",}}>

      <div className="overflow-hidden">
        <motion.div
          className="flex "
          animate={{ x: `${-scrollOffset}%` }}
          transition={{ ease: "linear" }}>
          {languages.map((lang, index) => (
            <div key={index} className="w-1/5 px-32 border bg-dark text-center flex items-center justify-center ">
            {lang}
          </div>
          ))}
        </motion.div>
      </div>

      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `${scrollOffset}%` }}
          transition={{ ease: "linear" }}>
          {languages.map((lang, index) => (
            <div key={index} className="w-1/5 px-32 border bg-dark flex items-center justify-left ">
              {lang}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeSlider;
