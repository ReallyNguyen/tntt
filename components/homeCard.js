import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeCard({ name, img, link }) {

    return (
        <Link target="_blank" href={link}>
            <div className="p-10 w-84 h-92 sm:w-112 sm:h-128 shadow-custom flex flex-col justify-between items-center">
                {/* desktop */}
                <div className="md:block hidden">
                    <Image width={300} height={300} src={img} />
                </div>
                <h1 className="mt-16 font-bold text-3xl md:block hidden">
                    {name}
                </h1>
                {/* mobile */}
                <div className="block md:hidden">
                    <Image width={230} height={230} src={img} />
                </div>
                <h1 className="mt-16 font-bold text-xl block md:hidden">
                    {name}
                </h1>
            </div>
        </Link>


    )
}