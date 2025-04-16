// import React from 'react'
import { BsCart } from "react-icons/bs";
import { useState } from "react";

const CartBtn = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div>
      {isCartOpen ? (<div className="text-xl font-semibold sm:text-2xl"
       onClick={() => {setIsCartOpen(!isCartOpen)}}>
          <BsCart />
        </div>
      ) : (
        <div  className="text-xl font-semibold sm:text-2xl"
          onClick={() => {
            setIsCartOpen(!isCartOpen);
          }}
        >
         <BsCart />
        </div>
      )}
    </div>
  );
};

export default CartBtn;
