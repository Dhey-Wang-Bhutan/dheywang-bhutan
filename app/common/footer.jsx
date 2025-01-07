import Image from "next/image";

export default function Footer() {
  return (
    <div>
     <footer className="py-6 bg-gray-800 text-white text-center">
        <p>© {new Date().getFullYear()} Dhey Wang Bhutan. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
