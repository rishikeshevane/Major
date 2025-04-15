import { Link } from "react-router-dom";
import React, { useRef } from "react";
import bannerImage from "/homepage-image.png";
import Navbar from "../components/Navbar"; // Make sure path is correct

const Home = () => {
  const browseRef = useRef(null);

  const handleScrollToBrowse = () => {
    browseRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full"> {/* <-- Parent wrapper */}
      <Navbar />  {/* ✅ Add this line */}

      {/* Banner Image with Button Positioned on It */}
      <div className="relative w-full">
        <img
          src={bannerImage}
          alt="Fashion Banner"
          className="w-full h-[90vh] object-cover object-top"
        />

        {/* Button on top of banner */}
        <div className="absolute inset-0 flex justify-center items-end pb-10">
          <button
            onClick={handleScrollToBrowse}
            className="bg-black text-white px-6 py-3 text-lg font-semibold rounded-xl shadow hover:bg-gray-800 transition"
          >
            Browse Collection
          </button>
        </div>
      </div>

      {/* Browse Collection Section */}
      <div ref={browseRef} className="w-full py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Browse Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto">
          {[
            { title: "Men", image: "https://source.unsplash.com/400x400/?men,clothes" },
            { title: "Women", image: "https://source.unsplash.com/400x400/?women,fashion" },
            { title: "Party Wear", image: "https://source.unsplash.com/400x400/?party,dress" },
            { title: "Ethnic", image: "https://source.unsplash.com/400x400/?ethnic,clothing" },
            { title: "Casual", image: "https://source.unsplash.com/400x400/?casual,outfit" },
            { title: "Formal", image: "https://source.unsplash.com/400x400/?formal,wear" },
          ].map((item) => (
            <Link
  to={`/collection/${item.title.toLowerCase()}`} // Go to category only
  key={item.title}

              className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-xl transition block"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
