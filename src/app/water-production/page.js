"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const WaterProduction = () => {
     const cardsData = [
       {
         id: 1,
         imageUrl:
           "https://houseofflourish.com.ng/wp-content/uploads/2024/02/sachet_prod3.jpeg",
         header: "50cl Sachets Water",
         text: "The Flourish Cool 50-cl sachet water pack has 20 sachets of delicious, safe-pH drinking water that have been filtered and made refreshing.",
       },
       {
         id: 2,
         imageUrl:
           "https://houseofflourish.com.ng/wp-content/uploads/2024/02/buttle_prod3.jpeg",
         header: "50cl Bottle Water",
         text: "The Flourish Cool 50cl bottle water pack comes with 20 bottles of delicious, safe-pH drinking water that have been filtered and made refreshing.",
       },
       {
         id: 3,
         imageUrl:
           "https://houseofflourish.com.ng/wp-content/uploads/2024/02/dispenser6.jpeg",
         header: "19l Dispenser Bottle",
         text: "The Flourish Cool 19L refillable dispenser bottle water has a safe pH level, is delicious, and is purified to make it a refreshing drink.",
       },
       {
         id: 4,
         imageUrl:
           "https://houseofflourish.com.ng/wp-content/uploads/2024/02/buttle_prod3-1.jpeg",
         header: "75cl Bottle Water",
         text: "The Flourish Cool 75cl bottle water pack comes with 12 bottles of delicious, safe-pH drinking water that have been filtered and made refreshing.",
       },
       {
         id: 4,
         imageUrl:
           "https://houseofflourish.com.ng/wp-content/uploads/2024/02/buttle_prod3-1.jpeg",
         header: "Customized Bottles",
         text: "In response to our clients’ branding requirements, we at House of Flourish Nig. Ltd. provide customized water bottles in a variety of shapes and sizes.",
       },
     ];

  return (
    <div className="min-h-svh pt-[79px]">
      <div className="water-bg text-white bg-[#f4f5f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-7 ">
        <h6 className="text-center text-5xl font-semibold px-2">
          WATER PRODUCTS
        </h6>
        <span className="flex gap-x-3 items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Water Products</span>
        </span>
      </div>

      <div className="text-[#000000] px-4 md:px-0 mx-auto max-w-[1050px] py-10 flex flex-col gap-8">
        <h6 className="text-2xl md:text-4xl text-center font-bold">
          OUR WATER PRODUCTS
        </h6>
        <p className="text-justify">
          Our devoted team of professionals embodies a wealth of experience,
          guiding every facet of our water production process with unrivaled
          expertise. With meticulous attention to detail, we uphold the highest
          standards of quality and hygiene at every step. From the careful
          sourcing of premium water to the utilization of cutting-edge
          manufacturing techniques, we spare no effort in crafting water
          products of exceptional caliber
        </p>

        <p className="text-justify">
          At House of Flourish Nigeria Limited, our commitment to excellence
          extends beyond mere production – it encompasses a dedication to
          purity, health, and customer satisfaction. We prioritize stringent
          quality control measures to ensure that each bottle and sachet of
          water not only meets but exceeds industry standards. Our
          state-of-the-art facilities are equipped with advanced technology and
          adhere to rigorous sanitation protocols, guaranteeing the utmost
          cleanliness and safety of our products.
        </p>

        <p className="text-justify">
          Furthermore, we understand the importance of environmental
          sustainability in our operations. That's why we actively seek out
          eco-friendly packaging solutions and implement responsible water
          management practices to minimize our ecological footprint.
        </p>

        <p className="text-justify">
          Experience the pinnacle of quality and reliability with House of
          Flourish Nigeria Limited – your trusted source for premium water
          products that nourish and refresh, while upholding the highest
          standards of excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 md:gap-6 mx-auto max-w-[1100px]  pb-8 md:pb-16 mt-8 mb-8">
        {cardsData.map((card) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={card.id}
            className="flex flex-col gap-4 bg-white rounded-lg"
          >
            <img
              src={card.imageUrl}
              alt={card.header}
              className="card-image_ rounded-3xl p-2"
            />
            <div className="flex flex-col gap-3 md:gap-6 p-2">
              <h3 className="font-bold text-2xl">
                {card.header}
              </h3>
              <p className="text-[#494b51] text-base">
                {card.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WaterProduction;
