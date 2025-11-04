import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import { Star, Users, Settings, Fuel, Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function CarCard({
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
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden relative bg-light-background dark:bg-dark-background">
      {/* ----------- Image Section ----------- */}
      <div className="relative">
        {/* Top left type tag */}
        <Chip
          value={type}
          size="sm"
          color="white"
          className="absolute top-3 left-3 text-gray-800 bg-white/90 backdrop-blur-md shadow-md"
        />

        {/* Top right heart icon */}
        <div
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer hover:scale-110 transition-transform z-10"
        >
          <Heart
            size={18}
            className={`${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
            } transition-colors duration-300`}
          />
        </div>

        {/* ----- Unavailable badge ----- */}
        {!available && (
          <Chip
            value="Not Available"
            size="sm"
            color="red"
            className="absolute top-12 right-3 text-white font-bold z-20"
          />
        )}

        {/* Car image */}
        <CardHeader floated={false} shadow={false} className="h-52">
          <img
            src={image}
            alt={name}
            className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              !available ? "brightness-75" : ""
            }`}
          />
        </CardHeader>

        {/* Discount badge */}
        {originalPrice > price && (
          <Chip
            value={`Save $${originalPrice - price}`}
            color="green"
            size="sm"
            className="absolute bottom-3 left-3 font-semibold"
          />
        )}
      </div>

      {/* ----------- Body Section ----------- */}
      <CardBody className="p-4">
        {/* Car name & price */}
        <div className="flex justify-between items-start mb-2">
          <Typography variant="h6" className="text-light-primary_text dark:text-dark-header_text">
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
        <Link to={available ? `/cars/${id}` : "#"}>
          <Button
            fullWidth
            disabled={!available}
            className={`text-white font-medium shadow-md transition-all bg-gradient-to-r from-[#0066ff] to-[#0052cc] hover:from-[#0052cc] hover:to-[#004bb5] hover:shadow-lg ${
              !available
                ? "opacity-50 cursor-not-allowed hover:from-[#0066ff] hover:to-[#0052cc] hover:shadow-md"
                : ""
            }`}
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CarCard;
