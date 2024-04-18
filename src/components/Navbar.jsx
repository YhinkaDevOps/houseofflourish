"use client";
// import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);

  const handleClick = () => setisClick(!isClick);

  return (
    <nav className="navbar w-full fixed z-50 bg-white md:px-[20px] lg:px-[50px] xl:px-[120px]">
      <div className="mx-auto py-4 px-2  md:pt-2">
        <div className="flex justify-between items-end">
          <div className="pb-4">
            <Link href="/">
              <button className="hover:opacity-70 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/assets/nav-logo.jpg"
                  width={100}
                  height={65}
                  alt="header-logo"
                />
              </button>
            </Link>
          </div>

          <div className="hidden md:block font-semibold">
            <ul className="nav-list flex gap-x-9 items-center text-lg py-4">
              <Button colorScheme="teal" variant="link">
                <Link className="capitalize text-sm" href="/">
                  Home
                </Link>
              </Button>
              <Button colorScheme="teal" variant="link">
                <Link className="capitalize text-sm" href="/about">
                  About
                </Link>
              </Button>
              <Menu>
                <MenuButton className="text-[#319795] text-sm hover:underline hover:underline-offset-2 hover:border-b-[#319795]">
                  Projects
                </MenuButton>
                <MenuList className="text-sm">
                  <Link href="/water-production">
                    {" "}
                    <MenuItem>Water production</MenuItem>
                  </Link>
                  <Link href="/agriculture">
                    {" "}
                    <MenuItem>Agriculture</MenuItem>
                  </Link>
                  <Link href="/education">
                    {" "}
                    <MenuItem>Education</MenuItem>
                  </Link>
                  <Link href="/real-estate">
                    {" "}
                    <MenuItem>Real Estate</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
              <li className="text-white font-medium text-sm hover:opacity-70 bg-[#4175fc] rounded-l-[100px] rounded-r-[100px] px-8 py-3">
                <Link href="/contact-us">Contacts</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center p-2 rounded-md focus:outline-none md:hidden border-2 border-[#7CFC00]">
            <button onClick={handleClick}>
              {isClick ? (
                <FaTimes color="#222222" size={30} />
              ) : (
                <FaBars color="#222222" size={30} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div>
        {isClick && (
          <div className="bg-[#222222] md:hidden">
            <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3">
              <ul className="list-none space-y-2">
                <li className="text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link href="/">HOME</Link>
                </li>
                <li className="text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link href="/about">ABOUT</Link>
                </li>
                <li className="text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Menu>
                    <MenuButton className=" hover:text-black block">
                      PROJECTS
                    </MenuButton>
                    <MenuList>
                      <Link href="/water-production">
                        {" "}
                        <MenuItem>Water production</MenuItem>
                      </Link>
                      <Link href="/agriculture">
                        {" "}
                        <MenuItem>Agriculture</MenuItem>
                      </Link>
                      <Link href="/education">
                        {" "}
                        <MenuItem>Education</MenuItem>
                      </Link>
                      <Link href="/real-estate">
                        {" "}
                        <MenuItem>Real Estate</MenuItem>
                      </Link>
                    </MenuList>
                  </Menu>
                </li>
                <li className="text-white hover:bg-white font-medium hover:text-black rounded-lg p-2">
                  <Link href="/contact-us">CONTACT US</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
