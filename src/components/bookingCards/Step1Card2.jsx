import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { CiCalendar } from "react-icons/ci";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

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

function Step1Card2() {
  return (
    <Card
      color=""
      variant="gradient"
      className="w-full max-w-[20rem] border-0 shadow-none bg-light-background dark:bg-dark-background"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 pb-4 text-center"
      >
        <Typography
          variant="small"
          color="black"
          className="font-normal uppercase text-light-primary_text dark:text-dark-header_text"
        >
          Pricing Summary
        </Typography>
        <Typography
          variant="h1"
          color="text-gray-700"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <CiCalendar className="text-light-primary_text dark:text-dark-header_text" />
        </Typography>
        <div className="text-gray-700 dark:text-dark-secondary_text">
          <p>Select pickup and return dates to see pricing</p>
        </div>
      </CardHeader>
      <div className="w-full mx-auto border-t border-gray-700 pb-4 opacity-25"></div>
      <CardBody className="p-0">
        <h1 className="text-start text-black dark:text-dark-header_text text-xl pb-3">What's Included</h1>
        <ul className="flex flex-col gap-4 align-items-end">
          <li className="flex items-center gap-0">
            <span className="rounded-full border border-white/20 bg-white/20 p-1 text-blue-600">
              <IoCheckmarkCircleOutline className="text-green-400" />
            </span>
            <Typography className="font-normal text-gray-700 dark:text-dark-secondary_text text-start">
              Unlimited mileage
            </Typography>
          </li>
          <li className="flex items-center gap-0">
            <span className="rounded-full border border-white/20 bg-white/20 p-1 text-blue-600">
              <IoCheckmarkCircleOutline className="text-green-400" />
            </span>
            <Typography className="font-normal text-gray-700 text-start dark:text-dark-secondary_text">
              Comprehensive insurance
            </Typography>
          </li>
          <li className="flex items-center gap-0">
            <span className="rounded-full border border-white/20 bg-white/20 p-1 text-blue-600">
              <IoCheckmarkCircleOutline className="text-green-400" />
            </span>
            <Typography className="font-normal text-gray-700 text-start dark:text-dark-secondary_text">
              24/7 roadside assistance
            </Typography>
          </li>
          <li className="flex items-center gap-0">
            <span className="rounded-full border border-white/20 bg-white/20 p-1 text-blue-600">
              <IoCheckmarkCircleOutline className="text-green-400" />
            </span>
            <Typography className="font-normal text-gray-700 dark:text-dark-secondary_text text-start">
              Free cancellation (24h)
            </Typography>
          </li>
          <li className="flex items-center gap-0">
            <span className="rounded-full border border-white/20 bg-white/20 p-1 text-blue-600">
              <IoCheckmarkCircleOutline className="text-green-400" />
            </span>
            <Typography className="font-normal text-gray-700 dark:text-dark-secondary_text text-start">
              GPS navigation system
            </Typography>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}
export default Step1Card2;
