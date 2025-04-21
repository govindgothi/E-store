import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

type InputSearchProp ={
  searchCompOpen:boolean
  setSearchCompOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const InputSearch: React.FC<InputSearchProp> = ({setSearchCompOpen,searchCompOpen}) => {
  
  return (
    <div>
      <div  className="text-2xl font-semibold" onClick={()=>{setSearchCompOpen(!searchCompOpen)}}><Link to='product'><IoSearchOutline /></Link>
      </div>
      {/* {isSearchOpen? <div className="text-2xl font-semibold"><IoSearchOutline /></div>} */}
    </div>
  )
}

export default InputSearch
