import React from "react";

interface Category {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const categories: Category[] = [
  {
    title: "Lip Balm",
    subtitle: "Organic and Natural",
    imageUrl: "https://vaaradhifarms.com/cdn/shop/collections/deepixelstudios_wild_turmeric_powder_in_a_pouch_1080x1080_6ffdbe7d-eba2-434a-940f-9d40d1290ee2_400x.png?v=1739000500",
  },
  {
    title: "Spices",
    subtitle: "Freshly Crushed",
    imageUrl: "https://vaaradhifarms.com/cdn/shop/collections/5_400x.png?v=1731324832",
  },
  {
    title: "Sweetener & Salt",
    subtitle: "No Added Sugar",
    imageUrl: "https://vaaradhifarms.com/cdn/shop/collections/40LightBrownsuger_400x.png?v=1730948557",
  },
  {
    title: "Sweet & Snacks",
    subtitle: "Preservative free",
    imageUrl: "https://vaaradhifarms.com/cdn/shop/files/vaaradhi_farms_400x.jpg?v=1733113339",
  },
];

const ShopCategories: React.FC = () => {
  return (
    <div className="w-full bg-orange-500 py-10 px-auto overflow-hidden rounded-2xl">
      <h2 className="text-white text-3xl md:text-4xl font-extrabold text-center mb-8">
        Shop Our Category
      </h2>

      <div className="overflow-x-scroll scrollbar-hide mx-5">
        <div className="flex  gap-6 md:gap-8 lg:gap-10 items-center ">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md  flex-shrink-0 w-[330px] h-[360px]"
            >
              <img
                src={cat.imageUrl}
                alt={cat.title}
                className="w-full h-[80%] object-cover rounded-t-lg"
              />
              <div className="p-4 h-[20%] text-center">
                <h3 className="font-bold text-lg text-black">{cat.title}</h3>
                <p className="text-sm text-gray-600">{cat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;
