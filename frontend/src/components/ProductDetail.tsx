import React, { useState } from "react";

const images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwbNFBmng8TbjTfXNor_5j67NId_4WLUpaQ&s", "/images/honey2.jpg"];
const bundledProducts = [
  {
    name: "Farm Fresh Raw Natural Honey",
    price: 900,
    image: "/images/honey1.jpg",
  },
  {
    name: "Drygrated Natural Turmeric",
    price: 250,
    image: "/images/turmeric.jpg",
  },
  {
    name: "Cold-Extracted Ghee",
    price: 450,
    image: "/images/ghee.jpg",
  },
];

const ProductDetail: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);

  const totalPrice = bundledProducts.reduce((acc, p) => acc + p.price, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left: Images */}
      <div className="flex flex-col gap-4">
        <img src={selectedImage} alt="Main" className="w-full rounded-lg shadow-lg" />
        <div className="flex flex-col gap-2">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              onClick={() => setSelectedImage(img)}
              className={`w-16 h-16 cursor-pointer rounded-lg border ${
                selectedImage === img ? "border-orange-500" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right: Details */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Farm Fresh Raw Natural Honey</h2>
        <p className="text-sm text-gray-600 mb-2">⭐ 4.9 (2148 Reviews)</p>
        <p className="bg-orange-500 text-white px-3 py-1 rounded w-fit text-sm mb-4">
          FREE DELIVERY ABOVE Rs. 500
        </p>

        <p className="text-xl font-semibold text-gray-900 mb-4">Rs. 900.00</p>

        <div className="mb-4">
          <label className="font-medium">Select Quantity:</label>
          <div className="mt-1 flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 border rounded"
            >
              -
            </button>
            <span className="px-3">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 border rounded"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <button className="px-6 py-2 bg-gray-800 text-white rounded">Add to Cart</button>
          <button className="px-6 py-2 bg-orange-500 text-white rounded">Buy Now</button>
        </div>

        {/* Bundle */}
        <div className="border p-4 rounded mb-6">
          <h3 className="font-semibold mb-3">Frequently Bought Together</h3>
          {bundledProducts.map((prod, i) => (
            <div key={i} className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <img src={prod.image} alt={prod.name} className="w-10 h-10 rounded" />
                <span className="text-sm">{prod.name}</span>
              </div>
              <span className="text-sm font-semibold">Rs. {prod.price}</span>
            </div>
          ))}
          <div className="flex justify-between mt-2 font-semibold">
            <span>Total:</span>
            <span>Rs. {totalPrice}</span>
          </div>
          <button className="mt-3 w-full bg-gray-800 text-white py-2 rounded">
            Add All to Cart
          </button>
        </div>

        <div className="border p-4 rounded text-sm text-gray-700">
          ✅ Naturally Processed <br />
          ✅ Packed with nutrients <br />
          ✅ 100% Pure & Raw
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-2">Description</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            Vaaradhi’s Farm Fresh Raw Natural Honey is packed with enzymes, antioxidants,
            and flavonoids. Collected from pristine environments, it's free from added
            sugars, preservatives, and additives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
