"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
  const cardsData = [
    {
      id: 1,
      imageUrl:
        "http://content.health.harvard.edu/wp-content/uploads/2023/07/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg",
      header: "Water Production",
      text: "Through enhancing growth in the vital sector of water production, House of Flourish Nig Ltd. advances water security, poverty alleviation, and employment opportunities.",
    },
    {
      id: 2,
      imageUrl:
        "https://venturesafrica.com/wp-content/uploads/2018/12/Agriculture-1536x1024.jpg",
      header: "Agriculture",
      text: "By obtaining a better growth rate in this crucial area of the economy, House of Flourish Nig Ltd. promotes food security, the reduction of poverty, and employment possibilities",
    },
    {
      id: 3,
      imageUrl:
        "https://www.unicef.org/nigeria/sites/unicef.org.nigeria/files/styles/hero_extended/public/Education.jpg.webp?itok=tDC8k-5q",
      header: "Education",
      text: "House of Flourish Nig Ltd. is a strong supporter of education since it equips people with the knowledge and abilities required to maintain good health, find employment, and promote tolerance.",
    },
    {
      id: 4,
      imageUrl:
        "https://cdn.businessday.ng/2021/07/luxury-residential-real-estate.png",
      header: "Real Estate",
      text: "At House of Flourish Nig Ltd., we offer suggestions and aid buyers and sellers in marketing and acquiring real estate at the finest price and conditions. figuring out the needs and resources of the client in order to recommend solutions that work for them.",
    },
  ];

  return (
    <div className="bg-[#f4f5f6] min-h-[300px] mx-auto pt-20 pb-16 flex flex-col ">
      <div className="px-4 lg:px-0">
        <h6 className="text-center text-5xl font-bold text-[#101218]">
          WHAT WE DO!
        </h6>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-6 mx-auto max-w-[1100px] md:p-2 mt-20">
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
                className="card-image rounded-3xl p-2"
              />
              <div className="flex flex-col gap-3 md:gap-6 p-2">
                <h3 className="font-bold text-2xl">{card.header}</h3>
                <p className="text-[#494b51] text-base">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
