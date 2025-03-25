// import React from 'react'
import HambergerMenu from '../components/HambergerMenu/HambergerMenu'
const AddProduct = () => {
  return (
    <div className="flex justify-between">
      <HambergerMenu></HambergerMenu>
      
      <h2 className="text-center py-2 text-2xl h-16 w-[90%] font-medium bg-white">
        {" "}
        Add New Product
      </h2>
    </div>
  )
}

export default AddProduct
