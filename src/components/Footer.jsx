'use client';

import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { productCategories } from '@/service/Data';

export default function Footer() {
  const [categories, setCategories] = useState([]);
  console.log("Footer categories:", categories);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await productCategories();
        console.log("Fetched categories:", data);
        setCategories(data || []);
      } catch (error) {
        console.error('Failed to load categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <footer className="bg-white text-gray-800 px-4 sm:px-6 py-8 sm:py-12 text-sm font-sans border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
        {/* Company Info */}
        <div className="col-span-2 lg:col-span-1">
          <img src="/img/logo/logo.png" alt="Oritto Logo" className="h-10 sm:h-12 lg:h-14 mb-2" />
          <p className="font-semibold mb-1 text-xs sm:text-sm">Registered Office/Plant:</p>
          <p className="font-semibold text-gray-500 mb-1 text-xs sm:text-sm">Prabuddha Power</p>
          <p className="text-gray-700 leading-relaxed text-[11px] sm:text-xs lg:text-[15px]">
            Plot no. E-1(D), New II Industrial Area,
            Opposite MPEB Substation, Mandideep, Bhopal,
            Madhya Pradesh, India - 462046
          </p>
          <div className="mt-2 sm:mt-3">
            <p className="text-gray-500 font-semibold mb-1 text-xs sm:text-sm">Phone Numbers</p>
            <p className="text-gray-700 text-[11px] sm:text-xs">Tel No: 07480 - 49398</p>
            <p className="text-gray-700 text-[11px] sm:text-xs">Toll Free No: 1800-889-4722</p>
            <p className="text-gray-700 text-[11px] sm:text-xs">WhatsApp No: 9993971796</p>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xs sm:text-sm lg:text-base font-semibold mb-2 text-gray-900">CATEGORIES</h3>
          <ul className="space-y-1 sm:space-y-1.5 text-gray-600 text-[11px] sm:text-xs lg:text-sm">
            {categories.length === 0 ? (
              <li className="text-gray-400">Loading...</li>
            ) : (
              categories.slice(0, 7).map((cat, idx) => (
                <li key={idx}>
                  <Link
                    href={`/products/${encodeURIComponent(cat.name.toLowerCase())}`}
                    className="hover:text-orange-500 hover:no-underline transition"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Discover Us */}
        <div>
          <h3 className="text-xs sm:text-sm lg:text-base font-semibold mb-2 text-gray-900">DISCOVER US</h3>
          <ul className="space-y-1 sm:space-y-1.5 text-gray-600 text-[11px] sm:text-xs lg:text-sm">
            {[
              { name: 'About Us', href: '/about' },
              { name: 'Blogs', href: '/blogs' },
              { name: 'Careers', href: '/careers' },
              { name: 'Quick Fix', href: '/quick-fix' },
              { name: 'Track Your Order', href: '/track-order' },
              { name: 'FAQs', href: '/faqs' },
              { name: 'Sitemap', href: '/sitemap' },
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
        <div>
          <h3 className="text-xs sm:text-sm lg:text-base font-semibold mb-2 text-gray-900">EMAIL ADDRESS</h3>
          <p className="text-gray-700 mb-1.5 text-[11px] sm:text-xs lg:text-sm leading-relaxed">
            Service Request:{' '}
            <a href="mailto:support@oritto.com" className="text-gray-500 hover:underline break-all">
              support@oritto.com
            </a>
          </p>
          <p className="text-gray-700 mb-1.5 text-[11px] sm:text-xs lg:text-sm">
            Sales:{' '}
            <a href="mailto:sales@oritto.com" className="text-gray-500 hover:underline break-all">
              sales@oritto.com
            </a>
          </p>
          <p className="text-gray-700 mb-1.5 text-[11px] sm:text-xs lg:text-sm leading-relaxed">
            Distributor:{' '}
            <a href="mailto:info@oritto.com" className="text-gray-500 hover:underline break-all">
              info@oritto.com
            </a>
          </p>
          <p className="text-gray-700 mb-2 sm:mb-3 text-[11px] sm:text-xs lg:text-sm">
            Exports:{' '}
            <a href="mailto:exports@oritto.com" className="text-gray-500 hover:underline break-all">
              exports@oritto.com
            </a>
          </p>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-xs sm:text-sm lg:text-base font-semibold mb-2 text-gray-900">POLICIES</h3>
          <ul className="space-y-1 sm:space-y-1.5 text-gray-600 text-[11px] sm:text-xs lg:text-sm">
            {[
              { name: 'Customer Policy', href: '/policies/customer' },
              { name: 'Product Policy', href: '/policies/product' },
              { name: 'Vendor Policy', href: '/policies/vendor' },
              { name: 'Investor Relations', href: '/policies/investor-relations' },
              { name: 'POSH', href: '/policies/posh' },
              { name: 'Code of Conduct', href: '/policies/code-of-conduct' },
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
      </div>

      {/* Social Media Icons - Centered on Mobile */}
      <div className="flex justify-center gap-2.5 sm:gap-3 lg:gap-4 text-base sm:text-lg lg:text-xl text-gray-700 mt-6 lg:hidden">
        {[FaFacebookF, FaYoutube, FaLinkedinIn, FaTwitter, FaInstagram, FaWhatsapp].map(
          (Icon, i) => (
            <Link
              href="#"
              key={i}
              className="hover:text-orange-500 hover:scale-110 transition-transform"
            >
              <Icon />
            </Link>
          )
        )}
      </div>

      <div className="text-center text-[10px] sm:text-xs text-gray-500 mt-6 sm:mt-8 lg:mt-10 pt-3 sm:pt-4 border-t border-gray-200">
        <p>&copy; {new Date().getFullYear()} ORITTO. All rights reserved.</p>
        <p className="leading-relaxed mt-1">
          All trademarks used herein are property of their respective owners.
          Any use of third party trademarks is for identification purposes only and does not imply endorsement.
        </p>
      </div>
    </footer>
  );
}
