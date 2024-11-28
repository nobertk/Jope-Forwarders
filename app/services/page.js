import React from "react";
import Image from "next/image";
import {
  LocalShipping,
  Sailing,
  FlightTakeoff,
  AirportShuttle,
  Inventory,
  DeliveryDining,
  CarRepair,
} from "@mui/icons-material";
import { Montserrat, Raleway } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const ServiceDetailCard = ({ icon: Icon, title, description, details }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all group">
    <div className="flex items-center mb-6">
      <div className="p-4 bg-blue-50 rounded-lg mr-6">
        <Icon className="w-10 h-10 text-blue-600 group-hover:text-blue-700 transition-colors" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3 text-gray-700">
      {details.map((detail, index) => (
        <li key={index} className="flex items-center">
          <span className="mr-3 text-blue-500">●</span>
          {detail}
        </li>
      ))}
    </ul>
  </div>
);

const ServicesPage = () => {
  const serviceDetails = [
    {
      icon: CarRepair,
      title: "Vehicle Importation",
      description:
        "Streamlined vehicle importation services tailored to your needs.",
      details: [
        "Customs clearance and documentation handling",
        "Safe and timely vehicle delivery",
        "Cross-border importation services",
        "End-to-end transportation from port to destination",
      ],
    },
    {
      icon: Sailing,
      title: "Maritime Logistics",
      description:
        "Comprehensive sea freight services for global trade and international shipping.",
      details: [
        "Containerized shipping",
        "Break bulk cargo handling",
        "Customs clearance support",
        "Multimodal transportation solutions",
      ],
    },
    {
      icon: FlightTakeoff,
      title: "Air Freight",
      description:
        "Rapid and secure air transportation for time-sensitive cargo.",
      details: [
        "Express international shipping",
        "Charter flight arrangements",
        "Specialized handling for fragile goods",
        "Global network coverage",
      ],
    },
    {
      icon: AirportShuttle,
      title: "International Logistics",
      description:
        "End-to-end logistics management for complex international supply chains.",
      details: [
        "Comprehensive supply chain solutions",
        "Customs brokerage",
        "Documentation and compliance management",
        "Global logistics consulting",
      ],
    },
    {
      icon: Inventory,
      title: "Warehousing",
      description:
        "Secure and efficient storage solutions with advanced inventory management.",
      details: [
        "Modern warehouse facilities",
        "Inventory tracking systems",
        "Climate-controlled storage",
        "Value-added packaging services",
      ],
    },
    {
      icon: DeliveryDining,
      title: "Last Mile Delivery",
      description:
        "Reliable and precise final-stage delivery for businesses and consumers.",
      details: [
        "Urban and rural delivery networks",
        "Same-day and next-day delivery options",
        "Technology-driven route optimization",
        "Real-time delivery tracking",
      ],
    },
  ];

  return (
    <div className={`"bg-gray-50 ${montserrat.className}`}>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/container3.jpg")',
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center container mx-auto px-4">
          <h1
            className={`${raleway.className}text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg`}
          >
            Our Comprehensive Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Delivering innovative logistics solutions that connect businesses
            across the globe
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {serviceDetails.map((service, index) => (
            <ServiceDetailCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              details={service.details}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-4xl font-bold mb-6 ${raleway.className}`}>
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Contact our experts to develop a tailored logistics strategy that
            drives your business forward.
          </p>
          <button className="bg-[#FF6B00] text-white px-10 py-4 rounded-full font-bold hover:bg-[#ff6a00ca] transition-colors">
            Get a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
