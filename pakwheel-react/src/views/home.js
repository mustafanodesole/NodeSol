import React, { useState, useEffect } from "react";
import Search from "../components/search";
// import FilterByCheckbox from "../components/filterByCheckbox";
import FilterByCheckbox from "../components/fitlerByCheckbox";
import Range from "./range";
import Sortby from "../components/sortby";
import Add from "../components/add";
import ShowDetails from "../components/showDetails";

const city = ["Lahore", "Islamabad", "Karachi", "Rawalpindi", "Peshawar"];
const province = ["Punjab", "Sindh", "KPK", "Azad Kashmir"];
const make = ["Honda", "Suzuki", "Toyyota", "Nissan", "Daihatsu"];

const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [priceRange, setPriceRange] = useState({ from: "", to: "" });
  const [yearRange, setYearRange] = useState({ from: "", to: "" });
  const [mileageRange, setMileageRange] = useState({ from: "", to: "" });
  const storage = window.localStorage;

  useEffect(() => {
    const details = storage.getItem("carDetails");
    if (details) {
      const carData = JSON.parse(details);
      setData(carData);
      setFilteredData(carData);
    }
  }, []);

  useEffect(() => {
    let tempData = [...data];

    // Search Filtering
    if (searchKeyword) {
      tempData = tempData.filter((car) =>
        car.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    // Checkbox Filtering
    if (selectedCheckboxes.length) {
      tempData = tempData.filter((car) =>
        selectedCheckboxes.some((checkbox) => {
          return (
            checkbox === car.location ||
            // checkbox === car.province ||
            car.title.includes(checkbox)
          );
        })
      );
    }

    // Price Range Filtering
    if (priceRange.from || priceRange.to) {
      tempData = tempData.filter((car) => {
        const fromCondition = priceRange.from
          ? car.price >= priceRange.from
          : true;
        const toCondition = priceRange.to ? car.price <= priceRange.to : true;
        return fromCondition && toCondition;
      });
    }

    // Year Range Filtering
    if (yearRange.from || yearRange.to) {
      tempData = tempData.filter((car) => {
        const fromCondition = yearRange.from
          ? car.model >= yearRange.from
          : true;
        const toCondition = yearRange.to ? car.model <= yearRange.to : true;
        return fromCondition && toCondition;
      });
    }

    // Mileage Range Filtering
    if (mileageRange.from || mileageRange.to) {
      tempData = tempData.filter((car) => {
        const fromCondition = mileageRange.from
          ? car.km >= mileageRange.from
          : true;
        const toCondition = mileageRange.to ? car.km <= mileageRange.to : true;
        return fromCondition && toCondition;
      });
    }

    setFilteredData(tempData);
  }, [searchKeyword, selectedCheckboxes, priceRange,yearRange , mileageRange, data]);

  // Sorting Function
  const sortData = (criteria) => {
    let sortedData = [...filteredData];
    switch (criteria) {
      case "recentFirst":
        sortedData.reverse();
        break;
      case "oldestFirst":
        sortedData.sort((a, b) => a.title - b.title);
        break;
      case "priceLowToHigh":
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case "modelLatest":
        sortedData.sort((a, b) => b.model - a.model);
        break;
      case "modelOldest":
        sortedData.sort((a, b) => a.model - b.model);
        break;
      case "mileageLowToHigh":
        sortedData.sort((a, b) => a.km - b.km);
        break;
      case "mileageHighToLow":
        sortedData.sort((a, b) => b.km - a.km);
        break;
      default:
        sortedData = [...filteredData];
    }
    setFilteredData(sortedData);
  };

  // Search Function
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  // Checkbox Filter Function
  const handleCheckboxChange = (box) => {
    const newSelectedCheckboxes = [...selectedCheckboxes];
    if (newSelectedCheckboxes.includes(box)) {
      const index = newSelectedCheckboxes.indexOf(box);
      newSelectedCheckboxes.splice(index, 1);
    } else {
      newSelectedCheckboxes.push(box);
    }
    setSelectedCheckboxes(newSelectedCheckboxes);
  };

  // Range Filter Function
  const handleRangeFilter = (from, to, type) => {
    switch (type) {
      case "price":
        setPriceRange({ from: Number(from), to: Number(to) });
        break;
      case "year":
        setYearRange({ from: Number(from), to: Number(to) });
        break;
      case "mileage":
        setMileageRange({ from: Number(from), to: Number(to) });
        break;
      default:
        break;
    }
  };


  return (
    <>
      <main className="flex gap-2 justify-center py-20">
        <section className="basis-1/5 bg-white border">
          <p className="bg-blue-400 p-4 text-white text-sm font-semibold">
            Show Results by:
          </p>
          <Search heading={"Search by Keyword"} onSearch={handleSearch} />
          <FilterByCheckbox
            boxes={city}
            heading="City"
            onFilterChange={handleCheckboxChange}
          />
          {/* <FilterByCheckbox
            boxes={province}
            heading="Province"
            onFilterChange={handleCheckboxChange}
          /> */}
          <FilterByCheckbox
            boxes={make}
            heading="Make"
            onFilterChange={handleCheckboxChange}
          />
          <Range heading={"Price Range"} type='price' onClick={handleRangeFilter} />
          <Range heading={"Year"} type='year' onClick={handleRangeFilter} />
          <Range heading={"Mileage"} type='mileage' onClick={handleRangeFilter} />
        </section>

        <section className="basis-2/3 border">
          <main className="p-3">
            <div className="flex justify-between">
              <Sortby onSort={sortData} />
              <Add />
            </div>
            <div>
              {filteredData.map((data, index) => (
                <div className="bg-white p-2 rounded-lg" key={index}>
                  <div className="flex gap-4">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="h-28 w-40"
                    />
                    <div className="w-full space-y-2">
                      <span className="flex justify-between w-full">
                        <h2 className="text-blue-500 hover:text-blue-300 cursor-pointer">
                          {data.title}
                        </h2>
                        <h2 className="font-semibold text-lg text-black/70 cursor-pointer">
                          PKR. {data.price / 100000} Lacs
                        </h2>
                      </span>
                      <p className="text-sm text-gray-700"> {data.location}</p>
                      <span className="flex items-center gap-2 text-sm text-gray-400">
                        <p className="text-sm text-gray-700"> {data.model}</p>|
                        <p className="text-sm text-gray-700"> {data.km} km </p>|
                        <p className="text-sm text-gray-700"> Petrol</p>|
                        <p className="text-sm text-gray-700"> {data.engine}</p>|
                        <p className="text-sm text-gray-700"> {data.gear}</p>
                      </span>
                      <p className="text-xs text-gray-700">
                        {" "}
                        Updated Just Now{" "}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </section>
      </main>
    </>
  );
};

export default Home;
