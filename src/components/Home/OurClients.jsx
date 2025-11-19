"use client";
import React, { useEffect, useRef } from 'react'

const OurClients = () => {
  const carouselRef = useRef(null)

  const clientLogos = [
    {
      id: 1,
      name: "Bada Business",
      logo: "/clients/badabussiness.png",
      alt: "Bada Business Logo"
    },
    {
      id: 2,
      name: "Chatkara",
      logo: "/clients/chatkara.png", 
      alt: "Chatkara Logo"
    },
    {
      id: 3,
      name: "Netflix",
      logo: "/clients/netflix.png",
      alt: "Netflix Logo"
    },
    {
      id: 4,
      name: "bsnl",
      logo: "/clients/bsnl.png",
      alt: "bsnl Logo"
    },
    {
      id: 5,
      name: "Emami",
      logo: "/clients/emami.png",
      alt: "Emami Logo "
    },
    {
      id: 6,
      name: "ITC",
      logo: "/clients/itc.png",
      alt: "ITC Logo"
    },
    {
      id: 7,
      name: "Talez",
      logo: "/clients/talez.png",
      alt: "Talez Logo"
    },
    {
      id: 8,
      name: "TCS",
      logo: "/clients/tcs.png",
      alt: "TCS Logo"
    }
  ]

  // Create multiple sets for truly infinite scroll
  const infiniteLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos]

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let animationId
    let position = 0
    const speed = 0.5 // Smooth continuous speed
    const cardWidth = 230 // Card width + margin
    const totalCards = infiniteLogos.length // Use infiniteLogos length instead
    const resetPoint = -(cardWidth * clientLogos.length) // Reset after original set, not infinite set

    const animate = () => {
      position -= speed
      
      // Reset position seamlessly when first original set completes
      if (position <= resetPoint) {
        position = 0
      }
      
      carousel.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    // Start animation immediately
    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  const sectionStyle = {
    // background: 'linear-gradient(135deg, #EC1B3B 0%, #EA4631 50%, #F26D31 100%)',
    padding: '60px 0',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '50px',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '100%'
  }

  const containerStyle = {
    background: '#ffffff',
    borderRadius: window.innerWidth < 640 ? '8px' : '15px',
    padding: window.innerWidth < 640 ? '20px 10px' : window.innerWidth < 768 ? '30px 15px' : '40px 20px',
    margin: '0 auto',
    maxWidth: '1200px',
    width: '90%',
    // boxShadow: '0 15px 35px rgba(242, 109, 49, 0.2)',
    overflow: 'hidden',
    border: '2px solid rgba(242, 109, 49, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const carouselContainerStyle = {
    overflow: 'hidden',
    width: '100%',
    padding: '20px 0' // Added vertical padding to prevent hover cut-off
  }

  const carouselTrackStyle = {
    display: 'flex',
    width: 'fit-content',
    transition: 'none',
    willChange: 'transform' // Optimize performance
  }

  const clientCardStyle = {
    background: '#ffffff',
    borderRadius: '15px',
    margin: '0 15px',
    // boxShadow: '0 10px 30px rgba(242, 109, 49, 0.15)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(242, 109, 49, 0.1)',
    height: window.innerWidth < 640 ? '60px' : window.innerWidth < 768 ? '80px' : '100px',
    width: window.innerWidth < 640 ? '90px' : window.innerWidth < 768 ? '120px' : '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 auto',
    overflow: 'hidden',
    position: 'relative'
  }

  const logoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // Show complete image without cutting
    transition: 'all 0.3s ease'
  }

  return (
    <section style={sectionStyle}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 style={headingStyle} >
              <span style={{ color: 'black' }} className='text-2xl sm:text-3xl md:text-4xl font-bold'>Join our </span>
              <span style={{ color: '#f97316' }} className='text-2xl sm:text-3xl md:text-4xl font-bold'>400+ Happy Clients</span>
              <span style={{ color: 'black' }} className='text-2xl sm:text-3xl md:text-4xl font-bold'> Family</span>
            </h2>
          </div>
        </div>
        
        <div style={containerStyle}>
          <div style={carouselContainerStyle}>
            <div 
              ref={carouselRef}
              style={carouselTrackStyle}
            >
              {infiniteLogos.map((client, index) => (
                <div
                className='py-2' 
                  key={`${client.id}-${index}`}
                  style={clientCardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
                    // e.currentTarget.style.boxShadow = '0 15px 40px rgba(242, 109, 49, 0.25)'
                    // e.currentTarget.style.borderColor = '#F26D31'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    // e.currentTarget.style.boxShadow = '0 10px 30px rgba(242, 109, 49, 0.15)'
                    // e.currentTarget.style.borderColor = 'rgba(242, 109, 49, 0.1)'
                  }}
                >
                  <img 
                    src={client.logo} 
                    alt={client.alt}
                    style={logoStyle}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurClients