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
  Switch
} from "@material-tailwind/react";
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
} from "lucide-react";

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
    images: ["", "", ""] // Placeholder for image URLs
  });

  const [uploadedImages, setUploadedImages] = useState([
    "/api/placeholder/600/400",
    "/api/placeholder/600/400", 
    "/api/placeholder/600/400"
  ]);

  const carTypes = [
    "Sedan", "SUV", "Coupe", "Convertible", "Hatchback", 
    "Sports Car", "Luxury", "Electric", "Hybrid"
  ];

  const fuelTypes = ["Gasoline", "Diesel", "Electric", "Hybrid"];
  const transmissionTypes = ["Automatic", "Manual"];
  const brands = [
    "Toyota", "Honda", "BMW", "Mercedes-Benz", "Audi", 
    "Ford", "Chevrolet", "Tesla", "Nissan", "Hyundai"
  ];

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
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
        
        // Also update form data
        const newFormImages = [...formData.images];
        newFormImages[index] = e.target.result;
        setFormData(prev => ({ ...prev, images: newFormImages }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("New car data:", formData);
    
    // Simulate successful submission
    alert("Car added successfully!");
    navigate("/carmanagement");
  };

  const nextImage = () => setCurrentImageIndex(prev => (prev === 2 ? 0 : prev + 1));
  const prevImage = () => setCurrentImageIndex(prev => (prev === 0 ? 2 : prev - 1));

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="flex items-center justify-between mb-8 max-w-5xl mx-auto">
        <Link to="/carmanagement">
          <Button
            variant="outlined"
            className="flex items-center gap-2 border-blue-700 text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-[#0066ff] hover:to-[#0052cc] transition-all duration-300"
          >
            <ArrowLeft size={18} /> Back to Cars
          </Button>
        </Link>
        
        <Typography
          variant="h3"
          className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent font-bold"
        >
          Add New Car
        </Typography>
      </div>

      <Card className="max-w-5xl mx-auto shadow-lg rounded-2xl overflow-hidden border border-blue-100">
        <CardBody className="p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Image Upload Section */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <Typography
                variant="h5"
                className="flex items-center gap-2 text-blue-900 font-bold mb-4"
              >
                <Image size={24} /> Car Images
              </Typography>
              
              <div className="flex gap-6">
                {/* Main Image Preview */}
                <div className="relative w-3/5">
                  <img
                    src={uploadedImages[currentImageIndex]}
                    alt="Car preview"
                    className="w-full h-[400px] object-cover rounded-xl border-2 border-blue-200"
                  />
                  
                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
                  >
                    <ArrowLeft size={20} className="rotate-180" />
                  </button>
                </div>

                {/* Thumbnail Upload Areas */}
                <div className="flex flex-col justify-center gap-4 w-2/5">
                  {[0, 1, 2].map((index) => (
                    <div key={index} className="relative">
                      <label className="cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, index)}
                          className="hidden"
                        />
                        <div className={`w-full h-24 border-2 border-dashed rounded-lg flex items-center justify-center transition-all ${
                          uploadedImages[index].includes('placeholder') 
                            ? 'border-blue-300 bg-blue-50' 
                            : 'border-green-300 bg-green-50'
                        }`}>
                          {uploadedImages[index].includes('placeholder') ? (
                            <div className="text-center">
                              <Upload size={20} className="mx-auto text-blue-500 mb-1" />
                              <Typography variant="small" className="text-blue-600">
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

            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Typography variant="h6" className="flex items-center gap-2 text-blue-900 mb-4">
                  <Car size={20} /> Basic Information
                </Typography>
                
                <div className="space-y-4">
                  <Input
                    label="Car Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    icon={<Car size={16} />}
                  />
                  
                  <Select
                    label="Brand"
                    value={formData.brand}
                    onChange={(value) => handleInputChange('brand', value)}
                  >
                    {brands.map(brand => (
                      <Option key={brand} value={brand}>{brand}</Option>
                    ))}
                  </Select>
                  
                  <Select
                    label="Car Type"
                    value={formData.type}
                    onChange={(value) => handleInputChange('type', value)}
                  >
                    {carTypes.map(type => (
                      <Option key={type} value={type}>{type}</Option>
                    ))}
                  </Select>
                  
                  <Input
                    type="number"
                    label="Year"
                    value={formData.year}
                    onChange={(e) => handleInputChange('year', e.target.value)}
                    min={1990}
                    max={new Date().getFullYear() + 1}
                    icon={<Calendar size={16} />}
                  />
                </div>
              </div>

              {/* Pricing & Availability */}
              <div>
                <Typography variant="h6" className="flex items-center gap-2 text-blue-900 mb-4">
                  <DollarSign size={20} /> Pricing & Status
                </Typography>
                
                <div className="space-y-4">
                  <Input
                    type="number"
                    label="Price per Day ($)"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    required
                    icon={<DollarSign size={16} />}
                  />
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <Typography className="font-semibold">Available for Rent</Typography>
                    <Switch
                      checked={formData.available}
                      onChange={(e) => handleInputChange('available', e.target.checked)}
                      color="blue"
                    />
                  </div>
                  
                  <div className={`p-3 rounded-lg ${
                    formData.available ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                  }`}>
                    <Typography variant="small" className={formData.available ? 'text-green-700' : 'text-red-700'}>
                      {formData.available 
                        ? "This car will be available for rental immediately after submission." 
                        : "This car will be marked as unavailable and won't appear in search results."}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <Typography variant="h5" className="flex items-center gap-2 text-blue-900 font-bold mb-4">
                <Gauge size={24} /> Specifications
              </Typography>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="number"
                  label="Number of Seats"
                  value={formData.specs.seats}
                  onChange={(e) => handleInputChange('specs.seats', e.target.value)}
                  icon={<Users size={16} />}
                />
                
                <Select
                  label="Transmission"
                  value={formData.specs.transmission}
                  onChange={(value) => handleInputChange('specs.transmission', value)}
                >
                  {transmissionTypes.map(trans => (
                    <Option key={trans} value={trans}>{trans}</Option>
                  ))}
                </Select>
                
                <Select
                  label="Fuel Type"
                  value={formData.specs.fuel}
                  onChange={(value) => handleInputChange('specs.fuel', value)}
                >
                  {fuelTypes.map(fuel => (
                    <Option key={fuel} value={fuel}>{fuel}</Option>
                  ))}
                </Select>
                
                <Input
                  type="number"
                  label="Horsepower"
                  value={formData.specs.hp}
                  onChange={(e) => handleInputChange('specs.hp', e.target.value)}
                  icon={<Zap size={16} />}
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <Typography variant="h6" className="flex items-center gap-2 text-blue-900 mb-4">
                <Info size={20} /> Description
              </Typography>
              
              <Textarea
                label="Car Description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                placeholder="Describe the car's features, condition, special attributes, and any additional information renters should know..."
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 justify-end pt-6 border-t border-gray-200">
              <Link to="/carmanagement">
                <Button
                  variant="outlined"
                  className="border-red-500 text-red-500 hover:bg-red-50"
                >
                  Cancel
                </Button>
              </Link>
              
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] hover:from-[#0052cc] hover:to-[#004bb5] text-white font-semibold shadow-md hover:shadow-lg transition-all"
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