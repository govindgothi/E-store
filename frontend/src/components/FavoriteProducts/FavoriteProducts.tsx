import React from 'react';

interface Product {
  name: string;
  imageUrl: string;
}

const products: Product[] = [
  { name: 'Honey', imageUrl: '/images/honey.jpg' },
  { name: 'Ghee', imageUrl: '/images/ghee.jpg' },
  { name: 'Oils', imageUrl: '/images/oils.jpg' },
  { name: 'Sweets & Snacks', imageUrl: '/images/snacks.jpg' },
  { name: 'Pickles', imageUrl: '/images/pickles.jpg' },
  { name: 'Coffee', imageUrl: '/images/coffee.jpg' },
];

const FavoriteProducts: React.FC<any> = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-cream w-full  pt-2">
      <div className="scrollbar-hide mx-auto max-w-6xl overflow-hidden overflow-x-scroll px-4 ">
        <div className="flex h-[240px] min-w-fit items-center gap-13 ms:gap-17">
          {data.map((product: any, index: number) => (
            <div key={index} className="my-auto flex h-[200px] flex-col">
              <div className="group h-24 w-24 transform overflow-hidden rounded-full shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.6)] md:h-28 md:w-28 lg:h-32 lg:w-32">
                <img
                  src={product.productImageUrl}
                  alt={product.productName}
                  className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-center text-sm font-medium text-black md:text-base">
                {product.productName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteProducts;
