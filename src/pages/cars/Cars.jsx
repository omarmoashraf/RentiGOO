import { useState } from "react";
import CarCard from "./components/carCard/CarCard";
import FilterSidebar from "./components/FilterSidebar/FilterSidebar";
import CarsHeader from "./components/CarsHeader/CarsHeader";

const Cars = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("default");

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

  const categories = [
    { id: "all", label: "All Categories", count: 8 },
    { id: "luxury", label: "Luxury", count: 2 },
    { id: "suv", label: "SUV", count: 2 },
    { id: "electric", label: "Electric", count: 2 },
    { id: "sports", label: "Sports", count: 1 },
    { id: "convertible", label: "Convertible", count: 1 },
  ];

  const filteredCars = allCars.filter((car) => {
    const matchesSearch =
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.type.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || car.category === selectedCategory;

    const matchesAvailability = !showAvailableOnly || car.available;

    let matchesPrice = true;
    switch (priceRange) {
      case "under-100":
        matchesPrice = car.price < 100;
        break;
      case "100-150":
        matchesPrice = car.price >= 100 && car.price <= 150;
        break;
      case "over-150":
        matchesPrice = car.price > 150;
        break;
      default:
        matchesPrice = true;
    }

    return (
      matchesSearch && matchesCategory && matchesAvailability && matchesPrice
    );
  });

  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortBy === "priceAsc") return a.price - b.price;
    if (sortBy === "priceDesc") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="flex flex-col gap-10">
      <section className="px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Our Premium Fleet
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Discover our extensive collection of premium vehicles, from luxury
              sedans to eco-friendly electric cars.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-8 px-6">
        <FilterSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          showAvailableOnly={showAvailableOnly}
          setShowAvailableOnly={setShowAvailableOnly}
        />

        <div className="flex-1 space-y-6">
          <CarsHeader
            totalCars={allCars.length}
            filteredCars={sortedCars.length}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
