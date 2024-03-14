import Feature1 from "../assets/climate.png";
import Feature2 from "../assets/security.png";
import Feature3 from "../assets/customization.png";
import Feature4 from "../assets/key.png";

const FEATURES = [Feature1, Feature2, Feature3, Feature4];

const LOCATION_URLS = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6771309387777!2d81.2936936026334!3d21.2049812606358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293dab1cce99a3%3A0x6bb0f602e64a0fdd!2sEverest%20Cold%20Storage!5e0!3m2!1sen!2sin!4v1710333305399!5m2!1sen!2sin",
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1859.8118310092323!2d81.29205695110902!3d21.20710399147557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710333351356!5m2!1sen!2sin",
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1859.5616060088362!2d81.31632508629083!3d21.226962176979715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710333421316!5m2!1sen!2sin",
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4017.3826560072157!2d81.40129601981721!3d21.208326185206765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710333466227!5m2!1sen!2sin",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6771309387777!2d81.2936936026334!3d21.2049812606358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293dab1cce99a3%3A0x6bb0f602e64a0fdd!2sEverest%20Cold%20Storage!5e0!3m2!1sen!2sin!4v1710333305399!5m2!1sen!2sin",
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1859.8118310092323!2d81.29205695110902!3d21.20710399147557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710333351356!5m2!1sen!2sin",
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1859.5616060088362!2d81.31632508629083!3d21.226962176979715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710333421316!5m2!1sen!2sin",
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4017.3826560072157!2d81.40129601981721!3d21.208326185206765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710333466227!5m2!1sen!2sin",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6771309387777!2d81.2936936026334!3d21.2049812606358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293dab1cce99a3%3A0x6bb0f602e64a0fdd!2sEverest%20Cold%20Storage!5e0!3m2!1sen!2sin!4v1710333305399!5m2!1sen!2sin",
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1859.8118310092323!2d81.29205695110902!3d21.20710399147557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710333351356!5m2!1sen!2sin",
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1859.5616060088362!2d81.31632508629083!3d21.226962176979715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710333421316!5m2!1sen!2sin",
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4017.3826560072157!2d81.40129601981721!3d21.208326185206765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710333466227!5m2!1sen!2sin",
];

const REVIEWS = [
  {
    name: "Rameshwar Prasad",
    rating: "4",
    description: "One of the best facilities for cold storage in the town.",
    posted: "2 days ago.",
  },
  {
    name: "Shruti Pandey",
    rating: "5",
    description: "Management is good and reliable.",
    posted: "4 days ago.",
  },
  {
    name: "Dalima Sahu",
    rating: "4",
    description: "Had a good exprience with my onion stored.",
    posted: "4 weeks ago.",
  },
  {
    name: "Shashank Yadav",
    rating: "3",
    description:
      "Had an heated argument with manager of the facility. Still they where coorporative",
    posted: "7 months ago.",
  },
];

const STORAGE_FRATURES = [
  {
    feature: "Climate Control Technology",
    description:
      "Our storage house in India is equipped with advanced climate control technology, ensuring optimal temperature and humidity levels to preserve your belongings, even in extreme weather conditions. Whether it's monsoon rains or scorching summers, your items remain safe and intact.",
  },
  {
    feature: "Security Measures",
    description:
      "We prioritize the security of your possessions. Our storage facility is equipped with round-the-clock surveillance cameras, secure access controls, and trained security personnel to ensure the utmost safety and peace of mind for our clients.",
  },
  {
    feature: "Customizable Storage Solutions",
    description:
      "We understand that every customer's storage needs are unique. That's why we offer customizable storage solutions tailored to fit your requirements. Whether you need short-term storage for seasonal items or long-term storage for business inventory, we've got you covered.",
  },
  {
    feature: "Convenient Accessibility",
    description:
      "Accessing your stored items should be hassle-free. Our storage house provides convenient accessibility options, including flexible operating hours and easy loading/unloading facilities. With our user-friendly approach, retrieving your belongings is quick and convenient whenever you need them.",
  },
];

export { LOCATION_URLS, REVIEWS, STORAGE_FRATURES, FEATURES };
