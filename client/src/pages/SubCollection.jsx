import { useParams } from "react-router-dom";

const SubCollection = () => {
  const { category, item } = useParams();

  // Mock variations for now
  const variations = {
    shirt: [
      { id: 1, name: "Formal Shirt", image: "/images/formal-shirt.jpg" },
      { id: 2, name: "Casual Shirt", image: "/images/casual-shirt.jpg" },
      
    ],
  };

  const selectedVariations = variations[item] || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 capitalize">
        {item} for {category}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {selectedVariations.map((v) => (
          <div key={v.id} className="border rounded-lg p-4 shadow">
            <img src={v.image} alt={v.name} className="w-full h-48 object-cover mb-2 rounded" />
            <h3 className="text-lg font-semibold">{v.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCollection;
