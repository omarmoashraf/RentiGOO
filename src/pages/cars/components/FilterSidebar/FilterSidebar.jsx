import {
  Card,
  CardBody,
  Input,
  Checkbox,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import { Search } from "lucide-react";
import { FiFilter } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

const FilterSidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  priceRange,
  setPriceRange,
  showAvailableOnly,
  setShowAvailableOnly,
}) => {
  return (
    <div className="w-full  lg:w-1/6">
      <Card className="p-2 shadow-md">
        <CardBody className="p-2 space-y-2">
          {/* Header with text and icon */}
          <div className="flex items-center space-x-2">
            <FiFilter className="text-lg text-gray-700" />
            <span className="text-lg font-semibold text-gray-800">Filters</span>
          </div>
          {/* Search */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-900">
              Search
            </label>
            <div className="relative">
              <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search cars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 w-full h-8 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-white"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-900">
              Category
            </label>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? " bg-gradient-to-r from-[#0066ff] to-[#0052cc] hover:from-[#0052cc] hover:to-[#004bb5] text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{category.label}</span>
                    {category.count !== undefined && (
                      <span className="text-xs opacity-75">
                        ({category.count})
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2 w-full">
            <label className="text-sm font-semibold text-gray-900">
              Price Range
            </label>
            <div className="w-full relative">
              <Select
                value={priceRange}
                onChange={(value) => setPriceRange(value)}
                className="h-8 text-sm rounded-full border border-gray-300 font-medium text-gray-900 w-full"
                containerProps={{ className: "w-full !min-w-0" }}
                labelProps={{ className: "before:border-0 after:border-0" }}
              >
                <Option value="all">All Prices</Option>
                <Option value="under-100">Under $100</Option>
                <Option value="100-150">$100 - $150</Option>
                <Option value="over-150">Over $150</Option>
              </Select>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center space-x-2  ">
            <Checkbox
              id="available"
              checked={showAvailableOnly}
              onChange={(e) => setShowAvailableOnly(e.target.checked)}
              color="blue"
            />
            <label
              htmlFor="available"
              className="text-sm font-medium text-gray-900"
            >
              Show available only
            </label>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default FilterSidebar;
