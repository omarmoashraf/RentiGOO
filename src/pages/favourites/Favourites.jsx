import { motion } from "framer-motion";
import { AiOutlineCalendar } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import CarCard from "../cars/components/carCard/CarCard.jsx";

export default function Favourites() {
  const cars = [
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
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-light-background dark:bg-dark-background pt-6 sm:pt-8">
      {/* Header Section */}
      <div className="px-4 sm:px-6 lg:px-8 w-full max-w-7xl text-center mb-6 sm:mb-8">
        <h1 className="font-bold mb-2 text-3xl sm:text-4xl lg:text-5xl text-light-primary_text dark:text-dark-header_text">
          My Favorites
        </h1>
        <p className="text-base sm:text-lg text-light-primary_text dark:text-dark-secondary_text px-4 sm:px-0">
          Keep track of your favorite vehicles and book them when you're ready
        </p>
      </div>

      <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 w-full max-w-7xl">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full mb-8 sm:mb-12">
          {/* Stat Card 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl shadow-md bg-white dark:bg-dark-background p-4 sm:p-6 w-full text-center border border-[#cccccc] flex flex-col items-center justify-center h-full min-h-[180px] sm:min-h-[200px]"
          >
            <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-100 shadow-lg mb-3 sm:mb-4">
              <CiHeart className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light-primary_text dark:text-dark-header_text">
              6
            </h2>
            <p className="text-xs sm:text-sm font-medium text-light-primary_text dark:text-dark-secondary_text mt-1 sm:mt-2">
              Total Favorites
            </p>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl shadow-md bg-white dark:bg-dark-background p-4 sm:p-6 w-full text-center border border-[#cccccc] flex flex-col items-center justify-center h-full min-h-[180px] sm:min-h-[200px]"
          >
            <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-green-100 shadow-lg mb-3 sm:mb-4">
              <IoCarSportOutline className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light-primary_text dark:text-dark-header_text">
              5
            </h2>
            <p className="text-xs sm:text-sm font-medium text-light-primary_text dark:text-dark-secondary_text mt-1 sm:mt-2">
              Available Now
            </p>
          </motion.div>

          {/* Stat Card 3 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl shadow-md bg-white dark:bg-dark-background p-4 sm:p-6 w-full text-center border border-[#cccccc] flex flex-col items-center justify-center h-full min-h-[180px] sm:min-h-[200px]"
          >
            <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-100 shadow-lg mb-3 sm:mb-4">
              <CiStar className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light-primary_text dark:text-dark-header_text">
              4.8
            </h2>
            <p className="text-xs sm:text-sm font-medium text-light-primary_text dark:text-dark-secondary_text mt-1 sm:mt-2">
              Avg. Rating
            </p>
          </motion.div>

          {/* Stat Card 4 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl shadow-md bg-white dark:bg-dark-background p-4 sm:p-6 w-full text-center border border-[#cccccc] flex flex-col items-center justify-center h-full min-h-[180px] sm:min-h-[200px]"
          >
            <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-orange-100 shadow-lg mb-3 sm:mb-4">
              <AiOutlineCalendar className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light-primary_text dark:text-dark-header_text">
              $98
            </h2>
            <p className="text-xs sm:text-sm font-medium text-light-primary_text dark:text-dark-secondary_text mt-1 sm:mt-2">
              Avg. Price/Day
            </p>
          </motion.div>
        </div>

        {/* Filter Section */}
        <div className="bg-white dark:bg-dark-background shadow-md rounded-2xl p-4 sm:p-6 lg:p-8 w-full border border-[#cccccc] text-center mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 w-full">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search cars..."
              className="w-full md:w-1/2 lg:w-2/5 border dark:bg-dark-background text-light-primary_text dark:text-dark-secondary_text border-gray-300 rounded-lg px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            />

            {/* Availability Filter */}
            <div className="w-full md:w-auto flex justify-center">
              <select
                id="availability"
                className="w-full md:w-auto border border-gray-300 bg-light-background dark:bg-dark-background rounded-lg px-3 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-light-primary_text dark:text-dark-secondary_text text-sm sm:text-base"
              >
                <option value="all">All Cars</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>

            {/* Recently Viewed Filter */}
            <div className="w-full md:w-auto flex justify-center">
              <select
                id="recent"
                className="w-full md:w-auto border border-gray-300 dark:bg-dark-background text-light-primary_text dark:text-dark-secondary_text rounded-lg px-3 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              >
                <option value="recent">Recently Viewed</option>
                <option value="none">No Filter</option>
                <option value="PriceHTL">Price: High to Low</option>
                <option value="PriceLTH">Price: Low to High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Car Cards Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full">
            {cars.map((car) => (
              <div key={car.id} className="w-full">
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}