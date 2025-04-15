import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ShirtType = () => {
  const { category, type } = useParams();

  const shirtCategories = [
    {
      name: "Formal Shirt",
      path: "formal",
      image: "/images/formal-shirt.jpg", // Add your own images in public/images/
    },
    {
      name: "Casual Shirt",
      path: "casual",
      image: "/images/casual-shirt.jpg",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {type} categories for {category}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {shirtCategories.map((shirt) => (
          <Link
            key={shirt.path}
            to={`/collection/${category}/${type}/${shirt.path}`}
            className="block border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={shirt.image}
              alt={shirt.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center">{shirt.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShirtType;
