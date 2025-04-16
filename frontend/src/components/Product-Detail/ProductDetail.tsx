import React from "react";
import correct from "../../assets/correct.png";
// import WieghtButton from "../Buttons/WieghtButton";
import { useDispatch } from "react-redux";
// import { addToCart } from "../../store/Slices/cartSlice";
import { GoPlus } from "react-icons/go";
import { HiMiniMinus } from "react-icons/hi2";

const productImageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwbNFBmng8TbjTfXNor_5j67NId_4WLUpaQ&s'
const  productPrice=333
const productName='hello beach'
const _id='1'
  

const ProductDetail = () => {
  const dispatch = useDispatch();
//   const { productImageUrl, productName, _id, productPrice = 900 } = product.data;

  return (
    <main className="max-w-[90rem] px-4 py-6 flex flex-col lg:flex-row justify-center gap-8">
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
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">

  <p className="text-gray-700 text-lg">Vaaradhi Farms</p>
  <h2 className="text-3xl font-bold font-sans">{productName}</h2>

  {/* ✅ Responsive stock check row */}
  <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-2 text-green-600 text-lg py-2">
    <img src={correct} alt="In stock" className="w-5 h-5" />
    <span>In stock</span>
  </div>

  <div className="text-xl font-semibold">Rs. {productPrice}.00</div>
  <p className="text-lg">⭐⭐⭐⭐⭐ 1886 reviews</p>
  <p className="text-lg">⭐ 4.5</p>

  <hr className="border-gray-400 w-full my-4" />

  {/* ✅ Responsive spacing for weight buttons */}
  <div className="flex gap-2 sm:gap-4 mt-4">
    {/* <WieghtButton />
    <WieghtButton /> */}
  </div>

  {/* Quantity Controls */}
  <div className="mt-4 w-full sm:w-auto flex flex-col items-center lg:items-start">
    <p className="text-gray-600 text-base">Quantity</p>
    <div className="mt-2 flex items-center justify-between w-28 px-4 py-2 border border-gray-300 rounded-full text-lg font-semibold">
      <HiMiniMinus />
      <p>2</p>
      <GoPlus />
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
  <p className="mt-6 text-base leading-relaxed font-nunito max-w-2xl">
    Introducing Vaaradhi Farms Natural Honey! Experience the pure goodness of unfiltered and unpasteurized honey that retains its rich flavor and nutritional benefits. Whether enjoyed on toast, drizzled over yogurt, or used as a sweetener...
  </p>
</div>

    </main>
  );
};

export default ProductDetail;
