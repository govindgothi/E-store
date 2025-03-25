// import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaCartArrowDown, FaUserCircle } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { MdInventory2 } from "react-icons/md";
const HambergerMenu = () => {
  return (
    <div>
    <div className="bg-amber-400 w-[80px] flex items-center justify-evenly flex-col h-96 ">
      <h3 className="mx-auto text-2xl"><FaUserCircle /></h3>
      <h3 className="mx-auto text-2xl" ><IoHome /></h3>
      <h3 className="mx-auto text-2xl"><FaCartArrowDown /></h3>
      <h3 className="mx-auto text-2xl"><RiMessage2Fill /></h3>
      <h3 className="mx-auto text-2xl"><IoMdSettings /></h3>
      <h3 className="mx-auto text-2xl"><MdInventory2 /></h3>
    </div>
    </div>
  )
}//[&>*] 

export default HambergerMenu