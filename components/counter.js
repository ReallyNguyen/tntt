import React, { useState, useEffect } from 'react';

const Counter = ({ endNumber, speed }) => {
    const [count, setCount] = useState(0);
    const [startCounting, setStartCounting] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const triggerPoint = 90; // Adjust the trigger point as needed

            if (scrollPosition > triggerPoint && !startCounting) {
                setStartCounting(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [startCounting]);

    useEffect(() => {
        if (startCounting) {
            const interval = setInterval(() => {
                if (count < endNumber) {
                    setCount((prevCount) => prevCount + 1);
                }
            }, speed); // Adjust the interval duration based on the desired speed

            return () => {
                clearInterval(interval);
            };
        }
    }, [count, endNumber, speed, startCounting]);

    return (
        <div className="font-montserrat font-black text-6xl">
            <h2>{count}</h2>
        </div>
    );
};

export default Counter;
