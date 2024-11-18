import CustomButton from "@/elements/CustomButton/CustomButton";
import { COLORS } from "@/styles/theme";
import { Typography } from "@mui/material";
import Logo from "../public/logo.png";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex flex-row justify-between items-center p-4 bg-transparent shadow-none z-10">
      {/* Logo Section */}
      <div className="logo">
        <Image
          src={Logo}
          alt="Jope Forwarders"
          className="h-20 w-auto object-contain"
          priority
        />
      </div>

      {/* Navigation Links */}
      <div className="navlinks">
        <ul className="flex flex-row gap-6 text-slate-50">
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#about">About Us</a>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#faqs">FAQs</a>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Get Quote Button */}
      <div className="get_quote_btn">
        <CustomButton
          fontcolor={COLORS.WHITE_SMOKE}
          background={COLORS.ORANGE}
          borderradius="1.125rem"
          padding="10px 20px"
          hoverbackground={COLORS.DARK_ORANGE}
        >
          <Typography variant="button" style={{ fontWeight: "bold" }}>
            Get Quote
          </Typography>
        </CustomButton>
      </div>
    </nav>
  );
};

export default Navbar;
