"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { solarCategories } from '@/service/Data'
import SolarHero from './SolarHero'

const Solar = () => {
  const [categories, setCategories] = useState([]);
    useEffect(() => {
      const fetchSolarCategories = async () => {
        try {
          const data = await solarCategories(); 
          setCategories(data); 
          console.log("solar categories data",data)
        } catch (error) {
          console.error("Failed to load solar categories", error);
        }
      };

      fetchSolarCategories();
    }, []);
  const solarFeatures = [
    {
      icon: "🌞",
      title: "100% Renewable Energy",
      description: "Harness clean, sustainable solar power with zero carbon emissions"
    },
    {
      icon: "💡",
      title: "Smart LED Technology",
      description: "Advanced LED systems with intelligent controls and dimming capabilities"
    },
    {
      icon: "🔋",
      title: "Long-lasting Battery",
      description: "High-capacity lithium batteries for extended operation and reliability"
    },
    {
      icon: "🌧️",
      title: "Weather Resistant",
      description: "IP65 rated protection against harsh weather conditions"
    },
    {
      icon: "⚡",
      title: "Energy Efficient",
      description: "Up to 80% energy savings compared to traditional lighting solutions"
    },
    {
      icon: "🔧",
      title: "Easy Installation",
      description: "Plug-and-play design with minimal maintenance requirements"
    }
  ];

  const solarBenefits = [
    {
      title: "Cost Savings",
      description: "Reduce electricity bills by up to 90% with solar-powered lighting systems",
      percentage: "90%"
    },
    {
      title: "Environmental Impact",
      description: "Prevent thousands of tons of CO2 emissions annually",
      percentage: "100%"
    },
    {
      title: "ROI Timeline",
      description: "Achieve return on investment within 2-3 years of installation",
      percentage: "2-3 Years"
    }
  ];

  return (
    <div className="min-h-screen bg-white mt-44">
      {/* Hero Section */}
      <SolarHero />

      {/* Solar Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Solar Product Range
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of solar lighting solutions
              designed for various applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image.url}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  {category.subCategories && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-600 mb-2">
                        Available Types:
                      </h4>
                      <ul className="space-y-1">
                        {category.subCategories.map((subCat, subIndex) => (
                          <li key={subIndex} className="text-sm text-gray-500">
                            • {subCat.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Link
                    href={`solar/${category._id}`}
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Solar Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of sustainable solar technology with our
              innovative lighting solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solarFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Measurable Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See the tangible benefits of switching to solar energy solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solarBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
              >
                <div className="text-4xl font-bold text-orange-500 mb-4">
                  {benefit.percentage}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Solar Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Solar Lighting Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the technology behind our solar solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Solar Collection",
                description:
                  "High-efficiency photovoltaic panels capture sunlight during the day",
              },
              {
                step: "2",
                title: "Energy Storage",
                description:
                  "Advanced lithium batteries store the converted solar energy",
              },
              {
                step: "3",
                title: "Intelligent Control",
                description:
                  "Smart controllers optimize energy usage and lighting patterns",
              },
              {
                step: "4",
                title: "LED Illumination",
                description:
                  "Energy-efficient LED lights provide bright, reliable illumination",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have made the switch to
            sustainable solar lighting solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Solar