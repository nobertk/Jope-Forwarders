"use client";
import React, { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { Phone, Email, LocationOn, Send } from "@mui/icons-material";
import { Montserrat, Raleway } from "next/font/google";

// Import Google Fonts
const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    // Include the reCAPTCHA token in form data
    const emailData = {
      ...formData,
      "g-recaptcha-response": recaptchaToken,
    };

    emailjs.send(serviceId, templateId, emailData, userId).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        setRecaptchaToken(null);
        setIsSubmitting(false);
      },
      (err) => {
        console.error("FAILED...", err);
        alert("There was an error sending your message. Please try again.");
        setIsSubmitting(false);
      }
    );
  };

  return (
    <div className={`${montserrat.className}`}>
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
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight ${raleway.className}`}
          >
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
              <h2
                className={`text-2xl font-bold text-gray-800 mb-6 ${raleway.className}`}
              >
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
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                />
                <button
                  type="submit"
                  className="w-full bg-[#FF6B00] hover:bg-[#e65100] text-white px-8 py-3 rounded-full text-base font-medium transition-colors flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-700 text-white p-8 rounded-lg">
              <h2 className={`text-2xl font-bold mb-6 ${raleway.className}`}>
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-3xl" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>+256 779 324 651</p>
                    <p>+254 751 773 769</p>
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
                    <p>Kampala Road, Speak Road</p>
                    <p>Kampala, Uganda</p>
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
    </div>
  );
};

export default ContactPage;
