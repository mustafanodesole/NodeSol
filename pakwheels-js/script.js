let keywordAccordion = document.querySelector("#keywordAccordion");
let cityAccordion = document.querySelector("#cityAccordion");
let provinceAccordion = document.querySelector("#provinceAccordion");
let makeAccordion = document.querySelector("#makeAccordion");
let priceAccordion = document.querySelector("#priceAccordion");
let yearAccordion = document.querySelector("#yearAccordion");
let mileageAccordion = document.querySelector("#mileageAccordion");

let searchBody = document.querySelector("#keywordBody");
let cityBody = document.querySelector("#city");
let provinceBody = document.querySelector("#provinceBody");
let makeBody = document.querySelector("#makeBody");
let yearBody = document.querySelector("#yearBody");
let mileageBody = document.querySelector("#mileageBody");
let priceBody = document.querySelector("#priceBody");

let keywordData = false;
let cityData = false;
let provicesData = false;
let makeData = false;
let priceData = false;
let yearData = false;
let mileageData = false;

//Searching by keyword
keywordAccordion.addEventListener("click", () => {
  keywordData = !keywordData;
  console.log("keyword", keywordData);
  if (keywordData) {
    searchBody.classList.remove("hidden");
  } else {
    searchBody.classList.add("hidden");
  }
  search.classList.add("text-white");
  search.classList.add("duration-500");
});

// filter out by city
cityAccordion.addEventListener("click", () => {
  cityData = !cityData;
  if (cityData) {
    cityBody.classList.remove("hidden");
  } else {
    cityBody.classList.add("hidden");
  }
});

//filter out by province
provinceAccordion.addEventListener("click", () => {
  provicesData = !provicesData;
  if (provicesData) {
    provinceBody.classList.remove("hidden");
  } else {
    provinceBody.classList.add("hidden");
  }
});

//filter out by Make
makeAccordion.addEventListener("click", () => {
  makeData = !makeData;
  if (makeData) {
    makeBody.classList.remove("hidden");
  } else {
    makeBody.classList.add("hidden");
  }
});

//filter out by Year
yearAccordion.addEventListener("click", () => {
  yearData = !yearData;
  if (yearData) {
    yearBody.classList.remove("hidden");
  } else {
    yearBody.classList.add("hidden");
  }
});

//filter out by Price
priceAccordion.addEventListener("click", () => {
  priceData = !priceData;
  if (priceData) {
    priceBody.classList.remove("hidden");
  } else {
    priceBody.classList.add("hidden");
  }
});

//filter out by MiuleAge
mileageAccordion.addEventListener("click", () => {
  mileageData = !mileageData;
  if (mileageData) {
    mileageBody.classList.remove("hidden");
  } else {
    mileageBody.classList.add("hidden");
  }
});

// let carTitle = document.getElementById("carTitle");
// let carPrice = document.getElementById("carPrice");
// let carModel = document.getElementById("carModel");
// let carEngine = document.getElementById("carEngine");
// // let year = document.querySelector(" year");
// let carGear = document.getElementById("carGear");
// let km = document.getElementById("km");
// let carImage = document.getElementById("carImage");
// let carLocation = document.getElementById("location");

// let carDetails = document.getElementById("carDetails");

// const carData = [
//   //   {
//   //     title: "",
//   //     price: "",
//   //     model: "",
//   //     engine: "",
//   //     gear: "",
//   //     km: "",
//   //     image: "",
//   //     location: "",
//   //   },

//   {
//     title: "Nissan Ad Van 2006 for Sale",
//     price: "15.25",
//     model: "2006",
//     engine: "1300cc",
//     gear: "automatic",
//     km: "195000",
//     image: "nissan.webp",
//     location: "Lahore",
//   },

//   {
//     title: "Toyyota Carolla 2017 Altis Grande CVT-i8 for sale",
//     price: "42.25",
//     model: "2017",
//     engine: "1800cc",
//     gear: "automatic",
//     km: "125,150",
//     image: "/toyyota.webp",
//     location: "Lahore",
//   },
// ];

// let imageUrl = "";

// carImage.addEventListener("change", function () {
//   const file = this.files[0]; //the first file will be stored here when user select the file
//   if (file) {
//     const reader = new FileReader(); //File Reader is an API which read the upload file url

//     reader.onload = function (e) {
//       //when successful read the file this funciton executes
//       imageUrl = e.target.result; // e.target.result contain data url of the image
//     };

//     reader.readAsDataURL(file);
//   }
// });

// function add() {
//   let output = "";
//   //   console.log({
//   //     Title: carPrice.value,
//   //     Model: carModel.value,
//   //     Engine: carEngine.value,
//   //     Gear: carGear.value,
//   //     Km: km.value,
//   //     imge: carImage.value,
//   //     location: carLocation.value,
//   //   });

//   for (data of carData) {
//     output += `\
//     <div class='bg-white p-2 rounded-lg'>\
//       <div class='flex  gap-4'>

//         <img src='${data.image}' class='h-28 w-40'/>
//         <div class='w-full space-y-2 '>
//           <span class='flex justify-between w-full'>

//           <h2 class='text-blue-500 hover:text-blue-300 cursor-pointer'> ${data.title} </h2>
//           <h2 class='font-semibold text-lg text-black/70 cursor-pointer'>PKR ${data.price} Lacs </h2>
//           </span>
//            <p class='text-sm text-gray-700'> ${data.location}</p>
//            <span class='flex items-center gap-2 text-sm text-gray-400'>

//            <p class='text-sm text-gray-700'> ${data.model}</p>|
//            <p class='text-sm text-gray-700'> ${data.km} km  </p>|
//            <p class='text-sm text-gray-700'> Petrol</p>|
//            <p class='text-sm text-gray-700'> ${data.engine}</p>|
//            <p class='text-sm text-gray-700'> ${data.gear}km</p>
//            </span>

//            <p class='text-xs text-gray-700'> Updated Just Now  </p>

//         </div>
//       </div>
//     </div>`;
//   }

//   carData.push({
//     title: carTitle.value,
//     price: carPrice.value,
//     model: carModel.value,
//     engine: carEngine.value,
//     gear: carGear.value,
//     km: km.value,
//     image: imageUrl,
//     location: carLocation.value,
//   });

//   document.getElementById("carDetails").innerHTML = output;
//   //   console.log(carImage.value);
// }

// add();

