import { useState, useEffect } from 'react';

const Carousel = () => {
    const slides = [
        {
            url: "./carousel/1.JPG",
        },
        {
            url: "./carousel/2.JPG",
        },
        {
            url: "./carousel/3.JPG",
        },
        {
            url: "./carousel/4.JPG",
        },
        {
            url: "./carousel/5.JPG",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    let interval; // Declare interval variable

    useEffect(() => {
        interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    const resetInterval = () => {
        clearInterval(interval);
        interval = setInterval(() => {
            nextSlide();
        }, 5000);
    };

    const nextSlide = () => {
        resetInterval();
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        resetInterval();
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative">
            <img
                src={slides[currentIndex].url}
                alt={`Slide ${currentIndex + 1}`}
                className="w-[32rem] h-[33rem]"
                style={{ objectFit: 'cover' }}
            />
            {/* Left arrow */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer transition-opacity duration-500 hover:opacity-75" onClick={prevSlide}>
                <svg className="text-white w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor" />
                </svg>
            </div>

            {/* Right arrow */}
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer transition-opacity duration-500 hover:opacity-75" onClick={nextSlide}>
                <svg className="text-white w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.59 7.41L10 6L16 12L10 18L8.59 16.59L13.17 12L8.59 7.41Z" fill="currentColor" />
                </svg>
            </div>
        </div>
    );
};

export default Carousel;
