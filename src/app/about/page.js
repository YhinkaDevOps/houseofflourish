"use client";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-svh pt-[79px]">
      <div className="about-bg text-white bg-[#f6f6f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[130px] flex flex-col gap-7 ">
        <h6 className="text-center text-5xl font-semibold px-2">ABOUT US</h6>
        <span className="flex gap-x-3 items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">About Us</span>
        </span>
      </div>

      <div className="text-[#000000] px-4 md:px-0 mx-auto max-w-[1000px] py-10 flex flex-col gap-4">
        <h6 className="text-3xl font-semibold">
          10 Years Of Manufacturing Excellence With Quality At It's Best!
        </h6>
        <p className="text-justify">
          <span className="font-bold">House of Flourish Nigeria Ltd,</span>{" "}
          Welcome to House of Flourish Nigeria Ltd, With over a decade of
          extensive expertise spanning manufacturing, farming, real estate, and
          education, House of Flourish Nigeria Limited stands as a distinguished
          leader in the production of bottled and sachet water. Renowned for our
          unwavering commitment to excellence, we have established an
          unparalleled benchmark for crafting specialized bottles and sachet
          water of the highest caliber.
        </p>

        <p className="text-justify">
          We are deeply committed to implementing sustainable agricultural
          practices that not only prioritize environmental stewardship but also
          ensure the long-term viability and productivity of our farming
          operations. As part of our ongoing sustainability initiatives, we are
          actively engaged in the transplantation of oil palm seedlings. This
          critical phase in our cultivation process lays the foundation for the
          future growth and prosperity of our oil palm plantations, fostering
          resilience and sustainability in our agricultural endeavors
        </p>

        <p className="text-justify">
          Our commitment to education stems from the recognition that it is not
          only a pathway to personal growth but also a catalyst for societal
          progress. By investing in education, we contribute to the creation of
          informed, empowered communities capable of effecting positive change.
          Education opens doors to opportunities, enabling individuals to secure
          gainful employment, pursue meaningful careers, and contribute actively
          to the economic and social fabric of society.
        </p>

        <p className="text-justify">
          We take pride in our comprehensive real estate services, where we go
          beyond mere transactions to provide personalized guidance and support
          to both buyers and sellers. Our team offers expert advice and
          assistance throughout the entire real estate journey, ensuring clients
          achieve optimal results and satisfaction
        </p>

        <p className="text-justify">
          Our highly skilled team sets the standard for manufacturing quality
          and ensures that every product meets stringent standards for health
          and purity. We pride ourselves on delivering the most demanding
          products on the market, catering to the unique needs and preferences
          of our discerning clientele.
        </p>

        <p className="text-justify">
          In addition to our dedication to quality, we prioritize swift and
          efficient delivery services. Covering a vast expanse of Eti-Osa LGA's
          territories, we act promptly to ensure timely delivery to our valued
          customers.
        </p>

        <p className="text-justify">
          At House of Flourish Nigeria Limited, customer satisfaction is
          paramount. With each product manufactured or customized to our
          customers' specifications, our team of experts guarantees unrivaled
          quality and excellence. Before delivery, every product undergoes
          rigorous inspection to uphold our commitment to delivering only the
          best to our esteemed clientele.
        </p>

        <p className="text-justify">
          Experience the epitome of quality and excellence with House of
          Flourish Nigeria Limited – your trusted partner for premium bottled
          and sachet water solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
