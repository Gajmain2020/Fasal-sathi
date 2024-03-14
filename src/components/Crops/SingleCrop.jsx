/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleCropDetailsAPI } from "../../API/APIs";

import LOGO from "../../assets/LOGO.png";
import Heading from "../Common/Heading";

import { QUERIES } from "../../Constant/Constant";
import SubHeading from "../Common/SubHeading";

export default function SingleCrop() {
  const { crop } = useParams();
  const [queries, setQueries] = useState(QUERIES);

  const [newQuery, setNewQuery] = useState({
    name: "",
    question: "",
    posted: "just now",
    answers: [],
  });

  const [cropData, setCropData] = useState(null);

  useEffect(() => {
    if (!cropData) {
      fetchSingleCropDetailsAPI(crop)
        .then((res) => {
          setCropData(res);
        })
        .catch((err) => console.log(err))
        .finally(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!cropData) {
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
    setNewQuery((rev) => ({ ...rev, [e.target.name]: e.target.value }));
  }

  function handlePostQuestion() {
    if (newQuery.name === "" || newQuery.description === "") {
      alert("All fields are required to post a review.");
      return;
    }

    setQueries((rev) => [newQuery, ...rev]);
    setNewQuery({
      name: "",
      question: "",
      posted: "just now",
    });
  }

  return (
    <div className="grid gap-2">
      <Heading>{cropData.name}</Heading>

      {/* IMAGE CONTAINER */}
      <div className="flex gap-4 mx-auto">
        <div className="rounded-md justify-center items-center overflow-hidden h-64 w-96 relative group hover:scale-105">
          <img
            className="h-full w-full object-center object-cover "
            src="https://m.economictimes.com/thumb/msid-69036230,width-1200,height-900,resizemode-4,imgsize-1051368/uk-india-experts-explore-smart-tech-solution-for-indian-farmers.jpg"
            alt="Image 3"
          />
        </div>
        <div className="rounded-md justify-center items-center overflow-hidden h-64 w-96 relative group hover:scale-105">
          <img
            className="h-full w-full object-center object-cover "
            src={cropData.crop_image}
            alt="Image 3"
          />
        </div>
        <div className="rounded-md justify-center items-center overflow-hidden h-64 w-96 relative group hover:scale-105">
          <img
            className="h-full w-full object-center object-cover "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYIlgep5gG_ExBugRKtZE-_pOg5Ga_mFRiVA&usqp=CAU"
            alt="Image 3"
          />
        </div>
      </div>

      {/* DETAILS */}
      <SubHeading>Details</SubHeading>
      <div className="px-5 grid grid-cols-2 gap-4 text-xl bg-gray-100/80 text-gray-900 py-2 rounded-md">
        <div>
          <span className="font-semibold underline">Name: </span>{" "}
          {cropData.name}
        </div>
        <div>
          <span className="font-semibold underline">
            Current Market Price:{" "}
          </span>{" "}
          Rs 1900 per 100kg
        </div>
        <div>
          <span className="font-semibold underline">Season: </span>
          {cropData.season}
        </div>
        <div>
          <span className="font-semibold underline">Type: </span>
          {cropData.type} Crop
        </div>
        <div>
          <span className="font-semibold underline">Harvest Month: </span>
          {cropData.month_of_harvest}
        </div>
        <div>
          <span className="font-semibold underline">Pesticides Adviced: </span>
          {cropData.medicines_pesticides}
        </div>
        <div>
          <span className="font-semibold underline">Best Soil: </span>
          {cropData.soil}
        </div>
      </div>

      {/* Queries */}
      <div className="grid gap-4 px-5">
        <SubHeading>Queries</SubHeading>

        {/* container to post a review  */}
        <div className="grid gap-2">
          {queries.map((que, idx) => (
            <SingleQuery que={que} key={idx} />
          ))}

          <span className="text-xl">Post A Query</span>
          <div className="grid gap-2">
            <div className="">
              <input
                value={newQuery.name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="What's your name?"
                className="w-full py-1 px-2 bg-gray-200/20 rounded-md"
              />
            </div>
            <div className="">
              <input
                type="text"
                value={newQuery.question}
                onChange={handleChange}
                name="question"
                placeholder={`What is you query about ${cropData.name}?`}
                className="w-full py-4 px-2 bg-gray-200/20 rounded-md"
              />
            </div>
          </div>
          <div>
            <button
              onClick={handlePostQuestion}
              className="bg-green-400/50 w-full py-2 rounded-md hover:bg-green-500/60 transition font-semibold"
            >
              Post Query
            </button>
          </div>
        </div>
      </div>

      {/* FEATURES */}
    </div>
  );
}

function SingleQuery({ que }) {
  return (
    <div className="bg-gray-200/20 rounded-lg grid gap-0.5 shadow-md px-2 py-0.5 hover:bg-gray-200/40 transition">
      <div className="flex">
        <div className="flex items-center">
          <div className="mr-1 text-lg">{que.question}</div>
          <span className="text-gray-300 font-semibold"> by {que.name}</span>
        </div>
      </div>
      <span className="font-semibold">Answers</span>
      <div className="flex flex-col gap-1">
        {que.answers.length === 0 ? (
          <span className="text-red-300">No Answers Posted.</span>
        ) : (
          que.answers.map((ans, idx) => (
            <span key={idx}>
              {ans.answer}&nbsp;
              <span className="text-gray-300">
                by {ans.name} on {ans.posted}
              </span>
            </span>
          ))
        )}
      </div>

      <p className="text-gray-200 text-xs">Posted: {que.posted}</p>
    </div>
  );
}

function SingleFeatureCard({ feature, idx }) {
  return (
    <div className="bg-gray-200/10 px-3 py-2 rounded-md hover:bg-gray-300 hover:text-gray-900 transition hover:shadow-md">
      <div className="w-24 mx-auto "></div>
      <div className="text-lg font-serif font-semibold underline">
        {feature.feature}
      </div>
      <span>{feature.description}</span>
    </div>
  );
}
