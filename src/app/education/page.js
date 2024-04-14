"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Education = () => {
  const cardsData = [
    {
      id: 1,
      imageUrl:
        "https://www.bellanaija.com/wp-content/uploads/2022/09/SYF-4-9333-1536x1024.jpg",
      header: "Formal Schooling Programs",
      text: "Offer comprehensive academic programs tailored to different age groups, from early childhood education to secondary schooling. Provide a well-rounded curriculum that includes core subjects, extracurricular activities, and opportunities for personal growth.",
    },
    {
      id: 2,
      imageUrl:
        "https://steemitimages.com/640x0/https://res.cloudinary.com/hpiynhbhq/image/upload/v1517760089/vceb7bnhxegux1pwzkiv.jpg",
      header: "Vocational Training Courses",
      text: "Provide vocational training courses and certification programs that equip individuals with practical skills and knowledge relevant to various industries. Offer training in areas such as agriculture, technology, healthcare, and hospitality to prepare learners for successful careers.",
    },
    {
      id: 3,
      imageUrl:
        "https://panafricanvisions.com/wp-content/uploads/2019/12/cover_photo.jpeg",
      header: "Adult Education Programs",
      text: "Offer adult education programs aimed at helping individuals improve their literacy, numeracy, and employability skills. Provide flexible learning options, including evening classes, online courses, and personalized tutoring, to accommodate diverse learning needs.",
    },
    {
      id: 4,
      imageUrl:
        "https://unctad.org/sites/default/files/inline-images/ditc-ted-24082015-room-1.jpg",
      header: "Specialized Workshops and Seminars",
      text: "Organize specialized workshops and seminars on topics of interest, such as financial literacy, entrepreneurship, health and wellness, and environmental sustainability. Invite guest speakers and industry experts to share their knowledge and insights with participants.",
    },
    {
      id: 5,
      imageUrl:
        "https://recng.com/wp-content/uploads/2017/08/colleagues-437023_1920-768x512@2x.jpg",
      header: "Educational Consulting Services",
      text: "Offer educational consulting services to schools, educational institutions, and nonprofit organizations. Provide expertise in curriculum development, teacher training, educational technology integration, and program evaluation to support continuous improvement and innovation in education.",
    },
    {
      id: 6,
      imageUrl:
        "https://www.flawlessaestheticcenter.com/about/community-outreach/img/orphanage/orphanage_14.jpg",
      header: "Community Outreach Initiatives",
      text: "Engage in community outreach initiatives aimed at promoting education and literacy among underserved populations. Partner with local organizations, schools, and government agencies to provide educational resources, mentorship programs, and scholarship opportunities to disadvantaged learners.",
    },
  ];

  return (
    <div className="min-h-svh pt-[79px]">
      <div className="education-bg text-white bg-[#f4f5f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-7 ">
        <h6 className="text-center text-5xl font-semibold px-2">EDUCATION</h6>
        <span className="flex gap-x-3 items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Education</span>
        </span>
      </div>

      <div className="text-[#000000] px-4 md:px-0 mx-auto max-w-[1050px] py-10 flex flex-col gap-8">
        <h6 className="text-2xl md:text-4xl text-center font-bold">
          OUR EDUCATIONAL SERVICES
        </h6>
        <p className="text-justify">
          At House of Flourish Nig Ltd., we firmly believe in the transformative
          power of education. Education serves as the cornerstone of personal
          and societal development, empowering individuals with the knowledge
          and skills needed to lead healthy, fulfilling lives. Beyond mere
          academic attainment, education fosters critical thinking,
          problem-solving, and adaptability – essential qualities for navigating
          an ever-changing world.
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
          At House of Flourish Nig Ltd., our educational services are designed
          to empower learners of all ages and backgrounds. Whether through
          formal schooling initiatives, vocational training programs, or
          community outreach efforts, we are committed to providing accessible,
          high-quality education that nurtures potential, unlocks opportunities,
          and fosters a brighter future for all. Join us in our mission to
          cultivate lifelong learners and build a more equitable, prosperous
          society through the power of education.
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

export default Education;
