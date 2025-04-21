import React from "react";
import { Star } from "lucide-react";

const CustomerFavProduct = () => {
  return (
    <div className="w-[250px] rounded-lg shadow-md border border-gray-200 bg-white relative overflow-hidden">
      {/* Save Badge */}
      <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
        Save
      </span>

      {/* Product Image */}
      <img
        src="https://vaaradhifarms.com/cdn/shop/files/Honey1.png?v=1698854743&width=300" // Replace with your product image URL
        alt="Karivepaku pickle"
        className="w-full h-[240px] object-cover rounded-t-lg"
      />

      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center mb-1">
          {[1, 2, 3, 4].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          ))}
          <Star className="w-4 h-4 text-yellow-500" />
        </div>

        {/* Product Name */}
        <h2 className="text-gray-800 font-medium mb-2">Karivepaku pickle</h2>

        {/* Weight Selector */}
        <select className="w-full border rounded px-2 py-1 text-sm text-gray-700 mb-2">
          <option value="250g">250g</option>
          <option value="500g">500g</option>
          <option value="1kg">1kg</option>
        </select>

        {/* Price */}
        <div className="text-gray-900 font-semibold mb-3">Rs. 245.00</div>

        {/* Add to Cart */}
        <button className="w-full bg-[#4c3721] text-white py-2 rounded font-semibold hover:bg-[#3a2b17] transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CustomerFavProduct;