import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:items-start items-center gap-10 flex-wrap">

        {/* Corporate Address */}
        <div className="flex-1 min-w-[250px] flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
          <div className="h-1 w-16 bg-orange-500 mb-4" />
          <p className="text-gray-600 text-sm mb-1">Corporate Address</p>
          <p className="font-bold text-sm">Oritto</p>

          <div className="text-sm mt-1 flex flex-col items-center md:items-start">
            <p>240, Okhla Industrial Estate Phase - III</p>
            <p>New Delhi – 110 020</p>
          </div>
          <button className="mt-6 px-4 py-2 text-sm border rounded hover:bg-orange-500 hover:text-white transition">
            Contact Us
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-[250px] flex flex-col items-center md:items-start">
          <p className="text-sm text-gray-600 mb-1">For Business Orders</p>
          <div className="flex items-center gap-2 text-sm">
            <FaPhoneAlt /> <span>+91 9993971796</span>
          </div>
          <div className="flex items-center gap-2 text-sm mt-1">
            <FaEnvelope /> <a href="mailto:sales@oritto.com" className="underline">sales@oritto.com</a>
          </div>

          <p className="text-sm text-gray-600 mt-4">For International Sales</p>
          <div className="flex items-center gap-2 text-sm mt-1">
            <FaEnvelope /> <a href="mailto:sales@oritto.com" className="underline">sales@oritto.com</a>
          </div>

          <button className="mt-6 text-sm px-4 py-2 border rounded hover:bg-orange-500 hover:text-white transition">
            Corporate Enquiry
          </button>
        </div>

        {/* Complaints & Social */}
        <div className="flex-1 min-w-[250px] flex flex-col items-center md:items-start">
          <p className="text-sm text-gray-600">For Consumer Complaints</p>
          <div className="flex items-center gap-2 text-sm">
            <FaPhoneAlt /> <span>18008894722</span>
          </div>
          <div className="flex items-center gap-2 text-sm mt-1">
            <FaEnvelope /> <a href="mailto:customer@oritto.com" className="underline">customer@oritto.com</a>
          </div>

          <p className="text-sm text-gray-600 mt-4">For Escalations</p>
          <div className="flex items-center gap-2 text-sm mt-1">
            <FaEnvelope /> <a href="mailto:service@oritto.com" className="underline">service@oritto.com</a>
          </div>

          <div className="h-1 w-16 bg-orange-500 my-6" />
          <p className="text-sm text-gray-600 mb-2 text-center md:text-left">FOLLOW US</p>

          <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-800">
            {[FaTwitter, FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn, FaYoutube].map((Icon, idx) => (
              <Link
                key={idx}
                href="#"
                className="hover:text-orange-500 transition duration-300 transform hover:scale-110"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center flex flex-col text-xs text-gray-500 mt-10">
        <p>&copy; {new Date().getFullYear()} ORITTO. All rights reserved.</p>
        <p>All trademarks used herein are property of their respective owners.
Any use of third party trademarks is for identification purposes only and does not imply endorsement.</p>
      </div>
    </footer>
  );
}
