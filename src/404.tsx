import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

export default function NotFound() {

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="500" className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold mb-4">There is nothing here</h1>
      <h2 className="text-2xl font-bold mb-8">
        It's only a <span className="font-black">Void of Emptiness...</span>
      </h2>
      <Link
        to={"/"}
        className="hero-btn px-6 py-3 bg-sky-500 rounded-lg hover:bg-sky-600 transition duration-300">
        Follow me...
      </Link>
    </div>
  );
}
