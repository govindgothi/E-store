import { useState } from "react";
import LogIn from "../LogIn/LogIn";

const Header = () => {

    const [isLoginOpen,setIsLoginOpen]=useState<boolean>(true)


    if(isLoginOpen) document.body.classList.add("overflow-hidden");
    else {
     document.body.classList.remove("overflow-hidden");
    }

  return (<>
    <div className="text-center py-2 text-2xl h-18 w-[100%] max-w-[1600px] font-medium bg-white mx-auto flex justify-between px-3 items-center">
    <div className="text-green-800 w-[112px]">OrganicLogo</div>
    <div className="flex justify-evenly items-center w-[660px]">
        <ul className="text-[17px] cursor-pointer text-gray-600">Why us</ul>
        <ul className="text-[17px] cursor-pointer text-gray-600">Sell Online</ul>
        <ul className="text-[17px] cursor-pointer text-gray-600">Fee and Commision</ul>
        <ul className="text-[17px] cursor-pointer text-gray-600">Support & Help</ul>
    </div>
    <div className="w-[290px] flex justify-evenly">
    <button className="w-24 h-12 bg-gray-100 rounded-[9px] pb-1 hover:bg-gray-200 text-[18px]">Login</button>
    <button className="h-12 px-4 pb-1 rounded-[9px] bg-amber-300 hover:bg-amber-400 text-[21px]">Start selling</button>
    </div>
   </div>
    {isLoginOpen && <div className=" bg-[rgb(0,0,0,0.9)] z-20 opacity-50 absolute w-screen h-screen top-0 snap-none"></div>}
    {isLoginOpen && <LogIn isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen}/>}

 </> )
}

export default Header
