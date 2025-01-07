"use client";
import Link from 'next/link';


const PackageCard = ({ tour }) => {
   
  return (
    <Link href="/itinerary">
    <div className="card border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{tour.title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{tour.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-primary font-bold">${tour.price}</span>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
            Book Now
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default PackageCard;
