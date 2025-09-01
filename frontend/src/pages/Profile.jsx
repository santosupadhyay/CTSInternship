import { FaEdit, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Profile() {

  const user = JSON.parse(localStorage.getItem('user'))



  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* User Info */}
        <div className="mt-20 text-center px-6">
          <h1 className="text-3xl font-bold text-gray-800">{user?.name} </h1>
          <p className="text-gray-500 mt-2">{user?.email} </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center mt-6 space-x-8">
          <div className="text-center">
            <p className="text-xl font-bold text-gray-800">120</p>
            <p className="text-gray-500 text-sm">Orders</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-800">5</p>
            <p className="text-gray-500 text-sm">Wishlist</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-800">10</p>
            <p className="text-gray-500 text-sm">Reviews</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-10 px-8 space-y-4">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-indigo-600" />
            <span className="text-gray-700">{user.email} </span>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-indigo-600" />
            <span className="text-gray-700">{user.phone} </span>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-indigo-600" />
            <span className="text-gray-700">{user.address}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4 pb-8">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center space-x-2">
            <FaEdit /> <span>Edit Profile</span>
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}
