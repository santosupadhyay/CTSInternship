// pages/AdminDashboard.jsx
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-gray-200 flex-shrink-0">
        <div className="p-6 text-2xl font-bold">Admin Panel</div>
        <nav className="mt-10">
          <ul>
            <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Dashboard</li>
            <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Users</li>
            <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Blogs</li>
            <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Settings</li>
            <li className="px-6 py-3 hover:bg-gray-700 cursor-pointer">Logout</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
            <p className="text-2xl font-bold mt-2">120</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700">Total Blogs</h2>
            <p className="text-2xl font-bold mt-2">45</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700">Admins</h2>
            <p className="text-2xl font-bold mt-2">3</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700">New Signups</h2>
            <p className="text-2xl font-bold mt-2">8</p>
          </div>
        </div>

        {/* Recent Users Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Recent Users</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">john@example.com</td>
                <td className="px-4 py-2">User</td>
                <td className="px-4 py-2 text-green-600">Active</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Jane Smith</td>
                <td className="px-4 py-2">jane@example.com</td>
                <td className="px-4 py-2">User</td>
                <td className="px-4 py-2 text-green-600">Active</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Admin One</td>
                <td className="px-4 py-2">admin@example.com</td>
                <td className="px-4 py-2">Admin</td>
                <td className="px-4 py-2 text-green-600">Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
