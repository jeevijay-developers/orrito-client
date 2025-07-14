import apiClient from "./axiosInstance";

export const productCategories = async() => {
  try {
    const response = await apiClient.get("/api/v1/categories/get-all-categories");
    // console.log("Response from productCategories:", response);    
    return response.data;
  } catch (error) {
    console.error("Error fetching product categories:", error);
    throw error;
  }
}

export const solutionCategories = async() => {
  try {
    const response = await apiClient.get("/api/v1/solutions/get-all-solutions");
    console.log("Response from solarCategories:", response);
    
    return response.data;
  } catch (error) {
    console.error("Error fetching solar categories:", error);
    throw error;
  }
}

// export const solarCategories = [
//     { 
//         name: 'Solar Street Lights', 
//         href: '/solar/street-lights', 
//         src: '/img/corporate/placeholder.png',
//         subCategories: [
//             { name: 'Semi-Integrated', href: '/solar/semi-integrated', src: '/img/corporate/placeholder.png' },
//             { name: 'All-in-One', href: '/solar/all-in-one', src: '/img/corporate/placeholder.png' },
//             { name: 'Hybrid', href: '/solar/hybrid', src: '/img/corporate/placeholder.png' },
//         ]
//     },
//     { name: 'Solar Mini Mast', href: '/solar/mini-mast', src: '/img/corporate/placeholder.png' },
//     { name: 'Solar High mast', href: '/solar/high-mast', src: '/img/corporate/placeholder.png' },
//     { name: 'Solar CCTV Cameras', href: '/solar/cctv-cameras', src: '/img/corporate/placeholder.png' },
//     { name: 'Solar Traffic Blinkers', href: '/solar/traffic-blinkers', src: '/img/corporate/placeholder.png' },
//     { name: 'Solar Mobile Lighting Towers', href: '/solar/mobile-lighting-towers', src: '/img/corporate/placeholder.png' },
// ];

export const solarCategories = async () => {
  try {
    const response = await apiClient.get("/api/v1/solar/get-all-solar");
    console.log("Response from solarCategories:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching solar categories:", error);
    throw error;
  }
};
export const siteMapData = [
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