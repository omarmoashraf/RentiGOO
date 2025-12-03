import { Link } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { IoCarSportSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { BiSolidMedal } from "react-icons/bi";
import { Spinner } from "@material-tailwind/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const About = () => {
  return (
    <div className="main">
      <div className="  dark:bg-dark-background text-dark-gray p-16 top mt-4">
        <div className="">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 dark:text-dark-header_text text-light-text ">
            Driving Dreams
          </h1>
          <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed text-center dark:text-dark-secondary_text  text-light-text ">
            Born from a passion for exceptional automotive experiences, Rentigo
            has evolved into a trusted leader in premium car rentals, serving
            customers across the nation.
          </p>
        </div>
      </div>
      <div className=" mt-7 p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <section className="left">
          <h2 className="font-bold dark:text-dark-header_text text-light-primary_text text-3xl md:text-4xl mb-5">
            Our Journey
          </h2>
          <p className="text-gray-600 leading-loose dark:text-dark-secondary_text">
            Founded in 2024, RentiGO started with one goal — to make car rentals
            smarter, faster, and more transparent. Today, we serve thousands of
            customers across Egypt, offering a modern fleet, flexible plans, and
            a seamless digital experience. Our journey continues as we drive
            toward a smarter, customer-focused future in mobility.
          </p>
          <Typography as={Link} to="/contact" className="mt-6">
            <Button className="bg-light-Buttons dark:bg-dark-Buttons mb-4">
              Get Touch
            </Button>
          </Typography>
        </section>
        <section className="right rounded-3xl overflow-hidden shadow-lg">
          <img
            src="./about.jpg"
            alt="About Rentigo"
            className="w-full md:h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </section>
      </div>
      <div className="cards1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-7">
        <Card
          className="w-full text-center h-full object-cover
             bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
        >
          <CardBody>
            <div className="flex justify-center">
              <IoCarSportSharp className="text-4xl text-center dark:text-dark-secondary_text" />
            </div>

            <div className="mb-2 flex items-center justify-center text-center">
              <Typography
                color="blue-gray"
                className="text-3xl font-bold text-[#06f]"
              >
                500+
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75 dark:text-dark-secondary_text"
            >
              Premium Vehicles
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="w-full text-center h-full object-cover
             bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
        >
          <CardBody>
            <div className="flex justify-center">
              <IoPersonCircle className="text-4xl text-center dark:text-dark-secondary_text" />
            </div>

            <div className="mb-2 flex items-center justify-center text-center">
              <Typography
                color="blue-gray"
                className="text-3xl font-bold text-[#06f]"
              >
                50K+
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75 dark:text-dark-secondary_text"
            >
              Happy Customers
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="w-full text-center h-full object-cover
             bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
        >
          <CardBody>
            <div className="flex justify-center">
              <MdLocationOn className="text-4xl text-center dark:text-dark-secondary_text" />
            </div>

            <div className="mb-2 flex items-center justify-center text-center">
              <Typography
                color="blue-gray"
                className="text-3xl font-bold text-[#06f]"
              >
                25+
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75 dark:text-dark-secondary_text "
            >
              City Locations
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="w-full text-center h-full object-cover
             bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
        >
          <CardBody>
            <div className="flex justify-center ">
              <FaMedal className="text-4xl text-center dark:text-dark-secondary_text" />
            </div>

            <div className="mb-2 flex items-center justify-center text-center">
              <Typography
                color="blue-gray"
                className="text-3xl font-bold text-[#06f]"
              >
                4.9/5
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75 dark:text-dark-secondary_text "
            >
              Customer Rating
            </Typography>
          </CardBody>
        </Card>
      </div>
      <div className="cards2 lg:flex justify-center grid grid-cols-1 gap-4 p-4 justify-items-center  md:grid-cols-2   lg:gap-80  ">
        <Card
          className="mt-6 w-70 md:w-96  bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
        >
          <CardBody>
            <FiTarget className="text-5xl text-[#06f]" />
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-2xl font-bold text-light-primary_text dark:text-dark-header_text"
            >
              Our Mission
            </Typography>
            <Typography className="dark:text-dark-secondary_text ">
              To revolutionize the car rental experience by providing premium
              vehicles, exceptional service, and innovative solutions that
              exceed customer expectations. We're committed to making every
              journey memorable and stress-free.
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="mt-6 w-70 md:w-96 bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
        >
          <CardBody>
            <FaEye className="text-5xl text-[#06f]" />
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-2xl font-bold text-light-primary_text dark:text-dark-header_text"
            >
              Our Vision
            </Typography>
            <Typography className="dark:text-dark-secondary_text ">
              To become the global leader in premium car rentals, known for our
              commitment to sustainability, innovation, and customer
              satisfaction. We envision a future where renting a car is as
              simple and enjoyable as driving one.
            </Typography>
          </CardBody>
        </Card>
      </div>
      <div className="">
        <h1 className="font-bold text-3xl  text-center mt-3 mb-3 text-light-primary_text dark:text-dark-header_text">
          Our Value
        </h1>
        <p className="text-center text-lg text-gray-600">
          These core principles guide every decision we make and every service
          we provide.
        </p>
      </div>
      <div className="cards3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-7">
        <Card
          className="w-full text-center h-full object-cover
             bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
        >
          <CardBody>
            <div className="flex justify-center mb-4 ">
              <FiTarget className="text-5xl text-[#06f]" />
            </div>

            <div className="mb-2 flex items-center justify-center">
              <Typography
                color="blue-gray"
                className="font-medium dark:text-dark-header_text"
              >
                Excellence
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="text-center opacity-75 dark:text-dark-secondary_text"
            >
              We strive for perfection in every aspect of our service, from
              vehicle quality to customer support.
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="w-full text-center h-full object-cover
             bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
        >
          <CardBody>
            <div className="flex justify-center mb-4 ">
              <MdPeople className="text-5xl text-[#06f]" />
            </div>

            <div className="mb-2 flex items-center justify-center">
              <Typography
                color="blue-gray"
                className="font-medium dark:text-dark-header_text"
              >
                Customer First
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="text-center opacity-75 dark:text-dark-secondary_text"
            >
              Our customers are at the heart of everything we do. Your
              satisfaction is our success.
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="w-full text-center h-full object-cover
             bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
        >
          <CardBody>
            <div className="flex justify-center mb-4 ">
              <FaEye className="text-5xl text-[#06f]" />
            </div>

            <div className="mb-2 flex items-center justify-center">
              <Typography
                color="blue-gray"
                className="font-medium dark:text-dark-header_text"
              >
                Transparency
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="text-center opacity-75 dark:text-dark-secondary_text"
            >
              Clear pricing, honest communication, and no hidden fees. What you
              see is what you get.
            </Typography>
          </CardBody>
        </Card>
        <Card
          className="w-full text-center h-full object-cover
             bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
        >
          <CardBody>
            <div className="flex justify-center mb-4 ">
              <BiSolidMedal className="text-5xl text-[#06f]" />
            </div>

            <div className="mb-2 flex items-center justify-center">
              <Typography
                color="blue-gray"
                className="font-medium dark:text-dark-header_text "
              >
                Innovation
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="text-center opacity-75 dark:text-dark-secondary_text"
            >
              We continuously evolve our services with cutting-edge technology
              and modern solutions.
            </Typography>
          </CardBody>
        </Card>
      </div>
      <div className="bg-blue-600 flex-row p-7 text-center text-white">
        <h1 className="mb-4 text-3xl md:text-4xl font-bold">
          Ready to Experience the Difference?
        </h1>
        <section className="content1 ">
          <p>
            Join thousands of satisfied customers who have chosen Rentigo for
            their car rental needs. Discover why we're the preferred choice for
            discerning travelers.
          </p>
        </section>
        <section className="content2 flex flex-col items-center gap-7 mt-4 md:flex-row justify-center">
          <Link to="/cars">
            <Button className="bg-white text-blue-600">Browse Our Fleet</Button>
          </Link>
          <Link to="/contact">
            {" "}
            <Button className="bg-white text-blue-600">Contact us</Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
