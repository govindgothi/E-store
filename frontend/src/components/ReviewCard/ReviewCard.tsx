import React from "react";
import { Star } from "lucide-react";

interface ReviewProps {
  name: string;
  date: string;
  rating: number;
  review: string;
  avatarUrl?: string;
}

const ReviewCard: React.FC<ReviewProps> = ({
  name,
  date,
  rating,
  review,
  avatarUrl,
}) => {
  return (
    <div className="bg-yellow-100 text-black rounded-2xl shadow-md p-4 w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto transition-all">
      <div className="flex items-center gap-4 mb-3">
        <img
          src={avatarUrl || "https://i.pravatar.cc/100"}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="text-sm text-gray-600">{date}</span>
        </div>
      </div>
      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-500" : "text-gray-300"
            }`}
            fill={i < rating ? "#FACC15" : "none"}
          />
        ))}
      </div>
      <p className="text-base">{review}</p>
    </div>
  );
};

export default ReviewCard;
