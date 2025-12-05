import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Select,
  Option,
  Switch,
} from "@material-tailwind/react";
import useTheme from "./../../HOOKS/usetheme";
import {
  ArrowLeft,
  Upload,
  Image,
  Car,
  Users,
  Gauge,
  Fuel,
  Zap,
  DollarSign,
  Calendar,
  Info,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import axios from "axios";

export default function AddNewCar() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    brand: "",
    year: new Date().getFullYear(),
    price: "",
    description: "",
    specs: {
      seats: "",
      transmission: "Automatic",
      fuel: "Gasoline",
      hp: "",
    },
    available: true,
    images: ["", "", ""],
  });

  const [uploadedImages, setUploadedImages] = useState([
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
    "/api/placeholder/600/400",
  ]);

  const carTypes = [
    "Sedan",
    "SUV",
    "Coupe",
    "Convertible",
    "Hatchback",
    "Sports Car",
    "Luxury",
    "Electric",
    "Hybrid",
  ];

  const fuelTypes = ["Gasoline", "Diesel", "Electric", "Hybrid"];
  const transmissionTypes = ["Automatic", "Manual"];
  const brands = [
    "Toyota",
    "Honda",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Ford",
    "Chevrolet",
    "Tesla",
    "Nissan",
    "Hyundai",
  ];

  const handleInputChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleImageUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImages = [...uploadedImages];
        newImages[index] = e.target.result;
        setUploadedImages(newImages);

       
        const newFormImages = [...formData.images];
        newFormImages[index] = e.target.result;
        setFormData((prev) => ({ ...prev, images: newFormImages }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        price: Number(formData.price),
        originalPrice: formData.originalPrice
          ? Number(formData.originalPrice)
          : Number(formData.price),
        specs: {
          seats: Number(formData.specs.seats) || 0,
          transmission: formData.specs.transmission || "Automatic",
          fuel: formData.specs.fuel || "Gasoline",
          hp: Number(formData.specs.hp) || 0,
        },
        images: formData.images.filter(Boolean), // Remove empty images
        thumbnail: formData.thumbnail || formData.images[0] || "",
        description: formData.description || "",
        available: formData.available ?? true,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/cars`,
        payload
      );

      if (res.data.success) {
        alert("Car added successfully!");
        navigate("/carmanagement");
      } else {
        alert("Failed to add car: " + res.data.message);
      }
    } catch (err) {
      console.error("Add car error:", err.response || err);
      alert("Server error. Check console for details.");
    }
  };

  const { theme } = useTheme();
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev === 2 ? 0 : prev + 1));
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev === 0 ? 2 : prev - 1));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-background py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 max-w-7xl mx-auto">
        <Link to="/carmanagement" className="w-full sm:w-auto">
          <Button
            variant="outlined"
            size="sm"
            className="flex items-center gap-2 border-blue-700 text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-[#0066ff] hover:to-[#0052cc] transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <ArrowLeft size={16} />
            <span className="text-sm sm:text-base">Back to Cars</span>
          </Button>
        </Link>

        <Typography
          variant="h3"
          className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent font-bold text-2xl sm:text-3xl lg:text-4xl text-center sm:text-left w-full sm:w-auto"
        >
          Add New Car
        </Typography>
      </div>

      <Card className="max-w-7xl mx-auto shadow-lg bg-gray-100 dark:bg-dark-background rounded-xl sm:rounded-2xl overflow-hidden border border-blue-100">
        <CardBody className="p-3 sm:p-4 lg:p-6">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Image Upload Section */}
            <div className="bg-gray-100 dark:bg-dark-background rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <Typography
                variant="h5"
                className="flex items-center gap-2 text-blue-900 font-bold mb-3 sm:mb-4 text-lg sm:text-xl dark:text-blue-500"
              >
                <Image size={20} className="w-4 h-4 sm:w-5 sm:h-5 " />
                Car Images
              </Typography>

              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                {/* Main Image Preview */}
                <div className="relative w-full lg:w-3/5 dark:text-dark-secondary_text">
                  <img
                    src={uploadedImages[currentImageIndex]}
                    alt="Car preview"
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-lg sm:rounded-xl border-2 border-blue-200"
                  />

                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 sm:p-2 shadow"
                  >
                    <ChevronLeft
                      size={16}
                      className="sm:w-4 sm:h-4 dark:text-light-primary_text"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 sm:p-2 shadow"
                  >
                    <ChevronRight
                      size={16}
                      className="sm:w-4 sm:h-4 dark:text-light-primary_text"
                    />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                    {[0, 1, 2].map((index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentImageIndex === index
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Thumbnail Upload Areas */}
                <div className="flex flex-row lg:flex-col justify-center gap-3 sm:gap-4 w-full lg:w-2/5">
                  {[0, 1, 2].map((index) => (
                    <div key={index} className="flex-1 lg:flex-none">
                      <label className="cursor-pointer block">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, index)}
                          className="hidden"
                        />
                        <div
                          className={`w-full h-20 sm:h-24 lg:h-24 border-2 border-dashed rounded-lg flex items-center justify-center transition-all ${
                            uploadedImages[index].includes("placeholder")
                              ? "border-blue-300 bg-blue-50"
                              : "border-green-300 bg-green-50"
                          }`}
                        >
                          {uploadedImages[index].includes("placeholder") ? (
                            <div className="text-center p-2">
                              <Upload
                                size={16}
                                className="mx-auto text-blue-500 mb-1"
                              />
                              <Typography
                                variant="small"
                                className="text-blue-600 text-xs"
                              >
                                Image {index + 1}
                              </Typography>
                            </div>
                          ) : (
                            <img
                              src={uploadedImages[index]}
                              alt={`Upload ${index + 1}`}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          )}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Basic Information & Pricing Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 bg-light-background dark:bg-dark-background">
              {/* Basic Information */}
              <div className="space-y-4 sm:space-y-6">
                <Typography
                  variant="h6"
                  className="flex items-center gap-2 text-blue-900 mb-3 sm:mb-4 text-base sm:text-lg dark:text-blue-500"
                >
                  <Car size={18} className="w-4 h-4 sm:w-5 sm:h-5 " />
                  Basic Information
                </Typography>

                <div className="space-y-3 sm:space-y-4">
                  <Input
                    label="Car Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    icon={<Car size={16} />}
                    size="md"
                    className="text-sm sm:text-base dark:text-dark-header_text dark:bg-dark-background"
                    labelProps={{
                      className:
                        "text-gray-700 peer-focus:!text-blue-600 dark:text-gray-200 dark:peer-focus:!text-blue-400",
                    }}
                  />

                  <Select
                    label="Brand"
                    value={formData.brand}
                    onChange={(value) => handleInputChange("brand", value)}
                    size="md"
                    labelProps={{
                      className:
                        "text-gray-700 peer-focus:!text-blue-600 dark:text-gray-200 dark:peer-focus:!text-blue-400",
                    }}
                  >
                    {brands.map((brand) => (
                      <Option
                        key={brand}
                        value={brand}
                        className="text-sm sm:text-base"
                      >
                        {brand}
                      </Option>
                    ))}
                  </Select>

                  <Select
                    label="Car Type"
                    value={formData.type}
                    onChange={(value) => handleInputChange("type", value)}
                    size="md"
                    labelProps={{
                      className:
                        "text-gray-700 peer-focus:!text-blue-600 dark:text-gray-200 dark:peer-focus:!text-blue-400",
                    }}
                  >
                    {carTypes.map((type) => (
                      <Option
                        key={type}
                        value={type}
                        className="text-sm sm:text-base"
                      >
                        {type}
                      </Option>
                    ))}
                  </Select>

                  <Input
                    type="number"
                    label="Year"
                    value={formData.year}
                    onChange={(e) => handleInputChange("year", e.target.value)}
                    min={1990}
                    max={new Date().getFullYear() + 1}
                    icon={<Calendar size={16} />}
                    size="md"
                    className="text-sm sm:text-base dark:text-dark-secondary_text"
                    labelProps={{
                      className:
                        "text-gray-700 peer-focus:!text-blue-600 dark:text-gray-200 dark:peer-focus:!text-blue-400",
                    }}
                  />
                </div>
              </div>

              {/* Pricing & Availability */}
              <div className="space-y-4 sm:space-y-6">
                <Typography
                  variant="h6"
                  className="flex items-center gap-2 text-blue-900 mb-3 sm:mb-4 text-base sm:text-lg dark:text-blue-500"
                >
                  <DollarSign size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
                  Pricing & Status
                </Typography>

                <div className="space-y-3 sm:space-y-4">
                  <Input
                    type="number"
                    label="Price per Day ($)"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    required
                    icon={<DollarSign size={16} />}
                    size="md"
                    className="text-sm sm:text-base"
                    labelProps={{
                      className:
                        "text-gray-700 peer-focus:!text-blue-600 dark:text-gray-200 dark:peer-focus:!text-blue-400",
                    }}
                  />

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <Typography className="font-semibold text-sm sm:text-base">
                      Available for Rent
                    </Typography>
                    <Switch
                      checked={formData.available}
                      onChange={(e) =>
                        handleInputChange("available", e.target.checked)
                      }
                      color="blue"
                      className="h-4 w-7 sm:h-5 sm:w-9"
                    />
                  </div>
                </div>
              </div>
            </div>

           
            <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <Typography
                variant="h5"
                className="flex items-center gap-2 text-blue-900 font-bold mb-3 sm:mb-4 text-lg sm:text-xl"
              >
                <Gauge size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                Specifications
              </Typography>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Input
                  type="number"
                  label="Number of Seats"
                  value={formData.specs.seats}
                  onChange={(e) =>
                    handleInputChange("specs.seats", e.target.value)
                  }
                  icon={<Users size={16} />}
                  size="md"
                  className="text-sm sm:text-base"
                />

                <Select
                  label="Transmission"
                  value={formData.specs.transmission}
                  onChange={(value) =>
                    handleInputChange("specs.transmission", value)
                  }
                  size="md"
                >
                  {transmissionTypes.map((trans) => (
                    <Option
                      key={trans}
                      value={trans}
                      className="text-sm sm:text-base"
                    >
                      {trans}
                    </Option>
                  ))}
                </Select>

                <Select
                  label="Fuel Type"
                  value={formData.specs.fuel}
                  onChange={(value) => handleInputChange("specs.fuel", value)}
                  size="md"
                >
                  {fuelTypes.map((fuel) => (
                    <Option
                      key={fuel}
                      value={fuel}
                      className="text-sm sm:text-base"
                    >
                      {fuel}
                    </Option>
                  ))}
                </Select>

                <Input
                  type="number"
                  label="Horsepower"
                  value={formData.specs.hp}
                  onChange={(e) =>
                    handleInputChange("specs.hp", e.target.value)
                  }
                  icon={<Zap size={16} />}
                  size="md"
                  className="text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4">
              <Typography
                variant="h6"
                className="flex items-center gap-2 text-blue-900 mb-3 text-base sm:text-lg dark:text-blue-500 "
              >
                <Info size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
                Description
              </Typography>

              <Textarea
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                rows={4}
                placeholder="Describe the car's features, condition, special attributes, and any additional information renters should know..."
                className="text-sm sm:text-base"
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 justify-end pt-4 sm:pt-6 border-t border-gray-200">
              <Link to="/carmanagement" className="w-full sm:w-auto">
                <Button
                  variant="outlined"
                  size="sm"
                  className="border-red-500 text-red-500 hover:bg-red-50 w-full sm:w-auto justify-center"
                >
                  Cancel
                </Button>
              </Link>

              <Button
                type="submit"
                size="sm"
                className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] hover:from-[#0052cc] hover:to-[#004bb5] text-white font-semibold shadow-md hover:shadow-lg transition-all w-full sm:w-auto justify-center text-sm sm:text-base"
              >
                Add Car to Fleet
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
