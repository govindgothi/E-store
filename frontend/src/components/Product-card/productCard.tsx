import { ProductJson } from "../../interface-type";
// import { addToCart } from "../../store/Slices/CartSlice";
// import { useDispatch } from "react-redux";
import '../../App.css'
import { useEffect, useState } from "react";

const product = {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwbNFBmng8TbjTfXNor_5j67NId_4WLUpaQ&s",
  name: "Wireless Headphones",
  price: 79.99,
  rating: 3,
};

type HeaderProps = {
  data: ProductJson;
};

// const data={
//     productImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwbNFBmng8TbjTfXNor_5j67NId_4WLUpaQ&s',
//     productPrice:333,
//     productName:'hello beach'
//   }

const ProductCard: React.FC<any> = ({data}) => {
  // const [screenWidth,setScreenWidth]=useState<number>(200)
  // const dispatch = useDispatch();

  // const handleAddToCart = (_id:string) => {
  //   dispatch(addToCart(data));
  // };
  // console.log("dhjbhjcd",(screenWidth/2)-3)
  //  setScreenWidth(window.innerWidth)
  useEffect(()=>{
  //  setScreenWidth(window.innerWidth/2)
  },[])
  return (
    <div className="w-64 mt-3  bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300  flex flex-col items-center text-center">
      <img
        src={data.productImageUrl}
        alt={data.productName}
        className="w-full object-contain rounded-t-2xl mb-4"
      />
      <h2 className="text-lg mb-2 font-semibold">{product.name}</h2>
      <p className="text-gray-500 mb-2">${product.price.toFixed(2)}</p>
      <div className="flex items-center justify-center space-x-1 mb-2">
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill={i < product.rating ? "#facc15" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 text-yellow-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.174 6.668h7.018c.969 0 1.371 1.24.588 1.81l-5.68 4.073 2.175 6.668c.3.921-.755 1.688-1.538 1.118L12 18.347l-5.688 4.917c-.782.57-1.838-.197-1.538-1.118l2.175-6.668-5.68-4.073c-.783-.57-.38-1.81.588-1.81h7.018l2.174-6.668z"
            />
          </svg>
        ))}
      </div>
    </div>


  );
};

export default ProductCard;
