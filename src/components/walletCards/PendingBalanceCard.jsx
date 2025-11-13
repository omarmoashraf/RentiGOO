import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
function PendingBalanceCard() {
  return (
        <Card
          className="mt-6 w-96 p-4 shadow-md    bg-light-background dark:bg-dark-background
                 border border-gray-300 dark:border-gray-300
                 rounded-2xl 
                 transition-transform duration-500 hover:scale-105"
        >
      <CardBody className="flex justify-between items-start">
        {/* Left side */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 shadow-lg mb-4">
            <FaRegClock className="h-8 w-8 text-orange-500" />
          </div>
          <div>
            <Typography variant="h6" color="gray" className="mb-1 dark:text-dark-secondary_text">
              Pending Balance
            </Typography>
            <Typography
              variant="h5"
              color="black"
              className="font-bold text-4xl dark:text-dark-header_text"
            >
              $200
            </Typography>
          </div>
        </div>

        {/* Right side (Button) */}
        {/* Right side (Status Tag) */}
        <div className="flex justify-end">
          <div className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
            Pending
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
export default PendingBalanceCard;
