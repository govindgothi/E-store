// import React from 'react'

// import { Link } from "react-router";
import AppLogo from "./App-Logo/AppLogo";
import CartBtn from "./Cart-Btn/CartBtn";
import HamberBtn from "./Hamber-Btn/HamberBtn";
import InputSearch from "./Input-Search-Btn/InputSearch";
import LoginBtn from "./Login-Btn/LoginBtn";
import { useState } from "react";
import Hamberger from "../Hamberger-menu/Hamberger";
import LoginComp from "../User-Login/LoginComp";
import SearchProduct from "../Search-Product/SearchProduct";
// import PortalPopup from "../Cart-copmonents/PortalPopupProps";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isOpenHamberger, setIsOpenHamberger] = useState<boolean>(false);
  const [searchCompOpen, setSearchCompOpen] = useState<boolean>(false);
  const [portalPopupOpen, setPortalPopupOpen] = useState(false);
  if (isOpenHamberger || isLoginOpen)
    document.body.classList.add("overflow-hidden");
  else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="bg-primary-yellow mx-auto flex h-12 w-full justify-between sm:h-24 sm:max-w-screen-2xl">
        <div className="flex w-40 items-center justify-around sm:w-72">
          <HamberBtn
            isOpenHamberger={isOpenHamberger}
            setIsOpenHamberger={setIsOpenHamberger}
          />
          <AppLogo />
        </div>
        <div className="flex w-44 items-center justify-around sm:w-56">
          <InputSearch
            setSearchCompOpen={setSearchCompOpen}
            searchCompOpen={searchCompOpen}
          />
          <div
            onClick={() => {
              setPortalPopupOpen(true);
            }}
          >
            <CartBtn />
          </div>
          <LoginBtn setIsLoginOpen={setIsLoginOpen} />
        </div>
      </div>
      {isOpenHamberger && (
        <div className="absolute top-0 z-20 h-screen w-screen snap-none bg-[rgb(0,0,0,0.8)] opacity-50"></div>
      )}
      {isLoginOpen && (
        <div className="absolute top-0 z-20 h-screen w-screen snap-none bg-[rgb(0,0,0,0.9)] opacity-50"></div>
      )}
      {isOpenHamberger && (
        <Hamberger
          isOpenHamberger={isOpenHamberger}
          setIsOpenHamberger={setIsOpenHamberger}
        />
      )}
      {isLoginOpen && (
        <LoginComp isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
      )}
      {
        searchCompOpen && (<div className="absolute top-0 z-20 h-screen w-screen snap-none bg-[rgb(0,0,0,0.9)] opacity-50"></div>)
      }
       {
        searchCompOpen && ( <SearchProduct setSearchCompOpen={setSearchCompOpen} searchCompOpen={searchCompOpen}/>)
      }
      {/* {portalPopupOpen && <div className=" bg-[rgb(0,0,0,0.8)] z-20 opacity-50 absolute w-screen h-screen top-0 snap-none"></div>} */}
      {/* { <PortalPopup portalPopupOpen={portalPopupOpen} setPortalPopupOpen={setPortalPopupOpen}/> } */}
    </>
  );
};

export default Header;
