import React from "react";
import { TbWallet } from "react-icons/tb";
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

function AvailableBalanceCard() {
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
          <div className="flex items-center justify-center h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-green-100 shadow-lg mb-3 lg:mb-4">
            <TbWallet className="h-6 w-6 lg:h-8 lg:w-8 text-green-500" />
          </div>
          <div>
            <Typography 
              variant="h6" 
              color="gray" 
              className="mb-1 dark:text-light-secondary_text text-sm lg:text-base"
            >
              Available Balance
            </Typography>
            <Typography
              variant="h5"
              color="black"
              className="font-bold text-2xl lg:text-3xl xl:text-4xl dark:text-dark-header_text leading-tight"
            >
              $458.62
            </Typography>
          </div>
        </div>

        {/* Right side (Button) */}
        <div className="w-full lg:w-auto flex justify-start lg:justify-end">
          <Button 
            color="blue" 
            size="sm"
            className="rounded-lg flex gap-2 items-center dark:bg-dark-Buttons 
                       w-full lg:w-auto justify-center py-2 px-4
                       text-sm lg:text-sm"
          >
            + Add Funds
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default AvailableBalanceCard;