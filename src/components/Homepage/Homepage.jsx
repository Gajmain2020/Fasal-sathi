import { useEffect, useState } from "react";
import { IMAGES } from "../../Constant/Constant";

const Homepage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-indigo-300/20 to-gray-800/30 mt-2 rounded-md">
      <div className="max-w-7xl mx-auto py-2 px-2 text-white">
        <div className="h-96 cursor-pointer rounded-md overflow-hidden">
          <img
            src={IMAGES[index]}
            className="w-full h-full object-fit"
            alt=""
          />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Welcome to Fasal Sathi
          </h2>
          <p className="mt-4 text-lg">
            <ul>
              <li>
                Helping farmers preserve their harvest by providing access to
                modern storage facilities across India.
              </li>
              <li>
                Our mission is to bridge the gap between farmers and storage
                solutions, ensuring that their hard work doesn&apos;t go to
                waste.
              </li>
            </ul>
          </p>
          <div className="mt-6">
            <a
              href="/storage-house"
              className="inline-block bg-white py-3 px-8 border border-transparent rounded-md text-base font-semibold text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out"
            >
              Explore Facilities
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
