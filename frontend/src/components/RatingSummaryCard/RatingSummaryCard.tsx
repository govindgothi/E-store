import React from "react";
import { Star } from "lucide-react";

interface RatingSummaryProps {
  averageRating: number;
  totalReviews: number;
  ratingBreakdown: { stars: number; count: number }[];
}

const RatingSummaryCard: React.FC<RatingSummaryProps> = ({
  averageRating,
  totalReviews,
  ratingBreakdown,
}) => {
  const maxCount = Math.max(...ratingBreakdown.map(r => r.count));

  return (
    <section className="w-full bg-cream p-6 flex flex-col lg:flex-row justify-center items-center gap-10">
      {/* Left: Average Rating */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1 text-yellow-400">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} fill="currentColor" size={20} />
          ))}
        </div>
        <p className="text-black font-semibold mt-1 text-lg">{averageRating.toFixed(2)} out of 5</p>
        <p className="text-gray-600 text-sm">Based on {totalReviews} reviews</p>
      </div>

      {/* Middle: Breakdown */}
      <div className="flex flex-col gap-2 w-full max-w-md">
        <h2 className="text-center text-lg font-bold text-black">Customer Reviews</h2>
        {ratingBreakdown
          .sort((a, b) => b.stars - a.stars)
          .map(({ stars, count }) => {
            const percentage = (count / maxCount) * 100;
            return (
              <div key={stars} className="flex items-center gap-2 text-sm text-black">
                <div className="flex text-yellow-400">
                  {Array.from({ length: stars }, (_, i) => (
                    <Star key={i} fill="currentColor" size={16} />
                  ))}
                </div>
                <div className="relative w-full bg-gray-200 h-3 rounded overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-yellow-400"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="w-6 text-end text-gray-600">{count}</div>
              </div>
            );
          })}
      </div>

      {/* Right: Write Review Button */}
      <div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded shadow-md">
          Write a review
        </button>
      </div>
    </section>
  );
};

export default RatingSummaryCard;
