import React from "react";
import { RxCrossCircled } from "react-icons/rx";
// import { useState } from "react"

type searchType = {
  searchCompOpen: boolean;
  setSearchCompOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchProduct: React.FC<searchType> = ({
  setSearchCompOpen,
  searchCompOpen,
}) => {
  return (
    <div className="xs:w-[500px] absolute top-10 right-3 z-30 h-5/6 w-[800px]  rounded-[8px] bg-white opacity-100 shadow-[1px_1px_4px_rgba(0,0,0,0.7)]">
        <button className="m-2 text-2xl" onClick={()=>(setSearchCompOpen(!searchCompOpen))}><RxCrossCircled /></button>
    </div>
  );
};

export default SearchProduct;
