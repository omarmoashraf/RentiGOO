import { Link } from "react-router-dom";
import { Chip } from "@material-tailwind/react";
import { MdOutlineSecurity } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { FaShuttleVan } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa6";
function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
const Pricing = () => {
  return (
    <div>
      <div className="  bg-gray-100 text-gray-800 p-16 top mt-4">
        <div className="">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-black">
            Choose Your Perfect Plan
          </h1>
          <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed text-center">
            Flexible pricing options designed to meet your travel needs. No
            hidden fees, no surprises - just transparent, competitive rates.
          </p>
        </div>
      </div>
      <div className="  bg-gray-100 text-gray-800  top mt-14 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 p-20 ">
        {" "}
        <Card
          color=""
          variant="gradient"
          className="w-full max-w-[20rem] p-8 bg-white transition-transform duration-500 hover:scale-105 "
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
          >
            <div className="flex justify-center">
              {" "}
              <FaCarSide className="text-7xl text-brown-600" />
            </div>

            <Typography
              variant="small"
              color="black"
              className="font-normal uppercase text-bold text-3xl text-black"
            >
              Basic
            </Typography>
            <section className="text-center">
              Perfect for short trips and budget-conscious travelers
            </section>
            <Typography
              variant="h1"
              color="white"
              className="mt-6 flex justify-center gap-1 text-3xl md:text-7xl font-normal text-[#06f]"
            >
              <span className="mt-2 text-2xl md:text-4xl">$</span>29{" "}
              <span className="self-end  text-2xl md:text-4xl">/day</span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Economy & Compact Cars
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Basic Insurance Coverage
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Standard Support
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  100 miles per day included
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  One driver included
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Basic GPS navigation
                </Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
            <Link to="/cars">
              <Button
                size="lg"
                color="white"
                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                ripple={false}
                fullWidth={true}
              >
                Get started
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card
          color=""
          variant="gradient"
          className="w-full max-w-[20rem] p-8 bg-white transition-transform duration-500 hover:scale-105 border-[0.5em] border-blue-700 "
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
          >
            <div className="flex justify-center">
              {" "}
              <FaCarSide className="text-7xl text-[#06f]" />
            </div>
            <Typography
              variant="small"
              color="white"
              className="font-normal uppercase text-bold text-3xl text-black"
            >
              Premium
            </Typography>
            <section>
              Most popular choice with great value and flexibility
            </section>
            <Typography
              variant="h1"
              color=""
              className="mt-6 flex justify-center gap-1 text-3xl md:text-7xl font-normal text-[#06f]"
            >
              <span className="mt-2 text-2xl md:text-4xl">$</span>59{" "}
              <span className="self-end text-2xl md:text-4xl">/day</span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal">
                  Premium & Luxury Cars
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Comprehensive Insurance
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Priority Support
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Unlimited mileage
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Additional driver included
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Advanced GPS & entertainment
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Free cancellation (48hrs)
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Roadside assistance
                </Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
            <Link to="/cars">
              <Button
                size="lg"
                color="white"
                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-[#06f] text-white"
                ripple={false}
                fullWidth={true}
              >
                Get Started
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card
          color=""
          variant="gradient"
          className="w-full max-w-[20rem] p-8 bg-white transition-transform duration-500 hover:scale-105 "
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
          >
            <div className="flex justify-center">
              {" "}
              <FaCarSide className="text-7xl text-orange-700" />
            </div>
            <Typography
              variant="small"
              color="white"
              className="font-normal uppercase text-bold text-3xl text-black"
            >
              Luxury
            </Typography>
            <section>
              Ultimate experience with premium vehicles and VIP service
            </section>
            <Typography
              variant="h1"
              color=""
              className="mt-6 flex justify-center gap-1 text-3xl md:text-7xl font-normal text-[#06f]"
            >
              <span className="mt-2 text-2xl md:text-4xl">$</span>99{" "}
              <span className="self-end mt-2 text-2xl md:text-4xl">/day</span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Luxury & Exotic Cars
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Premium Insurance Package
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  VIP Concierge Support
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Unlimited mileage
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Multiple drivers included
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Premium entertainment system
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Free cancellation (anytime)
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Advanced GPS & entertainment
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  24/7 concierge service
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Vehicle delivery & pickup
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <IoCheckmarkCircleSharp className="text-green-900 text-xl" />
                </span>
                <Typography className="font-normal text-black">
                  Premium fuel included
                </Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
            <Link to="/cars">
              <Button
                size="lg"
                color="white"
                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                ripple={false}
                fullWidth={true}
              >
                Get started
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="  bg-gray-100 text-gray-800 p-16 top mt-4">
        <div className="">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-black">
            Volume Discounts
          </h1>
          <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed text-center">
            The longer you rent, the more you save. Perfect for extended trips
            and business travelers.
          </p>
        </div>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-7 ">
          <Card className="w-50 text-center w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex justify-center">
                <FaRegClock className="text-[#06f] text-3xl text-center" />
              </div>
              <div className="flex justify-center">
                <Typography color="blue-gray" className="text-2xl font-bond">
                  Daily
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                Perfect for short trips
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
                  Weekly
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                7+ days - Save 15%
              </Typography>
              <div className="flex justify-center">
                {" "}
                <Chip color="green" value="Save 15%" />
              </div>
            </CardBody>
          </Card>
          <Card className="w-50 text-center w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex justify-center">
                <FaRegClock className="text-[#06f] text-3xl text-center" />
              </div>
              <div className="flex justify-center">
                <Typography color="blue-gray" className="text-2xl font-bond">
                  Monthly
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                30+ days - Save 25%
              </Typography>
              <div className="flex justify-center">
                {" "}
                <Chip color="green" value="Save 25%" />
              </div>
            </CardBody>
          </Card>
          <Card className="w-50 text-center w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex justify-center">
                <FaRegClock className="text-[#06f] text-3xl text-center" />
              </div>
              <div className="flex justify-center">
                <Typography color="blue-gray" className="text-2xl font-bond">
                  Long-term
                </Typography>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                90+ days - Save 35%
              </Typography>
              <div className="flex justify-center">
                {" "}
                <Chip color="green" value="Save 35%" />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="  bg-gray-100 text-gray-800 p-16 top mt-4">
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-black">
            Additional Services
          </h1>
          <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed text-center">
            Enhance your rental experience with our optional add-on services.
          </p>
        </div>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-7 ">
          <Card className="w-50  w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex flex-col md:flex-row justify-between">
                <Typography color="blue-gray" className="text-2xl font-bond">
                  Child Safety Seat
                </Typography>
                <section className="text-[#06f]">$12/per day</section>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                High-quality child safety seat (specify age group)
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-50  w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex flex-col md:flex-row justify-between">
                <Typography color="blue-gray" className="text-2xl font-bond">
                  GPS Navigation
                </Typography>
                <section className="text-[#06f]">$8/per day</section>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                Garmin GPS with latest maps and traffic updates
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-50  w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex flex-col md:flex-row justify-between">
                <Typography color="blue-gray" className="text-2xl font-bond">
                  Premium Insurance
                </Typography>
                <section className="text-[#06f]">$25/per day</section>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                Zero deductible comprehensive coverage
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-50  w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex flex-col md:flex-row justify-between">
                <Typography color="blue-gray" className="text-2xl font-bond">
                  Fuel Service
                </Typography>
                <section className="text-[#06f]">$35/per day</section>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                Return with any fuel level - we handle the rest
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-50  w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex flex-col md:flex-row justify-between">
                <Typography color="blue-gray" className="text-2xl font-bond">
                  Vehicle Delivery
                </Typography>
                <section className="text-[#06f]">$45/per day</section>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                Vehicle delivered to your location within city limits
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-50  w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <CardBody>
              <div className="flex flex-col md:flex-row justify-between">
                <Typography color="blue-gray" className="text-2xl font-bond">
                  Additional Driver
                </Typography>
                <section className="text-[#06f]">$15/per day</section>
              </div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                Add an extra authorized driver to your rental
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center m-4 text-black">
          Pricing FAQ
        </h1>
        <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed text-center mb-5">
          Common questions about our pricing and policies.
        </p>
      </div>
      <div className="grid grid-cols-1 p-8 text-center md:grid-cols-2">
        <div className="left flex flex-col gap-4 mb-4">
          <section>
            {" "}
            <h2 className="font-bold mb-2">Are there any hidden fees?</h2>
            <p className="font-normal opacity-75" color="gray">
              No hidden fees! All prices shown include basic insurance and
              standard equipment. Additional services are clearly listed with
              transparent pricing.
            </p>
          </section>
          <section>
            <h2 className="font-bold mb-2">
              What's included in the insurance?
            </h2>
            <p className="font-normal opacity-75" color="gray">
              Basic insurance covers collision damage waiver and theft
              protection. Premium insurance offers zero deductible and enhanced
              coverage.
            </p>
          </section>
          <section>
            <h2 className="font-bold mb-2">Can I cancel my reservation?</h2>
            <p className="font-normal opacity-75" color="gray">
              Yes! Cancellation policies vary by plan. Basic allows 24hr
              cancellation, Premium allows 48hr, and Luxury allows anytime
              cancellation.
            </p>
          </section>
        </div>
        <section className="right flex flex-col gap-4 mb-4 ">
          <section>
            <h2 className="font-bold mb-2">How do volume discounts work?</h2>
            <p className="font-normal opacity-75" color="gray">
              Discounts are automatically applied based on rental duration.
              Weekly rentals save 15%, monthly save 25%, and long-term save 35%.
            </p>
          </section>
          <section>
            <h2 className="font-bold mb-2">
              What payment methods do you accept?
            </h2>
            <p className="font-normal opacity-75" color="gray">
              We accept all major credit cards, PayPal, and digital wallets. A
              valid credit card is required for security deposit purposes.
            </p>
          </section>
          <section>
            <h2 className="font-bold mb-2">Is fuel included in the price?</h2>
            <p className="font-normal opacity-75" color="gray">
              Fuel is not included in standard pricing. However, our Luxury plan
              includes premium fuel, and you can add fuel service for
              convenience.
            </p>
          </section>
        </section>
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

export default Pricing;
