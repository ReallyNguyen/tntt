import React from "react";

export default function Card(props) {
    const { name, role, image } = props;

    return (
        <div className="w-60">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-84 w-full">
                    <img
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:rotate-3 group-hover:scale-125"
                        src={image}
                        alt=""
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-end text-center transition-all duration-700 group-hover:translate-y-0">
                    <div className="flex flex-col text-left">
                        <p className="mb-3 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-raleway">
                            {role}
                        </p>
                        <h1 className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-raleway">
                            {name}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
