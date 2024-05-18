"use client";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import Input from "../Input";
import scribble from "@/public/images/scribble.svg";
import searchBtn from "@/public/images/searchBtn.svg";
import shine from "@/public/images/shine.svg";
import Card from "../card";
import { useRouter } from "next/navigation";

export default function Beta() {
  const router = useRouter();

  const [Prompt, setPrompt] = useState("");
  const handleValue = (e) => {
    setPrompt(e.target.value);
  };
  const [Loading, setLoading] = useState(false);

  const [imageId, setImageId] = useState("");

  const generateImage = async () => {
    setLoading(true);
    const response = await fetch("http://100.27.252.181/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: Prompt }),
    });
    const data = await response.json();
    const newData = data.imageId;
    console.log(data);
    setLoading(false);

    setImageId(newData);

    console.log("THE NEW DATA: ", newData);
  };
  return (
    <main className="min-h-screen w-full bg-primary font-poppins">
      <div className="">
        <h1 className="text-4xl font-extrabold text-white">
          NexaThread <sup>&#174;</sup>
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
              value={Prompt}
              onChange={handleValue}
            />
            <div className="relative  flex items-center">
              <button
                className=" ml-6 h-full submitBtn"
                onClick={generateImage}
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
        <div>
          <div className="mt-12">
            <h1 className="text-white">Here is your imagination !</h1>
            <section className="flex gap-10 mt-5">
              <Card
                url={imageId}
                onClick={`recommend/${imageId}`}
                Loading={Loading}
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
