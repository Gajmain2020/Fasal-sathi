import Feature1 from "../assets/climate.png";
import Feature2 from "../assets/security.png";
import Feature3 from "../assets/customization.png";
import Feature4 from "../assets/key.png";
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.jpg";
import Banner3 from "../assets/banner3.png";

const IMAGES = [Banner1, Banner2, Banner3];

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
      "Had an heated argument with manager of the facility. Still they where coorporative.",
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

const QUERIES = [
  {
    name: "Shailesh Raj",
    question:
      "What are the best practices for organic cultivation of this crop?",
    posted: "2 days ago.",
    answers: [],
  },
  {
    name: "Rajesh Lal",
    question: "Can paddy cultivated in step farming?",
    posted: "15 days ago.",
    answers: [
      {
        name: "Shashank Yadav",
        answer: "No.",
        posted: "2 days ago.",
      },
    ],
  },
  {
    name: "Rabindra Raj",
    question: "What are the diseases possible?",
    posted: "a month ago.",
    answers: [
      {
        name: "Shashank Yadav",
        answer: "Puffy Disease, Bacterial Blight",
        posted: "25 days ago",
      },
      {
        name: "Shruti Panday",
        answer: "Brown patch of rice, Cold burn",
        posted: "15 days ago",
      },
    ],
  },
];

const ABOUT_CROP = [
  {
    name: "Wheat",
    about:
      "Wheat, a staple crop worldwide, has played a crucial role in human civilization for millennia. With its versatile applications in food production, wheat serves as a primary source of carbohydrates and nutrients for billions of people. Its cultivation spans diverse climates, from temperate to subtropical regions, making it a resilient and dependable crop. As global demand for food continues to rise, wheat remains indispensable, sustaining both livelihoods and economies around the globe.",
  },
  {
    name: "Barley",
    about:
      "Barley, a hardy cereal grain, has been cultivated since ancient times for its versatility and nutritional value. It thrives in diverse environments, from arid lands to cooler climates, making it a valuable crop worldwide. Barley serves as a vital ingredient in various food products, including bread, soups, and beverages like beer and whiskey. Additionally, it plays a crucial role in animal feed and as a cover crop, contributing to soil health and erosion control. Its resilience and adaptability make barley a cornerstone of agricultural sustainability and food security.",
  },
  {
    name: "Peas",
    about:
      "Peas, a nutritious legume, have been cultivated for centuries, enriching diets and soil alike. These versatile plants, rich in protein, fiber, and vitamins, contribute to balanced nutrition and sustainable agriculture. Peas thrive in diverse climates and are prized for their adaptability and nitrogen-fixing properties, which enhance soil fertility. From garden peas to snow peas and snap peas, their culinary versatility extends from soups to salads, showcasing their value in diverse cuisines. With their nutritional benefits and agronomic advantages, peas continue to play a vital role in global food systems and environmental stewardship.",
  },
  {
    name: "Gram",
    about:
      "Gram, also known as chickpea or garbanzo bean, holds a significant place in global agriculture and cuisine. Originating from the Mediterranean and Middle East, gram is now cultivated worldwide due to its adaptability to various climates. Rich in protein, fiber, and essential nutrients, gram serves as a staple in vegetarian diets and traditional dishes like hummus, falafel, and curries. Beyond its culinary uses, gram also contributes to soil fertility through nitrogen fixation, supporting sustainable farming practices. As demand for plant-based proteins grows, gram remains a vital crop, promoting both human health and environmental sustainability.",
  },
  {
    name: "Mustard",
    about:
      "Mustard, a versatile crop with a rich history, holds a prominent place in agriculture and culinary traditions worldwide. Cultivated for its seeds, leaves, and oil, mustard offers a spectrum of flavors and culinary applications, ranging from tangy condiments to aromatic spices. Its cultivation spans diverse climates, thriving in both temperate and subtropical regions. Beyond its culinary uses, mustard crops also benefit agricultural ecosystems by suppressing weeds and enhancing soil health. As a source of income for farmers and a cornerstone of diverse cuisines, mustard continues to be valued for its culinary, agronomic, and economic significance.",
  },
  {
    name: "Rice",
    about:
      "Rice, the staple food for over half of the world's population, holds immense cultural, economic, and nutritional significance. Cultivated in flooded fields known as paddies, rice adapts to a variety of climates, from tropical to temperate regions. Its versatility extends beyond sustenance, with rice being integral to cultural ceremonies and rituals in many societies. As a rich source of carbohydrates, vitamins, and minerals, rice provides essential nutrition for billions. Moreover, its cultivation supports millions of livelihoods worldwide. Despite challenges such as water scarcity and climate change, rice remains indispensable, symbolizing sustenance and resilience across diverse cultures.",
  },
  {
    name: "Maize",
    about:
      "Maize, also known as corn, stands as one of the world's most important cereal crops, with a profound impact on global agriculture and food systems. Originating from the Americas, maize has become a staple food and vital crop across continents. Its versatility extends from food and animal feed to industrial uses such as biofuel production. With a remarkable ability to thrive in diverse climates, maize plays a crucial role in food security and economic development for millions of farmers. Its significance in diets, livelihoods, and agricultural sustainability underscores maize's enduring importance in the modern world.",
  },
  {
    name: "Jowar",
    about:
      "Jowar, also known as sorghum, represents a vital cereal crop with significant agricultural, nutritional, and economic importance. Originating from Africa, jowar is now cultivated worldwide, particularly in regions with semi-arid climates. This resilient crop adapts well to challenging environmental conditions, making it a valuable source of food and fodder in drought-prone areas. Rich in nutrients like protein, fiber, and antioxidants, jowar contributes to balanced diets and food security for millions. Moreover, its diverse uses in human consumption, animal feed, and industrial applications highlight its versatility and importance in sustainable agriculture and rural livelihoods.",
  },
  {
    name: "Bajra",
    about:
      "Bajra, also known as pearl millet, holds a significant place in agriculture, nutrition, and culinary traditions, particularly in arid and semi-arid regions. Originating from Africa, bajra has spread globally due to its resilience to drought and heat. As a drought-tolerant crop, it plays a crucial role in ensuring food security in regions prone to water scarcity. Bajra grains are rich in nutrients like protein, fiber, and minerals, making them a valuable dietary staple. From traditional flatbreads to porridges and alcoholic beverages, bajra offers diverse culinary possibilities. Its cultivation supports sustainable farming practices and contributes to rural livelihoods, showcasing its importance in global agriculture and food systems.",
  },
  {
    name: "Tur",
    about:
      "Tur, also known as pigeon pea, stands as a vital leguminous crop renowned for its nutritional value and versatility. Originating from Asia, tur cultivation has expanded globally, thriving in diverse climates from tropical to subtropical regions. With its nitrogen-fixing properties, tur enriches soil fertility and supports sustainable farming practices. Rich in protein, dietary fiber, and essential vitamins and minerals, tur serves as a valuable source of nutrition in diets worldwide. Its culinary applications range from soups and stews to curries and dals, contributing to diverse cuisines. Furthermore, tur plays a significant role in crop rotation systems, enhancing agricultural productivity and resilience. Overall, tur's agronomic benefits and nutritional attributes underscore its importance in promoting food security, soil health, and sustainable agriculture globally.",
  },
  {
    name: "Moong",
    about:
      "Moong, also known as mung bean, is a versatile and nutritious legume cultivated globally for its culinary and agronomic benefits. Originating from Asia, moong thrives in diverse climates, from tropical to temperate regions. Rich in protein, dietary fiber, vitamins, and minerals, moong is valued for its role in promoting balanced nutrition and food security. Its tender green pods, sprouts, and dried seeds feature prominently in various cuisines, from soups and salads to curries and desserts. Additionally, moong's nitrogen-fixing properties enhance soil fertility, contributing to sustainable farming practices and crop rotation systems. As a source of income for farmers and a staple in global diets, moong plays a crucial role in fostering agricultural sustainability, economic development, and human well-being.",
  },
  {
    name: "Urad",
    about:
      "Urad, also known as black gram or black lentil, is an essential pulse crop revered for its culinary versatility and nutritional benefits. Originating from India, urad is now cultivated globally, thriving in diverse climates from tropical to subtropical regions. Rich in protein, dietary fiber, vitamins, and minerals, urad serves as a cornerstone of balanced nutrition and food security, particularly in vegetarian diets. Its distinctive earthy flavor and creamy texture make it a popular ingredient in various cuisines, from hearty stews and curries to savory snacks and desserts. Beyond its culinary uses, urad plays a crucial role in sustainable agriculture, contributing to soil health through nitrogen fixation and promoting crop diversity in rotation systems. As a source of income for farmers and a staple in global diets, urad continues to be valued for its culinary, agronomic, and nutritional significance.",
  },
  {
    name: "Cotton",
    about:
      "Cotton, often referred to as white gold, stands as one of the world's most important commercial crops, with significant economic, industrial, and agricultural importance. Cultivated in various countries across the globe, cotton is prized for its soft, breathable fibers, making it a staple in the textile industry. These fibers are used to produce a wide range of products, from clothing and home textiles to medical supplies and industrial materials. Beyond its industrial applications, cotton cultivation supports millions of livelihoods worldwide, particularly in rural farming communities. Additionally, cotton byproducts like cottonseed oil and meal contribute to animal feed, food products, and industrial uses, enhancing its economic value. Despite challenges such as pest management and water usage, cotton remains a vital crop, driving economic growth, employment, and innovation in agriculture and industry.",
  },
  {
    name: "Jute",
    about:
      "Jute, often referred to as the golden fiber, holds a significant place in global agriculture, industry, and commerce. Cultivated predominantly in South Asia, particularly in countries like India and Bangladesh, jute is prized for its strong, natural fibers. These fibers are used in the production of various eco-friendly products, including sacks, bags, ropes, carpets, and textiles. Jute's versatility extends beyond traditional uses, with innovations leading to its incorporation in construction materials, paper, and even fashion. Furthermore, jute cultivation plays a vital role in sustainable agriculture, as it enriches soil fertility, requires minimal chemical inputs, and contributes to carbon sequestration. As a renewable and biodegradable resource, jute serves as a symbol of eco-consciousness and sustainability in industries worldwide, highlighting its enduring relevance in modern society.",
  },
  {
    name: "Groundnut",
    about:
      "Groundnut, also known as peanut, is a versatile leguminous crop esteemed for its nutritional value, culinary applications, and agronomic benefits. Cultivated worldwide in diverse climates, groundnut is prized for its high protein content, healthy fats, vitamins, and minerals, making it a valuable component of balanced diets. Groundnut's versatility extends to its culinary uses, with roasted peanuts, peanut butter, cooking oil, and snacks being popular choices across cultures. Furthermore, groundnut cultivation promotes soil health through nitrogen fixation, erosion control, and crop rotation practices, enhancing agricultural sustainability. As a source of income for farmers and a staple in global diets, groundnut continues to play a pivotal role in promoting food security, nutrition, and rural livelihoods.",
  },
  {
    name: "Soybean",
    about:
      "Soybean, a versatile and nutritious legume, is renowned for its myriad culinary, industrial, and agronomic applications. Originating from East Asia, soybean cultivation has expanded globally due to its adaptability to various climates and soil types. Rich in protein, healthy fats, vitamins, and minerals, soybeans are integral to balanced diets, particularly in vegetarian and vegan lifestyles. Soybean-derived products such as tofu, soy milk, tempeh, and edamame feature prominently in diverse cuisines worldwide. Additionally, soybeans serve as a vital ingredient in animal feed, biofuels, and industrial products like plastics and cosmetics. Beyond its economic significance, soybean cultivation contributes to sustainable agriculture through nitrogen fixation, soil improvement, and crop rotation practices. As a source of nutrition, income for farmers, and a cornerstone of agricultural sustainability, soybean remains indispensable in global food systems and economies.",
  },
  {
    name: "Cucumber",
    about:
      "Cucumber, a refreshing and versatile vegetable, is prized for its crisp texture, mild flavor, and nutritional benefits. Cultivated worldwide in various climates, cucumbers are a staple in many cuisines and diets. With their high water content, cucumbers are hydrating and low in calories, making them a popular choice for salads, sandwiches, and snacks. Additionally, cucumbers are rich in vitamins, minerals, and antioxidants, contributing to overall health and well-being. Beyond their culinary uses, cucumbers also have cosmetic and therapeutic applications, with cucumber slices often used in skincare routines for their cooling and soothing properties. As a nutritious, hydrating, and versatile vegetable, cucumbers play a vital role in promoting healthy diets and culinary diversity around the world.",
  },
  {
    name: "Watermelon",
    about:
      "Watermelon, a quintessential summer fruit, is celebrated for its juicy sweetness, vibrant color, and refreshing taste. Cultivated in warm climates globally, watermelon is cherished for its hydrating properties and nutritional benefits. With its high water content and low calorie count, watermelon is a guilt-free indulgence, perfect for hot days. Rich in vitamins A and C, as well as antioxidants like lycopene, watermelon promotes skin health, immune function, and overall well-being. Its versatility extends beyond snacking, with watermelon being used in salads, beverages, desserts, and even savory dishes in various cuisines. Moreover, watermelon seeds are nutritious and can be roasted as a snack or used in cooking. As a symbol of summer and a source of hydration, nutrition, and culinary delight, watermelon holds a cherished place in cultures worldwide.",
  },
];

export {
  LOCATION_URLS,
  REVIEWS,
  STORAGE_FRATURES,
  FEATURES,
  QUERIES,
  ABOUT_CROP,
  IMAGES,
};
