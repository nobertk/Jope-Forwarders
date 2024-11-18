import CustomButton from "@/elements/CustomButton/CustomButton";
import { COLORS } from "@/styles/theme";
import { Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Logo from "../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex flex-row justify-between items-center p-4 bg-transparent shadow-none z-50">
      {/* Logo Section */}
      <Link href="/" className="logo">
        <Image
          src={Logo}
          alt="Jope Forwarders"
          className="h-20 w-auto object-contain"
          priority
        />
      </Link>

      {/* Navigation Links */}
      <div className="navlinks">
        <ul className="flex flex-row gap-6 text-white">
          <li className="hover:text-orange-500 cursor-pointer">
            <Link href="/" className="block">
              Home
            </Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <Link href="/about" className="block">
              About Us
            </Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <Link href="/services" className="block">
              Services
            </Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <Link href="/faqs" className="block">
              FAQs
            </Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <Link href="/contact" className="block">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Get Quote Button */}
      <div className="get_quote_btn">
        <Link href="/quote">
          <CustomButton
            fontcolor={COLORS.WHITE_SMOKE}
            background={COLORS.ORANGE}
            borderradius="1.125rem"
            padding="10px 20px"
            hoverbackground={COLORS.DARK_ORANGE}
          >
            <Typography
              variant="button"
              style={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Get Quote
              <ArrowRightAltIcon size={18} />
            </Typography>
          </CustomButton>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
