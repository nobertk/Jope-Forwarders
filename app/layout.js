import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "JOPE FORWARDERS",
  description: "UNLOCK GLOBAL TRADE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-w-full">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
