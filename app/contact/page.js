"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Phone, Email, LocationOn, Send } from "@mui/icons-material";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log(formData);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/logistics.jpg"
            alt="Global Shipping Network"
            layout="fill"
            objectFit="cover"
            quality={90}
          />
        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full container mx-auto px-4 md:px-6 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Contact Our Team
          </h1>
          <p className="text-sm md:text-base lg:text-lg max-w-xl mb-8 opacity-90">
            Get in touch with our logistics experts. We're ready to help you
            streamline your shipping and forwarding needs.
          </p>
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#FF6B00] hover:bg-[#e65100] text-white px-8 py-3 rounded-full text-base font-medium transition-colors flex items-center justify-center"
                >
                  <Send className="mr-2" /> Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-700 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-3xl" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>+256 (0) 123 456 789</p>
                    <p>+254 (0) 987 654 321</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Email className="text-3xl" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>info@jopeforwarders.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <LocationOn className="text-3xl" />
                  <div>
                    <h3 className="font-semibold">Office Address</h3>
                    <p>123 Logistics Street</p>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-blue-600 pt-6">
                <h3 className="font-semibold mb-4">Business Hours</h3>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="flex justify-center align-middle flex-col p-40">
        <div className="text-blue-700">
          <p className="font-bold text-xl ">OUR PARTNERS /</p>
        </div>
        <div className="flex justify-between mt-10">
          <p className="text-4xl font-bold">
            Brands & Companies <br /> we worked with
          </p>
          <p className="text-lg font-semibold">
            Our partnerships drive success through collaboration and shared
            goals.
            <br />
            Together, we create seamless solutions that benefit all parties
            involv
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

export default ContactPage;
