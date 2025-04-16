// import React from 'react'
// import { useState } from "react";
// import { createPortal } from "react-dom";
import { RiMenuAddFill } from "react-icons/ri";
// import Hamberger from "../../Hamberger-menu/Hamberger";

type bool ={
  isOpenHamberger:boolean,
  setIsOpenHamberger:React.Dispatch<React.SetStateAction<boolean>>
}

const HamberBtn:React.FC<bool> = ({isOpenHamberger,setIsOpenHamberger}) => {

  return (<>
    <div className="ml-3 text-xl font-semibold sm:ml-7 sm:text-2xl sm:font-semibold">
      <RiMenuAddFill onClick={()=>{setIsOpenHamberger(!isOpenHamberger)}} className="sm:font-black" />
    </div>
    
    </>
  )
}

export default HamberBtn
