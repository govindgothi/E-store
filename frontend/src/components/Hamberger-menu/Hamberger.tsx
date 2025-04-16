// import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { createPortal } from "react-dom"
import { Link } from "react-router";

type modal={
    isOpenHamberger:boolean
    setIsOpenHamberger:React.Dispatch<React.SetStateAction<boolean>>
}

const Hamberger:React.FC<modal> = ({isOpenHamberger,setIsOpenHamberger}) => {
   if(!isOpenHamberger){
    return 
   }
  return createPortal(
    <div className="max-w-96 bg-white shadow-[1px_1px_4px_rgba(0,0,0,0.7)] rounded-[8px] w-11/12 xs:w-[500px] h-5/6 absolute top-10 left-3  opacity-100 z-30 ">
      <div className="ml-2">
      <div  className="border-2 rounded-full m-3 w-8 h-8 p-1 text-xl" onClick={()=>{setIsOpenHamberger(!isOpenHamberger)}}><RxCross2 className=""/></div>
      </div>
      <div className="[&>*]:mt-3 [&>*]:text-xl [&>*]:font-semibold pl-6 ">
      <h2>Account</h2>
      <h2><Link to='/admin'>admin</Link></h2>
      <h2>Home</h2>
      <h2>Cart</h2>
      <h2>About Us</h2>
      <h2>Track Your Order</h2>
      <h2>Shopping</h2>
      <h2>Wallet</h2>
      </div>
    </div>,
    document.getElementById('hamberger') as  HTMLElement 
  )
}

export default Hamberger
