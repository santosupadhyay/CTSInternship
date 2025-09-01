import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const userRole = user?.role;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Ecom</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium items-center">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          {token && <Link to="/profile" className="hover:text-blue-600">Profile</Link>}
          {userRole === "admin" && <Link to="/admin/dashboard" className="hover:text-blue-600">Dashboard</Link>}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 px-4 py-4 space-y-2 shadow-inner">
          <Link to="/" className="block py-2 px-3 rounded hover:bg-blue-100">Home</Link>
          <Link to="/about" className="block py-2 px-3 rounded hover:bg-blue-100">About</Link>
          <Link to="/contact" className="block py-2 px-3 rounded hover:bg-blue-100">Contact</Link>
          {token && <Link to="/profile" className="block py-2 px-3 rounded hover:bg-blue-100">Profile</Link>}
          {userRole === "admin" && <Link to="/admin/dashboard" className="block py-2 px-3 rounded hover:bg-blue-100">Dashboard</Link>}

          {token ? (
            <button
              onClick={handleLogout}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition block text-center"
            >
              Get Started
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
