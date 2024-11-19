import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-black text-white">
      {/* Footer Top */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Subscribe Section */}
        <div className=" bg-gray-600 p-20">
          <h3 className="text-lg font-semibold uppercase mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-400 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white font-medium px-9 py-4 rounded-full hover:bg-blue-800 transition"
            >
              Subscribe →
            </button>
          </form>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-8 p-20">
          {/* Column 1 */}
          <div>
            <h4 className="uppercase font-semibold mb-4">Links /</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="uppercase font-semibold mb-4">Links /</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/freight">Freight</Link>
              </li>
              <li>
                <Link href="/cargo">Cargo</Link>
              </li>
              <li>
                <Link href="/legal">Legal</Link>
              </li>
              <li>
                <Link href="/car-import">Car Import</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Site Links */}
        <div className="p-20">
          <h4 className="uppercase font-semibold mb-4">Site /</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/site-map">Map</Link>
            </li>
            <li>
              <Link href="/cookies">Cookies</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-600 pt-8 flex justify-between items-center">
        <div className="w-full flex flex-row justify-between align-middle ">
          <img src="/logo.png" alt="Jope Logo" className="w-33 h-32 -mt-8" />
          <p className="pr-10">
            Copyright Jope Forwarders Uganda Limited 2024 | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
