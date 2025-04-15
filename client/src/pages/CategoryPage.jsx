import { useParams, Link } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams();

  const subcategories = [
    {
      type: 'shirt',
      image: '/images/mens-shirt.jpg',
    },
    {
      type: 'jacket',
      image: '/images/mens-jacket.jpg',
    },
  ];

  return (
    <div className="w-full px-4 py-8">
      <div className="grid grid-cols-2 gap-4 p-4">
  <div className="bg-red-500 h-24"></div>
  <div className="bg-green-500 h-24"></div>
</div>

      <h2 className="text-3xl font-bold mb-10 capitalize text-center">
        Explore {category}
      </h2>

      {/* 2-column layout on md+ screens */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {subcategories.map(({ type, image }) => (
          <Link
            key={type}
            to={`/collection/${category}/${type}`}
            className="rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300"
          >
            <img
              src={image}
              alt={type}
              className="w-full h-64 object-cover"
              onError={(e) => {
                e.target.src = '/images/default.jpg';
              }}
            />
            <div className="p-4 bg-gray-100 text-center">
              <p className="text-lg font-semibold capitalize text-gray-800">{type}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
