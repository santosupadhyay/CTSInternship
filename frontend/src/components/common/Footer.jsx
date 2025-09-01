import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-6 grid md:grid-cols-3 gap-6">
        {/* Left */}
        <div>
          <h2 className="text-lg font-semibold text-white">Ecom</h2>
          <p className="text-sm mt-2">
            Your trusted ecommerce partner. Shop smart, shop easy.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-md font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Right - Social */}
        <div>
          <h3 className="text-md font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm border-t border-gray-700 py-3">
        © {new Date().getFullYear()} Ecom. All rights reserved.
      </div>
    </footer>
  );
}
