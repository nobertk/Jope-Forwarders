import React from "react";
import { Container } from "@mui/material"; // Import from Material UI instead of PostCSS

const HomePage = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/cargo.jpg")', // Update the image path to be from the public root
        width: "100%",
      }}
      suppressHydrationWarning
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 md:px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Customs Clearing &{" "}
          <span className="block mt-2">Forwarding Agent</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="px-8 py-3 bg-orange-500 rounded-md font-semibold text-white hover:bg-orange-600 transition-colors duration-300 min-w-[160px]">
            Get a Quote
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white rounded-md font-semibold text-white hover:bg-white/10 transition-colors duration-300 min-w-[160px]">
            Our Services
          </button>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
