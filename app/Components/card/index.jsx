import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Lottie from "lottie-react";
import skelly from "@/public/animations/skelly.json"



const Card = ({ url, onClick ,Loading }) => {

    console.log("NEW_URL :", url)

    return (
        <Link href={onClick}>
            <div className="h-[400px] w-[320px] bg-secondary mt-12 rounded-xl"   >
                {Loading ? (
                    <Lottie animationData={skelly} />
                ) : (
                    <Image
                        src={url}
                        width={1000}
                        height={1000}
                        alt="image"
                        className="h-full w-full object-contain rounded-xl"
                    />
                )}
            </div>
        </Link>

    )
}

export default Card