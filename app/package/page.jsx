import PackageCard from "@/app/package/PackageCard";
import HeroHeader from "@/app/common/heroheader";

const tours = [
  {
    id: 1,
    image: "https://picsum.photos/600/400.jpg",
    title: "Tropical Paradise",
    description:
      "Enjoy a relaxing vacation on tropical islands with crystal clear waters.",
    price: 500,
  },
  {
    id: 2,
    image: "https://picsum.photos/601/400.jpg",
    title: "Mountain Adventure",
    description:
      "Experience the thrill of hiking and camping in the mountains.",
    price: 350,
  },
  {
    id: 3,
    image: "https://picsum.photos/602/400.jpg",
    title: "City Lights",
    description:
      "Explore the vibrant nightlife and iconic landmarks of bustling cities.",
    price: 400,
  },
  {
    id: 4,
    image: "https://picsum.photos/603/400.jpg",
    title: "City Lights",
    description:
      "Explore the vibrant nightlife and iconic landmarks of bustling cities.",
    price: 400,
  },
  {
    id: 5,
    image: "https://picsum.photos/604/400.jpg",
    title: "City Lights",
    description:
      "Explore the vibrant nightlife and iconic landmarks of bustling cities.",
    price: 400,
  },
];

const TourPackages = () => {
  return (
    <div>
      <HeroHeader
        title="Tour Packages"
        button_name={"contact us"}
        img_url="/landing/bali.jpg"
        bg_color={"#f3f4f6"}
        height="60vh"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Tour Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <PackageCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
