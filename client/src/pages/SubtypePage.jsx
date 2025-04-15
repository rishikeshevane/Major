import React from 'react';
import { useParams } from 'react-router-dom';

const SubtypePage = () => {
  const { category, type, subtype } = useParams();

  // Dummy data for now — later you can fetch from backend
  const allItems = {
    formal: [
      {
        id: 1,
        name: "White Formal Shirt",
        image: "/images/formal-white.jpg",
      },
      {
        id: 2,
        name: "Sky Blue Formal Shirt",
        image: "/images/formal-blue.jpg",
      },
    ],
    casual: [
      {
        id: 3,
        name: "Printed Casual Shirt",
        image: "/images/casual-printed.jpg",
      },
      {
        id: 4,
        name: "Check Casual Shirt",
        image: "/images/casual-check.jpg",
      },
    ],
  };

  const itemsToShow = allItems[subtype] || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 capitalize">
        {subtype} {type} for {category}
      </h1>

      {itemsToShow.length === 0 ? (
        <p>No items found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itemsToShow.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover rounded"
              />
              <h2 className="mt-2 text-lg font-semibold text-center">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubtypePage;
