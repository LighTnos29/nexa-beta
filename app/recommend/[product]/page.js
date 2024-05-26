import React from "react";
import Card from "@/app/Components/productCard";

const Product = ({ params }) => {
  return (
    <div>
      <main className="min-h-screen w-full bg-primary font-poppins p-14 flex-col justify-center items-center">
        <div className="">
          <h1 className="text-4xl font-extrabold text-white">
            NexaThread <sup>&#174;</sup>
          </h1>
        </div>
        <div className="flex">
          <div className="flex-col mt-10 gap-3 w-[900px]">
            <p className="text-white text-xl font-medium">Recommendations:</p>
            <p className=" text-zinc-500 text-sm font-extralight">
              About 3 results in 4.5 sec
            </p>

            <div className="flex">
              <div className="w-[1300px] h-[500px] overflow-y-scroll scrollbar scrollbar-thumb-secondary bg-transparent mt-8">
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>

          <div className="w-[700px] h-[600px] mt-5 flex-col pl-32 justify-center">
            <div className=" h-[340px] w-[300px] bg-secondary mt-5 rounded-xl">
              <img src="" alt="" />
            </div>

            <div className="flex gap-2">
              <div className="bg-secondary h-[110px] w-[95px] rounded-xl mt-10"></div>
              <div className="bg-secondary h-[110px] w-[95px] rounded-xl mt-10"></div>
              <div className="bg-secondary h-[110px] w-[95px] rounded-xl mt-10"></div>
            </div>
            <div className="flex justify-center items-center mr-24 mt-2 text-white">
              <button className="w-[180px] h-[40px] bg-secondary mt-5 rounded-xl flex justify-center items-center">
                Regenerate
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
