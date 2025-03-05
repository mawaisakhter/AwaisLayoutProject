import Vector from "../../assets/images/Vector-11.svg";
import Vector5 from "../../assets/images/Vector-5.svg";
import "../../assets/css/Animation.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "WEB DEVELOPMENT",
      description:
        "We are a team of Skilled Professionals developing your ideas into Reality. We are a team of Skilled Professionals...",
      link: "#",
    },
    {
      id: 2,
      title: "E-COMMERCE DEVELOPMENT",
      description:
        "Delivering High-Quality E-Commerce Web Development Services. Firstly, The technicality behind the creativity...",
      link: "#",
    },
    {
      id: 3,
      title: "APPLICATION DEVELOPMENT",
      description:
        "We are a team of Skilled Professionals developing your ideas into Reality. Nowadays, Application development...",
      link: "#",
    },
    {
      id: 4,
      title: "CLOUD WEB AND DATA SCIENCE",
      description:
        "We are a team of Skilled Professionals developing your ideas into Reality. Nowadays, Application development...",
      link: "#",
    },
    {
      id: 5,
      title: "CREATIVE DESIGNS",
      description:
        "Creative Designs are the basic requirement of all businesses. PixarsArt is the right choice for you to...",
      link: "#",
    },
  ];

  return (
    <section className="bg-dark font-[FaSolid] text-white py-16 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 items-center">
        <div className="text-left">
          <p className="text-lg">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Solutions We Provide
          </h2>
        </div>

        <div className="text-lg font-semibold md:text-center">
          You have come to the Right Place. PixarsArt is a Unified Platform for
          all things Web & Mobile.
        </div>

        <div className="flex justify-end">
          <Button text="Contact Us" icon={Vector} onClick={() => alert("Button Clicked!")} />
        </div>
      </div>
      <div className="bg-dark text-white py-12 md:px-20">
        <div className="container mx-auto">
          {services.map((service) => (
            <div key={service.id} className="relative mt-10">
              <div className="flex flex-wrap items-center py-6 border-b border-gray-700 last:border-0">
                <div className="w-1/12 text-xl font-bold text-center">
                  <Link href={service.link} className="text-white">
                    {service.id}
                  </Link>
                </div>
                <div className="w-1/3">
                  <h3 className="text-base md:text-lg font-semibold">
                    <Link
                      href={service.link}
                      className="text-white transition"
                    >
                      {service.title}
                    </Link>
                  </h3>
                </div>

                <div className="w-5/12 text-gray-300">
                  <p>
                    <Link
                      a={service.link}
                      className="text-gray-300 text-[12px] transition"
                    >
                      {service.description}
                    </Link>
                  </p>
                </div>

                <div className="w-2/12 flex justify-end">
                  <Link href={service.link} className="arrow-hover">
                    <img src={Vector5} alt="pixarsart" className="w-5 md:w-8 h5 md:h-8" />
                  </Link>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-[#DBC572] to-transparent w-full animate-moveLine"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
