// Carousel.js
import { useState, useEffect } from "react";
import { IMAGES } from "../../Constant/Constant";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {IMAGES.map((image, i) => (
        <img
          key={i}
          src={image}
          alt={`Image ${i + 1}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default Carousel;
