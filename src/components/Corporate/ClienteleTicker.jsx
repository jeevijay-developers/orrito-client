import React from 'react'
import Image from 'next/image'

const clientLogos = [
    { src: '/img/corporate/placeholder.png', alt: 'TechCorp' },
    { src: '/img/corporate/placeholder.png', alt: 'GlobalManufacturing' },
    { src: '/img/corporate/placeholder.png', alt: 'InnovateSolutions' },
    { src: '/img/corporate/placeholder.png', alt: 'FutureIndustries' },
    { src: '/img/corporate/placeholder.png', alt: 'SmartSystems' },
    { src: '/img/corporate/placeholder.png', alt: 'PrecisionTech' },
    { src: '/img/corporate/placeholder.png', alt: 'AdvancedMaterials' },
    { src: '/img/corporate/placeholder.png', alt: 'QualityFirst' },
    { src: '/img/corporate/placeholder.png', alt: 'ReliablePartners' },
    { src: '/img/corporate/placeholder.png', alt: 'ExcellenceGroup' },
    { src: '/img/corporate/placeholder.png', alt: 'TrustedBrands' },
    { src: '/img/corporate/placeholder.png', alt: 'LeadershipCorp' },
]

const ClienteleTicker = () => {
    return (
        <section className="py-12 bg-gradient-to-r from-[#EC1B3B] via-[#EA4631] to-[#F26D31] text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Trusted by Industry Leaders</h2>
                <div className="relative">
                    <div className="flex animate-scroll space-x-12 items-center">
                        {[...clientLogos, ...clientLogos].map((client, index) => (
                            <div key={index} className="flex-shrink-0 flex items-center justify-center h-20 w-40">
                                <Image
                                    src={client.src}
                                    alt={client.alt}
                                    width={140}
                                    height={60}
                                    className="object-contain grayscale hover:grayscale-0 transition duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClienteleTicker