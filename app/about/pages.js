import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat, Raleway } from "next/font/google";

// Import fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "700"] });

const TeamMemberCard = ({ name, role, image }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md">
    <div className="relative h-64 w-full">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-110"
      />
    </div>
    <div className="p-4 text-center">
      <h3
        className={`text-xl font-semibold text-gray-900 ${raleway.className}`}
      >
        {name}
      </h3>
      <p className={`text-gray-600 ${montserrat.className}`}>{role}</p>
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <div className={`min-h-screen bg-gray-50 ${montserrat.className}`}>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/port.jpg")',
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center container mx-auto px-4">
          <h1
            className={`text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg ${raleway.className}`}
          >
            Global Transport Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Connecting businesses worldwide through innovative logistics and
            seamless transportation services
          </p>
          <Link
            href="/services"
            className="bg-[#FF6B00] text-white px-8 py-3 rounded-full hover:bg-[#ff6a00ca] transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Company History Section */}
      <section className="container mx-auto p-40 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className={`text-4xl font-bold text-gray-900 mb-6 ${raleway.className}`}
            >
              Our Journey: From Local Roots to Global Reach
            </h2>
            <div
              className={`text-gray-600 space-y-4 leading-relaxed ${montserrat.className}`}
            >
              <p>
                Established in 1994, Jope Forwarders Uganda is a trusted leader
                in customs clearing and forwarding.
              </p>
              <p>
                We are committed to delivering reliable, efficient, and
                high-quality logistics services tailored to meet our clients'
                needs. With a strong reputation for integrity, reliability, and
                customer satisfaction, we provide measurable solutions for the
                clearance of import and export consignments by sea, air, and
                road.
              </p>
              <p>
                Our Services include international freight forwarding, cargo,
                logistics management, bonded warehousing, documentation, customs
                clearance, door-to-door delivery, and vehicle importation.
              </p>
            </div>
          </div>
          <div className="relative aspect-video">
            <Image
              src="/person.jpg"
              alt="Company History"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values Section */}
      <section className="bg-gray-100 p-40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl font-bold text-gray-900 mb-4 ${raleway.className}`}
            >
              Our Purpose and Principles
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto ${montserrat.className}`}
            >
              We are driven by a commitment to excellence, sustainability, and
              global connectivity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3
                className={`text-2xl font-bold text-blue-600 mb-4 ${raleway.className}`}
              >
                Mission
              </h3>
              <p className={`text-gray-600 ${montserrat.className}`}>
                To provide innovative, efficient, and sustainable transportation
                solutions that empower businesses to connect, grow, and thrive
                in a global marketplace.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3
                className={`text-2xl font-bold text-blue-600 mb-4 ${raleway.className}`}
              >
                Vision
              </h3>
              <p className={`text-gray-600 ${montserrat.className}`}>
                To be the world's most trusted and technologically advanced
                logistics partner, setting new standards in transportation
                efficiency, customer satisfaction, and environmental
                responsibility.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3
                className={`text-2xl font-bold text-blue-600 mb-4 ${raleway.className}`}
              >
                Our Values
              </h3>
              <ul className={`text-gray-600 space-y-2 ${montserrat.className}`}>
                <li className="flex items-center">
                  <span className="mr-2 text-[#FF6B00]">●</span>
                  Integrity in Every Transaction
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#FF6B00]">●</span>
                  Customer-Centric Approach
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#FF6B00]">●</span>
                  Continuous Innovation
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#FF6B00]">●</span>
                  Environmental Sustainability
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-[#FF6B00]">●</span>
                  Respect and Diversity
                </li>
              </ul>
            </div>

            {/* Our Team Section */}
          </div>
        </div>
      </section>
      <section className="container mx-auto py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <Image
              src="/persons2.jpg"
              alt="Our Values"
              layout="fill"
              objectFit="cover"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2
              className={`text-4xl font-bold text-gray-900 mb-6 ${raleway.className}`}
            >
              Benefits of Choosing Jope Forwarders.
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  Customer Prioritization:
                </h3>
                <p className="text-gray-600">
                  We prioritize the needs of our clients and strive to provide
                  exceptional clearance handling services. Our goal is to
                  consistently deliver customer satisfaction by upholding their
                  perspective and addressing their specific requirements.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  Reliability:
                </h3>
                <p className="text-gray-600">
                  We are committed to executing tasks in an opportune and
                  permissible format, tailored to our customers' needs. Our
                  dedication ensures the delivery of reliable and high-quality
                  services.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  Continuous Learning:
                </h3>
                <p className="text-gray-600">
                  Operating in an evolving economy, we embrace continuous
                  learning. We stay updated with new procedures, rules, and
                  market differences, allowing us to adapt to different markets
                  and provide reliable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl font-bold text-gray-900 mb-4 ${raleway.className}`}
            >
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced and dedicated professionals drive innovation and
              excellence in logistics.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <TeamMemberCard
              name="Aine Joram Jones"
              role="Chief Executive Officer"
              image="/personel3.png"
            />
            <TeamMemberCard
              name="Kyagaba John"
              role="Chief Operations Officer"
              image="/personel3.png"
            />
            <TeamMemberCard
              name="Ssemugabi Martin"
              role="IT Specialist"
              image="/personel3.png"
            />
            <TeamMemberCard
              name="Kimuli Stephen Goodwill"
              role="Law & Legal"
              image="/personel3.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
