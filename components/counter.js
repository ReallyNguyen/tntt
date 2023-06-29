import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [startCounting, setStartCounting] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const triggerPoint = 500; // Adjust the trigger point as needed

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
                if (count < 100) {
                    setCount((prevCount) => prevCount + 1);
                }
            }, 50); // Decreased interval time to 50 milliseconds

            return () => {
                clearInterval(interval);
            };
        }
    }, [count, startCounting]);

    return (
        <div className="text-center">
            <h2>{count}</h2>
        </div>
    );
};

export default Counter;
