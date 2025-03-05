import { motion } from "framer-motion";
import image from "../../assets/images/image.png";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="bg-dark font-[FaSolid] text-white py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-36 font-kanit font-normal text-white">
        <div>
          <p className="text-lg">We Are Geared Towards</p>
          <h2 className="text-1xl md:text-[40px] font-semibold mb-4 mt-2 leading-10">
            Versatility and offering you efficiency and the best quality services at every step.
          </h2>
          <p className="mb-6 text-lg font-medium">
          At Pixarsart our aim is to create the most effective online presence for your brand. We use the latest technology to provide you with the most intuitive solutions to cater to all your business needs. We want to see your business thrive.
          </p>
          <p className="mb-6 text-lg font-medium">
            Our Team over at Pixarsart are committed to providing creative and innovative solutions in Web and App Development, UI/UX Design, Backend Development, Digital Product Development, Server Management, Continuous Integration and Continuous deployment as well as effective eCommerce solutions. We are progressively working with clients with legacy systems as well as progressive technologies.
          </p>
          <Link
            to="#"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-LimeGreen hover:bg-[#c8f31ddc] rounded-md text-lg text-black font-semibold transition">
            <span>Book Free Consultation</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>

        <motion.div
          className="relative left-32 w-64 h-64 md:w-96 md:h-96 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}>
          <motion.img
            src={image}
            alt="Company Vision"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            whileHover={{
              scale: 1.1,
              filter: "blur(2px)",
              opacity: 0.8,
            }}
            transition={{ duration: 0.4 }}
          />
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-blue-500 rounded-full"
              initial={{ x: 0, y: 0, opacity: 0 }}
              whileHover={{
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 200,
                opacity: 1,
              }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
