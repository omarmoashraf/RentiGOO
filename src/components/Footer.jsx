import { Typography } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LINKS = [
  {
    title: "Quick Links",
    items: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "our Fleet", to: "/cars" },
      { label: "Pricing", to: "/pricing" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Car Rental", to: "/cars" },
      { label: "Hourly Rental", to: "/pricing" },
      { label: "Daily Rental", to: "/pricing" },
      { label: "Weekly Rental", to: "/pricing" },
      { label: "Monthly Rental", to: "/pricing" },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white mt-12">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between">
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <Typography
              as={Link}
              to="/"
              variant="h6"
              className="mr-4 cursor-pointer py-1.5 flex items-center"
            >
              <img
                src="./logo.png"
                alt="RentiGO Logo"
                className="h-10 w-auto mr-2"
              />
              <section className="text-blue-400 text-xl font-bold">
                RentiGO
              </section>
            </Typography>

            <p className="text-blue-gray-900 max-w-sm">
              Your trusted partner for premium car rentals. Experience the
              freedom of the road with our modern, reliable fleet and
              exceptional service.
            </p>

            <div className="flex gap-4 mt-2">
              <IconButton
                variant="outlined"
                className="hover:bg-[#06f] hover:text-white transition-transform duration-500 hover:scale-105"
              >
                <FiLinkedin className="text-xl" />
              </IconButton>

              <IconButton
                variant="outlined"
                className="hover:bg-[#06f] hover:text-white transition-transform duration-500 hover:scale-105"
              >
                <FaFacebook className="text-xl" />
              </IconButton>
              <IconButton
                variant="outlined"
                className="hover:bg-[#06f] hover:text-white transition-transform duration-500 hover:scale-105"
              >
                <FaInstagram className="text-xl" />
              </IconButton>
              <IconButton
                variant="outlined"
                className="hover:bg-[#06f] hover:text-white transition-transform duration-500 hover:scale-105"
              >
                <FaTwitter className="text-xl" />
              </IconButton>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 text-center sm:text-left">
            {LINKS.map(({ title, items }, index) => (
              <ul key={index}>
                <Typography
                  variant="small"
                  className="mb-3 font-semibold text-xl text-black"
                >
                  {title}
                </Typography>
                {items.map(({ label, to }) => (
                  <li key={label}>
                    <Typography
                      as={Link}
                      to={to}
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-500"
                    >
                      {label}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
            <div>
              <Typography
                variant="small"
                className="mb-3 font-semibold text-xl text-black "
              >
                Contact Info
              </Typography>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-full text-blue-500">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-sm text-blue-gray-900">
                      +1(555)123-4567
                    </p>
                    <p className="text-sm text-gray-500">24/7 Support</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-full text-blue-500">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="font-medium text-blue-gray-900">
                      hello@rentigo.com
                    </p>
                    <p className="text-sm text-gray-500">General Inquiries</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-full text-blue-500">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-blue-gray-900">
                      123 Main Street
                    </p>
                    <p className="text-sm text-gray-500">New York, NY 10001</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">RentiGO</a>. All Rights
            Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
