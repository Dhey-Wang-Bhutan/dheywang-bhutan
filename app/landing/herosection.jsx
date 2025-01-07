"use client";

import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const slides = [
    {
      img: "/landing/bali.jpg",
      title: "Discover Your Next Adventure",
      subtitle: "Explore the world’s most beautiful destinations with us.",
    },
    {
      img: "/landing/punakha.jpg",
      title: "Unforgettable Journeys",
      subtitle: "Tailor-made trips to your dream destinations.",
    },
    {
      img: "/landing/paro.jpg",
      title: "Experience the World",
      subtitle: "Adventure, culture, and relaxation in one package.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto sliding
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative h-screen">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/travel.mov"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg mb-8">
            Explore the Bhutan’s most beautiful destinations with us.
          </p>
          <a
            href="#destinations"
            className="bg-blue-800 hover:bg-blue-800 text-white py-3 px-6 rounded-lg shadow-lg transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
