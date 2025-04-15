import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Left Side: Logo + Seller Login */}
      <div className="flex items-center space-x-6">
        <div className="text-2xl font-bold text-gray-800">ClothRental</div>
        <Link
          to="/seller-login"
          className="text-gray-700 hover:text-blue-500 font-medium"
        >
          Seller Login
        </Link>
      </div>

      {/* Right Side: Main User Navigation */}
      <div className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-black font-medium">
          Home
        </Link>
        <Link
          to="/signup"
          className="text-gray-700 hover:text-black font-medium"
        >
          Signup
        </Link>
        <Link
          to="/login"
          className="text-gray-700 hover:text-black font-medium"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
