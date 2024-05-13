"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Input from "./Components/Input";
import Beta from "./Components/beta";

export default function Home() {
  const [value, setValue] = useState("");
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <main className="min-h-screen w-full bg-primary font-poppins">
      <div className="p-14">
       <Beta/>

        {/* <div className="mt-12">
          <h1 className="text-white">Here is your imagination !</h1>
          <section className="flex gap-10 mt-5">
            <div className="h-[400px] w-1/4 bg-secondary mt-12 rounded-xl">
              <Image
                src={imgUrl}
                width={1000}
                height={1000}
                alt="image"
                className="h-full w-full object-contain rounded-xl"
              />
            </div>
            <div className="h-[400px] w-1/4 bg-secondary mt-12 rounded-xl">
            <Lottie animationData={Loading} loop={true} />
            </div>
            <div className="h-[400px] w-1/4 bg-secondary mt-12 rounded-xl"></div>
            <div className="h-[400px] w-1/4 bg-secondary mt-12 rounded-xl"></div>
          </section>
        </div> */}
      </div>
    </main>
  );
}
