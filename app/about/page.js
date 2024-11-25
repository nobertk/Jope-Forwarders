import React from "react";
import Image from "next/image";
import {
  AirplanemodeActive,
  AirportShuttle,
  DeliveryDining,
  Inventory,
  LocalShipping,
  Sailing,
  FlightTakeoff,
} from "@mui/icons-material";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group flex items-start space-x-4 p-6 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300">
    <div className="p-3 bg-blue-500/10 group-hover:bg-blue-500/20 rounded-lg transition-colors">
      <Icon className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const TeamMemberCard = ({ name, role, image }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:-translate-y-2">
    <div className="relative h-64 w-full">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/industrial-port-container-yard.jpg")',
            }}
          />

          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Global Transport Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Connecting businesses worldwide through innovative logistics and
            seamless transportation services
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Explore Services
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Transport Solutions
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We specialize in providing end-to-end logistics services, leveraging
            cutting-edge technology and a global network to deliver efficient,
            reliable, and sustainable transportation solutions for businesses of
            all sizes.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ServiceCard
              icon={LocalShipping}
              title="Road Freight"
              description="Efficient ground transportation across regions"
            />
            <ServiceCard
              icon={Sailing}
              title="Maritime Logistics"
              description="Reliable ocean freight and shipping services"
            />
          </div>
        </div>
        <div className="relative aspect-video">
          <Image
            src="/cargo.jpg"
            alt="Transport Services"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Service Spectrum
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From local deliveries to international freight, we offer a
              comprehensive range of transportation and logistics solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FlightTakeoff,
                title: "Air Freight",
                description: "Swift global air transportation",
              },
              {
                icon: Sailing,
                title: "Sea Freight",
                description: "Extensive maritime shipping networks",
              },
              {
                icon: Inventory,
                title: "Packaging",
                description: "Secure and specialized cargo handling",
              },
              {
                icon: AirportShuttle,
                title: "International Logistics",
                description: "Seamless cross-border solutions",
              },
              {
                icon: DeliveryDining,
                title: "Road Transport",
                description: "Efficient ground logistics",
              },
              {
                icon: AirplanemodeActive,
                title: "Custom Clearance",
                description: "Streamlined import/export processes",
              },
            ].map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced and dedicated professionals drive innovation and
              excellence in logistics.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <TeamMemberCard
              name="John Doe"
              role="CEO & Founder"
              image="/team/ceo.jpg"
            />
            <TeamMemberCard
              name="Sarah Smith"
              role="Chief Operations Officer"
              image="/team/coo.jpg"
            />
            <TeamMemberCard
              name="Michael Johnson"
              role="Head of Logistics"
              image="/team/logistics-head.jpg"
            />
            <TeamMemberCard
              name="Emily Brown"
              role="Chief Financial Officer"
              image="/team/cfo.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
