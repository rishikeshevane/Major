import React, { useState, useEffect } from 'react';

const Collection = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    // Fetch clothes data from the backend
    fetch('http://localhost:5000/api/clothes')
      .then(response => response.json())
      .then(data => setClothes(data))
      .catch(error => console.error("Error fetching clothes:", error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Clothing Collection</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clothes.map(item => (
          <div key={item.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-2 rounded" />
            <h3 className="text-lg font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
