// pages/Profile.jsx
import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-sm w-full">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-600"
          />
        </div>

        {user ? (
          <div>
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{user.name} </h2>
              <p className="text-gray-600">Role: {user.role}</p>
            </div>

            {/* Contact Info */}
            <div className="mb-6">
              <p className="text-gray-700">
                <span className="font-semibold">Email:{user.email} </span>
              </p>
            </div>
          </div>
        ) : null}

        {/* Name & Role */}

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
