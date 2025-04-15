import React, { useState } from "react";

const SellerDashboard = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Item:", form);
    alert("Clothing item submitted (this is a mockup)");
    // TODO: send data to backend using fetch/axios
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">👔 Seller Dashboard</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Clothing Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Blue Casual Shirt"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Rental Price (₹)</label>
            <input
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 150"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Cotton casual shirt, size M, light-weight"
            ></textarea>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Upload Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
            />
            {form.image && (
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-1">Preview:</p>
                <img
                  src={URL.createObjectURL(form.image)}
                  alt="Preview"
                  className="w-48 h-48 object-cover border rounded"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Clothing Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerDashboard;
