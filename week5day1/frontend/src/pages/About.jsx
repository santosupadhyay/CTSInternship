// pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8 text-center max-w-2xl mx-auto">
          Welcome to Blog Time! Our platform is dedicated to sharing insightful
          articles, tutorials, and stories for everyone. Whether you’re a
          reader, writer, or developer, we strive to provide valuable content
          to inspire and educate.
        </p>

        {/* Features / Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-600">
              To create a community of passionate readers and writers sharing
              knowledge and experiences through blogs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-600">
              To be a go-to platform for quality content that educates,
              inspires, and empowers readers worldwide.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
            <p className="text-gray-600">
              Quality, transparency, and engagement. We value the voice of
              every writer and reader in our community.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-gray-700 text-lg mb-4">
            Want to contribute or read more?
          </p>
          <a
            href="/auth/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
