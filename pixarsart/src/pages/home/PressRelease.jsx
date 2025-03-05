import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "Shopify Partner Program: How Does It Work?",
    category: "All Home Shopify",
    image: "/src/assets/images/Press/PressRelease-1.jpg",
    link: "#",
  },
  {
    title: "What You Need To Know About Wix Online Stores",
    category: "All Home General Web Development Wix",
    image: "/src/assets/images/Press/PressRelease-2.webp",
    link: "#",
  },
  {
    title: "Emerging E-Commerce Trends",
    category: "All Home E-Commerce General",
    image: "/src/assets/images/Press/PressRelease-3.png",
    link: "#",
  },
];

const PressRelease = () => {
  return (
    <div className="bg-dark font-[FaSolid] text-white py-12 pt-20 px-4 ">
      <div className="flex justify-between items-center">
        <h2 className="text-5xl font-bold text-left">Press Release</h2>
        <p className="mt-5 text-right">
          Check out our guides to stay updated with the market and economy.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {articles.map((article, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-3/5 object-cover"
            />
            <div className="p-4 mt-3">
              <p className="text-sm text-gray-400">{article.category}</p>
              <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
              <hr className="mt-5" />
              <Link to={article.link} className="flex text-sm mt-2">
                Read More <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressRelease;
