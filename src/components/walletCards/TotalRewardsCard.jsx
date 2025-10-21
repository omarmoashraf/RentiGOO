import React from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { TfiExport } from "react-icons/tfi";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
function TotalRewardsCard() {
  return (
    <Card className="mt-6 w-96 p-4 shadow-md">
      <CardBody className="flex justify-between items-start">
        {/* Left side */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 shadow-lg mb-4">
            <HiArrowTrendingUp className="h-8 w-8 text-green-500" />
          </div>
          <div>
            <Typography variant="h6" color="gray" className="mb-1">
              Total Rewards
            </Typography>
            <Typography
              variant="h5"
              color="black"
              className="font-bold text-4xl"
            >
              $500
            </Typography>
          </div>
        </div>

        {/* Right side (Button) */}
        <div className="flex justify-end">
          <Button color="blue" className="rounded-lg flex gap-2 items-center">
            <TfiExport />
            Export
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default TotalRewardsCard;
