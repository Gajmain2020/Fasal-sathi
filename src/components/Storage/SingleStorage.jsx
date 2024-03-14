/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleStorageDataAPI } from "../../API/Storage";

import LOGO from "../../assets/LOGO.png";
import Heading from "../Common/Heading";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import {
  FEATURES,
  LOCATION_URLS,
  REVIEWS,
  STORAGE_FRATURES,
} from "../../Constant/Constant";
import SubHeading from "../Common/SubHeading";

export default function SingleStorage() {
  const { id } = useParams();
  const [reviews, setReviews] = useState(REVIEWS);

  const [newReview, setNewReview] = useState({
    name: "",
    description: "",
    posted: "just now",
    rating: "",
  });

  const [storageData, setStorageData] = useState(null);

  useEffect(() => {
    if (!storageData) {
      fetchSingleStorageDataAPI(id)
        .then((res) => {
          setStorageData(res);
        })
        .catch((err) => console.log(err))
        .finally(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!storageData) {
    return (
      <div className="flex flex-col items-center justify-center animate-pulse duration-50">
        <img src={LOGO} alt="Fasal Sathi Logo" />
        <span className="text-3xl font-semibold text-green-600">
          Loading...
        </span>
      </div>
    );
  }

  function handleChange(e) {
    setNewReview((rev) => ({ ...rev, [e.target.name]: e.target.value }));
  }

  function handlePostReview() {
    if (
      newReview.name === "" ||
      newReview.description === "" ||
      newReview.rating === ""
    ) {
      alert("All fields are required to post a review.");
      return;
    }

    if (newReview.rating > 5 || newReview.rating < 0) {
      alert("Rating can only be from 0 to 5.");
      return;
    }

    setReviews((rev) => [newReview, ...rev]);
    setNewReview({
      name: "",
      description: "",
      posted: "just now",
      rating: "",
    });
  }

  return (
    <div className="grid gap-2">
      <Heading>{storageData.name}</Heading>

      {/* IMAGE CONTAINER */}
      <div className="flex gap-4 mx-auto">
        <div className="rounded-md justify-center items-center overflow-hidden h-64 w-96 relative group hover:scale-105">
          <img
            className="h-full w-full object-center object-cover "
            src="https://www.yogeshdahiya.com/wp-content/uploads/2021/04/DSC_2906.webp"
            alt="Image 3"
          />
          <div className="absolute text-sm h-full text-center bottom-0 left-0 right-0 bg-gray-800 bg-opacity-65 text-white p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <img src={f2} className="w-20 mx-auto invert mb-2" alt="" />
            <div className="grid gap-4">
              <div className="text-xl font-semibold">Security</div>
              <span>
                Safeguard your agricultural investments with our premier crop
                storage facilities. Equipped with cutting-edge technology and
                round-the-clock monitoring, we&rsquo;re committed to keeping
                your produce fresh and market-ready.
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-md justify-center items-center overflow-hidden h-64 w-96 relative group hover:scale-105">
          <img
            className="h-full w-full object-center object-cover "
            src={storageData.storage_image}
            alt="Image 3"
          />
          <div className="absolute text-sm h-full text-center bottom-0 left-0 right-0 bg-gray-800 bg-opacity-65 text-white p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ">
            <img src={f1} className="w-20 mx-auto invert mb-2" alt="" />
            <div className="grid gap-4">
              <div className="text-xl font-semibold">Reliability</div>
              <span>
                Experience unmatched reliability in crop storage. Our facility
                offers ample space, hygienic conditions, and expert support to
                ensure your harvest stays in peak condition, ready to meet
                market demands.
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-md justify-center items-center overflow-hidden h-64 w-96 relative group hover:scale-105">
          <img
            className="h-full w-full object-center object-cover "
            src="https://www.yogeshdahiya.com/wp-content/uploads/2021/04/13.webp"
            alt="Image 3"
          />
          <div className="absolute text-sm h-full text-center bottom-0 left-0 right-0 bg-gray-800 bg-opacity-65 text-white p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <img src={f3} className="w-20 mx-auto invert mb-2" alt="" />
            <div className="grid gap-4">
              <div className="text-xl font-semibold">Climate Preservation</div>
              <span>
                Unlock the best storage solution for your crops! Our facility
                ensures optimal conditions with climate-controlled units,
                protecting your harvest from spoilage and preserving its
                quality.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILS */}
      <SubHeading>Details</SubHeading>
      <div className="px-5 grid grid-cols-2 gap-4 text-xl bg-gray-100/80 font-semibold text-gray-900 py-2 rounded-md">
        <div>
          <span>Name: </span> {storageData.name}
        </div>
        <div>
          <span>Price: </span> {storageData.price} per month/per 100 sqft
        </div>
        <div>
          <span>Address: </span> {storageData.name},Street 3D, Mukut Nagar,
          {storageData.location}, Chattisgarh, 491001
        </div>
        <div>
          <span>Capacity: </span> {storageData.capacity} sqft
        </div>
        <div>
          <span>Availability: </span>{" "}
          {storageData.available === "Yes" ? (
            <span className="inline-flex justify-center items-center gap-2">
              Available{" "}
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </span>
          ) : (
            <span className="inline-flex justify-center items-center gap-2">
              Not Available{" "}
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </span>
          )}
        </div>
        <div>
          <span>Availability Duration: </span>{" "}
          {storageData.availability_duration} month(s)
        </div>
        <div>
          <span>Storage Type: </span> {storageData.storage_type} Storage
        </div>
        <div>
          <span>Contact: </span> +91 {storageData.contact}
        </div>
      </div>

      {/* REVIEWS */}
      <div className="grid gap-4 px-5">
        <SubHeading>Reviews</SubHeading>
        {reviews.map((rev, idx) => (
          <SingleReview key={idx} review={rev} />
        ))}

        {/* container to post a review  */}
        <div className="grid gap-2">
          <span className="text-xl">Post A Review</span>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2">
              <input
                value={newReview.name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="What's your name?"
                className="w-full py-1 px-2 bg-gray-200/20 rounded-md"
              />
            </div>

            <div>
              <input
                value={newReview.rating}
                onChange={handleChange}
                type="number"
                name="rating"
                placeholder={`Rating for ${storageData.name}?`}
                className="w-full py-1 px-2 bg-gray-200/20 rounded-md"
              />
            </div>
            <div className="col-span-3">
              <input
                type="text"
                value={newReview.description}
                onChange={handleChange}
                name="description"
                placeholder={`Write what you want to say about ${storageData.name}`}
                className="w-full py-4 px-2 bg-gray-200/20 rounded-md"
              />
            </div>
          </div>

          <div>
            <button
              onClick={handlePostReview}
              className="bg-green-400/50 w-full py-2 rounded-md hover:bg-green-500/60 transition font-semibold"
            >
              Post Review
            </button>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <SubHeading>
        Explore Our State-of-the-Art Storage House Features
      </SubHeading>
      <div className="grid grid-cols-4 gap-2">
        {STORAGE_FRATURES.map((feature, idx) => (
          <SingleFeatureCard key={idx} feature={feature} idx={idx} />
        ))}
      </div>

      {/* MAP CONTAINER */}
      <SubHeading>How To Reach</SubHeading>
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="flex-1 rounded-md overflow-hidden">
          <iframe
            src={LOCATION_URLS[id]}
            width="720"
            height="360"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col gap-4 font-semibold">
          <span>
            {storageData.name},Street 3D, Mukut Nagar,{storageData.location},
            Chattisgarh, 491001
          </span>
          <span>+91 {storageData.contact}</span>
        </div>
      </div>
    </div>
  );
}

function SingleReview({ review }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < review.rating; i++) {
      stars.push(
        <span key={i} className="text-yellow-500">
          &#9733;
        </span>
      ); // Full star
    }
    for (let i = review.rating; i < 5; i++) {
      stars.push(
        <span key={i} className="text-gray-300">
          &#9733;
        </span>
      );
    }
    return stars;
  };
  return (
    <div className="bg-gray-200/20 rounded-lg grid gap-0.5 shadow-md px-2 py-0.5 hover:bg-gray-200/40 transition">
      <h3 className="text-lg font-semibold">{review.name}</h3>
      <div className="flex">
        <div className="flex items-center">
          <div className="mr-1">{renderStars()}</div>
          <span className="text-gray-500">({review.rating})</span>
        </div>
      </div>
      <p className="text-gray-100">{review.description}</p>
      <p className="text-gray-200 text-xs">Posted: {review.posted}</p>
    </div>
  );
}

function SingleFeatureCard({ feature, idx }) {
  return (
    <div className="bg-gray-200/10 px-3 py-2 rounded-md hover:bg-gray-300 hover:text-gray-900 transition hover:shadow-md">
      <div className="w-24 mx-auto ">
        <img src={FEATURES[idx]} alt="" />
      </div>
      <div className="text-lg font-serif font-semibold underline">
        {feature.feature}
      </div>
      <span>{feature.description}</span>
    </div>
  );
}
