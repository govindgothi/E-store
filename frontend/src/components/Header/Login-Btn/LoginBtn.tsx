// import React from 'react'
import "./LoginBtn.css"
// import { useState } from "react";

type propLoginBtn={
  setIsLoginOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const LoginBtn: React.FC<propLoginBtn> = ({setIsLoginOpen}) => {
const login = true
  return (<>
    <div
      className=""
      onClick={() => {
        setIsLoginOpen(true);
      }}
    >
      {login ? 
      <div className="shadow-[1px_1px_4px_rgba(0,0,0,0.7)] w-16  text-center rounded-[8px] p-1 sm:w-20">Login</div> : 
      <div className="shadow-[1px_1px_4px_rgba(0,0,0,0.7)] w-16 text-center rounded-[8px] p-1 sm:w-20">Govind</div>}
    </div>
    { }
    </>);
};

export default LoginBtn;
