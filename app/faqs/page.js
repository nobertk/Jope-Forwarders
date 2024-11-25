"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ExpandMore,
  LocalShipping,
  QuestionMark,
  InfoOutlined,
} from "@mui/icons-material";

const FAQPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const faqSections = [
    {
      title: "Clearing & Forwarding Basics",
      icon: <LocalShipping className="text-blue-500" />,
      questions: [
        {
          question: "What is freight forwarding?",
          answer:
            "Freight forwarding is a service that helps businesses transport goods from one place to another through multiple carriers, including air, sea, rail, and road transportation.",
        },
        {
          question: "How do freight forwarders help my business?",
          answer:
            "Freight forwarders simplify logistics by managing documentation, negotiating shipping rates, selecting optimal routes, handling customs clearance, and providing end-to-end logistics solutions.",
        },
        {
          question: "What services are included in freight forwarding?",
          answer:
            "Typical services include cargo booking, documentation preparation, customs clearance, cargo consolidation, insurance, warehousing, and tracking of shipments.",
        },
      ],
    },
    {
      title: "Shipping Process",
      icon: <QuestionMark className="text-blue-500" />,
      questions: [
        {
          question: "How long does international shipping take?",
          answer:
            "Shipping times vary depending on the mode of transport: sea freight can take 20-40 days, air freight 3-10 days, and express shipping 1-3 days.",
        },
        {
          question:
            "What documentation is required for international shipping?",
          answer:
            "Common documents include commercial invoice, packing list, bill of lading, certificate of origin, and specific customs declaration forms for different countries.",
        },
        {
          question: "How are shipping costs calculated?",
          answer:
            "Costs depend on cargo weight, volume, shipping method, distance, fuel surcharges, and current market rates. We provide transparent pricing and competitive quotes.",
        },
      ],
    },
    {
      title: "Customs & Regulations",
      icon: <InfoOutlined className="text-blue-500" />,
      questions: [
        {
          question: "What is customs clearance?",
          answer:
            "Customs clearance is the process of preparing and submitting documentation to facilitate the entrance or exit of goods through a country's customs boundary, ensuring compliance with local regulations.",
        },
        {
          question: "Do you handle customs duties and taxes?",
          answer:
            "We assist in calculating potential duties and taxes, guide you through the payment process, and help ensure smooth customs clearance for your shipments.",
        },
        {
          question: "How do import regulations differ between countries?",
          answer:
            "Import regulations vary significantly. We stay updated on global trade regulations and help you navigate country-specific requirements to prevent delays or complications.",
        },
      ],
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/cargo-shipping-containers.jpg"
            alt="Shipping Containers"
            layout="fill"
            objectFit="cover"
            quality={90}
          />
        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-base lg:text-lg max-w-xl mb-8 opacity-90">
            Get quick answers to common questions about our freight forwarding
            and logistics services
          </p>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {faqSections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div
                  onClick={() => toggleSection(sectionIndex)}
                  className="flex justify-between items-center p-6 cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    {section.icon}
                    <h2 className="text-xl font-bold text-gray-800">
                      {section.title}
                    </h2>
                  </div>
                  <ExpandMore
                    className={`text-blue-500 transition-transform ${
                      openSection === sectionIndex ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openSection === sectionIndex && (
                  <div className="p-6 bg-white">
                    {section.questions.map((faq, faqIndex) => (
                      <div
                        key={faqIndex}
                        className="border-b last:border-b-0 py-4"
                      >
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our experts are ready to help you with personalized support.
            </p>
            <button className="bg-[#FF6B00] hover:bg-[#e65100] text-white px-8 py-3 rounded-full text-base font-medium transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Partners Section - Matching Homepage Design */}
      <div className="flex justify-center align-middle flex-col p-40">
        <div className="text-blue-700">
          <p className="font-bold text-xl ">OUR PARTNERS /</p>
        </div>
        <div className="flex justify-between mt-10">
          <p className="text-4xl font-bold">
            Brands & Companies <br /> we worked with
          </p>
          <p className="text-lg font-semibold">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            <br /> nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam
          </p>
        </div>
        {/* Partners */}
        <div className="mt-12 border-t border-gray-300 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
            {[
              "Enterprise",
              "Application",
              "Business",
              "Company",
              "Enterprise",
              "Venture",
              "Organization",
              "Startup",
              "Studio",
              "Venture",
            ].map((partner, index) => (
              <div key={index} className="text-gray-500 text-center">
                <span className="block text-2xl font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
