"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Input from "../Input";
import scribble from "@/public/images/scribble.svg";
import searchBtn from "@/public/images/searchBtn.svg";
import shine from "@/public/images/shine.svg";

export default function Beta() {
  const [value, setValue] = useState("");
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <main className="min-h-screen w-full bg-primary font-poppins">
      <div className="">
        <h1 className="text-4xl font-extrabold text-white">
          NexaThread <sup>&#174;</sup>{" "}
        </h1>
        <div>
          <div className="flex mt-7 gap-3">
            <p className="text-white text-md">Describe Your Dress</p>
            <Image src={scribble} height={27} className="" alt="scribble-img" />
          </div>

          <div className=" flex mt-7 w-full  items-center ">
            <Input
              placeholder="What is your imagination now?"
              type="text"
              value={value}
              onChange={handleValue}
            />
            <div className="relative  flex items-center">
              <button
                className=" ml-6 h-full submitBtn"
                // onClick={generateImage}
              >
                <Image src={searchBtn} alt="button" height={37} />
              </button>
              <div className=" ">
                <Image
                  src={shine}
                  alt="shine"
                  height={40}
                  className="absolute -top-7 left-7 size-14"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
