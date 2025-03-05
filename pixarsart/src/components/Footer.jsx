import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import Logo from "../assets/images/Logo.webp";
import { Link } from "react-router-dom";

const clienteleData = [
  "United States",
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
  "Europe",
  "Belgium",
  "Austria",
  "Denmark",
  "Finland",
  "France",
  "Germany",
  "Ireland",
  "Italy",
  "Luxembourg",
  "Netherlands",
  "Sweden",
  "Global",
  "Saudi Arabia",
  "UAE",
  "China",
  "Qatar",
  "Maldives",
];

const chunkArray = (arr, size) => {
  return arr.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
    chunks[chunkIndex].push(item);
    return chunks;
  }, []);
};

const Footer = () => {
  const columns = chunkArray(clienteleData, 11);
  const highlightedHeadings = ["United States", "Europe", "Global"];

  return (
    <section className="bg-dark font-[FaSolid] text-white pt-20 pb-6">
      <div className="px-4">
        <h2 className="text-2xl font-bold mb-6">
          Global Clientele and Presence
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-6 text-white">
          {columns.map((column, colIndex) => (
            <div key={colIndex}>
              <ul className="space-y-1">
                {column.map((country, idx) => (
                  <li
                    key={idx}
                    className={`text-gray-300 transition duration-300 ${
                      highlightedHeadings.includes(country)
                        ? "text-lg font-bold py-2 text-white"
                        : ""
                    }`}
                  >
                    {country}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-10">
        <div className="py-10">
          <div className="container mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div>
                <img src={Logo} alt="hello" className="w-52 h-auto" />
                <div className="flex space-x-4 mt-10 text-white text-lg">
                  <Link to="#">
                    <FaFacebookF />
                  </Link>
                  <Link to="#">
                    <FaInstagram />
                  </Link>
                  <Link to="#">
                    <FaLinkedinIn />
                  </Link>
                  <Link to="#">
                    <FaBehance />
                  </Link>
                  <Link to="#">
                    <FaYoutube />
                  </Link>
                  <Link to="#">
                    <FaTiktok />
                  </Link>
                </div>
              </div>
              <div className="my-5 text-left">
                <p className="text-[12px] font-semibold px-2 md:px-8">
                  We are a fast growing full scale digital agency with multiple
                  Certifications and Partnerships. Our team is proud to be
                  featured in multiple publications globally.
                </p>
              </div>
              <div className="px-2">
                <h3 className="text-lg font-semibold">Information</h3>
                <ul className="mt-2 space-y-2 text-[13px] font-semibold text-white">
                  <li>
                    <Link to="#">About Company</Link>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                  <li>
                    <Link to="#">Careers</Link>
                  </li>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="grid grid-cols-1 px-2 md:grid-cols-2 gap-14">
                <div className="text-[12px] font-semibold">
                  <h3 className="text-lg font-semibold">USA</h3>
                  <p className="my-2 text-[12px]">
                    Suite 220, 555 Republic Drive, Plano, Texas, USA 75074
                  </p>
                  <p>(469) 781-8845</p>
                  <p>info@pixarsart.com</p>
                  <Link
                    to="#"
                    className="flex items-center gap-2 mt-1 text-base"
                  >
                    See Location <FaArrowRight />
                  </Link>
                </div>
                {/* */}
                <div className="text-[12px] font-semibold">
                  <h3 className="text-lg font-semibold">ASIA</h3>
                  <p className="my-2 text-[12px]">NICHS 2, Lahore, Pakistan</p>
                  <p>(0334) 749 - 2777</p>
                  <p>careers@pixarsart.com</p>
                  <Link
                    to="#"
                    className="flex items-center gap-2 mt-1 text-base"
                  >
                    See Location <FaArrowRight />
                  </Link>
                </div>
                {/*  */}
                <div className="text-[12px] font-semibold">
                  <h3 className="text-lg font-semibold">UK</h3>
                  <p className="my-2 text-[12px]">
                    Loughton Essex, UK, IG10 3GW
                  </p>
                  <p>07778 270656</p>
                  <p>osama@pixarsart.co.uk</p>
                  <Link
                    to="#"
                    className="flex items-center gap-2 mt-1 text-base"
                  >
                    See Location <FaArrowRight />
                  </Link>
                </div>
                {/*  */}
                <div className="text-[12px] font-semibold">
                  <h3 className="text-lg font-semibold">UAE</h3>
                  <p className="my-2 text-[12px]">
                    Dubai Media City Building 08 <br /> Al Sufouh 2 - Dubai -
                    United Arab Emirates
                  </p>
                  <p>Licence #: 102808</p>
                  <p>(971) 58 - 565 - 5166</p>
                  <Link
                    to="#"
                    className="flex items-center gap-2 mt-1 text-base"
                  >
                    See Location <FaArrowRight />
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden h-96 px-2">
                <iframe
                  src="https://www.google.com/maps/embed?..."
                  className="w-full h-full overflow-auto"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-10 text-gray-700" />
      <div>
        <p className="text-center text-[12px] font-semibold mt-5">
          All Rights Reserved © 2025, Pixarsart Studios LLC & Pixarsart Studios
          (PVT) LTD
        </p>
      </div>
    </section>
  );
};

export default Footer;
