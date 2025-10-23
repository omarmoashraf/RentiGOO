import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { FaCar, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { Select, Option } from "@material-tailwind/react";

function Step1Card1() {
  return (
    <Card
      className="w-full max-w-4xl mx-auto rounded-2xl border-0 shadow-none p-4"
      color=""
      variant="gradient"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <FaCar className="text-blue-600 text-lg" />
        <Typography variant="h6" className="text-gray-800 font-semibold">
          Vehicle & Dates
        </Typography>
      </div>

      <CardBody className="p-0">
        {/* Vehicle Info */}
        <div className="flex justify-between items-center bg-gray-50 rounded-xl p-4 mb-6">
          <div className="flex gap-4 items-center">
            <img
              src="https://cdn.motor1.com/images/mgl/nkZZY/s3/2022-bmw-5-series-facelift-front.jpg"
              alt="BMW 5 Series"
              className="w-24 h-16 rounded-lg object-cover"
            />
            <div>
              <Typography variant="h6" className="text-gray-900 font-semibold">
                BMW 5 Series
              </Typography>
              <Typography variant="small" className="text-gray-600">
                Luxury Sedan
              </Typography>
              <div className="mt-1 bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-lg inline-block">
                $89/day
              </div>
            </div>
          </div>
          <Button size="sm" variant="outlined" color="blue">
            Change
          </Button>
        </div>

        {/* Pickup & Return Details */}
        <div className="flex-col gap-5">
          {/* Pickup Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <Typography variant="h6" className="text-gray-800 font-semibold">
                Pickup Details
              </Typography>
            </div>
            <div className="flex flex-col gap-3">
              <Select
                label="Select pickup location"
                variant="outlined"
                color="blue"
              >
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="w-full sm:w-1/2">
                  <Input
                    icon={<FaCalendarAlt />}
                    label="Select date"
                    variant="outlined"
                    color="blue"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <Input label="Time" variant="outlined" color="blue" />
                </div>
              </div>
            </div>
          </div>

          {/* Return Section */}
          <div>
            <div className="flex items-center gap-2 mb-3 mt-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <Typography variant="h6" className="text-gray-800 font-semibold">
                Return Details
              </Typography>
            </div>
            <div className="flex flex-col gap-3">
              <Select
                label="Select return location"
                variant="outlined"
                color="blue"
              >
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="w-full sm:w-1/2">
                  <Input
                    icon={<FaCalendarAlt />}
                    label="Select date"
                    variant="outlined"
                    color="blue"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <Input label="Time" variant="outlined" color="blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>

      {/* Divider */}
      <div className="w-[80%] mx-auto border-t border-gray-300 opacity-50 my-6"></div>
    </Card>
  );
}

export default Step1Card1;
