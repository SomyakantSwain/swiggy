import React from "react";

const Head = () => {

  return (
    <div className="w-full shadow-md h-20 flex justify-center  items-center ">
      <div className="` flex justify-between  w-[80%]">
        <div className=" left flex items-center cursor-pointer">
          <img
            className="h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7e9-ELr0kloaNftORz8hFMLKgQh1t74a_w&s"
            alt=""
          />
          <p className="font-bold border-b-2  text-sm border-black">Other</p>
          <i className="   text-2xl mt-1 ri-arrow-down-s-line"></i>
        </div>
        <div className="right flex gap-12 cursor-pointer  ">
          <div className="flex justify-center hover:text-orange-600 duration-500 gap-1 items-center">
            <i className="   text-xl mt-1 ri-briefcase-line"></i>
           

            <p>Swiggy Corporate</p>
          </div>
          <div className="flex justify-center hover:text-orange-600 duration-500 gap-1 items-center">
          <i className="   text-2xl mt-1 ri-search-line"></i>
            <p>Search</p>
          </div>
          <div className="flex justify-center hover:text-orange-600 duration-500 gap-1 items-center">
          <i className="ri-discount-percent-line text-2xl mt-1"></i>
            <p>Offers <sup className="text-orange-400 text-[11px]">NEW</sup> </p>
          </div>
          <div className="flex hover:text-orange-600 duration-500 justify-center gap-1 items-center">
          <i className="   text-2xl mt-1 ri-focus-line"></i>
        
            <p>Help</p>
          </div>
          <div className="flex justify-center hover:text-orange-600 duration-500 gap-1 items-center">
          <i className="   text-xl mt-1 ri-user-line"></i>
          
            <p>Sign in</p>
          </div>
          <div className="flex justify-center hover:text-orange-600 duration-500 gap-1 items-center">
             <i className="   text-2xl mt-1 ri-arrow-down-s-line"></i>
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
