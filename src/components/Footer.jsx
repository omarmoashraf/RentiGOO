import { Typography, IconButton } from "@material-tailwind/react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const LINKS = [
  {
    title: "Quick Links",
    items: [
      { label: "Home", to: "/" },
      { label: "About Us", to: "/about" },
      { label: "Our Fleet", to: "/cars" },
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
    <footer className="relative w-full bg-light-background dark:bg-dark-background pt-10 text-blue-gray-900 transition-colors duration-300">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        {/* ===== Top Section ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 justify-between">
          {/* --- Left Info --- */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <Typography
              as={Link}
              to="/"
              variant="h6"
              className="flex items-center cursor-pointer"
            >
              <img
                src="./logo.png"
                alt="RentiGO Logo"
                className="h-10 w-auto mr-2"
              />
              <span className="text-blue-500 text-2xl font-bold">RentiGO</span>
            </Typography>

            <p className="text-sm sm:text-base max-w-sm text-blue-gray-800 dark:text-gray-300">
              Your trusted partner for premium car rentals. Experience the
              freedom of the road with our modern, reliable fleet and
              exceptional service.
            </p>

            <div className="flex gap-3 sm:gap-4 mt-3 flex-wrap justify-center lg:justify-start">
              {[FiLinkedin, FaFacebook, FaInstagram, FaTwitter].map(
                (Icon, i) => (
                  <IconButton
                    key={i}
                    variant="outlined"
                    className="hover:bg-[#06f] hover:text-white text-blue-gray-900 dark:text-gray-300 transition-transform duration-300 hover:scale-110"
                  >
                    <Icon className="text-lg sm:text-xl" />
                  </IconButton>
                )
              )}
            </div>
          </div>

          {/* --- Links + Contact --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center text-center md:justify-items-start">
            {LINKS.map(({ title, items }, index) => (
              <ul key={index}>
                <Typography
                  variant="small"
                  className="mb-3 font-semibold text-lg sm:text-xl text-light-primary_text dark:text-dark-header_text"
                >
                  {title}
                </Typography>
                {items.map(({ label, to }) => (
                  <li key={label}>
                    <Typography
                      as={Link}
                      to={to}
                      color="gray"
                      className="py-1.5 block text-sm sm:text-base font-normal 
                       transition-colors 
                         text-light-primary_text dark:text-dark-secondary_text  hover:!text-blue-500"
                    >
                      {label}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}

            {/* --- Contact Info --- */}
            <div>
              <Typography
                variant="small"
                className="mb-3 font-semibold text-lg sm:text-xl text-black dark:text-white"
              >
                Contact Info
              </Typography>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 justify-center sm:justify-start">
                  <div className="p-2 bg-blue-50 rounded-full text-blue-500">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-sm text-light-primary_text dark:text-dark-secondary_text  ">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-xs text-gray-500">24/7 Support</p>
                  </div>
                </li>

                <li className="flex items-start  justify-center sm:justify-start">
                  <div className="p-2 bg-blue-50 rounded-full text-blue-500">
                    <FaEnvelope />
                  </div>
                  <div className="">
                    <p className="text-sm font-medium max text-light-primary_text dark:text-dark-secondary_text ">
                      hello@rentigo.com
                    </p>

                    <p className="text-xs text-gray-500">General Inquiries</p>
                  </div>
                </li>

                <li className="flex items-start gap-3 justify-center sm:justify-start">
                  <div className="p-2 bg-blue-50 rounded-full text-blue-500">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-light-primary_text dark:text-dark-secondary_text ">
                      123 Main Street
                    </p>
                    <p className="text-xs text-gray-500">New York, NY 10001</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="mt-10 border-t border-blue-gray-100 dark:border-gray-700 py-4 text-center">
          <Typography
            variant="small"
            className="text-sm sm:text-base font-normal text-blue-gray-800 dark:text-gray-400"
          >
            &copy; {currentYear}{" "}
            <a
              href="https://material-tailwind.com/"
              className="text-blue-500 hover:underline"
            >
              RentiGO
            </a>
            . All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
