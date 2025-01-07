"use client";

import React from "react";

const DestinationSection = () => {
  const destinations = [
    { name: "Bali, Indonesia", img: "/landing/bali.jpg" },
    { name: "Punakha Dzong, Punakha", img: "/landing/punakha.jpg" },
    { name: "Tiger Nest, Paro", img: "/landing/paro.jpg" },
    { name: "Kyoto, Japan", img: "/landing/punakha.jpg" },
    { name: "Santorini, Greece", img: "/landing/paro.jpg" },
    { name: "Great Wall, China", img: "/landing/bali.jpg" },
  ];

  return (
    <section id="destinations" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Popular Destinations
        </h2>

        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={destination.img}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              {/* Content */}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{destination.name}</h3>
                <p className="text-gray-600 mt-2">
                  Discover the beauty and culture of {destination.name}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
