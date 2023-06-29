import React, { useState, useEffect } from "react";

export default function Carousel() {
    const slides = [
        {
            url: "./carousel/1.JPG"
        },
        {
            url: "./carousel/2.JPG"
        },
        {
            url: "./carousel/3.JPG"
        },
        {
            url: "./carousel/4.JPG"
        },
        {
            url: "./carousel/5.JPG"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        setIntervalId(interval);

        return () => clearInterval(interval);
    }, []);

    const goToNextSlide = () => {
        clearInterval(intervalId);
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
        setIntervalId(interval);
    };

    const goToPreviousSlide = () => {
        clearInterval(intervalId);
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
        setIntervalId(interval);
    };

    return (
        <div className="w-[32rem] h-[33rem] relative">
            <div
                style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
                className="w-full h-full rounded-2xl bg-center bg-cover transition-opacity duration-500"
            >
                {/* Left arrow */}
                <div
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer transition-opacity duration-500 hover:opacity-75"
                    onClick={goToPreviousSlide}
                >
                    <h1 className="text-9xl text-white">&larr;</h1>
                </div>

                {/* Right arrow */}
                <div
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer transition-opacity duration-500 hover:opacity-75"
                    onClick={goToNextSlide}
                >
                    <h1 className="text-9xl text-white">&rarr;</h1>
                </div>
            </div>
        </div>
    );
}
