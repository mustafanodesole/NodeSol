import React, { useState } from "react";

const Search = ({ heading, onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(keyword);
  };

  return (
    <div>
      <span className="p-4 block bg-gray-100 border-b-2">
        <h2>{heading}</h2>
      </span>
      <span className="p-4 flex justify-center items-center duration-300">
        <input
          type="text"
          placeholder="Search by keyword"
          className="border p-1 text-black"
          value={keyword}
          onChange={handleInputChange}
        />
        <button className="p-1 bg-blue-800 text-white" onClick={handleSearchClick}>
          Go
        </button>
      </span>
    </div>
  );
};

export default Search;
