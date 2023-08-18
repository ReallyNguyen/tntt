import React from 'react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold mb-4">Oops, Page Not Found!</h1>
                <p className="text-gray-600 mb-4">
                    The page you are looking for might have been removed or is temporarily unavailable.
                </p>
                <a
                    href="/"
                    className="inline-block text-black py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:scale-105 transition-transform duration-300"
                >
                    Go to Home
                </a>
            </div>
        </div>
    );
}
