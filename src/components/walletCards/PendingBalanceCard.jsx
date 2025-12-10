import React from "react";
import { FaRegClock } from "react-icons/fa6";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function PendingBalanceCard() {
  return (
    <Card
      className="mt-3 lg:mt-6 w-full p-3 lg:p-4 shadow-md bg-light-background dark:bg-dark-background
             border border-gray-300 dark:border-gray-300
             rounded-2xl 
             transition-transform duration-500 hover:scale-[1.02] lg:hover:scale-105"
    >
      <CardBody className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
        {/* Left side */}
        <div className="flex flex-col justify-between h-full w-full lg:w-auto">
          <div className="flex items-center justify-center h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-orange-100 shadow-lg mb-3 lg:mb-4">
            <FaRegClock className="h-6 w-6 lg:h-8 lg:w-8 text-orange-500" />
          </div>
          <div>
            <Typography 
              variant="h6" 
              color="gray" 
              className="mb-1 dark:text-dark-secondary_text text-sm lg:text-base"
            >
              Pending Balance
            </Typography>
            <Typography
              variant="h5"
              color="black"
              className="font-bold text-2xl lg:text-3xl xl:text-4xl dark:text-dark-header_text leading-tight"
            >
              $200
            </Typography>
          </div>
        </div>

        {/* Right side (Status Tag) */}
        <div className="w-full lg:w-auto flex justify-start lg:justify-end">
          <div className="bg-gray-200 text-gray-700 font-medium px-3 py-1 rounded-full
                         text-xs lg:text-sm w-full lg:w-auto text-center">
            Pending
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default PendingBalanceCard;