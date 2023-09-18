import React, { useState } from 'react';
import TransitionEffect from "@/components/transitionEffect";
import { motion as m } from 'framer-motion'
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import { FormattedMessage, useIntl } from "react-intl";

export default function Calendar({ dir }) {
    const intl = useIntl();
    const date = new Date();
    const [currentMonth, setCurrentMonth] = useState(date.getMonth());
    const [currentYear, setCurrentYear] = useState(date.getFullYear());
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const customDates = [
        {
            label: "Thanksgiving",
            date: "2023-10-07"
        },
        {
            label: "Remembrance Day",
            date: "2023-11-11"
        },
        {
            label: "Christmas Break",
            date: "2023-12-23"
        },
        {
            label: "Christmas Break",
            date: "2023-12-30"
        },
        {
            label: "Lunar New Year",
            date: "2024-02-10"
        },
        {
            label: "Family Day Weekend",
            date: "2024-02-17"
        },
        {
            label: "Easter",
            date: "2024-03-30"
        },
        {
            label: "Victoria Day",
            date: "2024-05-18"
        }
    ];

    const renderCalendarDays = (customDates) => {
        const days = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="align-text-top">&nbsp;</div>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const currentDate = new Date(currentYear, currentMonth, i);
            const formattedDate = currentDate.toISOString().split('T')[0];
            const customDate = customDates.find(date => date.date === formattedDate);

            days.push(
                <div
                    key={`day-${i}`}
                    className={`flex flex-col items-center justify-start h-20 rounded-lg bg-white text-gray-800`}
                >
                    <div className="text-xs mt-1">{i}</div>
                    {customDate && (
                        <div className="text-xs font-semibold">{customDate.label}</div>
                    )}
                </div>
            );
        }

        return days;
    };

    const goToPreviousMonth = () => {
        setCurrentMonth(prevMonth => {
            if (prevMonth === 0) {
                setCurrentYear(prevYear => prevYear - 1);
                return 11; // Reset month to December
            } else {
                return prevMonth - 1;
            }
        });
    };

    const goToNextMonth = () => {
        setCurrentMonth((prevMonth) => {
            const nextMonth = prevMonth + 1;
            const nextYear = currentYear + (nextMonth === 12 ? 1 : 0);
            setCurrentYear(nextYear);
            return nextMonth % 12;
        });
    };

    return (
        <>
            <TransitionEffect />
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 1, ease: "easeInOut" }}
            >
                <Nav />
                <div className="px-4 sm:px-8 md:px-10 lg:px-16 pb-8">
                    <h1 className="text-3xl lg:text-5xl text-center font-raleway font-bold mb-6">Schedule</h1>
                    <div className="flex justify-center items-center mb-4">
                        <button className="text-lg font-semibold bg-transparent hover:bg-gray-200 rounded-lg py-2 px-4 sm:px-8 md:px-12 transition-colors duration-300" onClick={goToPreviousMonth}>
                            Prev
                        </button>
                        <h1 className="text-2xl px-4 sm:px-8 font-bold">
                            {new Date(currentYear, currentMonth).toLocaleString('default', {
                                month: 'long',
                                year: 'numeric',
                            })}
                        </h1>
                        <button className="text-lg font-semibold bg-transparent hover:bg-gray-200 rounded-lg py-2 px-4 sm:px-8 md:px-12 transition-colors duration-300" onClick={goToNextMonth}>
                            Next
                        </button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 sm:gap-2">
                        <div className="text-center text-gray-600 font-semibold">Sun</div>
                        <div className="text-center text-gray-600 font-semibold">Mon</div>
                        <div className="text-center text-gray-600 font-semibold">Tue</div>
                        <div className="text-center text-gray-600 font-semibold">Wed</div>
                        <div className="text-center text-gray-600 font-semibold">Thu</div>
                        <div className="text-center text-gray-600 font-semibold">Fri</div>
                        <div className="text-center text-gray-600 font-semibold">Sat</div>
                        {renderCalendarDays(customDates)}
                    </div>
                </div>
                <Footer />
            </m.div>
        </>
    );
};