import { ProductJson } from "../../interface-type";
// import { addToCart } from "../../store/Slices/CartSlice";
// import { useDispatch } from "react-redux";
import '../../App.css'
import { useEffect, useState } from "react";

type HeaderProps = {
  data: ProductJson;
};

const data={
    productImageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwbNFBmng8TbjTfXNor_5j67NId_4WLUpaQ&s',
    productPrice:333,
    productName:'hello beach'
  }

const ProductCard: React.FC = () => {
  const [screenWidth,setScreenWidth]=useState<number>(200)
  // const dispatch = useDispatch();

  // const handleAddToCart = (_id:string) => {
  //   dispatch(addToCart(data));
  // };
  // console.log("dhjbhjcd",(screenWidth/2)-3)
  //  setScreenWidth(window.innerWidth)
  useEffect(()=>{
   setScreenWidth(window.innerWidth/2)
  },[])
  return (
    <div className={` sm:w-[250px] md:w-[288px] ls:w-[300px] border-black rounded-md bg-white mt-3 `}  style={screenWidth*2 < 650 ? { width: `${screenWidth - 30}px` } : {}}>
    <div className={`w-full`}>
      <img src={data?.productImageUrl} alt="" className={`w-full rounded-md`}/>
    </div>
    <div className='flex flex-col justify-center items-center mt-2'>
      <p className='text-xl font-medium'>{data?.productName}</p>
       <p className='text-base mt-1 text-gray-600 '>From Rs. {data.productPrice}</p>
    </div>
  </div>

  );
};

export default ProductCard;
