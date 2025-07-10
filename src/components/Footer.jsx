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
    <footer className="bg-[#1c232d] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row  justify-center md:items-center items-center gap-10 flex-wrap">

        {/* Corporate Address */}
        <div className="flex-1 min-w-[250px] flex flex-col items-center md:items-start ">
          <h2 className="text-3xl font-semibold mb-2">Get in Touch</h2>
          <div className="h-1 w-16 bg-orange-500 mb-4" />
          <p className=" text-gray-400 text-2xl">Corporate Address</p>
          <p className="font-[Arial] font-bold text-gray-300 text-xl">Oritto</p>

          <div className="text-xl text-gray-300 mt-1 flex flex-col items-center md:items-start ">
            <p className="text-xl">240, Okhla Industrial Estate Phase - III</p>
             <p className="text-xl">New Delhi – 110 020</p>
          </div>
          <button className="mt-6 px-4 text-xl py-2 border rounded hover:bg-orange-500 hover:text-white hover:text-white hover:cursor-pointer hover:border-orange-500 hover:cursor-pointer transition">
            Contact Us
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-[250px] flex flex-col items-center md:items-start">
          <p className="text-2xl text-gray-400 mb-1">For Business Orders</p>
          <div className="flex items-center gap-2 text-xl text-gray-300">
            <FaPhoneAlt /> <span>+91 9993971796</span>
          </div>
          <div className="flex items-center gap-2 text-xl text-gray-300 mt-1">
            <FaEnvelope /> <a href="mailto:sales@oritto.com" className="underline">sales@oritto.com</a>
          </div>

          <p className="text-2xl text-gray-400 mt-4">For International Sales</p>
          <div className="flex items-center gap-2 text-xl text-gray-300 mt-1">
            <FaEnvelope /> <a href="mailto:sales@oritto.com" className="underline">sales@oritto.com</a>
          </div>

          <button className="mt-6  text-xl px-4 py-2 border rounded hover:bg-orange-500 hover:text-white hover:cursor-pointer hover:border-orange-500 transition">
            Corporate Enquiry
          </button>
        </div>

        {/* Complaints & Social */}
        <div className="flex-1 min-w-[250px] flex flex-col items-center md:items-start">
          <p className="text-2xl text-gray-400">For Consumer Complaints</p>
          <div className="flex items-center gap-2 text-xl text-gray-300">
            <FaPhoneAlt /> <span>18008894722</span>
          </div>
          <div className="flex items-center gap-2 text-xl text-gray-300 mt-1">
            <FaEnvelope /> <a href="mailto:customer@oritto.com" className="underline">customer@oritto.com</a>
          </div>

          <p className="text-2xl text-gray-400 mt-4">For Escalations</p>
          <div className="flex items-center gap-2 text-xl text-gray-300 mt-1">
            <FaEnvelope /> <a href="mailto:service@oritto.com" className="underline">service@oritto.com</a>
          </div>

          <div className="h-1 w-16 bg-orange-500 my-6" />
          <p className="text-2xl text-gray-400 mb-2 text-center md:text-left">FOLLOW US</p>

          <div className="flex justify-center md:justify-start gap-4 text-2xl text-white">
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

      <div className="text-center text-xs text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} ORITTO. All rights reserved.
      </div>
    </footer>
  );
}
