import React from "react";

const Sortby = ({ onSort }) => {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <span className="space-x-2">
      <label>Sort By</label>
      <select name="" id="sortby" className="border border-gray-200 p-1 rounded-lg" onChange={handleSortChange}>
        <option disabled defaultChecked>
          Sort By
        </option>
        <option value="recentFirst">Update Date : Recent First</option>
        <option value="oldestFirst">Update Date : Oldest First</option>
        <option value="priceLowToHigh">Price : Low to High</option>
        <option value="priceHighToLow">Price : High to Low</option>
        <option value="modelLatest">Model Year : Latest First</option>
        <option value="modelOldest">Model Year : Oldest First</option>
        <option value="mileageLowToHigh">Mileage : Low to High</option>
        <option value="mileageHighToLow">Mileage : High to Low</option>
      </select>
    </span>
  );
};

export default Sortby;
