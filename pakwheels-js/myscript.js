let carTitle = document.getElementById("carTitle");
let carPrice = document.getElementById("carPrice");
let carModel = document.getElementById("carModel");
let carEngine = document.getElementById("carEngine");
// let year = document.querySelector(" year");
let carGear = document.getElementById("carGear");
let km = document.getElementById("km");
let carImage = document.getElementById("carImage");
let carLocation = document.getElementById("location");

let carDetails = document.getElementById("carDetails");

const carData = [
  //   {
  //     title: "",
  //     price: "",
  //     model: "",
  //     engine: "",
  //     gear: "",
  //     km: "",
  //     image: "",
  //     location: "",
  //   },

  {
    title: "Nissan Ad Van 2006 for Sale",
    price: "1500000",
    model: "2006",
    engine: "1300cc",
    gear: "automatic",
    km: "195000",
    image: "nissan.webp",
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
    image: "/toyyota.webp",
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
    image: "/toyyotaAvanza.webp",
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
    image: "/tn_honda-city.webp",
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
    image: "/tn_honda-city.webp",
    location: "Karachi",
    province: "sindh",
  },
];

let imageUrl = "";

carImage.addEventListener("change", function () {
  const file = this.files[0]; //the first file will be stored here when user select the file
  if (file) {
    const reader = new FileReader(); //File Reader is an API which read the upload file url

    reader.onload = function (e) {
      //when successful read the file,  this funciton executes
      imageUrl = e.target.result; // e.target.result contain data url of the image
    };

    reader.readAsDataURL(file);
  }
});

function displayCars(cars) {
  let output = "";
  for (data of cars) {
    output += `\
    <div class='bg-white p-2 rounded-lg'>\
      <div class='flex  gap-4'>

        <img src='${data.image}' class='h-28 w-40'/>
        <div class='w-full space-y-2 '>
          <span class='flex justify-between w-full'>

          
          <h2 class='text-blue-500 hover:text-blue-300 cursor-pointer'> ${
            data.title
          } </h2>
          <h2 class='font-semibold text-lg text-black/70 cursor-pointer'>PKR ${
            data.price / 100000
          } Lacs </h2>
          </span>
           <p class='text-sm text-gray-700'> ${data.location}</p>
           <span class='flex items-center gap-2 text-sm text-gray-400'>
           
           <p class='text-sm text-gray-700'> ${data.model}</p>|
           <p class='text-sm text-gray-700'> ${data.km} km  </p>|
           <p class='text-sm text-gray-700'> Petrol</p>|
           <p class='text-sm text-gray-700'> ${data.engine}</p>|
           <p class='text-sm text-gray-700'> ${data.gear}km</p> 
           </span>

           <p class='text-xs text-gray-700'> Updated Just Now  </p> 

        </div>
      </div>
    </div>`;
  }
  document.getElementById("carDetails").innerHTML = output;
}

function add() {
  // let output = "";
  //   console.log({
  //     Title: carPrice.value,
  //     Model: carModel.value,
  //     Engine: carEngine.value,
  //     Gear: carGear.value,
  //     Km: km.value,
  //     imge: carImage.value,
  //     location: carLocation.value,
  //   });

  // for (data of carData) {
  //   output += `\
  //   <div class='bg-white p-2 rounded-lg'>\
  //     <div class='flex  gap-4'>

  //       <img src='${data.image}' class='h-28 w-40'/>
  //       <div class='w-full space-y-2 '>
  //         <span class='flex justify-between w-full'>

  //         <h2 class='text-blue-500 hover:text-blue-300 cursor-pointer'> ${data.title} </h2>
  //         <h2 class='font-semibold text-lg text-black/70 cursor-pointer'>PKR ${data.price} Lacs </h2>
  //         </span>
  //          <p class='text-sm text-gray-700'> ${data.location}</p>
  //          <span class='flex items-center gap-2 text-sm text-gray-400'>

  //          <p class='text-sm text-gray-700'> ${data.model}</p>|
  //          <p class='text-sm text-gray-700'> ${data.km} km  </p>|
  //          <p class='text-sm text-gray-700'> Petrol</p>|
  //          <p class='text-sm text-gray-700'> ${data.engine}</p>|
  //          <p class='text-sm text-gray-700'> ${data.gear}km</p>
  //          </span>

  //          <p class='text-xs text-gray-700'> Updated Just Now  </p>

  //       </div>
  //     </div>
  //   </div>`;
  // }
  carData.push({
    title: carTitle.value,
    price: carPrice.value / 100000,
    model: carModel.value,
    engine: carEngine.value,
    gear: carGear.value,
    km: km.value,
    image: imageUrl,
    location: carLocation.value,
  });

  displayCars(carData);

  // document.getElementById("carDetails").innerHTML = output;
  //   console.log(carImage.value);
}
displayCars(carData);
// add();

let search = document.getElementById("searchByKeyword");
let sortBy = document.getElementById("sortby");

const searchByKeyword = (e) => {
  // console.log(searchByKyword.value);
  const searchData = e.target.value.toLowerCase();
  const filteredData = carData.filter((item) => {
    return (
      item.title.toLocaleLowerCase().includes(searchData) ||
      item.location.toLocaleLowerCase().includes(searchData) ||
      item.engine.toLocaleLowerCase().includes(searchData) ||
      item.model.toLocaleLowerCase().includes(searchData)
    );
    // item.title.toLowerCase().includes(searchData);
  });

  displayCars(filteredData);
};

search.addEventListener("keyup", searchByKeyword);
search.classList.remove("text-white");

sortBy.addEventListener("change", () => {
  const value = sortBy.value;
  const sortedData = [...carData];

  if (value === "recentFirst") {
    sortedData.reverse();
  } else if (value === "oldestFirst") {
    // sortedData.sort((a, b) => carData.indexOf(a) - carData.indexOf(b));
    sortedData.sort();
  } else if (value === "priceLowToHigh") {
    sortedData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (value === "priceHighToLow") {
    sortedData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (value === "modelLatest") {
    sortedData.sort((a, b) => parseInt(b.model) - parseInt(a.model));
  } else if (value === "modelOldest") {
    sortedData.sort((a, b) => parseInt(a.model) - parseInt(b.model));
  } else if (value === "mileageLowToHigh") {
    sortedData.sort(
      (a, b) =>
        parseInt(a.km.replace(/,/g, "")) - parseInt(b.km.replace(/,/g, ""))
    );
  } else if (value === "mileageHighToLow") {
    sortedData.sort(
      (a, b) =>
        parseInt(b.km.replace(/,/g, "")) - parseInt(a.km.replace(/,/g, ""))
    );
  }

  displayCars(sortedData);
});

const lhr = document.getElementById("lhr");
const isb = document.getElementById("isb");
const pesh = document.getElementById("pesh");
const krchi = document.getElementById("krchi");
const rwp = document.getElementById("rwp");

const filter = (data) => {
  const filteredData = carData.filter(
    (item) =>
      item.location.includes(data) ||
      item.province.includes(data) ||
      item.title.includes(data)
  );
  displayCars(filteredData);
};

//
// const filterByCity = () => {
//   const selectedCities = Array.from(
//     document.querySelectorAll(".city-checkbox:checked")
//   ).map((checkbox) => checkbox.value.toLowerCase());
//   const filteredData = carData.filter((item) =>
//     selectedCities.includes(item.location.toLowerCase())
//   );
//   displayCars(filteredData);
// };

// const cities = document.querySelectorAll(".city");

// cities.forEach((city) => {
//   city.addEventListener("change", filterByCity);
// });

//

lhr.addEventListener("change", () => filter(lhr.value));

isb.addEventListener("change", () => filter(isb.value));

pesh.addEventListener("change", () => filter(pesh.value));

const punjab = document.getElementById("punjab");
const sindh = document.getElementById("sindh");
const kpk = document.getElementById("kpk");
const azk = document.getElementById("azk");

punjab.addEventListener("change", () => filter(punjab.value));

sindh.addEventListener("change", () => filter(sindh.value));

kpk.addEventListener("change", () => filter(kpk.value));

azk.addEventListener("change", () => filter(azk.value));

const honda = document.getElementById("honda");
const suzuki = document.getElementById("suzuki");
const nissan = document.getElementById("nissan");
const toyyota = document.getElementById("toyyota");
const daihatsu = document.getElementById("daihatsu");

honda.addEventListener("change", () => filter(honda.value));

nissan.addEventListener("change", () => filter(nissan.value));

suzuki.addEventListener("change", () => filter(suzuki.value));

toyyota.addEventListener("change", () => filter(toyyota.value));

daihatsu.addEventListener("change", () => filter(daihatsu.value));

const priceFrom = document.getElementById("priceFrom");
const priceTo = document.getElementById("priceTo");

const calculatePriceRange = () => {
  const from = parseFloat(priceFrom.value) || 0;
  const to = parseFloat(priceTo.value) || Number.MAX_SAFE_INTEGER;
  const filteredData = carData.filter(
    (item) => item.price >= from && item.price <= to
  );
  displayCars(filteredData);
};

priceFrom.addEventListener("input", calculatePriceRange);
priceTo.addEventListener("input", calculatePriceRange);

const yearFrom = document.getElementById("yearFrom");
const yearTo = document.getElementById("yearTo");

const calculateYearRange = () => {
  const from = parseFloat(yearFrom.value) || 0;
  const to = parseFloat(yearTo.value) || Number.MAX_SAFE_INTEGER;

  const filterData = carData.filter(
    (item) => item.model >= from && item.model <= to
  );

  displayCars(filterData);
};
yearFrom.addEventListener("input", calculateYearRange);
yearTo.addEventListener("input", calculateYearRange);

const mileageFrom = document.getElementById("mileageFrom");
const mileageTo = document.getElementById("mileageTo");

const calculateMileageRange = () => {
  const from = parseFloat(mileageFrom.value) || 0;  
  const to = parseFloat(mileageTo.value) || Number.MAX_SAFE_INTEGER;
  const filterData = carData.filter((item) => item.km >= from && item.km <= to);

  displayCars(filterData);
};

mileageFrom.addEventListener("input", calculateMileageRange);
mileageTo.addEventListener("input", calculateMileageRange);
