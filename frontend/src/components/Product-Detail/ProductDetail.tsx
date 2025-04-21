import React, { useState } from "react";
import correct from "../../assets/correct.png";

import ProductDescription from "../ProductDescription/ProductDescription";

const productImageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwbNFBmng8TbjTfXNor_5j67NId_4WLUpaQ&s'
const  productPrice=333
const productName='hello beach'

  

const productParagraphs = [
  'Vaaradhi Farms’ Farm Fresh Raw Natural Honey is packed with natural enzymes, antioxidants, and floral richness. Collected from pristine environments, it’s free from additives, ensuring pure goodness in every spoonful.',
  'Made with 100% natural ingredients, free from preservatives and artificial additives.',
];

const productBenefits = [
  'Boosts immunity and energy',
  'Aids digestion naturally',
  'Rich in antioxidants and nutrients',
  'Supports skin and throat health',
];

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="max-w-[90rem] px-4 py-6 w-[410px] justify-center gap-4 items-start">
      {/* Left Image Section */}
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <div className="w-11/12 aspect-[4/5] md:aspect-[3/4] max-h-[600px] rounded-xl overflow-hidden shadow-lg">
          <img
            src={productImageUrl}
            alt={productName}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Right Detail Section */}
      <div className="lg:w-1/2 w-full flex flex-col items-start lg:items-start text-center lg:text-left space-y-4 ">

  {/* <p className="text-gray-700 text-lg">Vaaradhi Farms</p> */}
  <h2 className="text-3xl font-bold font-sans">{productName}</h2>
  <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-2 text-green-600 text-lg ">
    <img src={correct} alt="In stock" className="w-5 h-5" />
    <span>In stock</span>
  </div>
  <p className="bg-orange-500 text-white px-3 py-1 rounded w-fit text-sm mb-4">
          FREE DELIVERY ABOVE Rs. 500
   </p>

  {/* ✅ Responsive stock check row */}


  <div className="text-xl font-semibold">Rs. {productPrice}.00</div>
  <p className="text-lg">⭐⭐⭐⭐⭐ 1886 reviews</p>
  {/* <p className="text-lg">⭐ 4.5</p> */}

  <hr className="border-gray-400 w-full my-4" />
{/* Quantity Controls */}
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

  
  

  {/* Add to Cart Button */}
  <div
    className="mt-6 bg-green-700 text-white text-center py-4 rounded-full text-lg cursor-pointer hover:bg-green-800 transition w-full sm:w-60"
    // onClick={() =>
    //   dispatch(
    //     addToCart({ _id, productImageUrl, productName, productPrice })
    //   )
    // }
  >
    Add to cart
  </div>

  {/* Description */}
  {/* <p className="mt-6 text-base leading-relaxed font-nunito max-w-2xl">
    Introducing Vaaradhi Farms Natural Honey! Experience the pure goodness of unfiltered and unpasteurized honey that retains its rich flavor and nutritional benefits. Whether enjoyed on toast, drizzled over yogurt, or used as a sweetener...
  </p> */}
      <div className="mx-auto w-full p-4">
        <ProductDescription paragraphs={productParagraphs} benefits={productBenefits} />
      </div>
</div>

    </main>
  );
};

export default ProductDetail;
