"use client";

import React from "react";
import HeroSection from "@/app/landing/herosection";
import DestinationSection from "@/app/landing/destination";
import TestimonialPage from "@/app/landing/testimonial";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      {/* Destinations Section */}
      <DestinationSection />
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Why Choose Us
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Affordable Packages", icon: "💰" },
              { title: "Expert Guides", icon: "🌟" },
              { title: "24/7 Support", icon: "📞" },
            ].map((service, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-2">
                  Experience unparalleled service and unforgettable adventures.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testinomial Section */}
      <TestimonialPage />

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore?</h2>
          <p className="mb-6">Contact us today to plan your dream vacation.</p>
          <a
            href="#contact"
            className="bg-white text-blue-500 py-3 px-6 rounded-lg shadow-lg font-semibold transition hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
