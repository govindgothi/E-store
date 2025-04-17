import React from 'react'
// import { signInInput } from "../../interface-types"

type take ={
  type:string,
  name:string,
  value:string,
  onChange:(e: React.ChangeEvent<HTMLInputElement>) => void; 
  err:string
}
const Input:React.FC<take> = ({type,name,value,onChange,err}) => {
  return (<>
    <div className='w-[90%] mx-auto h-9 mt-7  border-2 border-black rounded-md' >
      <input 
        className='w-full h-8 placeholder:p-2 placeholder:text-black rounded-md'
        placeholder={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
       />
    </div>
    <p className='w-[80%] left-7 absolute text-red-700 mt-0 text-xs'>{err}</p>
 </> )
}

export default Input
