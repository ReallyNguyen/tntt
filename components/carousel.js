import React, { useState, useEffect } from "react";

const Carousel = () => {
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
    const intervalDuration = 5000; // 5 seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, intervalDuration);

        setIntervalId(interval);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (slideIndex) => {
        clearInterval(intervalId);
        setCurrentSlide(slideIndex);
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, intervalDuration);
        setIntervalId(interval);
    };

    const goToNextSlide = () => {
        const nextSlide = (currentSlide + 1) % slides.length;
        goToSlide(nextSlide);
    };

    const goToPreviousSlide = () => {
        const previousSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        goToSlide(previousSlide);
    };

    return (
        <div className="w-[32rem] h-[33rem] relative overflow-hidden">
            <div className="w-full h-full flex" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: `transform ${intervalDuration / 1000}s ease-out`, willChange: "transform" }}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-full h-full flex-shrink-0 bg-center bg-cover"
                        style={{ backgroundImage: `url(${slide.url})` }}
                    />
                ))}
            </div>

            {/* Left arrow */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer transition-opacity duration-500 hover:opacity-75" onClick={goToPreviousSlide}>
                <svg className="text-white w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor" />
                </svg>
            </div>

            {/* Right arrow */}
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer transition-opacity duration-500 hover:opacity-75" onClick={goToNextSlide}>
                <svg className="text-white w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.59 7.41L10 6L16 12L10 18L8.59 16.59L13.17 12L8.59 7.41Z" fill="currentColor" />
                </svg>
            </div>
        </div>
    );
};

export default Carousel;
