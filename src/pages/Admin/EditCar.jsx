import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Card,
  CardBody,
  Input,
} from "@material-tailwind/react";
import {
  ArrowLeft,
  Users,
  Gauge,
  Fuel,
  Zap,
  DollarSign,
  Info,
} from "lucide-react";
import axios from "axios";
import useTheme from "../../HOOKS/usetheme";

export default function EditCarDetails() {
  const { carID } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const rawApi = import.meta.env.VITE_API_URL || "";
    const API_URL = rawApi.replace(/\/+$/, "");

    setLoading(true);

    axios
      .get(`${API_URL}/api/v1/cars/${carID}`)
      .then((res) => {
        console.log("Edit car response:", res.data);
        const apiCar = res.data?.data ?? res.data;

        if (apiCar) {
          setCar({
            ...apiCar,
            specs: apiCar.specs || {},
            images: Array.isArray(apiCar.images) ? apiCar.images : [],
          });
        } else {
          setCar(null);
        }
      })
      .catch((err) => {
        console.error("Axios GET error:", err);
        setCar(null);
      })
      .finally(() => setLoading(false));
  }, [carID]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("specs.")) {
      const field = name.split(".")[1];
      setCar((prev) => ({
        ...prev,
        specs: {
          ...(prev?.specs || {}),
          [field]: value,
        },
      }));
    } else {
      setCar((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    const rawApi = import.meta.env.VITE_API_URL || "";
    const API_URL = rawApi.replace(/\/+$/, "");

    try {
      const payload = {
        name: car.name?.trim(),
        type: car.type?.trim(),
        brand: car.brand?.trim(),
        year: car.year ? Number(car.year) : undefined,
        price: car.price ? Number(car.price) : undefined,
        category: car.category || "uncategorized",
        description: car.description ?? "",
        specs: {
          seats: car.specs?.seats ? Number(car.specs.seats) : undefined,
          transmission: car.specs?.transmission?.trim(),
          fuel: car.specs?.fuel?.trim(),
          hp: car.specs?.hp ? Number(car.specs.hp) : undefined,
        },
        images: Array.isArray(car.images)
          ? car.images.filter((img) => img && img.trim() !== "")
          : [],
      };

      const res = await axios.put(`${API_URL}/api/v1/cars/${carID}`, payload);

      console.log("Edit PUT response:", res.data);

      if (res.data.success) {
        alert("Car updated successfully!");
        navigate("/carmanagement");
      } else {
        alert("Update failed!");
      }
    } catch (err) {
      console.error("Axios PUT error:", err);

      console.log("Error response data:", err.response?.data);
      alert("Error while updating car!");
    }
  };

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  if (!car)
    return (
      <div className="text-center mt-20 text-red-500 font-semibold">
        Car not found
      </div>
    );

  return (
    <div className="min-h-screen bg-white-50 dark:bg-dark-background py-10 px-6">
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

      <Card className="max-w-5xl mx-auto shadow-lg rounded-2xl overflow-hidden border dark:bg-dark-background border-blue-100">
        <CardBody className="p-6">
          <Typography
            variant="h4"
            className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent font-bold tracking-wide text-xl sm:text-3xl mb-6"
          >
            Edit Car Details
          </Typography>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              label="Car Name"
              name="name"
              value={car.name ?? ""}
              onChange={handleChange}
            />

            <Input
              label="Type"
              name="type"
              value={car.type ?? ""}
              onChange={handleChange}
            />

            <Input
              label="Brand"
              name="brand"
              value={car.brand ?? ""}
              onChange={handleChange}
            />

            <Input
              label="Year"
              name="year"
              type="number"
              value={car.year ?? ""}
              onChange={handleChange}
            />

            <Input
              label="Price Per Day"
              name="price"
              type="number"
              value={car.price ?? ""}
              onChange={handleChange}
              icon={<DollarSign size={18} />}
            />
          </div>

          <div className="mt-10">
            <Typography
              variant="h6"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <Info size={20} className="text-blue-600" /> Specifications
            </Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              <Input
                label="Seats"
                name="specs.seats"
                type="number"
                value={car.specs?.seats ?? ""}
                onChange={handleChange}
                icon={<Users size={18} />}
              />

              <Input
                label="Transmission"
                name="specs.transmission"
                value={car.specs?.transmission ?? ""}
                onChange={handleChange}
                icon={<Gauge size={18} />}
              />

              <Input
                label="Fuel Type"
                name="specs.fuel"
                value={car.specs?.fuel ?? ""}
                onChange={handleChange}
                icon={<Fuel size={18} />}
              />

              <Input
                label="Horsepower"
                name="specs.hp"
                type="number"
                value={car.specs?.hp ?? ""}
                onChange={handleChange}
                icon={<Zap size={18} />}
              />
            </div>
          </div>

          <div className="mt-10">
            <Typography
              variant="h6"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <Info size={20} className="text-blue-600" /> Description
            </Typography>

            <textarea
              name="description"
              value={car.description ?? ""}
              onChange={handleChange}
              className="w-full mt-3 p-3 rounded-lg border border-gray-300 dark:bg-dark-background"
              rows={4}
            />
          </div>

          <div className="mt-10">
            <Typography variant="h6" className="text-xl font-bold mb-3">
              Images (URLs)
            </Typography>

            {(car.images ?? []).map((img, index) => (
              <Input
                key={index}
                label={`Image ${index + 1}`}
                value={car.images[index] ?? ""}
                onChange={(e) => {
                  const newImgs = [...(car.images ?? [])];
                  newImgs[index] = e.target.value;
                  setCar({ ...car, images: newImgs });
                }}
                className="mb-3"
              />
            ))}
          </div>

          <div className="flex justify-end mt-10">
            <Button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] text-white px-6 py-2 rounded-lg shadow hover:opacity-90"
            >
              Save Changes
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
