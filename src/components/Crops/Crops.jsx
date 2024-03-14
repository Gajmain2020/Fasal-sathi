/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCropsAPI, getStorageHousesAPI } from "../../API/APIs";
import Heading from "../Common/Heading";
import LOGO from "../../assets/LOGO.png";

export default function Crops() {
  const navigate = useNavigate();
  const [crops, setCrops] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    if (crops.length === 0) {
      getAllCropsAPI()
        .then((res) => {
          setCrops(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    }
  }, []);

  if (crops.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center animate-pulse duration-50">
        <img src={LOGO} alt="Fasal Sathi Logo" />
        <span className="text-3xl font-semibold text-green-600">
          Loading...
        </span>
      </div>
    );
  }

  function handleSearch() {
    console.log("handle seach clicked");
  }
  function handleStorageTypeChange() {
    console.log("storage type changed");
  }
  function handleStorageCapacityChange() {
    console.log("storage capacity changed");
  }
  function handleCropClick(crop) {
    console.log(crop);
    navigate(`${crop}`);
  }
  function handleImageClick(e) {
    e.stopPropagation();
    console.log("handle image click ");
  }

  return (
    <div className="py-4 grid gap-4">
      <Heading>भंडार गृह</Heading>
      {/* //! search field */}
      <div className="flex gap-4">
        <div className="flex-1">
          <input
            placeholder="🔍 Find your crop."
            type="text"
            name="search"
            className="w-full px-2 py-1 text-gray-200 bg-gray-200/20 rounded-md hover:shadow-md"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={handleSearch}
            className="px-4 py-1 bg-green-402 font-semibold hover:bg-green-500/80 transition hover:shadow-md rounded-md"
          >
            Search
          </button>
        </div>
      </div>

      {/* //! filters only 2 at the time */}
      {/* <div className="flex gap-4 ">
        <div className="flex items-center  justify-center">
          <select
            onChange={handleStorageTypeChange}
            className="px-3 py-2 w-full text-xs bg-gray-200/60 font-semibold text-gray-900 transition hover:shadow-md rounded-md"
            name="type"
            id=""
          >
            <option selected value="">
              भंडारगृह प्रकार
            </option>
            <option value="">समान्य भंडारगृह(Normal Storage)</option>
            <option value="">वातानुकूलित भंडारगृह(Cold Storage)</option>
          </select>
        </div>
        <div className="flex items-center justify-center">
          <select
            onChange={handleStorageCapacityChange}
            className="px-3 w-full py-2 text-xs bg-gray-200/60 font-semibold text-gray-900 transition hover:shadow-md rounded-md"
            name="type"
          >
            <option selected value="">
              भंडारगृह क्षमता
            </option>
            <option value="">100 वर्गफीट से कम(Less Than 100 sqft)</option>
            <option value="">
              100 वर्गफीट से 500 वर्गफीट (100 to 500 sqft)
            </option>
            <option value="">500 वर्गफीट से अधिक (More Than 500 sqft)</option>
          </select>
        </div>
      </div> */}

      <div className="grid grid-cols-4 gap-4">
        {crops.map((crop) => (
          <SingleCropCard
            handleStorageClick={handleCropClick}
            crop={crop}
            key={crop.id}
          />
        ))}
      </div>
    </div>
  );
}

function SingleCropCard({ crop, handleStorageClick }) {
  return (
    <div
      onClick={() => handleStorageClick(crop.name)}
      className="flex flex-col w-full justify-between items-center gap-4 bg-gray-100/20 px-2 py-2 rounded-md hover:bg-gray-200/40 cursor-pointer transition"
    >
      <div className="rounded-md flex justify-center items-center overflow-hidden h-32 w-full relative group">
        <img
          className="h-full w-full object-center object-cover "
          src={crop.crop_image}
          alt="Your Image"
        />
        <div className="absolute text-sm text-center bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Click for more images
        </div>
      </div>

      <div className="grid flex-1">
        <div className="grid gap-2">
          <div>
            <span className="font-semibold">Name: </span>
            {crop.name}
          </div>
          <div>
            <span className="font-semibold">Season: </span>
            {crop.season}
          </div>
          <div>
            <span className="font-semibold">Type: </span>
            {crop.type} Crop
          </div>
          <div>
            <span className="font-semibold">Harvest Month: </span>
            {crop.month_of_harvest}
          </div>
          <div>
            <span className="font-semibold">Pesticides Adviced: </span>
            {crop.medicines_pesticides}
          </div>
          <div>
            <span className="font-semibold">Best Soil: </span>
            {crop.soil}
          </div>
        </div>
      </div>
    </div>
  );
}
