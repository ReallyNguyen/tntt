import React, { useState } from 'react';

const Calendar = () => {
    const date = new Date();
    const [currentMonth, setCurrentMonth] = useState(date.getMonth());
    const [currentYear, setCurrentYear] = useState(date.getFullYear());
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const customDates = [
        { date: '2023-12-25', label: 'Christmas' },
        { date: '2023-08-08', label: "Jordan's Birthday" },
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
        <div className="px-28">
            <div className="flex justify-between items-center mb-4">
                <button className="text-lg font-semibold" onClick={goToPreviousMonth}>
                    Prev
                </button>
                <h1 className="text-2xl font-bold">
                    {new Date(currentYear, currentMonth).toLocaleString('default', {
                        month: 'long',
                        year: 'numeric',
                    })}
                </h1>
                <button className="text-lg font-semibold" onClick={goToNextMonth}>
                    Next
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2">
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
    );
};

export default Calendar;
