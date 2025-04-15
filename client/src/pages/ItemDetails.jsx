import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetails = () => {
  const { category, itemName } = useParams();
  const [variations, setVariations] = useState([]);

  useEffect(() => {
    // Mocked data again
    const mockData = {
      men: [
        {
          id: 1,
          name: "Shirt",
          image: "/images/mens-shirt.jpg",
          variations: [
            { id: 101, name: "Formal Shirt", image: "/images/formal-shirt.jpg" },
            { id: 102, name: "Casual Shirt", image: "/images/casual-shirt.jpg" },
            { id: 103, name: "Printed Shirt", image: "/images/printed-shirt.jpg" },
          ],
        },
        {
          id: 2,
          name: "Jacket",
          image: "/images/mens-jacket.jpg",
        },
      ],
    };

    const selectedItem = mockData[category]?.find(
      (item) => item.name.toLowerCase() === itemName
    );

    if (selectedItem?.variations) {
      setVariations(selectedItem.variations);
    } else {
      setVariations([]);
    }
  }, [category, itemName]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 capitalize">{itemName} Types</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {variations.map((v) => (
          <div key={v.id} className="border rounded-lg p-4 shadow">
            <img src={v.image} alt={v.name} className="w-full h-48 object-cover mb-2 rounded" />
            <h3 className="text-lg font-semibold">{v.name}</h3>
          </div>
        ))}
      </div>
      {variations.length === 0 && <p>No variations found.</p>}
    </div>
  );
};

export default ItemDetails;
