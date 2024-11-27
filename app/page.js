import {
  AirplanemodeActive,
  AirportShuttle,
  DeliveryDining,
  Inventory,
  LocalShipping,
  Sailing,
} from "@mui/icons-material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Montserrat, Raleway } from "next/font/google";
import { Skeleton } from "@mui/material";

// Import Google Fonts
const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const HomePage = () => {
  return (
    <div className={`relative ${montserrat.className}`}>
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/industrial-port-container-yard.jpg")',
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center text-white">
          <h1
            className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight ${raleway.className}`}
          >
            Customs Clearing &<br />
            Forwarding Agent
          </h1>

          <p
            className={`text-sm md:text-base lg:text-lg max-w-xl mb-8 opacity-90`}
          >
            We enable business growth and client harmony with unparalled
            services and delivery providing trustworthy, efficient and quality
            logistics services to our clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote"
              className={`bg-[#FF6B00] hover:bg-[#e65100] text-white px-8 py-3 rounded-full text-sm md:text-base font-medium transition-colors  `}
            >
              GET A QUOTE
            </Link>
            <Link
              href="/services"
              className={`border border-white text-white px-8 py-3 rounded-full text-sm md:text-base font-medium hover:bg-white/10 transition-colors  `}
            >
              OUR SERVICES
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-20 w-full -mt-14 md:-mt-32">
        <div className="bg-[#2677d4] text-white p-8 md:p-16 w-[85%] mx-4 ">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-32">
            {/* Title */}
            <div className="lg:w-1/4">
              <h2
                className={`text-4xl md:text-5xl font-bold leading-tight  ${raleway.className}`}
              >
                Our impact on
                <br />
                East Africa.
              </h2>
            </div>

            {/* Stats */}
            <div className="flex flex-col md:flex-row flex-1 gap-8 md:gap-16 lg:gap-24">
              <div>
                <p className="text-5xl md:text-7xl font-bold mb-2">
                  100<span className="text-[#FF6B00]">%</span>
                </p>
                <p className="text-lg opacity-90">Client satisfaction</p>
              </div>

              <div>
                <p className="text-5xl md:text-7xl font-bold mb-2">
                  681<span className="text-[#FF6B00]">+</span>
                </p>
                <p className="text-lg opacity-90">Clients world wide</p>
              </div>

              <div>
                <p className="text-5xl md:text-7xl font-bold mb-2">
                  12<span className="text-[#FF6B00]">+</span>
                </p>
                <p className="text-lg opacity-90">Years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us brief */}
      <div className="flex justify-end align-middle w-full pb-8 pt-40 bg-gradient-to-t from-slate-200 ">
        <div className="relative w-3/4 h-[800px] flex">
          {/* Main Background Image Container */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: 'url("/cargo.jpg")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Card Container - Positioned Absolute */}
          <div className="absolute bottom-2 left-0 w-[600px] bg-white opacity-90 p-12 md:p-16">
            <p
              className={`text-blue-700 font-bold text-xl mb-4 ${raleway.className}`}
            >
              ABOUT US/
            </p>

            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${raleway.className}`}
            >
              We're the future of
              <br />
              Logistics Technology.
            </h2>

            <p className="text-gray-600 mb-8">
              Established in 1994, Jope Forwarders Uganda is a trusted leader in
              customs clearing and forwarding.
              <br />
              <br />
              We are committed to delivering reliable, efficient, and
              high-quality logistics services tailored to meet our Clients'
              needs. With a strong reputation for integrity, reliability, and
              customer satisfaction, we provide measurable solutions for the
              clearance of import and export consignments by sea, air, and road.
            </p>

            <Link
              className="flex items-center gap-2 font-bold text-black hover:text-[#0066FF] transition-colors"
              href="/about"
            >
              LEARN MORE
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <section className="bg-gray-50 pt-20">
        {/* Strength and Advantages Header */}
        <div className="w-full flex justify-center pt-20 pb-10">
          <div className="text-center">
            <h1
              className={`text-4xl font-bold text-gray-800 ${raleway.className}`}
            >
              OUR COMPREHENSIVE SET OF SERVICES
            </h1>
            <p className="italic text-lg font-semibold text-gray-600 mt-2">
              Why should you work with us?
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-12 mb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-lg p-6 rounded-lg">
                <div className="flex flex-row gap-3">
                  <FlightTakeoffIcon
                    size={10}
                    className="text-blue-500 font-medium"
                  />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Clearing & Forwarding
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We specialize in moving goods locally an internationally,
                  handling documentation, coordinating with shippers, and
                  managing customs inquiries.
                </p>
                <a href="/services" className="text-blue-500 font-medium">
                  Learn more →
                </a>
              </div>

              <div className="bg-blue-500 text-white shadow-lg p-6 rounded-lg">
                <div className="flex flex-row gap-3">
                  <Sailing size={10} className="text-white font-medium" />
                  <h3 className="text-lg font-bold mb-2">
                    Cargo Consolidation
                  </h3>
                </div>
                <p className="mb-4">
                  Our freight service consolidates small shipments into one
                  truckload to the same destination, reducing costs, improving
                  transit times, lowering emissions, and ensuring safer,
                  reliable deliveries.
                </p>
                <a href="/services" className="text-white font-medium">
                  Learn more →
                </a>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-lg">
                <div className="flex flex-row gap-3">
                  <LocalShipping
                    size={10}
                    className="text-blue-500 font-medium"
                  />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Vehicle Importation
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We specialize in vehicle importation, handling customs
                  clearance, documentation, and transportation, ensuring
                  regulatory compliance and timely delivery.
                </p>
                <a href="/services" className="text-blue-500 font-medium">
                  Learn more →
                </a>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-lg">
                <div className="flex flex-row gap-3">
                  <DeliveryDining
                    size={10}
                    className="text-blue-500 font-medium"
                  />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Door-to-door Delivery
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We provide comprehensive logistics solutions, offering
                  door-to-door delivery from pickup to final destination.
                </p>
                <a href="/services" className="text-blue-500 font-medium">
                  Learn more →
                </a>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-lg">
                <div className="flex flex-row gap-3">
                  <AirplanemodeActive
                    size={10}
                    className="text-blue-500 font-medium"
                  />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Customs Clearance
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our experienced team handles documentation and customs
                  procedures, ensuring smooth clearance.
                </p>
                <a href="/services" className="text-blue-500 font-medium">
                  Learn more →
                </a>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-lg">
                <div className="flex flex-row gap-3">
                  <AirportShuttle
                    size={10}
                    className="text-blue-500 font-medium"
                  />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Logistics Management
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We manage logistics by assessing suppliers and streamlining
                  the acquisition, storage, and transportation of resources.
                </p>
                <a href="/services" className="text-blue-500 font-medium">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="flex relative justify-between bg-blue-700  align-middle w-full">
          <div className="flex flex-col p-40 ">
            <h2
              className={`font-bold text-white text-4xl text-left mb-10 ${raleway.className}`}
            >
              Ready to pull a trigger? <br />
              Get a quote today.
            </h2>

            <p className="text-white text-lg text-wrap  mb-10">
              {" "}
              We optimize costs, ensure safe transport, streamline supply
              chains, and simplify customs, providing tailored support for all
              your logistics needs{" "}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="bg-[#FF6B00] hover:bg-[#e65100] text-white px-8 py-3  text-sm md:text-base font-medium transition-colors rounded-full"
              >
                GET A QUOTE
              </Link>
              <Link
                href="/services"
                className="border border-white text-white px-8 py-3 rounded-full text-sm md:text-base font-medium hover:bg-white/10 transition-colors"
              >
                OUR SERVICES
              </Link>
            </div>
          </div>
          <div className="flex justify-end align-top mb-40 -mt-20 ">
            <Image
              src="/container3.jpg"
              width={1000}
              height={500}
              objectFit="cover"
              alt="blue container"
            />
          </div>
        </div>
      </section>
      <div className="flex justify-center align-middle flex-col p-40">
        <div className="text-blue-700">
          <p className="font-bold text-xl ">OUR PARTNERS /</p>
        </div>
        <div className="flex justify-between mt-10">
          <p className={`text-4xl font-bold ${raleway.className}`}>
            Brands & Companies <br /> we worked with
          </p>
          <p className="text-lg text-gray-500 font-semibold">
            {" "}
            Our partnerships drive success through collaboration and shared
            goals.
            <br />
            Together, we create seamless solutions that benefit all parties
            involved.
          </p>
        </div>
        {/* Partners */}
        <div className="mt-12 border-t border-gray-300 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
            <div className="text-gray-500 text-center">
              <span className="block text-2xl font-medium">Enterprise</span>
            </div>
            <div className="text-gray-500 text-center">
              <span className="block text-2xl font-medium">Application</span>
            </div>
            <div className="text-gray-500 text-center">
              <span className="block text-2xl font-medium">Business</span>
            </div>
            <div className="text-gray-500 text-center">
              <span className="block text-2xl font-medium">Company</span>
            </div>
            <div className="text-gray-500 text-center">
              <span className="block text-2xl font-medium">Enterprise</span>
            </div>
            <div className="text-gray-500 text-center">
              <span className="block text-2xl font-medium">Venture</span>
            </div>
            <div className="text-gray-500 text-center">
              <span className="block text-2xl font-medium">Organization</span>
            </div>
            <div className="text-gray-500 text-center">
              <span className="block text-2xl font-medium">Startup</span>
            </div>
            <div className="text-gray-500 text-center">
              <span className="block text-2xl font-medium">Studio</span>
            </div>
            <div className="text-gray-500 text-center">
              <span className="block text-2xl font-medium">Venture</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
