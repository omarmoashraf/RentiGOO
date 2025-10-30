import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Users,
  Gauge,
  Fuel,
  Zap,
  DollarSign,
  Calendar,
  Info,
  History,
} from "lucide-react";
import { allCars } from "../../data/allCars";

export default function ViewCarDetails() {
  const { carID } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const car = allCars.find((c) => String(c.id) === String(carID));

  if (!car) {
    return (
      <div className="text-center mt-20 text-red-500 font-semibold">
        Car not found
      </div>
    );
  }

  const images = car.images || [car.image, car.image, car.image];

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const rentalHistory = [
    {
      id: 1,
      renter: "Ahmed Mohmed ",
      startDate: "2025-09-12",
      endDate: "2025-09-18",
      price: "$320",
      status: "Completed",
    },
    {
      id: 2,
      renter: "Mona Ali",
      startDate: "2025-10-01",
      endDate: "2025-10-07",
      price: "$410",
      status: "Ongoing",
    },
    {
      id: 3,
      renter: "Omar Khaled",
      startDate: "2025-10-20",
      endDate: "2025-10-27",
      price: "$280",
      status: "Cancelled",
    },
  ];

  return (
    <div className="min-h-screen bg-white-50 py-10 px-6">
      <div className="flex items-center justify-between mb-8 max-w-5xl mx-auto">
        <Link to="/CarManagement">
          <Button
            variant="outlined"
            className="flex items-center gap-2 border-blue-700 text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-[#0066ff] hover:to-[#0052cc] transition-all duration-300"
          >
            <ArrowLeft size={18} /> Back to Cars
          </Button>
        </Link>
      </div>

      <Card className="max-w-5xl mx-auto shadow-lg rounded-2xl overflow-hidden border border-blue-100">
        <div className="flex gap-6 p-6 bg-gray-200 ">
          <div className="relative w-3/5">
            <img
              src={images[currentIndex]}
              alt={car.name}
              className="w-full h-[480px] object-cover rounded-xl transition-all duration-300"
            />

            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 w-2/5">
            {images.slice(0, 3).map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setCurrentIndex(index)}
                className={`w-[160px] h-[100px] object-cover rounded-lg cursor-pointer border-2 transition-all duration-200 ${
                  index === currentIndex
                    ? "border-blue-600"
                    : "border-transparent opacity-80"
                }`}
                alt={`thumb-${index}`}
              />
            ))}
          </div>
        </div>

        <CardBody className="p-6">
          {/* Header: اسم العربية والحالة */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <Typography
                variant="h4"
                className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent font-bold tracking-wide text-xl sm:text-2xl md:text-3xl"
              >
                {car.name}
              </Typography>
              <Typography color="gray" className="text-sm sm:text-base mt-1">
                {car.type}
              </Typography>
            </div>

            <span
              className={`px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-full font-semibold ${
                car.available
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {car.available ? "Available" : "Rented"}
            </span>
          </div>

          {/* Specifications */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-gray-800">
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <Users size={18} className="text-blue-600" />
              <strong>Seats:</strong> {car.specs.seats}
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <Gauge size={18} className="text-blue-600" />
              <strong>Transmission:</strong> {car.specs.transmission}
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <Fuel size={18} className="text-blue-600" />
              <strong>Fuel Type:</strong> {car.specs.fuel}
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <Zap size={18} className="text-blue-600" />
              <strong>Horsepower:</strong> {car.specs.hp || "N/A"}
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <DollarSign size={18} className="text-blue-600" />
              <strong>Price/Day:</strong> ${car.price}
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <Calendar size={18} className="text-blue-600" />
              <strong>Year:</strong> {car.year || "2024"}
            </p>
          </div>

          {/* Description */}
          <div className="mt-8">
            <Typography
              variant="h6"
              className="text-black font-semibold mb-2 flex items-center gap-2 text-xl sm:text-2xl"
            >
              <Info size={20} className="text-blue-600" /> Description
            </Typography>
            <Typography
              color="gray"
              className="leading-relaxed text-sm sm:text-base"
            >
              {car.description ||
                `Experience luxury and performance with the ${car.name}. This premium sedan combines cutting-edge technology with exceptional comfort, making it perfect for business trips, special occasions, or when you simply want to travel in style.`}
            </Typography>
          </div>

          {/* Rental History */}
          <div className="mt-10 bg-white shadow-md rounded-2xl p-4 sm:p-6 border border-blue-100 overflow-x-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent">
              <History size={22} className="text-blue-700" /> Rental History
            </h2>

            <table className="w-full min-w-[600px] border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-blue-100 text-left">
                  <th className="p-3 border-b">#</th>
                  <th className="p-3 border-b">Renter</th>
                  <th className="p-3 border-b">Start Date</th>
                  <th className="p-3 border-b">End Date</th>
                  <th className="p-3 border-b">Price</th>
                  <th className="p-3 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {rentalHistory.map((rental) => (
                  <tr key={rental.id} className="hover:bg-blue-50">
                    <td className="p-3 border-b">{rental.id}</td>
                    <td className="p-3 border-b">{rental.renter}</td>
                    <td className="p-3 border-b">{rental.startDate}</td>
                    <td className="p-3 border-b">{rental.endDate}</td>
                    <td className="p-3 border-b">{rental.price}</td>
                    <td
                      className={`p-3 border-b font-semibold ${
                        rental.status === "Completed"
                          ? "text-green-600"
                          : rental.status === "Ongoing"
                          ? "text-blue-600"
                          : "text-red-500"
                      }`}
                    >
                      {rental.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
