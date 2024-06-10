import React, { useState } from "react";

const Range = ({ heading, onClick, type }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  const handleClick = () => {
    onClick(from, to, type);
  };

  return (
    <div>
      <span
        className="p-4 block cursor-pointer bg-gray-100 border-b-2"
        id="priceAccordion"
      >
        <p>{heading}</p>
      </span>
      <span className="p-4 block">
        <span className="p-2 flex justify-center items-center">
          <input
            type="text"
            placeholder="From"
            className="border p-1 w-20"
            value={from}
            onChange={handleFromChange}
          />
          <input
            type="text"
            placeholder="To"
            className="border p-1 w-20"
            value={to}
            onChange={handleToChange}
          />
          <button className="p-1 bg-blue-800 text-white" onClick={handleClick}>
            Go
          </button>
        </span>
      </span>
    </div>
  );
};

export default Range;
