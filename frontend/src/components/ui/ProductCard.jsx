import { ShoppingCart } from "lucide-react";

export default function ProductCard({
  title,
  description,
  price,
  brand,
  color,
  discount,
  model,
  image,
}) {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden">
      {/* Product Image */}
      <div className="w-full h-56 flex items-center justify-center bg-gray-100">
        <img
          src={image}
          alt={title}
          className="object-contain h-full p-4"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {title}
          </h2>
          <p className="text-sm text-gray-500">Brand: {brand}</p>
          <p className="text-sm text-gray-500">Model: {model}</p>
          <p className="text-sm text-gray-500">Color: {color}</p>
        </div>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {description}
        </p>

        {/* Price + Discount */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-gray-900">Rs. {price}</p>
            <p className="text-sm text-green-600 font-medium">{discount}% OFF</p>
          </div>
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
