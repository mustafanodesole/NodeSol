import React from "react";

const FilterByCheckbox = ({ boxes, heading, onFilterChange }) => {
  const handleCheckboxChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div>
      <span className="p-4 block accordion cursor-pointer bg-gray-100 border-b-2 ">
        <p>{heading}</p>
      </span>
      <span className="p-4 block">
        {boxes.map((box, i) => (
          <div className="flex justify-start items-center gap-2" key={i}>
            <input type="checkbox" value={box} onChange={(e) => onFilterChange(e.target.value)} />
            <label>{box}</label>
          </div>
        ))}
      </span>
    </div>
  );
};

export default FilterByCheckbox;
