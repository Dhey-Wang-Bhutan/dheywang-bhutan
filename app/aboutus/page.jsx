import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[75vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/landing/bali.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <div className="text-center">
            {/* Title */}
            <h1 className="text-5xl font-bold">About Us</h1>

            {/* Button */}
            <button className="mt-6 px-6 py-3 bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-lg">
              Meet the Team
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
              fill="#F9FAFB" // Matches the next section background
              d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,112C672,117,768,139,864,149.3C960,160,1056,160,1152,144C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
          <p className="mt-6 text-md text-gray-600 text-left">
            We are pleased to introduce to you our company, the Dheywang Tours &
            Treks is one of the most specialized tour operators in the Kingdom
            licensed by the Ministry of Industry, Commerce and Employment
            (MoICE), registers under Department of Tourism (DoT), Royal
            Government of Bhutan. DoT is an autonomous body which oversees the
            Tourism industry in Bhutan. We specialize in serving both the
            foreign (Third countries) and second countries tourist visiting
            Bhutan.
          </p>
          <p className="mt-6 text-md text-gray-600 text-left">
            We have vast experience in handling inbound international tourists,
            worldwide air ticketing, trekking cultural tours and many more. We
            have trained and experienced staff with guides of high skill and
            experience who guide the tourists through the Himalayan mists and
            the various exotic destinations within the country. The earthly
            paradise, best known as Druk Yuel will be shown to you in its truly
            crystallized manifestation of sublime -nature which is one of the
            last relics of this wonderful world.
          </p>

          <p className="mt-6 text-md text-gray-600 text-left">
            We offer expanded packages and special customized Festival and
            cultural Tours. Each of our tour packages is designed with great
            degree of flexibility to meet the budget and expectations of
            individuals or groups. Our Treks are fully equipped with the best of
            gears with the support of the most experienced tour leaders and
            crew. We carry our own supplies and provisions to ensure quality
            food and comfortable accommodations that meet our high standards.
            Our local Tour Guides are among the best and the most experienced in
            culture, religion, history and geography of the region. They will
            guide you through unique places of cultural and historic
            significance and share with you interesting folklores, legends,
            myths and superstitions of the local people. We will make all of
            your arrangements, from choosing the right trip including air travel
            and trip extensions, until you depart from Bhutan. We provide you
            the highest quality of service, to assure you have a wonderful
            holiday in the Himalayas.
          </p>
          <p className="mt-6 text-md text-gray-600 text-left">
            With a dedicated person leading the company, we also have well
            experienced guides, with good speaking English Language but yet to a
            very Bhutanese Culture. All our guides, be it a Cultural Guide or
            trekking guide, they are trained and licensed by Department of
            Tourism (DoT), Royal Government of Bhutan (RGoB) under the
            international norm of tourism.
          </p>
          <p className="mt-6 text-md text-gray-600 text-left">
            With, helping our visitors to discover Bhutan since last eleven
            years, Dheywang Tours & Treks has now discovered it's own network
            with trusted and DoT authorized Hotels and Resorts to provide our
            visitors a comfortable and home stay logistics. We have the tourist
            standard (Three Stars) hotels and with maximum of all services like,
            Internet Cafe, Discotheques, MP Halffl, Bar, Conference Hall, Hot
            stone bath and 24 hours Coffee shop, but as you go on to eastern
            part of Bhutan, you would find a minor difference and the less
            availability of hotel service but up to the services of tourist
            expectation.
          </p>
          <p className="mt-6 text-md text-gray-600 text-left">
            Unlike other nations, the only way to get traveled from place to
            place within Bhutan is by means of road Transportation. Dheywang
            Tours & Treks  provides our visitors with foreign branded vehicles
            as like Hyundai, Toyota and other 4 Wheel Drive vehicle, and drivers
            provided with our visitors are not less than 4 years experienced and
            Â trained and licensed by Bhutan Construction and Transport
            Authority (BCTA) under RGoB.
          </p>
          <p className="mt-6 text-md text-gray-600 text-left">
            Dheywang Tours & Treks strive to provide you more then what you
            expect, so let us show you that we are the ones whom you can trust
            upon. Read our client's endorsement here for more.
          </p>
          <p className="mt-6 text-md text-gray-600 text-left">
            We wait to see you soon in Bhutan.
          </p>
          <p className="mt-6 text-xl font-bold text-gray-800 text-left">
            Pema Dechen
          </p>
          <p className="mt-3 text-md text-gray-600 text-left">
            Managing Director
          </p>
        </div>
        {/* Curved Bottom Divider */}
        <div className="relative w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-32"
          >
            <path
              fill="#ffffff" // Matches the background of the Values section
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,213.3C960,203,1056,181,1152,176C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white pt-0">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Core Values</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <Image src="/logo.png" alt="Integrity" width={80} height={80} />
              <h3 className="mt-6 text-xl font-semibold">Integrity</h3>
              <p className="mt-4 text-gray-600">
                We uphold the highest standards of honesty and professionalism
                in everything we do.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/logo.png" alt="Innovation" width={80} height={80} />
              <h3 className="mt-6 text-xl font-semibold">Innovation</h3>
              <p className="mt-4 text-gray-600">
                Constantly striving to innovate and bring new solutions to the
                travel industry.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/logo.png"
                alt="Customer First"
                width={80}
                height={80}
              />
              <h3 className="mt-6 text-xl font-semibold">Customer First</h3>
              <p className="mt-4 text-gray-600">
                Our customers are at the heart of every decision we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Meet the Team</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Team Member */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="overflow-hidden">
                {/* Profile Image */}
                <Image
                  src="/team/guide_kesang.jpg"
                  alt="Team Member"
                  width={200}
                  height={200}
                  className="w-full h-auto rounded-lg mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                  John Doe
                </h3>
                <p className="mt-2 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Founder & CEO
                </p>
              </div>
              {/* Optional Description */}
              <p className="mt-4 text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300">
                Passionate about delivering exceptional travel experiences.
              </p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <h2 className="text-4xl font-bold">
          Ready to Plan Your Next Adventure?
        </h2>
        <p className="mt-4 text-lg">
          Let us help you create the perfect itinerary for your travels.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 bg-white text-indigo-600 py-3 px-8 rounded-full text-xl font-semibold"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
