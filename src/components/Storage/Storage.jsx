/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getStorageHousesAPI } from "../../API/Storage";
import Heading from "../Common/Heading";
import LOGO from "../../assets/LOGO.png";

export default function Storage() {
  const navigate = useNavigate();
  const [storageHouses, setStorageHouses] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    if (storageHouses.length === 0) {
      getStorageHousesAPI()
        .then((res) => {
          setStorageHouses(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    }
  }, []);

  if (storageHouses.length === 0) {
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
  function handleStorageClick(id) {
    navigate(`${id}`);
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
            placeholder="🔍 भंडार गृह खोजें"
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
            खोजें
          </button>
        </div>
      </div>

      {/* //! filters only 2 at the time */}
      <div className="flex gap-4 ">
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
      </div>

      {storageHouses.map((storageHouse) => (
        <SingleStorageCard
          handleStorageClick={handleStorageClick}
          storageHouse={storageHouse}
          key={storageHouse.id}
          handleImageClick={handleImageClick}
        />
      ))}
    </div>
  );
}

function SingleStorageCard({
  storageHouse,
  handleStorageClick,
  handleImageClick,
}) {
  return (
    <div
      onClick={() => handleStorageClick(storageHouse.id)}
      className="flex w-full justify-between items-center gap-4 bg-gray-100/20 px-2 py-2 rounded-md hover:bg-gray-200/40 cursor-pointer transition"
    >
      <div className="grid grid-cols-2 flex-1">
        <div className="grid gap-2">
          <div>
            <span className="font-semibold">Name: </span>
            {storageHouse.name}
          </div>
          <div>
            <span className="font-semibold">Address: </span>
            {storageHouse.location}
          </div>
          <div>
            <span className="font-semibold">Capacity: </span>
            {storageHouse.capacity} Sqft
          </div>
          <div>
            <span className="font-semibold">Contact: </span>
            +91 {storageHouse.contact}
          </div>
        </div>
        <div className="grid gap-2">
          <div>
            <span className="font-semibold">Available For: </span>
            {storageHouse.availability_duration} Month(s)
          </div>
          <div>
            <span className="font-semibold">Price: </span>
            {storageHouse.price} per month/per 100 sqft
          </div>
          <div>
            <span className="font-semibold">Capacity: </span>
            {storageHouse.capacity} Sqft
          </div>
          <div>
            <span className="font-semibold">Availablity: </span>
            {storageHouse.available === "Yes" ? (
              <span>
                Available{" "}
                <div className="w-2 h-2 rounded-full bg-green-500 inline-block"></div>
              </span>
            ) : (
              <span>
                Not Available{" "}
                <div className="w-2 h-2 rounded-full bg-red-500 inline-block"></div>
              </span>
            )}
          </div>
        </div>
      </div>

      <div>
        <div
          onClick={(e) => handleImageClick(e, storageHouse.storage_image)}
          className="rounded-md justify-center items-center overflow-hidden h-32 w-48 relative group"
        >
          <img
            className="h-full w-full object-center object-cover "
            src={storageHouse.storage_image}
            alt="Your Image"
          />
          <div className="absolute text-sm text-center bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Click for more images
          </div>
        </div>
        <div className="flex items-center justify-center">⭐⭐⭐⭐</div>
      </div>
    </div>
  );
}
