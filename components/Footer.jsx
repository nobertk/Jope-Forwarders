import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "@mui/icons-material";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className={`bg-black text-white ${montserrat.className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Subscribe Section with grey background */}
          <div className="md:col-span-4 bg-gray-800/50 p-12 lg:p-16">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold tracking-wide">
                  Stay Updated
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Subscribe to our newsletter to receive the latest updates and
                exclusive offers. No spam, guaranteed.
              </p>
              <form className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-gray-900/50 border-b border-gray-700 text-white placeholder-gray-500 py-3 px-4 focus:outline-none focus:border-blue-400 transition-colors rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12 p-12 lg:p-16 bg-black">
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-6 flex items-center gap-2">
                QUICK LINKS
                <span className="h-px w-8 bg-gray-700"></span>
              </h4>
              <ul className="space-y-4">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="h-px w-4 bg-gray-700 group-hover:w-6 group-hover:bg-blue-400 transition-all"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-6 flex items-center gap-2">
                SERVICES
                <span className="h-px w-8 bg-gray-700"></span>
              </h4>
              <ul className="space-y-4">
                {["Freight", "Cargo", "Legal", "Car Import"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="h-px w-4 bg-gray-700 group-hover:w-6 group-hover:bg-blue-400 transition-all"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-6 flex items-center gap-2">
                LEGAL
                <span className="h-px w-8 bg-gray-700"></span>
              </h4>
              <ul className="space-y-4">
                {[
                  "Terms & Conditions",
                  "Privacy Policy",
                  "Site Map",
                  "Cookies",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(/[&\s]/g, "-")}`}
                      className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="h-px w-4 bg-gray-700 group-hover:w-6 group-hover:bg-blue-400 transition-all"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800">
          <div className="p-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <img src="/logo.png" alt="Jope Logo" className="h-16 w-auto" />
            <p className="text-gray-400 text-sm text-center md:text-right">
              © {new Date().getFullYear()} Jope Forwarders Uganda Limited. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
