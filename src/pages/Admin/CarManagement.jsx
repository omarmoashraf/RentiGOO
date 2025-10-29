import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Select, Option } from "@material-tailwind/react";
import { ArrowLeft, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import AdminCarCard from "./AdminCarCard";

function CarManagement() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allCars = [
    {
      id: "1",
      name: "BMW 5 Series",
      type: "Luxury Sedan",
      price: 89,
      originalPrice: 99,
      rating: 4.9,
      reviews: 127,
      image:
        "https://images.unsplash.com/photo-1656772119648-8fb884516e36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      features: ["Auto", "5 Seats", "Premium"],
      specs: { seats: 5, transmission: "Automatic", fuel: "Gasoline" },
      available: true,
      category: "luxury",
    },
    {
      id: "2",
      name: "Tesla Model 3",
      type: "Electric Sedan",
      price: 75,
      originalPrice: 85,
      rating: 4.8,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1651544022918-92083a5b7d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      features: ["Electric", "5 Seats", "Eco-Friendly"],
      specs: { seats: 5, transmission: "Automatic", fuel: "Electric" },
      available: true,
      category: "electric",
    },
    {
      id: "3",
      name: "Range Rover Sport",
      type: "Luxury SUV",
      price: 120,
      originalPrice: 135,
      rating: 4.9,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1758411898310-ada9284a3086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      features: ["4WD", "7 Seats", "Premium"],
      specs: { seats: 7, transmission: "Automatic", fuel: "Gasoline" },
      available: true,
      category: "suv",
    },
    {
      id: "4",
      name: "Porsche 911",
      type: "Sports Car",
      price: 199,
      originalPrice: 220,
      rating: 5.0,
      reviews: 78,
      image:
        "https://images.unsplash.com/photo-1594182283857-f7e4bdfdf356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      features: ["Manual", "2 Seats", "Sports"],
      specs: { seats: 2, transmission: "Manual", fuel: "Gasoline" },
      available: false,
      category: "sports",
    },
    {
      id: "5",
      name: "Mercedes C-Class",
      type: "Luxury Sedan",
      price: 85,
      originalPrice: 95,
      rating: 4.7,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1648178326808-30e03de8049d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      features: ["Auto", "5 Seats", "Premium"],
      specs: { seats: 5, transmission: "Automatic", fuel: "Gasoline" },
      available: true,
      category: "luxury",
    },
    {
      id: "6",
      name: "BMW X5",
      type: "Premium SUV",
      price: 110,
      originalPrice: 125,
      rating: 4.8,
      reviews: 134,
      image:
        "https://images.unsplash.com/photo-1758411898310-ada9284a3086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      features: ["4WD", "7 Seats", "Premium"],
      specs: { seats: 7, transmission: "Automatic", fuel: "Gasoline" },
      available: true,
      category: "suv",
    },
    {
      id: "7",
      name: "Audi A4 Convertible",
      type: "Convertible",
      price: 95,
      originalPrice: 105,
      rating: 4.6,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1656011475851-23f591606c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      features: ["Convertible", "4 Seats", "Premium"],
      specs: { seats: 4, transmission: "Automatic", fuel: "Gasoline" },
      available: true,
      category: "convertible",
    },
    {
      id: "8",
      name: "Tesla Model Y",
      type: "Electric SUV",
      price: 89,
      originalPrice: 99,
      rating: 4.9,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1651544022918-92083a5b7d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      features: ["Electric", "7 Seats", "Eco-Friendly"],
      specs: { seats: 7, transmission: "Automatic", fuel: "Electric" },
      available: true,
      category: "electric",
    },
  ];

  const filteredCars = allCars.filter((car) => {
    const matchesSearch =
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.type.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedCategory === "all" ||
      (selectedCategory === "available" && car.available) ||
      (selectedCategory === "rented" && !car.available);

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 px-3">
        {/* Left section */}
        <div className="flex gap-2 items-center">
          <Button
            variant="text"
            onClick={() => navigate("/admindashboard")}
            className="flex items-center gap-2 text-gray-700"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent">
              Car Management
            </h1>
            <p className="text-gray-700">Manage your fleet of vehicles</p>
          </div>
        </div>

        {/* Right section */}
        <Link to={`/addnewcar`}>
          <Button className="flex items-center gap-4 bg-gradient-to-r from-[#0066ff] to-[#0052cc] text-white font-medium px-4 py-2 rounded-xl shadow-md hover:opacity-90 transition-all duration-200">
            <Plus className="w-4 h-4" />
            Add New Car
          </Button>
        </Link>
      </div>

      {/* Search bar */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search cars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-3 py-2 w-full text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Status Filter Dropdown */}
          <div className="w-full sm:w-48">
            <Select
              value={selectedCategory}
              onChange={(value) => setSelectedCategory(value)}
              className="text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500"
              labelProps={{ className: "before:border-0 after:border-0" }}
              containerProps={{ className: "shadow-none" }}
            >
              <Option value="all">All Status</Option>
              <Option value="available">Available</Option>
              <Option value="rented">Rented</Option>
            </Select>
          </div>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map((car) => (
          <AdminCarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default CarManagement;
