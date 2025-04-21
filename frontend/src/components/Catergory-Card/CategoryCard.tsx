import React from "react";

interface CategoryCardProps {
  category: {
    image: string;
    name: string;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="w-40 sm:w-48 bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center">
      <img
        src={category.image}
        alt={category.name}
        className="w-20 h-20 object-cover rounded-full mb-3"
      />
      <h3 className="text-sm font-semibold text-gray-700">{category.name}</h3>
    </div>
  );
};

export default CategoryCard;
