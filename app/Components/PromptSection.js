import React from 'react'
import scribble from '@/public/images/scribble.svg'
import shine from '@/public/images/shine.svg'
import searchBtn from '@/public/images/searchBtn.svg'
import { useState, useEffect } from 'react'
import Image from 'next/image'


const PromptSection = () => {
    const [prompt, setprompt] = useState("");
    const [imgUrl, setimgUrl] = useState("https://cdn.icon-icons.com/icons2/1369/PNG/512/-account-circle_89831.png");
    const [loading, setloding] = useState(false)
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
        setloding(true)
        const data = await response.json();
        console.log(loading);
        setimgUrl(data.imageId);
    };
    return (

        <div>
            <div className="flex mt-7 gap-3">
                <p className="text-white text-md">Describe Your Dress</p>
                <Image src={scribble} height={27} className="" alt="scribble-img" />
            </div>

            <div className=" flex mt-7 w-full  items-center ">
                <input
                    type="text"
                    name="prompt"
                    className="px-5 py-2 rounded-xl outline-none w-1/2 h-fit"
                    placeholder="What is your imagination now?"
                    value={prompt}
                    onChange={handlePropmt}
                />
                <div className="relative  flex items-center">
                    <button className=" ml-6 h-full submitBtn" onClick={generateImage}>
                        <Image src={searchBtn} alt="button" height={37} />
                    </button>
                    <div className=" ">
                        <Image src={shine} alt="shine" height={40} className="absolute -top-7 left-7 size-14" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default PromptSection