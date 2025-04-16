import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

type InputSearchProp ={
  searchCompOpen:boolean
  setSearchCompOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const InputSearch: React.FC<InputSearchProp> = ({setSearchCompOpen,searchCompOpen}) => {
  
  return (
    <div>
      <div  className="text-2xl font-semibold" onClick={()=>{setSearchCompOpen(!searchCompOpen)}}><IoSearchOutline /></div>
      {/* {isSearchOpen? <div className="text-2xl font-semibold"><IoSearchOutline /></div>} */}
    </div>
  )
}

export default InputSearch
