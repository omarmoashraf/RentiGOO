import { Select, Option } from "@material-tailwind/react";

const CarsHeader = ({ totalCars, filteredCars, sortBy, setSortBy }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <p className="text-md text-gray-700 dark:text-dark-secondary_text">
        Showing <span className="font-semibold">{filteredCars}</span> of{" "}
        <span className="font-semibold">{totalCars}</span> cars
      </p>

      <div className="flex items-center gap-2">
        <label className="text-md text-gray-700 dark:text-dark-secondary_text font-medium whitespace-nowrap">
          Sort by:
        </label>
        <Select
          value={sortBy}
          onChange={(value) => setSortBy(value)}
          className="h-8 text-sm rounded-full border border-gray-300 dark:text-dark-secondary_text"
          labelProps={{ className: "before:border-0 after:border-0" }}
          containerProps={{ className: "shadow-none" }}
        >
          <Option value="default">Featured</Option>
          <Option value="priceAsc">Price: Low to High</Option>
          <Option value="priceDesc">Price: High to Low</Option>
          <Option value="name">Name: A → Z</Option>
          <Option value="rating">Rating</Option>
        </Select>
      </div>
    </div>
  );
};

export default CarsHeader;
