"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Agriculture = () => {
  const cardsData = [
    {
      id: 1,
      imageUrl:
        "https://houseofflourish.com.ng/wp-content/uploads/2024/02/oil-palm-seedlings-image1.jpeg",
      header: "Oil Palm",
      text: "At House of Flourish Nig. Ltd., we’re committed to sustainable agriculture practices, and one of our ongoing initiatives is the transplantation of oil palm seedlings. This crucial stage in our cultivation process ensures the future growth and productivity of our oil palm plantations.",
    },
    {
      id: 2,
      imageUrl:
        "https://houseofflourish.com.ng/wp-content/uploads/2024/02/maize1.jpeg",
      header: "Maize Crop",
      text: "As our maize crop stands on the brink of harvest, we reflect on the journey thus far with gratitude and anticipation. At House of Flourish Nig Ltd., we remain dedicated to fostering agricultural excellence and contributing to the well-being of our community through the cultivation of quality crops like maize.",
    },
    {
      id: 3,
      imageUrl:
        "https://housing.com/news/wp-content/uploads/2022/11/Fruit-plants-Five-easiest-fruit-plants-for-gardening.jpg",
      header: "Fruits",
      text: "One of our ongoing projects involves the transplantation of fruit seedlings, a critical stage in our cultivation process aimed at fostering the future growth and productivity of our fruit orchards. Through careful planning and implementation of sustainable practices, we strive to cultivate a diverse range of high-quality fruits while preserving the integrity of our environment for generations to come.",
    },
    {
      id: 4,
      imageUrl:
        "https://www.ecofarmingdaily.com/wp-content/uploads/indoor-greenhouse-shutter.jpg",
      header: "Vegetable Farming",
      text: "In our vegetable farming endeavors, we adhere to the same ethos of sustainability and responsible cultivation practices. From the careful selection of seeds to the nurturing of seedlings and the meticulous care of our crops, we prioritize methods that promote soil health, biodiversity, and environmental stewardship.",
    },
  ];

  return (
    <div className="min-h-svh pt-[79px]">
      <div className="agriculture-bg text-white bg-[#f4f5f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-7 ">
        <h6 className="text-center text-5xl font-semibold px-2">AGRICULTURE</h6>
        <span className="flex gap-x-3 items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Agriculture</span>
        </span>
      </div>

      <div className="text-[#000000] px-4 md:px-0 mx-auto max-w-[1050px] py-10 flex flex-col gap-8">
        <h6 className="text-2xl md:text-4xl text-center font-bold">
          OUR AGRICULTURAL PRODUCTS
        </h6>
        <p className="text-justify">
          At House of Flourish Nig. Ltd., we are deeply committed to
          implementing sustainable agricultural practices that not only
          prioritize environmental stewardship but also ensure the long-term
          viability and productivity of our farming operations. As part of our
          ongoing sustainability initiatives, we are actively engaged in the
          transplantation of oil palm seedlings. This critical phase in our
          cultivation process lays the foundation for the future growth and
          prosperity of our oil palm plantations, fostering resilience and
          sustainability in our agricultural endeavors
        </p>

        <p className="text-justify">
          As we stand on the cusp of harvesting our maize crop, we take a moment
          to reflect on the journey thus far with gratitude and anticipation. At
          House of Flourish Nig Ltd., our dedication to agricultural excellence
          knows no bounds. Through meticulous cultivation practices and
          unwavering commitment to quality, we strive to cultivate a diverse
          range of crops that enrich our community and contribute to food
          security.
        </p>

        <p className="text-justify">
          In addition to oil palm and maize, our agricultural portfolio spans a
          variety of other crops, including cassava, vegetables, and fruits.
          Each crop is cultivated with the same level of care and attention to
          detail, with a focus on maximizing yields while minimizing
          environmental impact. Through innovation and sustainable practices, we
          are proud to play a role in shaping a brighter, more sustainable
          future for agriculture in our community and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 md:gap-6 mx-auto max-w-[1100px] pb-8 md:pb-16 mt-8 mb-8">
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
              <h3 className="font-bold text-2xl">{card.header}</h3>
              <p className="text-[#494b51] text-base">{card.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Agriculture;
