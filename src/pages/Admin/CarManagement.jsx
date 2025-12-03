import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Select, Option } from "@material-tailwind/react";
import { ArrowLeft, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import AdminCarCard from "./AdminCarCard";
import useTheme from "../../HOOKS/usetheme";
import { Spinner } from "@material-tailwind/react";
function CarManagement() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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
        // API returns { success, message, total, data: [...] }
        const payload = rawData?.data || [];
        const normalized = payload.map(normalizeCar);
        setCars(normalized);
      })
      .catch((err) => {
        console.error("Fetch cars error:", err);
        setError(err.message || "Failed to load cars");
      })
      .finally(() => setLoading(false));
  }, []);

  function normalizeCar(item) {
    return {
      id: item.id ?? item._id ?? String(Math.random()).slice(2),
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

        doors: item.specs?.doors ?? item.doors ?? undefined,
        engine: item.specs?.engine ?? item.engine ?? undefined,
        mileage: item.specs?.mileage ?? item.mileage ?? undefined,
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

  const filteredCars = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return cars.filter((car) => {
      const matchesSearch =
        car.name.toLowerCase().includes(q) ||
        car.type.toLowerCase().includes(q);

      const matchesStatus =
        selectedCategory === "all" ||
        (selectedCategory === "available" && car.available) ||
        (selectedCategory === "rented" && !car.available);

      return matchesSearch && matchesStatus;
    });
  }, [cars, searchQuery, selectedCategory]);

  return (
    <div className="p-6 space-y-6 bg-light-background dark:bg-dark-background">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 px-3">
        {/* Left section */}
        <div className="flex gap-2 items-center">
          <Button
            variant="text"
            onClick={() => navigate("/AdminDashboard")}
            className="flex items-center gap-2 text-gray-700"
          >
            <ArrowLeft className="w-4 h-4 dark:text-dark-header_text" />
          </Button>
          <div>
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent">
              Car Management
            </h1>
            <p className="text-gray-700 dark:text-dark-secondary_text">
              Manage your fleet of vehicles
            </p>
          </div>
        </div>

        {/* Right section */}
        <Link to={`/AddNewCar`}>
          <Button className="flex items-center gap-4 bg-gradient-to-r from-[#0066ff] to-[#0052cc] text-white font-medium px-4 py-2 rounded-xl shadow-md hover:opacity-90 transition-all duration-200">
            <Plus className="w-4 h-4" />
            Add New Car
          </Button>
        </Link>
      </div>

      {/* Search bar */}
      <div className="bg-white dark:bg-dark-background border border-gray-200 rounded-2xl shadow-sm p-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 w-full ">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search cars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-3 py-2 w-full text-sm rounded-xl border bg-white dark:bg-dark-background border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Status Filter Dropdown */}
          <div className="w-full sm:w-48">
            <Select
              value={selectedCategory}
              onChange={(value) => setSelectedCategory(value)}
              className="text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-dark-secondary_text "
              labelProps={{ className: "before:border-0 after:border-0" }}
              containerProps={{ className: "shadow-none" }}
              menuProps={{
                className: "bg-white dark:bg-dark-background border ",
              }}
            >
              <Option value="all">All Status</Option>
              <Option value="available">Available</Option>
              <Option value="rented">Rented</Option>
            </Select>
          </div>
        </div>
      </div>

      {/* Loading / Error */}
      {loading && (
        <div className="flex flex-col items-center justify-center h-screen w-full">
          <Spinner className="h-12 w-12 dark:text-dark-header_text" />
          <p className="text-center dark:text-dark-header_text mt-2">
            Loading cars...
          </p>
        </div>
      )}
      {error && (
        <div className="text-center py-6 text-red-500">Error: {error}</div>
      )}

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {!loading &&
          !error &&
          filteredCars.map((car) => <AdminCarCard key={car.id} car={car} />)}
        {!loading && !error && filteredCars.length === 0 && (
          <div className="col-span-full text-center text-gray-600">
            No cars match your filters.
          </div>
        )}
      </div>
    </div>
  );
}

export default CarManagement;
