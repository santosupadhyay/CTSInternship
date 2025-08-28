import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const userRole = user?.role;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    navigate("/");
    setIsOpen(false);
  };

  const NavLinks = () => (
    <>
      <Link to="/" className="hover:text-indigo-600">
        Home
      </Link>
      {user && (
        <Link to="/blogs" className="hover:text-indigo-600">
          Blogs
        </Link>
      )}
      <Link to="/about" className="hover:text-indigo-600">
        About
      </Link>
      <Link to="/contact" className="hover:text-indigo-600">
        Contact
      </Link>

      {userRole === "admin" && (
        <Link to="/dashboard" className="hover:text-indigo-600">
          Dashboard
        </Link>
      )}

      {user && (
        <>
          <Link to="/profile" className="hover:text-indigo-600">
            Profile
          </Link>
          <Link to="/settings" className="hover:text-indigo-600">
            Settings
          </Link>
        </>
      )}

      {user ? (
        <button
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <Link to="/auth/login">
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
            Get Started
          </button>
        </Link>
      )}
    </>
  );

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-indigo-600">MyBlog</h1>

        <nav className="hidden md:flex gap-6 items-center">
          <NavLinks />
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col px-6 py-4 gap-4">
          <NavLinks />
        </div>
      )}
    </header>
  );
}
