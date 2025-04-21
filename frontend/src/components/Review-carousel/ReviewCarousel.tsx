import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

type Review = {
  id: number;
  content: string;
  author: string;
  rating: number;
};

const reviews: Review[] = [
  {
    id: 1,
    content: "I just got your natural honey n turmeric feels good to buy organic n original products.",
    author: "B.B",
    rating: 4,
  },
  {
    id: 2,
    content: "Absolutely love the natural taste. Will recommend to all my friends!",
    author: "Riya S.",
    rating: 5,
  },
  {
    id: 3,
    content: "Pure and organic. You can really feel the difference!",
    author: "Manoj D.",
    rating: 4,
  },
];

const ReviewCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <div className="bg-orange-500 text-white py-10 px-4 md:px-20 w-full flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">Listen From Our Customers</h2>

      <div className="flex items-center w-full justify-between max-w-4xl">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="bg-white text-black rounded-full p-3 hover:scale-110 transition-transform"
        >
          <FaArrowLeft />
        </button>

        {/* Review Card */}
        <div className="text-center px-4 flex-1">
          <div className="flex justify-center mb-3">
            {[...Array(reviews[current].rating)].map((_, idx) => (
              <FaStar key={idx} className="text-white text-lg" />
            ))}
          </div>
          <p className="text-lg md:text-xl font-semibold">{reviews[current].content}</p>
          <p className="mt-4 font-bold">{reviews[current].author}</p>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="bg-white text-black rounded-full p-3 hover:scale-110 transition-transform"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ReviewCarousel;
