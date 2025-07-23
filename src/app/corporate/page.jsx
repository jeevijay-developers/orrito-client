"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
    ChevronRight,
    Award,
    Globe,
    Users,
    Factory,
    Target,
    Eye,
    Heart,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Gallery from "@/components/Home/Gallery"
import ClienteleTicker from "@/components/Corporate/ClienteleTicker"

export default function OrittoCorporate() {
    const [currentBanner, setCurrentBanner] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const banners = [
        {
            image: "/img/corporate/1.jpg",
            title: "Excellence in Manufacturing",
            subtitle: "Leading the industry with innovative solutions",
        },
        {
            image: "/img/corporate/1.jpg",
            title: "Global Reach, Local Impact",
            subtitle: "Serving customers worldwide with quality products",
        },
        {
            image: "/img/corporate/1.jpg",
            title: "Sustainable Future",
            subtitle: "Building tomorrow with responsible manufacturing",
        },
        {
            image: "/img/corporate/1.jpg",
            title: "Innovation at Core",
            subtitle: "Pioneering technologies for better solutions",
        },
    ]

    const milestones = [
        {
            year: "2021 Q2",
            title: "Laying the foundation stone",
            description: "Acquired 24000 Sqft Industrial land in Mandideep",
        },
        {
            year: "2021 Q3",
            title: "Project Initiation",
            description: " Project initiated during COVID"
        },
        {
            year: " 2022 Q3",
            title: "Project Commissioned",
            description: "First fully backward integrated facility commissioned"
        },
        {
            year: "2023 Q1",
            title: " First OEM",
            description: "Signed first OEM client for LED T-5 battens",
        },
        {
            year: " 2023 Q3",
            title: " Distribution Expanded",
            description: "Expanded distribution to Bhopal, Ujjain and Lucknow"
        },
        {
            year: " 2024 Q1",
            title: " Market Outreach",
            description: " Expanded OEM operations and market Outreach"
        },
    ]

    const teamMembers = [
        { name: "Varun Bansal", position: "Managing Partner", image: "/img/corporate/placeholder.png?height=300&width=300" },
        { name: "Pramod Bansal", position: "Partner", image: "/img/corporate/placeholder.png?height=300&width=300" },
        { name: " Leena Bansal", position: " Head of Marketing", image: "/img/corporate/placeholder.png?height=300&width=300" },
        { name: "Dr. B. P. Bansal", position: "Chairman", image: "/img/corporate/placeholder.png?height=300&width=300" },
        { name: " Arun Bhatia", position: "Advisor (Technology)", image: "/img/corporate/placeholder.png?height=300&width=300" },
        { name: " Dr. V. Baskaran", position: "Advisor (Organization Building & Behavior)", image: "/img/corporate/placeholder.png?height=300&width=300" },
    ]

    const clients = [
        "TechCorp",
        "GlobalManufacturing",
        "InnovateSolutions",
        "FutureIndustries",
        "SmartSystems",
        "PrecisionTech",
        "AdvancedMaterials",
        "QualityFirst",
        "ReliablePartners",
        "ExcellenceGroup",
        "TrustedBrands",
        "LeadershipCorp",
    ]

    const certifications = [
        { name: "ISO 9001:2015", description: "Quality Management System" },
        { name: "ISO 14001:2015", description: "Environmental Management" },
        { name: "OHSAS 18001", description: "Occupational Health & Safety" },
        { name: "CE Marking", description: "European Conformity" },
        { name: "FDA Approved", description: "Food & Drug Administration" },
        { name: "GMP Certified", description: "Good Manufacturing Practice" },
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % banners.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [banners.length])

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Banners */}
            <section className="relative h-[60vh] md:h-[85vh]  overflow-hidden">
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className={` absolute  inset-0 transition-opacity duration-1000 ${index === currentBanner ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image src={banner.image || "/placeholder.svg"} alt={banner.title} fill className="object-cover"  />
                        <div className="absolute inset-0 bg-black/20 " />
                        <div className="absolute inset-0 flex items-center justify-center text-center top-6  text-white">
                            <div className="max-w-4xl px-4 ">
                                <h1 className=" text-3xl  md:text-7xl font-bold mb-6 animate-fade-in">{banner.title}</h1>
                                <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">{banner.subtitle}</p>
                                {/* <Button size="lg" className="animate-fade-in-delay-2">
                  Discover More <ArrowRight className="ml-2 h-5 w-5" />
                </Button> */}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Banner Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentBanner ? "bg-white" : "bg-white/50"}`}
                            onClick={() => setCurrentBanner(index)}
                        />
                    ))}
                </div>
            </section>

            {/* Oritto World Animation */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-12 text-gray-800">Welcome to Oritto World</h2>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="animate-pulse">
                            <Image
                                src="/img/corporate/placeholder.png?height=400&width=800"
                                alt="Oritto World Animation"
                                width={800}
                                height={400}
                                className="rounded-lg shadow-2xl mx-auto"
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/90 rounded-lg p-8 max-w-md">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">Global Innovation Hub</h3>
                                <p className="text-gray-600">
                                    Connecting manufacturing excellence across continents with cutting-edge technology and sustainable
                                    practices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Oritto - Journey */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-gray-800">Our Journey</h2>

                        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
                            <div className="order-2 md:order-1">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">How It All Started</h3>
                                <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                                    Oritto began in 1995 with a simple yet powerful idea: to revolutionize manufacturing through
                                    innovation, quality, and sustainability. Our founders envisioned a company that would not just produce
                                    products, but create solutions that would shape the future of industry.
                                </p>
                                <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                                    The initial challenges were significant - establishing manufacturing processes, building a skilled
                                    workforce, and creating a market presence in a competitive landscape. However, our commitment to
                                    excellence and continuous improvement helped us overcome these obstacles.
                                </p>
                            </div>
                            <div className="order-1 md:order-2 w-full">
                                <div className="relative w-full aspect-[3/2] md:aspect-[6/4]">
                                    <Image
                                        src="/img/corporate/placeholder.png?height=400&width=600"
                                        alt="Oritto Founding Story"
                                        fill
                                        className="rounded-lg shadow-lg object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                            <Card className="p-4 md:p-6 text-center h-full flex flex-col items-center justify-between">
                                <Factory className="h-10 w-10 md:h-12 md:w-12 text-orange-600 mb-3 md:mb-4" />
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Manufacturing Setup</h4>
                                    <p className="text-sm md:text-base text-gray-600">
                                        State-of-the-art facilities with advanced automation and quality control systems.
                                    </p>
                                </div>
                            </Card>
                            <Card className="p-4 md:p-6 text-center h-full flex flex-col items-center justify-between">
                                <Target className="h-10 w-10 md:h-12 md:w-12 text-orange-600 mb-3 md:mb-4" />
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Differentiators</h4>
                                    <p className="text-sm md:text-base text-gray-600">
                                        Unique backward integration, sustainable practices, and customer-centric approach.
                                    </p>
                                </div>
                            </Card>
                            <Card className="p-4 md:p-6 text-center h-full flex flex-col items-center justify-between sm:col-span-2 md:col-span-1">
                                <Users className="h-10 w-10 md:h-12 md:w-12 text-orange-600 mb-3 md:mb-4" />
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Services</h4>
                                    <p className="text-sm md:text-base text-gray-600">End-to-end manufacturing solutions, R&D support, and global logistics.</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision, Mission, Values */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Foundation</h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            <Card className="p-8 text-center h-full">
                                <Eye className="h-16 w-16 text-orange-600 mx-auto" />
                                <h3 className="text-2xl font-bold  text-gray-800">Our Vision</h3>
                                <p className="text-gray-600 text-lg">
                                    To be a global leader with
                                    technology-driven, sustainable,
                                    and cost-effective lighting
                                    solutions and to be recognized
                                    for customer focus, leadership,
                                    operational excellence, and
                                    reliability.
                                </p>
                            </Card>

                            <Card className="p-8 text-center h-full">
                                <Target className="h-16 w-16 text-orange-600 mx-auto" />
                                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                                <p className="text-gray-600 text-lg">
                                    To become India’s most trusted
                                    technology-driven brand in
                                    application electronics by
                                    enhancing last-mile supply chain
                                    efficiency and delivering
                                    exceptional after-sales service.
                                </p>
                            </Card>

                            <Card className="p-8 text-center h-full">
                                <Heart className="h-16 w-16 text-orange-600 mx-auto" />
                                <h3 className="text-2xl font-bold text-gray-800">Our Core Values</h3>
                                <div className="text-left">
                                    <ul className="text-gray-600 space-y-2 list-disc pl-5">
                                        <li><span className="font-bold">Innovation:</span> Excellence through technology.</li>
                                        <li><span className="font-bold">World-Class Standards:</span> Embracing cutting-edge practices.</li>
                                        <li><span className="font-bold">Respect:</span> Valuing people, ideas, systems, and time.</li>
                                        <li><span className="font-bold">Trust:</span> Commitment to transparency and
                                            reliability.</li>
                                        <li><span className="font-bold">First-Time-Right:</span> Striving for perfection</li>
                                        <li><span className="font-bold">Leadership:</span> Driving business and social
                                            excellence.</li>
                                    </ul>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey/Milestones Timeline */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Milestones</h2>

                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>

                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                                >
                                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                                        <Card className="p-6">
                                            <Badge className="mb-3 text-lg px-3 py-1">{milestone.year}</Badge>
                                            <h3 className="text-xl font-bold mb-2 text-gray-800">{milestone.title}</h3>
                                            <p className="text-gray-600">{milestone.description}</p>
                                        </Card>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Manufacturing Excellence */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Manufacturing Excellence</h2>

                        <div className="mb-16">
                            <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Manufacturing Plant</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="relative group overflow-hidden rounded-lg">
                                        <Image
                                            src={`/img/corporate/placeholder.png?height=300&width=400`}
                                            alt={`Manufacturing Plant ${i}`}
                                            width={400}
                                            height={300}
                                            className="transition-transform group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <p className="text-white font-semibold">Production Unit {i}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-16 w-full">
                            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">Process Flow</h3>
                            <Card className="p-4 md:p-8 bg-gradient-to-br from-gray-50 to-white shadow-lg">
                                {/* Desktop View - Single Line */}
                                <div className="hidden lg:flex justify-center items-center gap-1 xl:gap-2 overflow-x-auto">
                                    {[
                                        "Raw Materials",
                                        "Processing",
                                        "Quality Control",
                                        "Assembly",
                                        "Testing",
                                        "Packaging",
                                        "Distribution",
                                    ].map((step, index) => (
                                        <div key={index} className="flex items-center flex-shrink-0">
                                            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-2 xl:px-4 xl:py-3 rounded-xl font-semibold shadow-md text-xs xl:text-sm whitespace-nowrap">
                                                {step}
                                            </div>
                                            {index < 6 && (
                                                <ChevronRight className="h-4 w-4 xl:h-5 xl:w-5 text-orange-400 mx-1 animate-pulse flex-shrink-0" />
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Mobile/Tablet View */}
                                <div className="lg:hidden">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Raw Materials",
                                            "Processing",
                                            "Quality Control",
                                            "Assembly",
                                            "Testing",
                                            "Packaging",
                                            "Distribution",
                                        ].map((step, index) => (
                                            <div key={index} className="relative">
                                                <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-xl font-semibold shadow-md text-center">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <span className="bg-white text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                                                            {index + 1}
                                                        </span>
                                                        <span className="text-sm sm:text-base">{step}</span>
                                                    </div>
                                                </div>
                                                {index < 6 && (
                                                    <div className="hidden sm:flex absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                                                        <div className="bg-white rounded-full p-1 shadow-md">
                                                            <ChevronRight className="h-4 w-4 text-orange-400" />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Mobile Flow Indicator */}
                                    <div className="sm:hidden mt-6 flex justify-center">
                                        <div className="text-xs text-gray-500 bg-gray-100 px-3 py-2 rounded-full">
                                            ↓ Sequential Process Flow ↓
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Oritto */}
            <section className="py-20 bg-gradient-to-r from-[#EC1B3B] via-[#EA4631] to-[#F26D31] text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-16">Why Choose Oritto?</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-white/20 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                    <Award className="h-12 w-12" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Backward Integration</h3>
                                <p>Inhouse manufacturing ensures complete quality and cost control, on-time delivery (OTD), and the support of an experienced team with decades of prior experience in the same sector.</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-white/20 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                    <Globe className="h-12 w-12" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Innovative R&D</h3>
                                <p>Continuous improvement &
                                    New Designs </p>
                            </div>

                            <div className="text-center">
                                <div className="bg-white/20 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                    <Users className="h-12 w-12" />
                                </div>
                                <h3 className="text-xl font-bold mb-2"> Customer Centric Approach</h3>
                                <p>Reliable products with exceptional service, the ability to invest to meet growing customer needs, exceptional after-sales service, and a simplified warranty management process.</p>
                            </div>

                            <div className="text-center">
                                <div className="bg-white/20 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                    <Factory className="h-12 w-12" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                                <p>Commitment to energy-efficient solutions, strategically located in Central India (Madhya Pradesh) for on-time deliveries and reduced lead times.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-16 text-gray-800">Global Presence</h2>

                        <div className="mb-12">
                            <Image
                                src="/img/corporate/placeholder.png?height=400&width=800"
                                alt="Global Presence Map"
                                width={800}
                                height={400}
                                className="mx-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <h3 className="text-3xl font-bold text-orange-600 mb-2">25+</h3>
                                <p className="text-gray-600">Countries</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-orange-600 mb-2">50+</h3>
                                <p className="text-gray-600">Manufacturing Units</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-orange-600 mb-2">1000+</h3>
                                <p className="text-gray-600">Employees</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-orange-600 mb-2">500+</h3>
                                <p className="text-gray-600">Global Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Certifications & Standards</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certifications.map((cert, index) => (
                                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                                    <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">{cert.name}</h3>
                                    <p className="text-gray-600">{cert.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Management Team */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Oritto Pillars - Our Leadership Team
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Meet the visionary leaders driving innovation and excellence in our organization
                            </p>
                        </div>

                        <div className="relative">
                            {/* Left Navigation Button */}
                            <button className="team-button-prev group absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-orange-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-orange-400 -ml-6 md:-ml-8">
                                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-orange-500 group-hover:text-white rotate-180 group-hover:-translate-x-0.5 transition-all duration-300" />
                            </button>

                            {/* Right Navigation Button */}
                            <button className="team-button-next group absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-orange-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-orange-400 -mr-6 md:-mr-8">
                                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-orange-500 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
                            </button>

                            <Swiper
                                modules={[Navigation, Autoplay, Pagination]}
                                spaceBetween={20}
                                autoplay={{ 
                                    delay: 4000, 
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true 
                                }}
                                loop={true}
                                navigation={{
                                    nextEl: '.team-button-next',
                                    prevEl: '.team-button-prev',
                                }}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 16,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 24,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    }
                                }}
                                className="leadership-swiper !pb-16"
                            >
                                {teamMembers.map((member, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="group h-full">
                                            <Card className="relative p-3 sm:p-4 md:p-6 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden h-full min-h-[280px] sm:min-h-[320px] md:min-h-[350px]">
                                                {/* Background Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                
                                                {/* Content */}
                                                <div className="relative z-10 text-center h-full flex flex-col justify-center">
                                    {/* Profile Image */}
                                    <div className="relative mb-3 sm:mb-4 md:mb-6">
                                        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto relative">
                                            <Image
                                                src={member.image || "/placeholder.svg"}
                                                alt={member.name}
                                                fill
                                                className="rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500"
                                            />
                                            {/* Ring Animation */}
                                            <div className="absolute inset-0 rounded-full border-2 border-orange-400 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                                        </div>
                                    </div>

                                    {/* Name & Position */}
                                    <div className="space-y-1 sm:space-y-2 flex-1 flex flex-col justify-center">
                                        <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                                            {member.name.trim()}
                                        </h3>
                                        <p className="text-sm sm:text-base md:text-base lg:text-lg text-gray-600 font-medium leading-tight px-1 sm:px-2 md:px-0">
                                            {member.position.trim()}
                                        </p>
                                    </div>                                                    {/* Decorative Element */}
                                                    <div className="mt-2 sm:mt-4 flex justify-center">
                                                        <div className="w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                                                    </div>
                                                </div>

                                                {/* Corner Accent */}
                                                <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full"></div>
                                            </Card>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .leadership-swiper {
                        padding: 0 20px 60px 20px;
                        position: relative;
                        overflow: visible;
                    }
                    
                    /* Hide default Swiper navigation */
                    .leadership-swiper .swiper-button-next,
                    .leadership-swiper .swiper-button-prev {
                        display: none;
                    }
                    
                    /* Custom Navigation Buttons */
                    .team-button-next,
                    .team-button-prev {
                        cursor: pointer;
                        user-select: none;
                        position: absolute;
                        z-index: 20;
                        opacity: 0.9;
                        backdrop-filter: blur(4px);
                    }
                    
                    .team-button-next:hover,
                    .team-button-prev:hover {
                        opacity: 1;
                    }
                    
                    .team-button-next:active,
                    .team-button-prev:active {
                        transform: scale(0.95) translateY(-50%);
                    }
                    
                    /* Mobile navigation button styling */
                    @media (max-width: 480px) {
                        .team-button-next,
                        .team-button-prev {
                            width: 44px;
                            height: 44px;
                            opacity: 0.95;
                        }
                        
                        .team-button-next {
                            right: 15px;
                        }
                        
                        .team-button-prev {
                            left: 15px;
                        }
                    }
                    
                    /* Medium mobile screens */
                    @media (min-width: 481px) and (max-width: 640px) {
                        .team-button-next {
                            right: 10px;
                        }
                        
                        .team-button-prev {
                            left: 10px;
                        }
                    }
                    
                    /* Pagination Styling */
                    .leadership-swiper .swiper-pagination {
                        bottom: 10px !important;
                        position: relative !important;
                        margin-top: 20px;
                    }
                    
                    .leadership-swiper .swiper-pagination-bullet {
                        width: 10px;
                        height: 10px;
                        background: #d1d5db;
                        border-radius: 50%;
                        opacity: 1;
                        transition: all 0.3s ease;
                        cursor: pointer;
                        margin: 0 3px;
                    }
                    
                    @media (min-width: 768px) {
                        .leadership-swiper .swiper-pagination-bullet {
                            width: 12px;
                            height: 12px;
                            margin: 0 4px;
                        }
                    }
                    
                    .leadership-swiper .swiper-pagination-bullet-active {
                        background: linear-gradient(45deg, #f97316, #ef4444);
                        transform: scale(1.2);
                    }
                    
                    @media (min-width: 768px) {
                        .leadership-swiper .swiper-pagination-bullet-active {
                            transform: scale(1.3);
                        }
                    }
                    
                    /* Card responsiveness */
                    @media (max-width: 640px) {
                        .leadership-swiper {
                            padding: 0 10px 50px 10px;
                        }
                    }
                    
                    /* Ensure cards fill container width properly */
                    .leadership-swiper .swiper-slide {
                        height: auto;
                        display: flex;
                        flex-direction: column;
                    }
                    
                    .leadership-swiper .swiper-wrapper {
                        align-items: stretch;
                    }
                    
                    /* Container spacing for navigation buttons */
                    @media (min-width: 640px) {
                        .max-w-7xl {
                            padding-left: 3rem;
                            padding-right: 3rem;
                        }
                    }
                `}</style>
            </section>

            {/* Clientele Ticker */}
            <ClienteleTicker />

            {/* Gallery */}
            <Gallery />
        </div>
    )
}