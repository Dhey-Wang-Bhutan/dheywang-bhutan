"use client";

export default function HeroHeader({ title, img_url, button_name, bg_color, height = "75vh" }) {
  return (
    <section
      className={`relative h-[${height}] bg-cover bg-center`}
      style={{ backgroundImage: `url(${img_url})`, height: height }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="text-center">
          {/* Title */}
          <h1 className="text-5xl font-bold">{title}</h1>

          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-lg">
            {button_name}
          </button>
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-32"
        >
          <path
            fill={bg_color} // Matches the next section background
            d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,112C672,117,768,139,864,149.3C960,160,1056,160,1152,144C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
