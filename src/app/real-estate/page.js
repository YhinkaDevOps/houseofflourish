"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const RealEstate = () => {
  const cardsData = [
    {
      id: 1,
      imageUrl:
        "https://www.mckissock.com/wp-content/uploads/2018/11/blog-image-real-estate-listing-descriptions.jpg",
      header: "Property Listings",
      text: "Showcase a comprehensive portfolio of residential, commercial, and industrial properties available for sale or lease. Provide detailed property descriptions, high-quality images, and virtual tours to help buyers visualize their potential new homes or investments.",
    },
    {
      id: 2,
      imageUrl:
        "https://mms.businesswire.com/media/20201123005557/en/841106/5/Marketing_Consulting_Market_.jpg?download=1&_gl=1*44mrzi*_ga*NjUxNjk5MjM4LjE3MTMxMzEwNTY.*_ga_ZQWF70T3FK*MTcxMzEzMTA1Ni4xLjAuMTcxMzEzMTA1Ni42MC4wLjA.",
      header: "Market Analysis and Pricing Consultation",
      text: "Offer personalized market analysis and pricing consultation services to help sellers determine the optimal listing price for their properties. Provide insights into current market trends, comparable property sales, and local market conditions to ensure competitive pricing strategies.",
    },
    {
      id: 3,
      imageUrl:
        "https://www.dannyedebohlspropertysales.com.au/wp-content/uploads/2019/11/property-valuation-real-estate-appraisal-1.jpg",
      header: "Property Valuation and Appraisal",
      text: "Provide professional property valuation and appraisal services to accurately assess the market value of residential, commercial, and industrial properties. Utilize industry-standard valuation techniques and methodologies to provide reliable and unbiased property valuations.",
    },
    {
      id: 4,
      imageUrl: "https://www.kenwoodmgt.com/hubfs/investment-analysis-blog.jpg",
      header: "Real Estate Investment Analysis",
      text: "Offer real estate investment analysis services to help clients evaluate investment opportunities and make informed investment decisions. Provide financial modeling, cash flow analysis, and risk assessment to identify potential investment properties with favorable returns.",
    },
  ];

  return (
    <div className="min-h-svh pt-[79px]">
      <div className="real-estate-bg text-white bg-[#f4f5f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-7 ">
        <h6 className="text-center text-5xl font-semibold px-2">REAL ESTATE</h6>
        <span className="flex gap-x-3 items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Real Estate</span>
        </span>
      </div>

      <div className="text-[#000000] px-4 md:px-0 mx-auto max-w-[1050px] py-10 flex flex-col gap-8">
        <h6 className="text-2xl md:text-4xl text-center font-bold">
          OUR REAL ESTATE SERVICES
        </h6>
        <p className="text-justify">
          At House of Flourish Nig Ltd., we take pride in our comprehensive real
          estate services, where we go beyond mere transactions to provide
          personalized guidance and support to both buyers and sellers. Our team
          offers expert advice and assistance throughout the entire real estate
          journey, ensuring clients achieve optimal results and satisfaction
        </p>

        <p className="text-justify">
          We begin by thoroughly understanding the unique needs and preferences
          of our clients, as well as their financial resources and goals. By
          taking a client-centric approach, we tailor our recommendations and
          solutions to align with their specific requirements and objectives.
        </p>

        <p className="text-justify">
          For sellers, we leverage our market expertise and strategic marketing
          techniques to showcase their properties effectively and attract
          qualified buyers. From pricing strategies to staging advice, we work
          diligently to maximize the value of their investments and facilitate
          smooth transactions.
        </p>

        <p className="text-justify">
          For buyers, we serve as trusted advisors, guiding them through the
          process of finding their ideal property at the best possible price and
          conditions. We conduct thorough market research, provide in-depth
          property evaluations, and negotiate on behalf of our clients to ensure
          they make informed decisions and secure favorable deals.
        </p>

        <p className="text-justify">
          At House of Flourish Nig Ltd., our commitment extends beyond closing
          the deal – we are dedicated to building long-term relationships based
          on integrity, transparency, and exceptional service. Whether you're
          buying or selling real estate, trust us to be your reliable partner
          every step of the way."
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

export default RealEstate;
