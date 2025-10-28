import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  Star,
  MapPin,
  Phone,
  ArrowLeft,
  Users,
  Settings,
  Droplet,
  Calendar,
  CheckCircle,
  Clock,
  Shield,
  Heart,
  Share2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { allCars } from "../../data/allCars";

export default function CarDetails() {
  const { carID } = useParams();
  const navigate = useNavigate();

  const car = allCars.find((c) => c.id === carID);

  const accentGradient = "linear-gradient(90deg,#00c6ff 0%,#0072ff 100%)";
  const primaryGradient = "linear-gradient(135deg,#005bb5 0%,#0072ff 100%)"; // darker blue

  if (!car || !car.available) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <Typography variant="lead" className="text-gray-600 text-center">
          Product not found or unavailable. <br /> Please check the URL or
          return to the cars list.
        </Typography>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(0);
  const images = car.image || [car.image, car.image, car.image];

  return (
    <div className="min-h-screen pt-20 lg:pt-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <div className="mb-6">
          <Button
            variant="text"
            onClick={() => navigate("/cars")}
            className="flex items-center gap-2 text-gray-700"
          >
            <ArrowLeft className="w-4 h-4" /> Back to fleet
          </Button>
        </div>

        {/* Top Section: Carousel + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Carousel */}
          <div className=" overflow-hidden   relative bg-transparent">
            <div className="relative h-[500px]">
              <img
                src={images[selectedImage]}
                alt={car.name}
                className="w-full h-full object-cover rounded-2xl"
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://via.placeholder.com/1200x800?text=Image+not+available")
                }
              />
              {/* Carousel arrows */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                onClick={() =>
                  setSelectedImage(
                    (prev) => (prev - 1 + images.length) % images.length
                  )
                }
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
                onClick={() =>
                  setSelectedImage((prev) => (prev + 1) % images.length)
                }
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>

              {/* Top-right actions */}
              <div className="absolute top-4 right-4 flex gap-2">
                <IconButton size="sm" className="bg-white/90 hover:bg-white">
                  <Heart className="w-4 h-4 text-red-500" />
                </IconButton>
                <IconButton
                  size="sm"
                  className="bg-white/90 hover:bg-white"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: car.name,
                        text: `${car.name} - ${car.type}`,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                >
                  <Share2 className="w-4 h-4 text-gray-700" />
                </IconButton>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-3">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${car.name} ${idx + 1}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                    selectedImage === idx
                      ? "border-blue-500"
                      : "border-transparent hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(idx)}
                />
              ))}
            </div>
          </div>

          {/* Right: Info sections stacked */}
          <div className="flex flex-col gap-3">
            {/* Type + Save tags */}
            <div className="flex items-center gap-2">
              {/* Car Type Badge */}
              <span
                className="px-3 py-1 rounded-full text-white text-sm font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
                }}
              >
                {car.type}
              </span>

              {/* Save Badge */}
              {car.originalPrice > car.price && (
                <span
                  className="px-3 py-1 rounded-full text-white text-sm font-semibold"
                  style={{
                    background:
                      "linear-gradient(135deg, #34d399 0%, #059669 100%)",
                  }}
                >
                  Save ${car.originalPrice - car.price}
                </span>
              )}
            </div>

            {/* Top info: Name, Rating, Location, Description */}
            <div>
              <Typography variant="h2" className="font-bold text-gray-900 mb-2">
                {car.name}
              </Typography>

              <div className="flex items-center gap-4 text-gray-800 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold">{car.rating}</span>
                  <span className="text-sm">({car.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{car.location || "N/A"}</span>
                </div>
              </div>

              <p className="text-gray-900 leading-relaxed">
                {car.description ||
                  `Experience luxury and performance with the  ${car.name}. This premium sedan combines cutting-edge technology with exceptional comfort, making it perfect for business trips, special occasions, or when you simply want to travel in style.`}
              </p>
            </div>

            {/* Bottom card: Price + perks + buttons with blue shaded background */}
            <Card className="rounded-xl shadow-xl border border-blue-200 bg-blue-50">
              <CardBody className="p-6 flex flex-col gap-4">
                {/* Pricing */}
                <div>
                  <div className="flex items-baseline gap-3">
                    {car.originalPrice > car.price && (
                      <span className="text-sm text-gray-400 line-through">
                        ${car.originalPrice}
                      </span>
                    )}
                    <div
                      style={{
                        background: accentGradient,
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        fontSize: "28px",
                        fontWeight: 800,
                      }}
                    >
                      ${car.price}
                    </div>
                    <span className="text-sm text-gray-500">/ day</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    Prices exclude taxes and fees
                  </p>
                </div>

                {/* Perks */}
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-800 mt-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-6 text-blue-500" /> Flexible
                    dates
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-6 text-blue-500" /> Fully insured
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-6 text-blue-500" /> 24/7 support
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-6 text-green-500" /> Free
                    cancellation
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-4 items-center">
                  {/* Book Now button */}
                  <Button
                    size="lg"
                    className="w-full rounded-lg flex items-center justify-center gap-2 text-white shadow-md transform transition-transform duration-200 hover:scale-105"
                    style={{
                      background: primaryGradient,
                    }}
                    onClick={() => navigate("/booking")}
                  >
                    Book Now <ChevronRight className="w-4 h-4" />
                  </Button>

                  {/* Call Now button */}
                  <Button
                    variant="outlined"
                    className="w-36 rounded-lg flex items-center justify-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50 mx-auto"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Vehicle Specifications */}
        <div className="mt-10">
          <Typography
            variant="h5"
            className="font-semibold mb-4 text-gray-900 text-3xl"
          >
            Vehicle Specifications
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Users, label: "Passengers", value: car.specs.seats },
              {
                icon: Settings,
                label: "Transmission",
                value: car.specs.transmission,
              },
              { icon: Droplet, label: "Fuel Type", value: car.specs.fuel },
              { icon: Calendar, label: "Model Year", value: car.year || 2023 },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card
                  key={idx}
                  className="p-6 text-center rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="w-16 h-20 mx-auto flex items-center justify-center mb-3">
                    <Icon className="w-10 h-12 text-blue-500" />
                  </div>
                  <div className="font-semibold text-gray-900">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-700">{item.label}</div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Detailed Specifications */}
        <div className="mt-10">
          <Card className="p-6 rounded-lg shadow-sm bg-white">
            <CardBody>
              <Typography
                variant="h4"
                className="font-semibold mb-4 text-gray-900"
              >
                Detailed Specifications
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800 text-lg">
                {/* Basic Info */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-500">Basic Info</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Make</span>
                      <span className="font-medium">{car.specs.make}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Model</span>
                      <span className="font-medium">{car.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Year</span>
                      <span className="font-medium">{car.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Doors</span>
                      <span className="font-medium">{car.specs.doors}</span>
                    </div>
                  </div>
                </div>

                {/* Performance */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-500">Performance</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Engine</span>
                      <span className="font-medium">{car.specs.engine}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Transmission</span>
                      <span className="font-medium">
                        {car.specs.transmission}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fuel Type</span>
                      <span className="font-medium">{car.specs.fuel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fuel Economy</span>
                      <span className="font-medium">{car.specs.mileage}</span>
                    </div>
                  </div>
                </div>

                {/* Capacity */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-500">Capacity</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Passengers</span>
                      <span className="font-medium">{car.specs.seats}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Luggage</span>
                      <span className="font-medium">{car.specs.luggage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Features & Included */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Features */}
          <Card className="p-6 rounded-lg shadow-sm bg-white">
            <CardBody>
              <Typography
                variant="h6"
                className="font-semibold text-xl mb-4 text-gray-900"
              >
                Features & Amenities
              </Typography>
              <div className="flex flex-col gap-3 text-lg text-gray-800">
                {car.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Included */}
          <Card className="p-6 rounded-lg shadow-sm bg-white">
            <CardBody>
              <Typography
                variant="h6"
                className="font-semibold text-xl mb-4 text-gray-900"
              >
                What's Included
              </Typography>
              <div className="flex flex-col text-lg gap-3 text-gray-800">
                {(
                  car.included || [
                    "Full Insurance Coverage",
                    "24/7 Roadside Assistance",
                    "Free Cancellation",
                  ]
                ).map((inc, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
