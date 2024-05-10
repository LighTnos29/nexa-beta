"use client";
import scribble from "../public/images/scribble.svg";
import searchBtn from "../public/images/searchBtn.svg";
import shine from "../public/images/shine.svg";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [prompt, setprompt] = useState("");
  const [imgUrl, setimgUrl] = useState(
    "https://lottie.host/embed/3fc5d608-5feb-4f31-9a96-cfd72bd116ce/uWytii7HQk.json"
  );
  const handlePropmt = (e) => {
    setprompt(e.target.value);
  };
  const generateImage = async () => {
    const response = await fetch("https://ddd5-125-17-13-54.ngrok-free.app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    });
    const data = await response.json();
    console.log(data);
    setimgUrl(data.imageId);
  };
  return (
    <main className="min-h-screen w-full bg-primary font-poppins">
      <div className="p-14">
        <h1 className="text-4xl font-extrabold text-white">NexaThread</h1>
        <div className="flex mt-7 gap-3">
          <p className="text-white text-md">Describe Your Dress</p>
          <Image src={scribble} height={27} className="" alt="scribble-img" />
        </div>

        <div className="flex mt-7 w-full">
          <input
            type="text"
            name="prompt"
            className="px-4 py-1 rounded-xl outline-none w-1/2 h-fit"
            value={prompt}
            onChange={handlePropmt}
          />
          <button className="ml-6 h-full" onClick={generateImage}>
            <Image src={searchBtn} alt="button" height={37} />
          </button>
          <div className="">
            <Image src={shine} alt="shine" height={40} className="" />
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-white">Here is your imagination !</h1>
          <section className="flex gap-10 mt-5">
            <div className="h-[320px] w-64 bg-secondary mt-12 rounded-xl">
              <Image
                src={imgUrl}
                width={1000}
                height={1000}
                alt="image"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
            <div className="h-[320px] w-64 bg-secondary mt-12 rounded-xl"></div>
            <div className="h-[320px] w-64 bg-secondary mt-12 rounded-xl"></div>
            <div className="h-[320px] w-64 bg-secondary mt-12 rounded-xl"></div>
            <div className="h-[320px] w-64 bg-secondary mt-12 rounded-xl"></div>
          </section>
        </div>
      </div>
    </main>
  );
}
