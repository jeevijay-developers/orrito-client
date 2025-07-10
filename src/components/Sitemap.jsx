import Link from 'next/link';

const siteMapData = [
  {
    title: 'For Consumer',
    links: [
      { name: 'Fans', url: '/products/fans' },
      { name: 'Lighting', url: '/products/lighting' },
      { name: 'Switches', url: '/products/switches' },
      { name: 'Home Appliances', url: '/products/home-appliances' },
      { name: 'Home Electricals', url: '/products/home-electricals' },
      { name: 'Switchgears', url: '/products/switchgears' },
      { name: 'Smart Home', url: '/products/smart-home' },
      { name: 'Personal Grooming', url: '/products/personal-grooming' },
    ],
  },
  {
    title: 'Offers',
    links: [
      { name: 'Cashback Offer', url: '/offers/cashback' },
      { name: 'Oritto Happiness Days', url: '/offers/happiness-days' },
      { name: 'Oritto Galaxy Monsoon Offer', url: '/offers/monsoon' },
    ],
  },
  {
    title: 'For Business',
    links: [
      { name: 'Switchgear & Controlgear', url: '/business/switchgear' },
      { name: 'Power Quality Solutions', url: '/business/power-quality' },
      { name: 'Heavy Duty Fans', url: '/business/heavy-fans' },
      { name: 'Cables', url: '/business/cables' },
      { name: 'Motors', url: '/business/motors' },
      { name: 'Professional Lighting', url: '/business/pro-lighting' },
      { name: 'Solar', url: '/business/solar' },
    ],
  },
  {
    title: 'Our Brands',
    links: [
      { name: 'Oritto Studio', url: '/brands/studio' },
      { name: 'Oritto', url: '/brands/Oritto' },
      { name: 'Lloyd', url: '/brands/lloyd' },
      { name: 'Oritto Crabtree', url: '/brands/crabtree' },
      { name: 'REO', url: '/brands/reo' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'FAQs', url: '/support/faqs' },
      { name: 'Register Product', url: '/support/register' },
      { name: 'Service Requests', url: '/support/service-requests' },
      { name: 'Product Manuals', url: '/support/manuals' },
      { name: 'Warranty Information', url: '/support/warranty' },
      { name: 'Oritto One App', url: '/support/app' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { name: 'Privacy Policy', url: '/policies/privacy' },
      { name: 'Shipping Policy', url: '/policies/shipping' },
      { name: 'Returns and Cancellations Policy', url: '/policies/returns' },
      { name: 'Terms of Use', url: '/policies/terms' },
      { name: 'Loyalty Program T&C', url: '/policies/loyalty' },
      { name: 'Disclaimer', url: '/policies/disclaimer' },
    ],
  },
  {
    title: 'About Oritto',
    links: [
      { name: 'About Us', url: '/about' },
      { name: 'Careers', url: '/careers' },
      { name: 'Oritto International', url: '/about/international' },
      { name: 'Oritto Brand Family', url: '/about/brand-family' },
      { name: 'Made in India', url: '/about/made-in-india' },
      { name: 'Manufacturing Facilities', url: '/about/manufacturing' },
      { name: 'CLRA Compliance Delhi Branch', url: '/about/clra-delhi' },
      { name: 'E-waste Awareness', url: '/about/ewaste' },
      { name: 'Press & Media', url: '/media' },
      { name: 'Brochure & Pricelist', url: '/resources/brochure' },
      { name: 'Home Advisor', url: '/advice/home-advisor' },
      { name: 'Home Art Lights', url: '/products/art-lights' },
      { name: 'Blogs', url: '/blog' },
    ],
  },
  {
    title: 'Corporate',
    links: [
      { name: 'Investors', url: '/corporate/investors' },
      { name: 'Smart ODR', url: '/corporate/smart-odr' },
      { name: 'SEBI New Investor Website', url: '/corporate/sebi' },
      { name: 'Events', url: '/corporate/events' },
      { name: 'Sustainability', url: '/corporate/sustainability' },
      { name: 'CSR', url: '/corporate/csr' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: 'Contact Us', url: '/contact' },
      { name: 'Enquiry Form', url: '/contact/enquiry' },
      { name: 'Book A Demo', url: '/contact/demo' },
      { name: 'Product Review', url: '/contact/review' },
      { name: 'Store Locator', url: '/stores' },
    ],
  },
];

export default function SiteMap() {
  return (
    <section className="bg-white text-gray-800 px-4 md:px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 border-t border-gray-200 pt-10">
        {siteMapData.map((section, index) => (
          <div key={index} className="col-span-1">
            <h3 className="font-semibold text-sm sm:text-base mb-3">{section.title}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.url} className="hover:text-orange-500 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
