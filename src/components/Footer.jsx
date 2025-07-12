import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 px-6 py-12 text-sm font-sans border-t border-gray-300">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between gap-y-8 md:gap-y-0 md:gap-x-10">

        {/* Company Info */}
        <div className="flex-1 min-w-[230px] mr-16">
          <img src="/img/logo/logo.png" alt="Oritto Logo" className="h-14 mb-2" />
          <p className="font-semibold mb-1">Registered Office/Plant:</p>
          <p className="font-semibold text-gray-500 mb-1">Prabuddha Power</p>
          <p className="text-gray-700 leading-relaxed text-[15px]">
            Plot no. E-1(D), New II Industrial Area,
            Opposite MPEB Substation,
            Mandideep, Bhopal
            Madhya Pradesh, India - 462046
          </p>

          <div className="mt-4">
            <p className="text-gray-500 font-semibold mb-1">Phone Numbers</p>
            <p className="text-gray-700">Tel No: <span className="text-gray-700">07480 - 49398</span></p>
            <p className="text-gray-700">Toll Free No: <span className="text-gray-700">1800-889-4722</span></p>
            <p className="text-gray-700">WhatsApp No: 9993971796</p>
          </div>
        </div>
        {/* Categories */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-base font-semibold mb-3 text-gray-900">CATEGORIES</h3>
          <ul className="space-y-2 text-gray-600">
            {[
              { name: "LED Bulbs", href: "/categories/led-bulbs" },
              { name: "LED Tube Lights", href: "/categories/led-tube-lights" },
              { name: "Panel Lights", href: "/categories/panel-lights" },
              { name: "Downlights", href: "/categories/downlights" },
              { name: "Ceiling Lights", href: "/categories/ceiling-lights" },
              { name: "Outdoor LED Lights", href: "/categories/outdoor-lights" },
              { name: "Smart LED Lights", href: "/categories/smart-led-lights" }
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="hover:text-orange-500 hover:no-underline transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Discover Us */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-base font-semibold mb-3 text-gray-900">DISCOVER US</h3>
          <ul className="space-y-2 text-gray-600">
            {[
              { name: "About Us", href: "/about" },
              { name: "Blogs", href: "/blogs" },
              { name: "Careers", href: "/careers" },
              { name: "Quick Fix", href: "/quick-fix" },
              { name: "Track Your Order", href: "/track-order" },
              { name: "FAQs", href: "/faqs" },
              { name: "Sitemap", href: "/sitemap" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="hover:text-orange-500 hover:no-underline transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-base font-semibold mb-3 text-gray-900">POLICIES</h3>
          <ul className="space-y-2 text-gray-600">
            {[
              { name: "Customer Policy", href: "/policies/customer" },
              { name: "Product Policy", href: "/policies/product" },
              { name: "Vendor Policy", href: "/policies/vendor" },
              { name: "Investor Relations", href: "/policies/investor-relations" },
              { name: "POSH", href: "/policies/posh" },
              { name: "Code of Conduct", href: "/policies/code-of-conduct" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="hover:text-orange-500 hover:no-underline transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>



        {/* Contact & Emails */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-base font-semibold mb-3 text-gray-900">EMAIL ADDRESS</h3>
          <p className="text-gray-700 mb-2">
            Service Request, Quality & Product complaints:{" "}
            <a href="mailto:support@polycab.com" className="text-gray-500 hover:underline">support@oritto.com</a>
          </p>
          <p className="text-gray-700 mb-1">
            Sales Enquiry:{" "}
            <a href="mailto:sales@oritto.com" className="text-gray-500 hover:underline">sales@oritto.com</a>
          </p>
          <p className="text-gray-700 mb-1">
            Distributor/Dealership <br /> & Investor Relations  Enquiry:{" "}
            <a href="mailto:info@oritto.com" className="text-gray-500 hover:underline">info@oritto.com</a>
          </p>

          <p className="text-gray-700 mb-4">
            Exports Enquiry:{" "}
            <a href="mailto:exports@oritto.com" className="text-gray-500 hover:underline">exports@oritto.com</a>
          </p>

          <div className="flex gap-4 text-xl text-gray-700">
            {[FaFacebookF, FaYoutube, FaLinkedinIn, FaTwitter, FaInstagram, FaWhatsapp].map((Icon, i) => (
              <Link
                href="#"
                key={i}
                className="hover:text-orange-500 hover:scale-110 transition-transform"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10 pt-4">
        <p>&copy; {new Date().getFullYear()} ORITTO. All rights reserved. </p>
        <br />
        <p>All trademarks used herein are property of their respective owners.
          Any use of third party trademarks is for identification purposes only and does not imply endorsement.</p>
      </div>
    </footer>
  );
}
