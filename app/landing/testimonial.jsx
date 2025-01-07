"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, TechCorp",
    image: "/team/guide_kesang.jpg",
    quote:
      "This service has completely transformed the way we operate. The team is highly professional and dedicated!",
  },
  {
    name: "Jane Smith",
    title: "Marketing Manager, BrightIdeas",
    image: "/team/guide_kesang.jpg",
    quote:
      "Their attention to detail and commitment to excellence is unmatched. I highly recommend them to anyone.",
  },
  {
    name: "Michael Lee",
    title: "Freelancer",
    image: "/team/guide_kesang.jpg",
    quote:
      "Working with this company has been an absolute pleasure. They exceeded all my expectations!",
  },
  {
    name: "Emily Davis",
    title: "Designer",
    image: "/team/guide_kesang.jpg",
    quote:
      "Highly professional and extremely skilled team! Would love to collaborate again.",
  },
  {
    name: "Chris Wilson",
    title: "Product Manager",
    image: "/team/guide_kesang.jpg",
    quote:
      "They delivered above and beyond our expectations. Highly recommended!",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, testimonials.length - (testimonials.length % 3 || 3))
        : prevIndex - 3
    );
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Clients Say
        </h2>

        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden">
          {/* Testimonials Row */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex / testimonials.length) * 100
              }%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full md:w-1/3 px-4 shrink-0">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  {/* Image */}
                  ```
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  {/* Name */}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  {/* Title */}
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  {/* Quote */}
                  <p className="mt-4 text-gray-700 italic">
                    “{testimonial.quote}”
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-800	 text-white p-3 rounded-full shadow-lg hover:bg-indigo-500 transition"
            onClick={prevSlide}
          >
            &#8249; {/* Left Arrow */}
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-indigo-500 transition"
            onClick={nextSlide}
          >
            &#8250; {/* Right Arrow */}
          </button>
        </div>
      </div>
    </section>
  );
}
