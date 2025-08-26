import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ProfileAvatar from "../ui/ProfileAvatar";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const role = user?.role;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate('/')
  };

  return (
    <>
      <div className="bg-gray-800 text-gray-300 p-4 shadow-lg md:w-full">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-serif text-xl">Blog Time</h1>
          <nav className="">
            <ul className="md:flex md:space-x-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "border-b-1 border-red-500" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${isActive ? "border-b-1 border-red-500" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${isActive ? "border-b-1 border-red-500" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>

              {user ? (
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `${isActive ? "border-b-1 border-red-500" : ""}`
                    }
                  >
                    Profile
                  </NavLink>
                </li>
              ) : null}

              {role && role === "admin" ? (
                <li>
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      `${isActive ? "border-b-1 border-red-500" : ""}`
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              ) : null}
            </ul>
          </nav>

          {user ? (
            <div className="flex justify-center items-center space-x-2">
              <ProfileAvatar name={user.name} />
              <button
                className="bg-red-600 text-white px-4 py-1 rounded-full cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/auth/login">
              <button className="bg-teal-500 text-white px-4 py-1 rounded-full cursor-pointer">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
