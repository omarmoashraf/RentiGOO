import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Card, Input, Checkbox } from "@material-tailwind/react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { Chip } from "@material-tailwind/react";
import { MdOutlineSecurity } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { FaShuttleVan } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { TbCircleLetterS } from "react-icons/tb";
import { TbCircleLetterM } from "react-icons/tb";
import { TbCircleLetterE } from "react-icons/tb";
import {
  CardHeader,
  CardBody,
  CardFooter,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

const Home = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <Carousel
          className="rounded-xl h-[70vh] md:h-[80vh] lg:h-[90vh] "
          autoplay
          autoplayDelay={4000}
          loop
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-full w-full">
            <img
              src="./Home-1.jpg"
              alt="image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl  md:text-4xl lg:text-5xl"
              >
                Experience Luxury
              </Typography>
              <div className="mb-8 opacity-80  md:text-base">
                <span className="text-2xl text-[#06f] font-bold">
                  Premium Fleet at Your Service
                </span>
                <div className="text-white text-lg md:text-3xl">
                  Drive the finest vehicles with cutting-edge technology and
                  unmatched comfort
                </div>
              </div>
              <div className="flex gap-4">
                <Link to="/cars">
                  {" "}
                  <Button
                    size="lg"
                    color="white"
                    className="text-white bg-[#06f] hover:text-blue-200"
                  >
                    {`Browse Luxury Fleet   `}
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" color="white" variant="text">
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="./Home-2.jpg"
              alt="image 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Go Electric
              </Typography>
              <div className="mb-8 opacity-80 text-sm md:text-base">
                <span className="text-3xl text-[#06f] font-bold">
                  Sustainable Future Driving
                </span>
                <div className="text-white text-lg md:text-3xl">
                  Experience the future with our eco-friendly electric vehicle
                  collection
                </div>
              </div>
              <div className="flex gap-4">
                <Link to="/cars">
                  <Button
                    size="lg"
                    color="white"
                    className="text-white bg-[#06f] hover:text-blue-200"
                  >
                    {`Go Electric `}
                  </Button>
                </Link>

                <Link to="/about">
                  <Button size="lg" color="white" variant="text">
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="./Home-3.jpg"
              alt="image 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Unleash Power
              </Typography>
              <div className="mb-8 opacity-80 text-sm md:text-base">
                <div className="text-3xl text-[#06f] font-bold">
                  Premium Sports Collection
                </div>

                <div className="text-white text-lg md:text-3xl">
                  Feel the thrill with our exclusive selection of
                  high-performance sports cars
                </div>
              </div>
              <div className="flex gap-4">
                <Link to="./cars">
                  <Button
                    size="lg"
                    color="white"
                    className="text-white bg-[#06f] hover:text-blue-200"
                  >
                    Book Sport car
                  </Button>
                </Link>

                <Link to="/about">
                  <Button size="lg" color="white" variant="text">
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="flex flex-col items-center px-4">
        <form className="mt-8 w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Pickup Location */}
            <div className="flex flex-col w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="flex items-center gap-1 mb-1"
              >
                <CiLocationOn className="text-[#06f] text-xl" />
                Pickup Location
              </Typography>
              <Input
                type="text"
                size="md"
                placeholder="Enter your address"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              />
            </div>

            {/* Pick Up Date */}
            <div className="flex flex-col w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="flex items-center gap-1 mb-1"
              >
                <MdOutlineDateRange className="text-[#06f] text-xl" />
                Pick Up Date
              </Typography>
              <Input
                type="date"
                size="md"
                placeholder="dd/mm/yy"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            {/* Return Date */}
            <div className="flex flex-col w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="flex items-center gap-1 mb-1"
              >
                <MdOutlineDateRange className="text-[#06f] text-xl" />
                Return Date
              </Typography>
              <Input
                type="date"
                size="md"
                placeholder="dd/mm/yy"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            {/* Search Button */}
            <div className="flex justify-center items-end w-full">
              <Link to="./cars" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-[#06f] text-white w-full sm:w-auto"
                >
                  Search
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>

      <div className="featured_cars">
        <header className="text-center m-11">
          <h1 className="font-bold text-xl md:text-4xl  mt-20 mb-5 ">
            Featured Cars
          </h1>
          <p>
            Discover our handpicked selection of premium vehicles, perfect for
            any occasion.
          </p>
        </header>
        <div className="cards p-12 flex flex-col items-center md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          
            <Card className="w-full max-w-[20rem] shadow-lg transition-transform duration-500 hover:scale-105">
              <CardHeader floated={false} color="blue-gray">
                <img src="./Homecard-1.jpg" alt="ui/ux review check" />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                <div className="relative bottom-28 left-32 md:bottom-36 md:left-48">
                  <Chip
                    value="Available"
                    color="green"
                    size="sm"
                    className="absolute bottom-3 left-3 font-semibold"
                  />
                </div>
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-bold"
                  >
                    BMW 5 Series
                  </Typography>
                  <div>
                    <span className="text-[#06f]">$89</span>/day
                  </div>
                </div>
                <Typography color="gray">Luxury Sedan</Typography>
              
                <Typography
                  color="blue-gray"
                  className="flex items-center mt-4 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  5.0 (89 reviews)
                </Typography>
                <section className="grid grid-cols-3 gap-3 mt-5 text-center ">
                  <Chip
                    variant="ghost"
                    value="Auto"
                    className="text-gray-700"
                  />
                  <Chip
                    variant="ghost"
                    value="5 Seats"
                    className="text-gray-700"
                  />
                  <Chip
                    variant="ghost"
                    value="Premium"
                    className="text-gray-700"
                  />
                </section>
                <section className="price text-2xl mt-6 grid grid-cols-3">
                  <Link to="./cars/1">
                    <Button color="blue">Book</Button>
                  </Link>
                </section>
              </CardBody>
            </Card>
          

          
            <Card className="w-full md:max-w-[30rem] shadow-lg transition-transform duration-500 hover:scale-105 ">
              <CardHeader floated={false} color="blue-gray">
                <img src="./Homecard-5.jpg" alt="ui/ux review check" />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                <div className="relative bottom-28 left-32 md:bottom-40 md:left-48">
                  <Chip
                    value="Available"
                    color="green"
                    size="sm"
                    className="absolute bottom-3 left-3 font-semibold"
                  />
                </div>
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-bold"
                  >
                    Tesla Model 3
                  </Typography>
                  <div>
                    <span className="text-[#06f]">$75</span>/day
                  </div>
                </div>
                <Typography color="gray ">Electric Sedan</Typography>
                <Typography color="blue-gray" className="flex items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  4.8 (89 reviews)
                </Typography>
                <section className="grid grid-cols-3 gap-2 mt-5 text-center ">
                  <Chip
                    variant="ghost"
                    value="Electric"
                    className="text-gray-700"
                  />
                  <Chip
                    variant="ghost"
                    value="5 Seats"
                    className="text-gray-700"
                  />
                  <Chip
                    variant="ghost"
                    value="Eco Friendly"
                    className="w-[9em] text-gray-700"
                  />
                </section>
                <section className="price text-2xl mt-6 grid grid-cols-3">
                  <Link to="./cars/2">
                    <Button color="blue">Book</Button>
                  </Link>
                </section>
              </CardBody>
            </Card>
          

          
            <Card className="w-full max-w-[20rem] shadow-lg transition-transform duration-500 hover:scale-105">
              <CardHeader floated={false} color="blue-gray">
                <img src="./Homecard-3.jpg" alt="ui/ux review check" />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                <div className="relative bottom-28 left-32 md:bottom-36 md:left-48">
                  <Chip
                    value="Available"
                    color="green"
                    size="sm"
                    className="absolute bottom-3 left-3 font-semibold"
                  />
                </div>
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-bold"
                  >
                    Range Rover
                  </Typography>
                  <section>
                    <span className="text-[#06f]">$120</span>/day
                  </section>
                </div>
                <Typography color="gray ">Luxury Sedan</Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center mt-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  4.0 (127 reviews)
                </Typography>
                <section className="grid grid-cols-3 gap-3 mt-5 text-center  ">
                  <Chip
                    variant="ghost"
                    value="Auto"
                    className="text-gray-700"
                  />
                  <Chip
                    variant="ghost"
                    value="5 Seats"
                    className="text-gray-700"
                  />
                  <Chip
                    variant="ghost"
                    value="Premium"
                    className="text-gray-700"
                  />
                </section>
                <section className="price text-2xl mt-6 grid grid-cols-3">
                  <Link to="./cars/3">
                    <Button color="blue">Book</Button>
                  </Link>
                </section>
              </CardBody>
            </Card>
          

          
            <Card className="w-full max-w-[20rem] shadow-lg transition-transform duration-500 hover:scale-105">
              <CardHeader floated={false} color="blue-gray">
                <img src="./Homecard-4.jpg" alt="ui/ux review check" />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                <div className="relative bottom-28 left-32 md:bottom-36 md:left-40">
                  <Chip
                    value="Not Available"
                    color="#red"
                    size="xsm"
                    className="absolute bottom-3 left-3 font-semibold bg-gray-600"
                  />
                </div>
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex  items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className=" font-bold"
                  >
                    Porsche 911
                  </Typography>
                  <section>
                    {" "}
                    <span className="text-[#06f]">$200</span>/day
                  </section>
                </div>
                <Typography color="gray">Luxury Sedan</Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center mt-4 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-0.5 h-5 w-5 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  5.0 (89 reviews)
                </Typography>
                <section className="grid grid-cols-3 gap-3 mt-5 text-center ">
                  <Chip
                    variant="ghost"
                    value="Auto"
                    className="text-gray-700"
                  />
                  <Chip
                    variant="ghost"
                    value="2 Seats"
                    className="text-gray-700"
                  />
                  <Chip
                    variant="ghost"
                    value="Sports"
                    className="text-gray-700"
                  />
                </section>
                <section className="price text-2xl mt-6 grid grid-cols-3">
                  <Button color="blue" disabled>
                    Book
                  </Button>
                </section>
              </CardBody>
            </Card>
          
        </div>
      </div>
      <section className="flex justify-center m-8">
        <Link to="./cars">
          <Button
            variant="outlined"
            className="text-[#06f]"
          >{`View All Vehicles >`}</Button>
        </Link>
      </section>
      <div className="mt-22">
        <header>
          <h1 className="font-bold text-3xl text-black text-center">
            Why Choose Rentigo?
          </h1>
          <p className="text-center text-gray-600">
            Experience the difference with our commitment to excellence and
            customer satisfaction.
          </p>
        </header>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-7 ">
          <Card className="w-50 text-center w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex justify-center">
                <MdOutlineSecurity className="text-[#06f] text-3xl text-center" />
              </div>
              <div className="flex justify-center">
                <Typography color="blue-gray" className="text-2xl font-bond">
                  24/7 Support
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                Round-the-clock customer service and roadside assistance
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-50 text-center w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex justify-center">
                <GoClock className="text-[#06f] text-3xl text-center" />
              </div>
              <div className="flex justify-center">
                <Typography color="blue-gray" className="text-2xl font-bond">
                  Fully Insured
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                All vehicles covered with comprehensive insurance
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-50 text-center w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex justify-center">
                <FaShuttleVan className="text-[#06f] text-3xl text-center" />
              </div>
              <div className="flex justify-center">
                <Typography color="blue-gray" className="text-2xl font-bond">
                  Premium Fleet
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                Latest models from top brands, regularly maintained
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-50 text-center w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex justify-center">
                <FaStar className="text-[#06f] text-3xl text-center" />
              </div>
              <div className="flex justify-center">
                <Typography color="blue-gray" className="text-2xl font-bond">
                  Top Rated
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                4.9/5 stars from over 10,000+ satisfied customers
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="mt-24">
        <header>
          {" "}
          <h1 className="font-bold text-3xl text-black text-center">
            What Our Customers Say
          </h1>
          <p className="text-center text-gray-600">
            Don't just take our word for it. Here's what our satisfied customers
            have to say.
          </p>
        </header>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-7 ">
          <Card className="w-50  w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex mb-5 ">
                <MdStarRate className="text-yellow-500 text-xl text-center" />
                <MdStarRate className="text-yellow-500 text-xl text-center" />
                <MdStarRate className="text-yellow-500 text-xl text-center" />
                <MdStarRate className="text-yellow-500 text-xl text-center" />
                <MdStarRate className="text-yellow-500 text-xl text-center" />
              </div>

              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                "Amazing service! The BMW was in perfect condition and the
                booking process was seamless."
              </Typography>
              <div className="flex justify-start mt-8 gap-5">
                <TbCircleLetterS className="text-3xl text-[#06f]" />
                <Typography color="blue-gray" className="text-2xl font-bond">
                  Sarah Johnson
                </Typography>
              </div>
            </CardBody>
          </Card>
          <Card className="w-50  w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex mb-5 ">
                <MdStarRate className="text-yellow-500 text-xl text-center" />
                <MdStarRate className="text-yellow-500 text-xl text-center" />
                <MdStarRate className="text-yellow-500 text-xl text-center" />
                <MdStarRate className="text-yellow-500 text-xl text-center" />
                <MdStarRate className="text-yellow-500 text-xl text-center" />
              </div>

              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                "Best car rental experience ever. Clean cars, fair prices, and
                excellent customer support."
              </Typography>
              <div className="flex justify-start mt-8 gap-5">
                <TbCircleLetterM className="text-3xl text-[#06f]" />
                <Typography color="blue-gray" className="text-2xl font-bond">
                  Michael Chen
                </Typography>
              </div>
            </CardBody>
          </Card>
          <Card className="w-50  w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex mb-5 ">
                <MdStarRate className="text-yellow-500 text-xl text-center" />
                <MdStarRate className="text-yellow-500 text-xl text-center" />
                <MdStarRate className="text-yellow-500 text-xl text-center" />
                <MdStarRate className="text-yellow-500 text-xl text-center" />
                <MdStarRate className="text-yellow-500 text-xl text-center" />
              </div>

              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                "Highly recommend Rentigo! Professional service and a great
                selection of vehicles."
              </Typography>
              <div className="flex justify-start mt-8 gap-5">
                <TbCircleLetterE className="text-3xl text-[#06f]" />
                <Typography color="blue-gray" className="text-2xl font-bond">
                  Emma Davis
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="bg-blue-600 flex-row p-7 text-center text-white">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold">
            Ready to Hit the Road?
          </h1>
          <section className="content1 ">
            <p>
              Join thousands of satisfied customers and experience the Rentigo
              difference today.
            </p>
          </section>
          <section className="content2 flex flex-col items-center gap-7 mt-4 md:flex-row justify-center">
            <Link to="/cars">
              <Button className="bg-white text-blue-600">
                Starting Booking Now
              </Button>
            </Link>
            <Link to="/contact">
              {" "}
              <Button className="bg-white text-blue-600">Contact us</Button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
