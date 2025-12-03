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
import React, { useState, useEffect } from "react";
import { Spinner } from "@material-tailwind/react";
import {
  CardHeader,
  CardBody,
  CardFooter,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Normalize car data
  const normalizeCar = (car) => ({
    id: car.id,
    name: car.name,
    image: car.image || "./default-car.jpg",
    price: car.price || 0,
    type: car.type || "Unknown",
    rating: car.rating || 0,
    reviews: car.reviews || 0,
    features: car.features || [],
    available: car.available ?? true,
  });

  useEffect(() => {
    const rawApi = import.meta.env.VITE_API_URL || "";
    const API = rawApi.replace(/\/+$/, "");

    setLoading(true);
    setError(null);

    fetch(`${API}/api/v1/cars`)
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text().catch(() => "");
          throw new Error(`Status ${res.status} ${text}`);
        }
        return res.json();
      })
      .then((rawData) => {
        const payload = Array.isArray(rawData)
          ? rawData
          : rawData?.data ?? rawData?.cars ?? [];

        const normalized = payload.map(normalizeCar).slice(0, 4); // أربع عربيات فقط
        setCars(normalized);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setError(err.message || "Failed to load cars");
      })
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 dark:bg-dark-background">
        <div>
          <Spinner className="h-12 w-12 dark:text-dark-header_text " />
        </div>

        <h1 className="text-center dark:text-dark-header_text mt-2 ">
          Loading 
        </h1>
      </div>
    );
  }
  return (
    <div>
      <div className="overflow-hidden">
        <Carousel
          className=" h-[70vh] md:h-[80vh] lg:h-[90vh] "
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
                <span className="text-2xl text-dark-Buttons font-bold">
                  Premium Fleet at Your Service
                </span>
                <div className="hidden sm:hidden md:block text-lg md:text-3xl md:text-white">
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
                <span className="text-3xl text-dark-Buttons font-bold">
                  Sustainable Future Driving
                </span>
                <div className="hidden sm:hidden md:block text-lg md:text-3xl md:text-white">
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
                <div className="text-3xl text-dark-Buttons font-bold">
                  Premium Sports Collection
                </div>

                <div className="hidden sm:hidden md:block text-lg md:text-3xl md:text-white">
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
        <form className="mt-8 w-full max-w-5xl  bg-white shadow-lg rounded-2xl p-6 md:p-8 dark:bg-dark-background ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Pickup Location */}
            <div className="flex flex-col w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="flex items-center gap-1 mb-1 dark:text-dark-header_text"
              >
                <CiLocationOn className="text-[#06f] text-xl" />
                Pickup Location
              </Typography>
              <Input
                type="text"
                size="md"
                placeholder="Enter your address"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:text-dark-header_text"
              />
            </div>

            {/* Pick Up Date */}
            <div className="flex flex-col w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="flex items-center gap-1 mb-1 dark:text-dark-header_text"
              >
                <MdOutlineDateRange className="text-[#06f] text-xl" />
                Pick Up Date
              </Typography>
              <Input
                type="date"
                size="md"
                placeholder="dd/mm/yy"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:text-dark-header_text"
                labelProps={{
                  className: "before:content-none after:content-none ",
                }}
              />
            </div>

            {/* Return Date */}
            <div className="flex flex-col w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="flex items-center gap-1 mb-1 dark:text-dark-header_text"
              >
                <MdOutlineDateRange className="text-[#06f] text-xl" />
                Return Date
              </Typography>
              <Input
                type="date"
                size="md"
                placeholder="dd/mm/yy"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:text-dark-header_text"
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
                  className="bg-[#06f] text-white w-full sm:w-auto dark:bg-dark-Buttons"
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
          <h1 className="font-bold text-xl md:text-4xl  mt-20 mb-5  dark:text-dark-header_text">
            Featured Cars
          </h1>
          <p className="dark:text-dark-secondary_text">
            Discover our handpicked selection of premium vehicles, perfect for
            any occasion.
          </p>
        </header>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 place-items-center">
          {loading && (
            <div className="flex justify-center align-middle h-screen w-full">
              <Spinner className="h-12 w-12 dark:text-dark-header_text" />
              <p className="text-center dark:text-dark-header_text mt-2 ">
                Loading cars...
              </p>
            </div>
          )}
          {error && <p className="text-red-600">{error}</p>}
          {cars.map((car) => (
            <Card
              key={car.id}
              className="bg-light-background dark:bg-dark-background border border-gray-300 dark:border-gray-300 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <CardHeader
                floated={false}
                color="blue-gray"
                className="relative"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <Chip
                  value={car.available ? "Available" : "BOOKED"}
                  color={car.available ? "green" : "red"}
                  size="sm"
                  className={`absolute top-3 right-3 font-semibold ${
                    !car.available ? "text-white" : ""
                  }`}
                />
              </CardHeader>

              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-bold dark:text-dark-header_text"
                  >
                    {car.name}
                  </Typography>
                  <div>
                    <span className="text-[#06f]">${car.price}</span>/day
                  </div>
                </div>

                <Typography
                  color="gray"
                  className="dark:text-dark-secondary_text"
                >
                  {car.type}
                </Typography>

                <Typography
                  color="blue-gray"
                  className="flex items-center mt-4 font-normal dark:text-dark-secondary_text"
                >
                  <FaStar className="text-yellow-600 mr-1" /> {car.rating} (
                  {car.reviews} reviews)
                </Typography>

                <section className="grid grid-cols-3 gap-3 mt-5 text-center">
                  {car.features.map((feature, idx) => (
                    <Chip
                      key={idx}
                      variant="ghost"
                      value={feature}
                      className="text-gray-700 dark:bg-dark-header_text"
                    />
                  ))}
                </section>

                <section className="mt-6 ">
                  <Link to={`./cars/${car.id}`}>
                    <Button color="blue" disabled={!car.available}>
                      Book
                    </Button>
                  </Link>
                </section>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <section className="flex justify-center m-8">
        <Link to="./cars">
          <Button
            variant="outlined"
            className="text-[#06f]"
          >{`View All Vehicles `}</Button>
        </Link>
      </section>
      <div className="mt-22">
        <header>
          <h1 className="font-bold text-3xl text-black text-center dark:text-dark-header_text">
            Why Choose Rentigo?
          </h1>
          <p className="text-center text-gray-600 dark:text-dark-secondary_text">
            Experience the difference with our commitment to excellence and
            customer satisfaction.
          </p>
        </header>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-7 ">
          <Card
            className="w-50 text-center w-full h-full bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
          >
            <CardBody>
              <div className="flex justify-center">
                <MdOutlineSecurity className="text-[#06f] text-3xl text-center" />
              </div>
              <div className="flex justify-center">
                <Typography
                  color="blue-gray"
                  className="text-2xl font-bond dark:text-dark-header_text"
                >
                  24/7 Support
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 dark:text-dark-secondary_text"
              >
                Round-the-clock customer service and roadside assistance
              </Typography>
            </CardBody>
          </Card>
          <Card
            className="w-50 text-center w-full h-full bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
          >
            <CardBody>
              <div className="flex justify-center">
                <GoClock className="text-[#06f] text-3xl text-center" />
              </div>
              <div className="flex justify-center">
                <Typography
                  color="blue-gray"
                  className="text-2xl font-bond dark:text-dark-header_text"
                >
                  Fully Insured
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 dark:text-dark-secondary_text"
              >
                All vehicles covered with comprehensive insurance
              </Typography>
            </CardBody>
          </Card>
          <Card
            className="w-50 text-center w-full h-full bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
          >
            <CardBody>
              <div className="flex justify-center">
                <FaShuttleVan className="text-[#06f] text-3xl text-center" />
              </div>
              <div className="flex justify-center">
                <Typography
                  color="blue-gray"
                  className="text-2xl font-bond dark:text-dark-header_text"
                >
                  Premium Fleet
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 dark:text-dark-secondary_text"
              >
                Latest models from top brands, regularly maintained
              </Typography>
            </CardBody>
          </Card>
          <Card
            className="w-50 text-center w-full h-full bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
          >
            <CardBody>
              <div className="flex justify-center">
                <FaStar className="text-[#06f] text-3xl text-center " />
              </div>
              <div className="flex justify-center">
                <Typography
                  color="blue-gray"
                  className="text-2xl font-bond dark:text-dark-header_text"
                >
                  Top Rated
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 dark:text-dark-secondary_text"
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
          <h1 className="font-bold text-3xl text-black text-center dark:text-dark-header_text">
            What Our Customers Say
          </h1>
          <p className="text-center text-gray-600 dark:text-dark-secondary_text">
            Don't just take our word for it. Here's what our satisfied customers
            have to say.
          </p>
        </header>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-7 ">
          <Card
            className="w-50  w-full h-full bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
          >
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
                className="font-normal opacity-75 dark:text-dark-secondary_text"
              >
                "Amazing service! The BMW was in perfect condition and the
                booking process was seamless."
              </Typography>
              <div className="flex justify-start mt-8 gap-5">
                <TbCircleLetterS className="text-3xl text-[#06f]" />
                <Typography
                  color="blue-gray"
                  className="text-2xl font-bond dark:text-dark-header_text"
                >
                  Sarah Johnson
                </Typography>
              </div>
            </CardBody>
          </Card>
          <Card
            className="w-50  w-full h-full bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
          >
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
                className="font-normal opacity-75 dark:text-dark-secondary_text"
              >
                "Best car rental experience ever. Clean cars, fair prices, and
                excellent customer support."
              </Typography>
              <div className="flex justify-start mt-8 gap-5">
                <TbCircleLetterM className="text-3xl text-[#06f]" />
                <Typography
                  color="blue-gray"
                  className="text-2xl font-bond dark:text-dark-header_text"
                >
                  Michael Chen
                </Typography>
              </div>
            </CardBody>
          </Card>
          <Card
            className="w-50  w-full h-full bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl shadow-md
             transition-transform duration-500 hover:scale-105"
          >
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
                className="font-normal opacity-75 dark:text-dark-secondary_text"
              >
                "Highly recommend Rentigo! Professional service and a great
                selection of vehicles."
              </Typography>
              <div className="flex justify-start mt-8 gap-5">
                <TbCircleLetterE className="text-3xl text-[#06f]" />
                <Typography
                  color="blue-gray"
                  className="text-2xl font-bond dark:text-dark-header_text"
                >
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
