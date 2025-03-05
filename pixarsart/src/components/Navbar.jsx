import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logoo from "../assets/images/Logoo.webp";
import Logo from "../assets/images/Logo.webp";
import "../assets/css/Animation.css";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaintBrush,
  FaCode,
  FaShoppingCart,
  FaMobileAlt,
  FaBox,
  FaBullhorn,
} from "react-icons/fa";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigation = [
    { title: "SERVICES", path: "#", dropdown: true },
    { title: "ENTERPRISE", path: "#" },
    { title: "ABOUT US", path: "#" },
    { title: "OUR WORK", path: "#" },
    { title: "RESOURCES", path: "#" },
    { title: "CAREERS", path: "#" },
    { title: "CONTACT US", path: "#" },
  ];

  const services = [
    {
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      items: ["Web Design", "Logo + Visual Identity", "UI/UX Design"],
    },
    {
      icon: <FaCode />,
      title: "Web Development",
      items: ["WordPress", "Custom CMS", "Drupal", "Squarespace", "Wix"],
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce",
      items: ["Shopify", "WooCommerce", "BigCommerce", "Open Cart"],
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      items: ["iOS", "Android", "Hybrid", "React Native"],
    },
    {
      icon: <FaBox />,
      title: "Product Development",
      items: [
        "MVP",
        "Custom Application Development",
        "SaaS Application Development",
        "Flashing Flights",
        "Kanban",
        "Umrah Planners",
      ],
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      items: [
        "Content Marketing",
        "Pay Per Click",
        "Search Engine Optimization",
        "Social Media Marketing",
      ],
    },
  ];

  return (
    <>
      <header className="bg-[#38215A] w-full font-[FaSolid] text-white py-2 px-12 flex justify-between items-center text-sm fixed top-0 left-0 z-50">
        <p>Welcome to Pixarsart</p>
        <div className="flex space-x-4">
          <span>USA: (469) 781-8845</span>
        </div>
      </header>
      <nav className="font-kanit text-[12px] font-normal leading-[35px] text-white">
        <div className="flex justify-between items-center py-2 px-2 fixed top-9 left-0 w-full z-50 ">
          <div className="">
            <Link to="/" className="text-xl font-bold">
              {state ? (
                <img
                  src={Logo}
                  alt="hello"
                  className="w-44 h-auto mt-10 fixed top-0 left-0 z-50"
                />
              ) : (
                <img src={Logoo} alt="hello" />
              )}
            </Link>
          </div>
          <div
            className={`hidden md:flex md:items-center md:space-x-6 ml-auto ${
              state ? "md:hidden" : ""
            }`}
          >
            {navigation.map((item, idx) => (
              <>
                <Link
                  key={idx}
                  to={item.path}
                  className="relative group overflow-hidden block"
                >
                  {item.title.split("").map((char, i) => (
                    <span
                      key={i}
                      className="relative group inline-block transition-transform transform group-hover:animate-moveUpDown"
                      style={{
                        animationDelay: `${i * 50}ms`,
                        display: "inline-block",
                      }}
                      onMouseEnter={() =>
                        item.dropdown && setOpenDropdown(true)
                      }
                      onMouseLeave={() =>
                        item.dropdown && setOpenDropdown(false)
                      }
                    >
                      {char}
                    </span>
                  ))}
                </Link>
                {item.dropdown && openDropdown && (
                  <div
                    className={`absolute top-20 mt-2 -left-6 w-full bg-[#121212] py-6 px-4`}
                    onMouseEnter={() => setOpenDropdown(true)}
                    onMouseLeave={() => setOpenDropdown(false)}
                  >
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                      {services.map((service, index) => (
                        <div key={index} className="p-5 transition-all">
                          <div className="flex items-center space-x-3 text-lg font-semibold mb-2">
                            <span className="text-xl">{service.icon}</span>
                            <h3>{service.title}</h3>
                          </div>
                          <ul className="text-gray-400">
                            {service.items.map((item, idx) => (
                              <li
                                key={idx}
                                className="hover:text-white transition-all"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="grid md:grid-cols-12 grid-rows-3 md:grid-rows-1 gap-6 text-white text-sm text-center md:text-left"></div>
                  </div>
                )}
              </>
            ))}
          </div>
          <button
            className="menu-btn text-white md:ml-6"
            onClick={() => setState(!state)}
          >
            {!state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-6 h-6"
              >
                <circle cx="2" cy="2" r="1.5" />
                <circle cx="8" cy="2" r="1.5" />
                <circle cx="14" cy="2" r="1.5" />
                <circle cx="2" cy="8" r="1.5" />
                <circle cx="8" cy="8" r="1.5" />
                <circle cx="14" cy="8" r="1.5" />
                <circle cx="2" cy="14" r="1.5" />
                <circle cx="8" cy="14" r="1.5" />
                <circle cx="14" cy="14" r="1.5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`absolute top-2 left-0  w-full bg-[#121212] z-20 ${
            state ? "block" : "hidden"
          } py-6 px-4`}
        >
          <div className="grid md:grid-cols-12 grid-rows-3 md:grid-rows-1 gap-6 text-white text-sm text-center md:text-left">
            <div className="md:col-span-2 flex md:flex-col flex-row justify-center md:items-start items-center space-x-4 md:space-x-0 md:space-y-4 order-3 md:order-1">
              <a href="#" className="text-xl hover:text-gray-400">
                <FaFacebook />
              </a>
              <a href="#" className="text-xl hover:text-gray-400">
                <FaTwitter />
              </a>
              <a href="#" className="text-xl hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" className="text-xl hover:text-gray-400">
                <FaLinkedin />
              </a>
            </div>

            <ul className="md:col-span-6 mt-28 space-y-2 order-1">
              {navigation.map((item, idx) => (
                <li key={idx} className="border-b border-gray-600">
                  <Link
                    key={idx}
                    to={item.path}
                    className="block p-3 text-2xl md:text-6xl"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="md:col-span-4 md:text-left mt-28 text-center order-2 md:order-3 font-kanit font-semibold leading-[29.5056px] text-white">
              <div className="max-w-2xl mx-auto p-6">
                <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold">USA</h3>
                  <p>Phone: (469) 781-8845</p>
                  <p>Location: Plano, Texas, 75074</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold">UAE</h3>
                  <p>
                    Address: Ground Floor, Building 16, Dubai Internet City,
                    Dubai, United Arab Emirates
                  </p>
                  <p>Licence #: 102808</p>
                  <p>Phone: (971) 58 - 565 - 5166</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold">ASIA</h3>
                  <p>Phone: (334) 749 - 2777</p>
                  <p>Location: NICHS 2, Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
