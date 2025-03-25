// import React from 'react'

import { useState } from "react"
import { createPortal } from "react-dom"
import Input from "../Input/Input"
import { loginInput } from "../../Interface-Type"
import { Link } from "react-router"
import Globally from '../../assets/Globally.png'
import { RxCross2 } from "react-icons/rx"

type propTypeLogin={
    isLoginOpen:boolean,
    setIsLoginOpen:React.Dispatch<React.SetStateAction<boolean>>
  }

const LogIn:React.FC<propTypeLogin> = ({isLoginOpen,setIsLoginOpen}) => {
    const [loginData,setLoginData]=useState<loginInput>({
        email:"",
        password:""
        })
      
        const handleChangeLoginInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
          e.preventDefault();
         const { name, value } = e.target
         setLoginData((prev) => ({ ...prev, [name]: value }));
        }
      
        if(!isLoginOpen) return
        return createPortal(
          <div className=' w-[22rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-lg z-50  bg-white'>
            <div className="transform hover:rotate-45 transition duration-300 m-3 border-2 w-7 h-7 pl-1 pt-1 rounded-full" onClick={()=>{setIsLoginOpen(false)}}><RxCross2  /></div>
            <div className="flex justify-center items-center "><div className="h-26 w-56"><img src={Globally} alt="" className="h-full"/></div></div>
            <div>
              <Input 
               type="email"
               name="email"
               value={loginData.email}
               onChange={handleChangeLoginInput}
              />
               <Input 
               type="password"
               name="password"
               value={loginData.password}
               onChange={handleChangeLoginInput}
              />
            </div>
            <button className="w-[90%] py-1 mt-8 bg-green-500 rounded-lg mx-4 text-xl">login</button>
            <p className="w-[60%] mx-auto mt-2 mb-6">Create new account? <Link to='/SignIn' onClick={()=>{setIsLoginOpen(false)}} className="text-blue-700">SignUp</Link></p>
          </div>,
          document.getElementById('login') as  HTMLElement 
        )
}

export default LogIn
