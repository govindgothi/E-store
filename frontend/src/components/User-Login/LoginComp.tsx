// import React from 'react'
import { RxCross2 } from "react-icons/rx";
// import Globally from "../../../assets/Globally.png";
import Globally from "../../assets/Globally.png"
import Input from "../User-Auth/Input";
import { useState } from "react";
// import { loginInput } from "../../../interface-types";
import { Link } from "react-router";
import { createPortal } from "react-dom";
import { loginInput } from "../../interface-type";

type propTypeLogin = {
  isLoginOpen: boolean;
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type Rule =
  | { required: true; message: string }
  | { pattern: RegExp; message: string }
  | { minLength: number; message: string };

const LoginComp: React.FC<propTypeLogin> = ({
  isLoginOpen,
  setIsLoginOpen,
}) => {
  if (!isLoginOpen) return;
  const [loginData, setLoginData] = useState<loginInput>({
    email: "",
    password: "",
  });
  

  const handleChangeLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginData((prev) => (console.log(prev), { ...prev, [name]: value }));
  };

  const validationConfig:Record<keyof loginInput,Rule[]> ={
    email:[
      {required:true,message:'email is requires'},
      {pattern: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/ ,message:'please enter proper email'}
    ],
    password:[
      {required:true,message:'password is require'},
      {minLength:8,message:'password should be 8 char long'},
    ]
  }
 
  const validate =(loginData:loginInput)=>{

    const errData: Record<string, string> = {};

   Object.entries(loginData).forEach(([key,value])=>{
    const fieldKey = key as keyof typeof validationConfig;
      validationConfig[fieldKey].some((rule:any)=>{
       if(rule.required && !value){
         errData[key] = rule.message
         return true
       }
       if(rule.pattern && !rule.pattern.test(value)){
        errData[key] = rule.message
        return true
       }
       if(rule.minLength && value.length<8){
        errData[key] = rule.message
         return true
       }
      })
   })
   return errData
  }

const handleSubmit =(e:any)=>{
 e.preventDefault()
 const validateResult = validate(loginData)
 console.log(validateResult)
}


  return createPortal(
    <div className="absolute top-1/2 left-1/2 z-50 w-[22rem] -translate-x-1/2 -translate-y-1/2 transform rounded-lg border-2 bg-white">
      <div
        className="m-3 h-7 w-7 transform rounded-full border-2 pt-1 pl-1 transition duration-300 hover:rotate-45"
        onClick={() => {
          setIsLoginOpen(false);
        }}
      >
        <RxCross2 />
      </div>
      <div className="flex items-center justify-center">
        <div className="h-26 w-56">
          <img src={Globally} alt="" className="h-full" />
        </div>
      </div>
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
      <button className="mx-4 mt-8 w-[90%] rounded-lg bg-green-500 py-1 text-xl"
      onClick={handleSubmit}
      >
        login
      </button>
      <p className="mx-auto mt-2 mb-6 w-[60%]">
        Create new account?{" "}
        <Link
          to="/SignIn"
          onClick={() => {
            setIsLoginOpen(false);
          }}
          className="text-blue-700"
        >
          SignUp
        </Link>
      </p>
    </div>,
    document.getElementById("hamberger") as HTMLElement,
  );
};

export default LoginComp;
