"use client";
import { useState } from "react";

export default function ItineraryPage() {
  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival in Honolulu",
      description:
        "Fly into Honolulu and check in at your hotel. Relax and enjoy the stunning Waikiki beach.",
      image: "https://picsum.photos/600/400.jpg",
    },
    {
      day: "Day 2",
      title: "Pearl Harbor & City Tour",
      description:
        "Visit the historic Pearl Harbor and explore the vibrant downtown Honolulu area.",
      image: "https://picsum.photos/601/400.jpg",
    },
    {
      day: "Day 3",
      title: "Hawaiian Culture & Luau",
      description:
        "Immerse yourself in Hawaiian traditions with a cultural workshop followed by a Luau feast.",
      image: "https://picsum.photos/602/400.jpg",
    },
    {
      day: "Day 4",
      title: "North Shore Adventure",
      description:
        "Discover the beautiful North Shore with its pristine beaches and iconic surf spots.",
      image: "https://picsum.photos/603/400.jpg",
    },
  ];

  const inclusions = [
    { title: "Return Flights", icon: "✈️" },
    { title: "4-Night Accommodation", icon: "🏨" },
    { title: "Daily Breakfast", icon: "🍳" },
    { title: "Local Guides", icon: "🗺️" },
    { title: "Airport Transfers", icon: "🚐" },
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://picsum.photos/1200/600.jpg')",
        }}
      >
        <div className="bg-black/50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold">Hawaiian Adventure</h1>
          <p className="mt-4 text-xl">
            4 Days / 3 Nights | Flights, Accommodation & More
          </p>
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Day-by-Day Itinerary
        </h2>
        <div className="space-y-12">
          {itinerary.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center lg:items-start bg-white shadow-lg rounded-lg overflow-hidden`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={item.image}
                  alt={`${item.title}`}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-6 lg:w-1/2">
                <h3 className="text-2xl font-bold text-indigo-600">
                  {item.day}: {item.title}
                </h3>
                <p className="mt-4 text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inclusions Section */}
      <div className="bg-indigo-600 py-12 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">
            What's Included
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {inclusions.map((inclusion, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <span className="text-4xl">{inclusion.icon}</span>
                <p className="mt-2 font-semibold">{inclusion.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {itinerary.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={`Gallery - ${item.title}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
