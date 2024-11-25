"use client";
import React, { useState, useEffect } from "react";
import CustomButton from "@/elements/CustomButton/CustomButton";
import { COLORS } from "@/styles/theme";
import { Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Logo from "../public/logo.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Get hero section height
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      setHeroHeight(heroSection.offsetHeight);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeFixed =
        scrollPosition > 0 && scrollPosition < heroHeight - 80; // 80px is approximate navbar height
      setIsScrolled(shouldBeFixed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroHeight]);

  return (
    <nav
      className={`
      w-full flex flex-row justify-between items-center p-4 z-50
      transition-all duration-300 ease-in-out
      ${
        isScrolled
          ? "fixed top-0 bg-black/80 backdrop-blur-sm"
          : "absolute top-0 bg-transparent"
      }
    `}
    >
      {/* Logo Section */}
      <Link href="/" className="logo">
        <Image
          src={Logo}
          alt="Jope Forwarders"
          className="h-12 w-auto object-contain sm:h-20"
          priority
        />
      </Link>

      {/* Hamburger Menu Icon */}
      <button
        className="text-white sm:hidden"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <div
        className={`navlinks fixed top-0 left-0 h-screen w-full bg-black/80 z-40 flex flex-col items-center justify-center gap-6 text-white transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:static sm:translate-x-0 sm:flex sm:flex-row sm:gap-6 sm:bg-transparent sm:h-auto sm:w-auto`}
      >
        <ul className="flex flex-col sm:flex-row gap-6">
          <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
            <Link href="/" className="block" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
            <Link
              href="/about"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
            <Link
              href="/services"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
            <Link
              href="/faqs"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              FAQs
            </Link>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
            <Link
              href="/contact"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Get Quote Button */}
      <div className="get_quote_btn hidden sm:block">
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
              Get Quote <ArrowRightAltIcon size={18} />
            </Typography>
          </CustomButton>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
