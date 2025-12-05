import { useState, useEffect, useMemo } from "react";
import CarCard from "./components/carCard/CarCard";
import FilterSidebar from "./components/FilterSidebar/FilterSidebar";
import CarsHeader from "./components/CarsHeader/CarsHeader";
import { Spinner } from "@material-tailwind/react";

const Cars = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const rawApi = import.meta.env.VITE_API_URL || "";
    const API = rawApi.replace(/\/+$/, "");

    setLoading(true);
    setError(null);

    fetch(`${API}/api/v1/cars`)
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text().catch(() => "");
          throw new Error(`Status ${res.status} ${text}`);
        }
        return res.json();
      })
      .then((rawData) => {
        const payload = Array.isArray(rawData)
          ? rawData
          : rawData?.data ?? rawData?.cars ?? [];

        const normalized = payload.map(normalizeCar);
        setCars(normalized);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setError(err.message || "Failed to load cars");
      })
      .finally(() => setLoading(false));
  }, []);

  function normalizeCar(item) {
    return {
      // prefer backend Mongo _id for downstream booking relations
      id: item._id ?? item.id ?? String(Math.random()).slice(2),
      name: item.name ?? "Unknown",
      type: item.type ?? "",
      price: Number(item.price ?? 0),
      originalPrice:
        item.originalPrice !== undefined ? Number(item.originalPrice) : null,
      rating: Number(item.rating ?? 0),
      reviews: Number(item.reviews ?? 0),
      image:
        item.image ??
        (item.images && item.images.length > 0 && item.images[0]) ??
        "https://via.placeholder.com/1080x720?text=No+Image",
      features: Array.isArray(item.features) ? item.features : [],
      specs: {
        seats:
          item.specs?.seats ??
          (item.seats !== undefined ? Number(item.seats) : undefined) ??
          4,
        transmission:
          item.specs?.transmission ?? item.transmission ?? "Automatic",
        fuel: item.specs?.fuel ?? item.fuel ?? "Gasoline",
      },
      available:
        typeof item.available === "boolean"
          ? item.available
          : item.isAvailable ?? true,
      category: (item.category ?? "other").toString().toLowerCase(),
      description: item.description ?? "",
      included: Array.isArray(item.included) ? item.included : [],

      _raw: item,
    };
  }

  const categories = useMemo(() => {
    const map = { all: { id: "all", label: "All Categories", count: 0 } };

    cars.forEach((c) => {
      map.all.count += 1;
      const id = c.category ?? "other";
      if (!map[id]) {
        map[id] = { id, label: capitalize(id), count: 0 };
      }
      map[id].count += 1;
    });

    return Object.values(map).sort((a, b) =>
      a.id === "all" ? -1 : a.label.localeCompare(b.label)
    );
  }, [cars]);

  function capitalize(s) {
    return String(s).charAt(0).toUpperCase() + String(s).slice(1);
  }

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        car.name.toLowerCase().includes(q) ||
        car.type.toLowerCase().includes(q);

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
  }, [cars, searchQuery, selectedCategory, showAvailableOnly, priceRange]);

  const sortedCars = useMemo(() => {
    return [...filteredCars].sort((a, b) => {
      if (sortBy === "priceAsc") return a.price - b.price;
      if (sortBy === "priceDesc") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [filteredCars, sortBy]);

  return (
    <div className="flex flex-col gap-10">
      <section className="px-4 sm:px-6 md:px-8 py-12 bg-light-background dark:bg-dark-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-light-primary_text dark:text-dark-header_text">
              Our Premium Fleet
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Discover our extensive collection of premium vehicles, from luxury
              sedans to eco-friendly electric cars.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-8 px-6 ">
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

        <div className="flex-1 space-y-6 ">
          <CarsHeader
            totalCars={cars.length}
            filteredCars={sortedCars.length}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <div className="p-4">
            {loading && (
              <div className="flex flex-col items-center justify-center h-screen w-full">
                <Spinner className="h-12 w-12 dark:text-dark-header_text" />
                <p className="text-center dark:text-dark-header_text mt-2">
                  Loading cars..
                </p>
              </div>
            )}
            {error && <p className="text-red-500">Error: {error}</p>}
            {!loading && !error && sortedCars.length === 0 && (
              <p>No cars match your filters.</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {sortedCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
