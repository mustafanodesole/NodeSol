//eslint-disable-next-line
import React, { useEffect, useState } from "react";
import nissan from "../assets/images/nissan.webp";
import honda from "../assets/images/tn_honda-city.webp";
import toyyota from "../assets/images/toyyota.webp";
import toyyota2 from "../assets/images/toyyotaAvanza.webp";

const carData = [
  {
    title: "Nissan Ad Van 2006 for Sale",
    price: "1500000",
    model: "2006",
    engine: "1300cc",
    gear: "automatic",
    km: "195000",
    image: nissan,
    location: "Lahore",
    province: "punjab",
  },

  {
    title: "Toyyota Carolla 2017 Altis Grande CVT-i8 for sale",
    price: "4225000",
    model: "2017",
    engine: "1800cc",
    gear: "automatic",
    km: "125150",
    image: toyyota,
    location: "Lahore",
    province: "punjab",
  },

  {
    title: "Toyyota Avanza 2004 for Sale",
    price: "2300000",
    model: "2004",
    engine: "13000cc",
    gear: "Automatic",
    km: "238897",
    image: toyyota2,
    location: "Islamabad",
    province: "punjab",
  },
  {
    title: "Honda city 2009 i.3 VTC for sale",
    price: "3220000",
    model: "2004",
    engine: "13000cc",
    gear: "Automatic",
    km: "238897",
    image: honda,
    location: "Peshwar",
    province: "kpk",
  },

  {
    title: "Honda city 2009 i.3 VTC for sale",
    price: "2920000",
    model: "2004",
    engine: "13000cc",
    gear: "Automatic",
    km: "238897",
    image: honda,
    location: "Karachi",
    province: "sindh",
  },
];

const Add = () => {
  const [carTitle, setCarTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [model, setModel] = useState("");
  const [gear, setGear] = useState("");
  const [mileage, setMilage] = useState("");
  const [image, setImage] = useState("");
  const [engine, setEngine] = useState("");

  const titleChange = (e) => {
    setCarTitle(e.target.value);
  };

  const locationChange = (e) => {
    setLocation(e.target.value);
  };

  const priceChange = (e) => {
    setPrice(e.target.value);
  };

  const modelChange = (e) => {
    setModel(e.target.value);
  };

  const gearChange = (e) => {
    setGear(e.target.value);
  };

  const mileageChange = (e) => {
    setMilage(e.target.value);
  };

  const imageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const engineChange = (e) => {
    setEngine(e.target.value);
  };

  const storage = window.localStorage;
  // storage.setItem("carDetails", JSON.stringify(carData));

  const onSubmit = (e) => {
    // e.preventDefault();

    const newCarDetails = {
      title: carTitle,
      location: location,
      price: price,
      model: model,
      mileage: mileage,
      gear: gear,
      engine: engine,
      image: image,
    };

    const existingCarDetails = JSON.parse(storage.getItem("carDetails")) || [];
    const updatedCarDetails = [...existingCarDetails, newCarDetails];

    storage.setItem("carDetails", JSON.stringify(updatedCarDetails));

    console.log(storage);
  };

  // useEffect(() => onSubmit() , [])

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-50 p-2">
      <div>
        <label
          htmlFor="tw-modal"
          className="cursor-pointer rounded bg-red-900 p-2 text-white active:bg-slate-400"
        >
          Add
        </label>

        <input
          type="checkbox"
          id="tw-modal"
          className="peer fixed appearance-none opacity-0"
        />

        <label
          htmlFor="tw-modal"
          className="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100"
        >
          <label className="max-h-[calc(100vh - 5em)] h-fit w-fit scale-90 overflow-y-auto overscroll-contain rounded-md bg-white p-6 text-black shadow-2xl transition flex flex-col items-center gap-4">
            <form
              onSubmit={onSubmit}
              className="flex flex-col justify-center items-center gap-3"
            >
              <input
                type="text"
                value={carTitle}
                onChange={titleChange}
                placeholder="Title of the car"
                className="rounded-md p-2 outline-gray-400 border border-gray-300 w-full"
              />
              <select
                value={location}
                onChange={locationChange}
                className="rounded-md p-2 outline-gray-400 border border-gray-300 w-full"
              >
                <option value="select Location" disabled>
                  Location
                </option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Karachi">Karachi</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Azad Kashmir">Azad Kashmir</option>
              </select>
              <input
                type="text"
                value={price}
                onChange={priceChange}
                placeholder="Price in Lacs"
                className="rounded-md p-2 outline-gray-400 border border-gray-300 w-full"
              />

              <input
                type="number"
                value={model}
                onChange={modelChange}
                placeholder="Car Model"
                id="carModel"
                className="rounded-md p-2 outline-gray-400 border border-gray-300 w-full"
              />
              <input
                type="number"
                value={mileage}
                onChange={mileageChange}
                placeholder="Km"
                id="km"
                className="rounded-md p-2 outline-gray-400 border border-gray-300 w-full"
              />
              <input
                type="text"
                placeholder="Engine"
                value={engine}
                onChange={engineChange}
                className="rounded-md p-2 outline-gray-400 border border-gray-300 w-full"
              />
              <select
                value={gear}
                onChange={gearChange}
                className="rounded-md p-2 outline-gray-400 border border-gray-300 w-full"
              >
                <option value="select gear" disabled>
                  Gear
                </option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
              <input
                type="file"
                onChange={imageChange}
                accept="image/*"
                className="rounded-md p-2 outline-gray-400 border border-gray-300 w-full"
              />

              <button
                type="submit"
                className="submit rounded-lg bg-black text-white py-2 px-5 mx-auto"
              >
                Submit
              </button>
            </form>
          </label>
        </label>
      </div>
    </div>
  );
};

export default Add;
