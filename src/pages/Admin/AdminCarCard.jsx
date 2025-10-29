import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import {
  Star,
  Users,
  Settings,
  Fuel,
  Heart,
  Eye,
  SquarePen,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function AdminCarCard({
  car: {
    id,
    name,
    image,
    price,
    originalPrice,
    rating,
    reviews,
    type,
    features,
    specs,
    available,
  },
}) {
  return (
    <Card className="shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden relative">
      {/* ----------- Image Section ----------- */}
      <div className="relative">
        <CardHeader
          floated={false}
          shadow={false}
          className="h-52 overflow-hidden rounded-t-xl"
        >
          <img
            src={image}
            alt={name}
            className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              !available ? "brightness-75" : ""
            }`}
          />
        </CardHeader>

        <span
          className={`absolute top-8 right-8 px-2.5 py-0.5 text-[11px] font-medium rounded-full backdrop-blur-sm ${
            available
              ? "bg-green-200/50 text-green-800"
              : "bg-blue-200/50 text-blue-800"
          }`}
        >
          {available ? "Available" : "Rented"}
        </span>
      </div>

      {/* ----------- Body Section ----------- */}
      <CardBody className="p-4">
        {/* Car name & price */}
        <div className="flex justify-between items-start mb-2">
          <Typography variant="h6" color="blue-gray">
            {name}
          </Typography>
          <div className="text-right">
            <Typography variant="small" color="gray" className="line-through">
              ${originalPrice}
            </Typography>
            <Typography
              as="h6"
              className="font-semibold bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent"
            >
              ${price}
              <span className="text-gray-600 text-sm font-normal"> /day</span>
            </Typography>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star size={18} className="text-yellow-500 fill-yellow-500" />
          <Typography color="blue-gray" className="text-sm font-medium">
            {rating}
          </Typography>
          <Typography color="gray" className="text-xs">
            ({reviews})
          </Typography>
        </div>

        {/* Specs */}
        <div className="flex justify-between text-gray-700 text-sm mb-4">
          <div className="flex items-center gap-1">
            <Users size={16} /> {specs?.seats} seats
          </div>
          <div className="flex items-center gap-1">
            <Settings size={16} /> {specs?.transmission}
          </div>
          <div className="flex items-center gap-1">
            <Fuel size={16} /> {specs?.fuel}
          </div>
        </div>

        {/* Feature Chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {features?.map((f, i) => (
            <Chip
              key={i}
              value={f}
              color="blue-gray"
              size="sm"
              className="bg-gray-100 text-gray-700"
            />
          ))}
        </div>
      </CardBody>

      {/* ----------- Footer Section ----------- */}
      <CardFooter className="pt-0">
        <div className="flex justify-between space-x-2 w-full">
          {/* View Button */}
          <Link to={`/carmanagement/${id}`} className="flex-1">
            <Button
              variant="outlined"
              size="sm"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-100 py-1"
            >
              <Eye className="w-4 h-4" />
              View
            </Button>
          </Link>

          {/* Edit Button */}
          <Link to={`/editcar`} className="flex-1">
            <Button
              variant="outlined"
              size="sm"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-100 py-1"
            >
              <SquarePen className="w-4 h-4" />
              Edit
            </Button>
          </Link>

          {/* Delete Button */}
          <div className="flex-1">
            <Button
              variant="text"
              size="sm"
              className="w-full flex items-center justify-center border border-gray-300 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200 py-1"
              aria-label="Delete"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default AdminCarCard;
