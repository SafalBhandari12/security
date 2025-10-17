"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "LOCAL MARKET EXPLORER",
      subtitle: "Authentic Cultural Commerce",
      description:
        "Connect directly with local artisans, vendors, and traditional markets through our verified network of cultural ambassadors.",
      details: [
        "Direct partnerships with 500+ local markets across India",
        "Authenticated artisan profiles with skill verification",
        "Real-time inventory tracking for unique handcrafted items",
        "Cultural context and historical significance for each product",
        "Fair trade pricing transparency and vendor revenue sharing",
        "Multi-language support with local dialect integration",
      ],
      color: "bg-yellow-400",
      textColor: "text-black",
      borderColor: "border-yellow-400",
    },
    {
      title: "SMART TRANSPORT HUB",
      subtitle: "Integrated Mobility Solutions",
      description:
        "Comprehensive transportation network combining traditional and modern transport methods with predictive routing algorithms.",
      details: [
        "Multi-modal journey planning (auto, bus, train, bike, walk)",
        "Real-time vehicle tracking with ETA accuracy of 95%+",
        "Dynamic pricing based on demand and route optimization",
        "Carbon footprint calculation and eco-friendly alternatives",
        "Integration with local transport authorities and operators",
        "Emergency assistance and 24/7 customer support infrastructure",
      ],
      color: "bg-blue-400",
      textColor: "text-black",
      borderColor: "border-blue-400",
    },
    {
      title: "ADVENTURE CONCIERGE",
      subtitle: "Curated Experience Platform",
      description:
        "Professional adventure planning with certified guides, safety protocols, and customized itineraries for all skill levels.",
      details: [
        "Risk assessment and safety certification for all activities",
        "Professional guide network with 10+ years average experience",
        "Equipment rental and maintenance quality assurance",
        "Weather monitoring and activity scheduling optimization",
        "Medical emergency response protocols and insurance coverage",
        "Skill-based recommendations and progressive difficulty levels",
      ],
      color: "bg-red-400",
      textColor: "text-black",
      borderColor: "border-red-400",
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <header className='bg-black border-b-8 border-yellow-400'>
        <div className='max-w-7xl mx-auto px-6 py-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-6'>
              <div className='w-16 h-16 bg-yellow-400 border-4 border-black flex items-center justify-center transform rotate-3'>
                <span className='text-black font-black text-2xl transform -rotate-3'>
                  S
                </span>
              </div>
              <div>
                <h1 className='text-white font-black text-3xl tracking-tight'>
                  SOJOURN
                </h1>
                <div className='bg-red-400 text-black px-3 py-1 font-bold text-sm border-2 border-black transform -rotate-1'>
                  DEVELOPMENT PHASE
                </div>
              </div>
            </div>
            <nav className='hidden lg:flex items-center space-x-8'>
              <a
                href='#features'
                className='text-white font-bold text-lg hover:text-yellow-400 transition-colors'
              >
                FEATURES
              </a>
              <a
                href='#roadmap'
                className='text-white font-bold text-lg hover:text-yellow-400 transition-colors'
              >
                ROADMAP
              </a>
              <a
                href='#notify'
                className='bg-yellow-400 text-black px-6 py-3 font-black text-lg border-4 border-black hover:bg-blue-400 transition-colors transform hover:rotate-1'
              >
                NOTIFY ME
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='bg-white px-6 py-20 border-b-8 border-black'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='bg-black text-white px-8 py-4 inline-block border-4 border-yellow-400 mb-8 transform -rotate-1'>
              <span className='font-black text-sm tracking-wider'>
                REVOLUTIONARY TRAVEL PLATFORM
              </span>
            </div>

            <h2 className='text-6xl md:text-8xl font-black text-black mb-8 leading-none'>
              BEYOND
              <span className='inline-block text-red-400 border-8 border-black bg-black px-4 py-2 transform rotate-1 mt-4'>
                HOTELS
              </span>
            </h2>

            <div className='max-w-4xl mx-auto bg-yellow-400 border-4 border-black p-8 transform rotate-0'>
              <p className='text-black font-bold text-xl leading-tight'>
                Professional travel infrastructure connecting authentic local
                experiences with modern booking technology. Three specialized
                platforms launching in 2025.
              </p>
            </div>
          </div>

          {/* Feature Preview */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16'>
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`text-left p-8 border-4 border-black font-bold transition-all hover:scale-105 ${
                  activeFeature === index
                    ? feature.color
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <div className='mb-4'>
                  <h3 className='text-2xl font-black mb-2 text-black'>
                    {feature.title}
                  </h3>
                  <p className='text-lg font-bold text-black opacity-80'>
                    {feature.subtitle}
                  </p>
                </div>
                <p className='font-bold text-base leading-snug text-black'>
                  {feature.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Section */}
      <section id='features' className='bg-black px-6 py-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='mb-16'>
            <h2 className='text-white font-black text-5xl md:text-6xl mb-8'>
              FEATURE BREAKDOWN
            </h2>
            <div className='bg-yellow-400 border-4 border-white p-6 max-w-3xl'>
              <p className='text-black font-bold text-xl'>
                Comprehensive analysis of our three core platforms currently in
                development. Each system represents months of research and
                industry collaboration.
              </p>
            </div>
          </div>

          <div className='space-y-16'>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`border-8 border-white p-8 ${feature.color} ${
                  index % 2 === 1 ? "transform rotate-1" : "transform -rotate-1"
                }`}
              >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                  <div>
                    <h3 className='font-black text-4xl mb-4 text-black'>
                      {feature.title}
                    </h3>
                    <h4 className='font-bold text-2xl mb-6 text-black opacity-80'>
                      {feature.subtitle}
                    </h4>
                    <p className='font-bold text-xl text-black leading-tight mb-8'>
                      {feature.description}
                    </p>
                    <div className='bg-black text-white px-6 py-3 border-4 border-white inline-block'>
                      <span className='font-black text-lg'>
                        Q{index + 1} 2025 LAUNCH
                      </span>
                    </div>
                  </div>

                  <div className='bg-white border-4 border-black p-6'>
                    <h4 className='font-black text-2xl mb-6 text-black'>
                      TECHNICAL SPECIFICATIONS
                    </h4>
                    <ul className='space-y-3'>
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className='flex items-start'>
                          <div className='w-6 h-6 bg-black flex-shrink-0 mt-1 mr-4'></div>
                          <span className='font-bold text-black leading-tight'>
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section
        id='roadmap'
        className='bg-white px-6 py-20 border-b-8 border-black'
      >
        <div className='max-w-7xl mx-auto'>
          <div className='mb-16'>
            <h2 className='font-black text-5xl md:text-6xl text-black mb-8'>
              DEVELOPMENT TIMELINE
            </h2>
            <div className='bg-blue-400 border-4 border-black p-6 max-w-4xl transform rotate-1'>
              <p className='text-black font-bold text-xl'>
                Structured development phases with defined milestones, resource
                allocation, and market validation checkpoints. Each phase builds
                foundational infrastructure for subsequent platform launches.
              </p>
            </div>
          </div>

          <div className='space-y-12'>
            {[
              {
                phase: "PHASE 01",
                title: "LOCAL MARKET EXPLORER",
                period: "JANUARY - MARCH 2025",
                status: "ACTIVE DEVELOPMENT",
                progress: "60% COMPLETE",
                color: "bg-yellow-400",
                milestones: [
                  "Vendor onboarding system completion",
                  "Payment gateway integration testing",
                  "Mobile application beta release",
                  "Market validation in 5 pilot cities",
                ],
              },
              {
                phase: "PHASE 02",
                title: "SMART TRANSPORT HUB",
                period: "APRIL - JUNE 2025",
                status: "PLANNING STAGE",
                progress: "ARCHITECTURE DESIGN",
                color: "bg-blue-400",
                milestones: [
                  "API integration with transport providers",
                  "Real-time tracking system development",
                  "Dynamic pricing algorithm implementation",
                  "Cross-platform compatibility testing",
                ],
              },
              {
                phase: "PHASE 03",
                title: "ADVENTURE CONCIERGE",
                period: "JULY - SEPTEMBER 2025",
                status: "RESEARCH PHASE",
                progress: "MARKET ANALYSIS",
                color: "bg-red-400",
                milestones: [
                  "Guide certification program development",
                  "Safety protocol standardization",
                  "Equipment partner network establishment",
                  "Insurance framework implementation",
                ],
              },
            ].map((phase, index) => (
              <div key={index} className='flex flex-col lg:flex-row gap-8'>
                <div
                  className={`lg:w-1/3 ${phase.color} border-4 border-black p-6`}
                >
                  <div className='text-black font-black text-lg mb-2'>
                    {phase.phase}
                  </div>
                  <h3 className='text-black font-black text-2xl mb-4'>
                    {phase.title}
                  </h3>
                  <div className='space-y-2'>
                    <div className='bg-black text-white px-3 py-1 font-bold text-sm'>
                      {phase.period}
                    </div>
                    <div className='bg-white text-black px-3 py-1 font-bold text-sm border-2 border-black'>
                      {phase.status}
                    </div>
                    <div className='text-black font-bold text-lg'>
                      {phase.progress}
                    </div>
                  </div>
                </div>

                <div className='lg:w-2/3 bg-white border-4 border-black p-6'>
                  <h4 className='font-black text-xl mb-4 text-black'>
                    KEY MILESTONES
                  </h4>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {phase.milestones.map((milestone, milestoneIndex) => (
                      <div key={milestoneIndex} className='flex items-start'>
                        <div className='w-4 h-4 bg-black mt-2 mr-3 flex-shrink-0'></div>
                        <span className='font-bold text-black'>
                          {milestone}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Updates */}
      <section
        id='notify'
        className='bg-red-400 border-b-8 border-black px-6 py-20'
      >
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='font-black text-5xl md:text-6xl text-black mb-8'>
              PLATFORM UPDATES
            </h2>
            <div className='bg-white border-4 border-black p-6 max-w-2xl mx-auto transform -rotate-1'>
              <p className='text-black font-bold text-xl'>
                COMPREHENSIVE DEVELOPMENT NOTIFICATIONS AND TECHNICAL
                DOCUMENTATION FOR STAKEHOLDERS AND EARLY ADOPTERS
              </p>
            </div>
          </div>

          <div className='bg-white border-4 border-black p-8'>
            <form onSubmit={handleSubscribe} className='space-y-6'>
              <div className='space-y-4'>
                <h3 className='font-black text-2xl text-black'>
                  SUBSCRIPTION CATEGORIES
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {[
                    "TECHNICAL ARCHITECTURE UPDATES",
                    "VENDOR INTEGRATION ANNOUNCEMENTS",
                    "SECURITY PROTOCOL CHANGES",
                    "API DOCUMENTATION RELEASES",
                    "BETA TESTING OPPORTUNITIES",
                    "MARKET EXPANSION NOTIFICATIONS",
                  ].map((category, index) => (
                    <label
                      key={index}
                      className='flex items-center space-x-3 cursor-pointer'
                    >
                      <div className='w-6 h-6 border-4 border-black bg-yellow-400'></div>
                      <span className='font-bold text-black'>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4'>
                <div className='flex-1'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='ENTER EMAIL ADDRESS'
                    className='w-full px-4 py-4 border-4 border-black font-bold text-black placeholder-gray-600'
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='px-8 py-4 bg-black text-white font-black border-4 border-black hover:bg-yellow-400 hover:text-black transition-colors duration-200'
                >
                  SUBSCRIBE NOW
                </button>
              </div>

              {isSubscribed && (
                <div className='bg-yellow-400 border-4 border-black p-4'>
                  <p className='font-black text-black text-center'>
                    SUBSCRIPTION CONFIRMED - TECHNICAL UPDATES WILL BE DELIVERED
                    TO YOUR INBOX
                  </p>
                </div>
              )}

              <div className='bg-black text-white p-4 border-4 border-black'>
                <p className='font-bold text-center'>
                  CURRENT SUBSCRIBERS: 12,847 DEVELOPERS, VENDORS & TRAVEL
                  PROFESSIONALS
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-black text-white border-t-8 border-yellow-400'>
        <div className='max-w-7xl mx-auto px-6 py-16'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
            <div className='col-span-1 md:col-span-2'>
              <div className='flex items-center space-x-4 mb-8'>
                <div className='w-16 h-16 bg-yellow-400 border-4 border-white flex items-center justify-center'>
                  <span className='text-black font-black text-2xl'>S</span>
                </div>
                <span className='text-3xl font-black'>SOJOURN</span>
              </div>
              <div className='bg-white border-4 border-yellow-400 p-6 max-w-lg transform rotate-1'>
                <p className='text-black font-bold text-lg'>
                  COMPREHENSIVE TRAVEL PLATFORM DEVELOPMENT - INTEGRATING LOCAL
                  COMMERCE, TRANSPORTATION INFRASTRUCTURE, AND ADVENTURE TOURISM
                  THROUGH ADVANCED TECHNOLOGY SOLUTIONS
                </p>
              </div>
            </div>

            <div>
              <h4 className='font-black text-xl mb-6 text-yellow-400'>
                PLATFORM MODULES
              </h4>
              <ul className='space-y-3'>
                {[
                  "LOCAL MARKET INTEGRATION",
                  "SMART TRANSPORT NETWORK",
                  "ADVENTURE CONCIERGE SYSTEM",
                  "VENDOR MANAGEMENT PORTAL",
                  "PAYMENT PROCESSING ENGINE",
                  "DATA ANALYTICS DASHBOARD",
                ].map((item, index) => (
                  <li key={index} className='flex items-center'>
                    <div className='w-4 h-4 bg-yellow-400 mr-3'></div>
                    <span className='font-bold'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className='font-black text-xl mb-6 text-yellow-400'>
                TECHNICAL RESOURCES
              </h4>
              <ul className='space-y-3'>
                {[
                  "API DOCUMENTATION",
                  "DEVELOPER PORTAL",
                  "INTEGRATION GUIDES",
                  "SECURITY PROTOCOLS",
                  "TESTING ENVIRONMENTS",
                  "SUPPORT CHANNELS",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href='#'
                      className='flex items-center hover:text-yellow-400 transition-colors font-bold'
                    >
                      <div className='w-4 h-4 bg-white mr-3'></div>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='border-t-4 border-yellow-400 mt-16 pt-8'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
              <div className='bg-yellow-400 text-black px-6 py-3 border-4 border-white mb-4 md:mb-0'>
                <p className='font-black text-lg'>
                  © 2025 SOJOURN - ENTERPRISE TRAVEL SOLUTIONS
                </p>
              </div>
              <div className='bg-white text-black px-6 py-3 border-4 border-yellow-400'>
                <p className='font-black'>PLATFORM DEVELOPMENT: 60% COMPLETE</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
