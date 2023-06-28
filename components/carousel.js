import React, { useState, useEffect } from "react";

export default function Carousel() {
    const slides = [
        {
            url: "/carousel/1.JPG"
        },
        {
            url: "/carousel/2.JPG"
        },
        {
            url: "/carousel/3.JPG"
        },
        {
            url: "/carousel/4.JPG"
        },
        {
            url: "/carousel/5.JPG"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    return (
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 relative">
            <div
                style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            >
                {/* Left arrow */}
                <div
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
                    onClick={goToPreviousSlide}
                >
                    <h1 className="text-9xl text-white">&larr;</h1>
                </div>

                {/* Right arrow */}
                <div
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                    onClick={goToNextSlide}
                >
                    <h1 className="text-9xl text-white">&rarr;</h1>
                </div>
            </div>
        </div>
    );
}