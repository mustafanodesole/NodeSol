import React, { useEffect, useState } from "react";
import Sortby from "./sortby";
import Add from "./add";

const ShowDetails = () => {
  const [data, setData] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("");
  const storage = window.localStorage;

  useEffect(() => {
    const details = storage.getItem("carDetails");
    if (details) {
      const carData = JSON.parse(details);
      setData(carData);
    }
  }, []);
  console.log(data);

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  const sortData = (data) => {
    switch (sortCriteria) {
      case "recentFirst":
        return data.reverse();
      case "oldestFirst":
        return data.sort();
      case "priceLowToHigh":
        return data.sort((a, b) => a.price - b.price);
      case "priceHighToLow":
        return data.sort((a, b) => b.price - a.price);
      case "modelLatest":
        return data.sort((a, b) => b.model - a.model);
      case "modelOldest":
        return data.sort((a, b) => a.model - b.model);
      case "mileageLowToHigh":
        return data.sort((a, b) => a.mileage - b.mileage);
      case "mileageHighToLow":
        return data.sort((a, b) => b.mileage - a.mileage);
      default:
        return data;
    }
  };

  const sortedData = sortData([...data]);

  return (
    <main className="p-3">
      <div className="flex justify-between">
        <Sortby onSortChange={handleSortChange} />
        <Add />
      </div>
      <div>
        {sortedData.map((data, index) => (
          <div class="bg-white p-2 rounded-lg" key={index}>
            <div class="flex  gap-4">
              <img src={data.image} alt={data.title} class="h-28 w-40" />
              <div class="w-full space-y-2 ">
                <span class="flex justify-between w-full">
                  <h2 class="text-blue-500 hover:text-blue-300 cursor-pointer">
                    {data.title}
                  </h2>
                  <h2 class="font-semibold text-lg text-black/70 cursor-pointer">
                    PKR. {data.price / 100000} Lacs{" "}
                  </h2>
                </span>
                <p class="text-sm text-gray-700"> {data.location}</p>
                <span class="flex items-center gap-2 text-sm text-gray-400">
                  <p class="text-sm text-gray-700"> {data.model}</p>|
                  <p class="text-sm text-gray-700"> {data.km} km </p>|
                  <p class="text-sm text-gray-700"> Petrol</p>|
                  <p class="text-sm text-gray-700"> {data.engine}</p>|
                  <p class="text-sm text-gray-700"> {data.gear}km</p>
                </span>

                <p class="text-xs text-gray-700"> Updated Just Now </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ShowDetails;
