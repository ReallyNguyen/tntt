import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

const CustomImage = ({ src, width, height, className = "" }) => {
    return <Image src={src} width={width} height={height} className={`${className}`} />;
};

const CustomLink = ({ href, messageId, className = "" }) => {
    return (
        <Link href={href} className={className}>
            <FormattedMessage id={messageId} />
        </Link>
    );
};

export default function Navbar({ dir }) {
    const { locales } = useRouter();
    const intl = useIntl();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body');
        if (isOpen) {
            body.classList.add('overflow-hidden');
        } else {
            body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header
                dir={dir}
                className="flex flex-row justify-between px-28 py-8 font-montserrat font-bold relative lg:sticky top-0 z-20 bg-lightbg"
            >
                <Link href="/" className="flex flex-row items-center">
                    <CustomImage src="sjv.svg" width={50} height={50} className="mr-4" />
                    <h2>TNTT Vancouver</h2>
                </Link>

                <nav className={`lg:flex lg:flex-row lg:items-center ${isOpen ? "fixed inset-0 items-center justify-center bg-white z-20" : "hidden lg:flex"
                    } ${isOpen ? "flex flex-col w-screen h-screen" : ""}`}>
                    <div className="lg:flex lg:flex-row lg:items-center flex flex-col items-center mr-7">
                        <div className="relative group">
                            <div className={`lg:mr-7 group-hover:underline ${isOpen ? 'mb-4' : ''}`}>
                                <CustomLink
                                    href="/about"
                                    messageId="nav.about"
                                />
                                <div className="absolute hidden group-hover:block py-2 w-56 bg-white rounded shadow-lg z-10">
                                    <CustomLink
                                        href="/about"
                                        messageId="about.overview"
                                        className="block px-4 py-2"
                                    />
                                    <CustomLink
                                        href="/resources"
                                        messageId="about.resource"
                                        className="block px-4 py-2"
                                    />
                                    <CustomLink
                                        href="/our-team"
                                        messageId="about.team"
                                        className="block px-4 py-2"
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="relative group">
                            <div className={`lg:mr-7 group-hover:underline ${isOpen ? 'mb-4' : ''}`}>
                                <CustomLink
                                    href="/division"
                                    messageId="nav.division"
                                />
                                <div className="absolute hidden group-hover:block py-2 w-56 bg-white rounded shadow-lg text-left z-10">
                                    <CustomLink
                                        href="/"
                                        messageId="division.seedling"
                                        className="block px-4 py-2"
                                    />
                                    <CustomLink
                                        href="/"
                                        messageId="division.search"
                                        className="block px-4 py-2"
                                    />
                                    <CustomLink
                                        href="/"
                                        messageId="division.companion"
                                        className="block px-4 py-2"
                                    />
                                    <CustomLink
                                        href="/"
                                        messageId="division.eucharistic"
                                        className="block px-4 py-2"
                                    />
                                    <CustomLink
                                        href="/"
                                        messageId="division.youth"
                                        className="block px-4 py-2"
                                    />
                                </div>
                            </div>

                        </div>
                        <CustomLink
                            href="/"
                            messageId="nav.news"
                            className={`lg:mr-7 ${isOpen ? 'mb-4' : ''}`}
                        />
                        <CustomLink
                            href="/"
                            messageId="nav.contact"
                            className={`lg:mr-7 ${isOpen ? 'mb-4' : ''}`}
                        />
                        <CustomLink
                            href="/"
                            messageId="nav.register"
                            className={`lg:mr-7 ${isOpen ? 'mb-4' : ''}`}
                        />
                        <div className="flex flex-row items-center">
                            <button className="bg-red px-2.5 py-1.5 rounded-md transform transition-all duration-300 hover:scale-105 hover:bg-red-500">
                                <CustomLink
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfSQHe-nDfkHKwMZJ0RSeSlrqnjYMImU9IzRlwUOuuJxJe82w/viewform"
                                    messageId="nav.register"
                                    className="text-white"
                                />
                            </button>
                        </div>
                    </div>
                </nav>


                <button
                    className="flex flex-col justify-center items-center lg:hidden z-50"
                    onClick={toggleMenu}
                >
                    <span className={`bg-black block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-black block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-black block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </button>
            </header>
        </>
    );
}
