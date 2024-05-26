import React from "react";
import Image from "next/image";

const recommendCard = () => {

  
  return (
    <div className=" p-2 cards">
      <div className="card">
        <div className="Buying-Link bg-secondary w-[220px] h-[40px] rounded-2xl text-white flex justify-center items-center">
          Flipkart
        </div>
        <div className="w-full mt-4 flex">
          <div className="h-[220px] w-[220px] rounded-xl bg-secondary">
            <Image
              scr="https://veirdo.in/cdn/shop/files/8_2be593bf-344e-4f3a-8a4b-bed67331917f.jpg?v=1707564936"
              className=""
            />
          </div>
          <div className="product-desc ml-10 mt-7 text-white flex-col justify-center items-center">
            <div className="match-percentage bg-secondary w-[70px] h-[27px] rounded-3xl flex justify-center items-center text-sm text-zinc-600">
              75%
            </div>
            <div className="flex">
              <div className="desc mt-4 flex-col justify-center items-center">
                <span className="font-semibold text">B & E LIFESTYLE</span>
                <div className="text mt-2 text-wrap font-light text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="price mt-3">RS. 300</div>
              </div>
              <button className="w-[110px] h-[40px] bg-secondary rounded-xl flex justify-center items-center text-sm mt-10 ml-10 font-thin">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className=" border-zinc-700 w-[420px] mt-10 ml-[230px]" />
    </div>
  );
};

export default recommendCard;
