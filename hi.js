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

export default function Nav({ dir }) {
    const { locales } = useRouter();
    const intl = useIntl();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const body = document.querySelector("body");
        if (isMobileMenuOpen) {
            body.classList.add("overflow-hidden");
        } else {
            body.classList.remove("overflow-hidden");
        }
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const DesktopMenu = () => {
        return (
            <div className="hidden lg:flex lg:flex-row lg:items-center flex-col items-center">
                <div className="relative group">
                    <div className="lg:mr-7 group-hover:underline">
                        <CustomLink href="/about" messageId="nav.about" />
                        <div className="absolute hidden group-hover:block py-2 w-56 bg-white rounded shadow-lg z-10">
                            <CustomLink href="/about" messageId="about.overview" className="block px-4 py-2" />
                            <CustomLink href="/resources" messageId="about.resource" className="block px-4 py-2" />
                            <CustomLink href="/our-team" messageId="about.team" className="block px-4 py-2" />
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <div className="lg:mr-7 group-hover:underline">
                        <CustomLink href="/division" messageId="nav.division" />
                        <div className="absolute hidden group-hover:block py-2 w-56 bg-white rounded shadow-lg text-left z-10">
                            <CustomLink href="/" messageId="division.seedling" className="block px-4 py-2" />
                            <CustomLink href="/" messageId="division.search" className="block px-4 py-2" />
                            <CustomLink href="/" messageId="division.companion" className="block px-4 py-2" />
                            <CustomLink href="/" messageId="division.eucharistic" className="block px-4 py-2" />
                            <CustomLink href="/" messageId="division.youth" className="block px-4 py-2" />
                        </div>
                    </div>
                </div>
                <CustomLink href="/" messageId="nav.news" className="lg:mr-7" />
                <CustomLink href="/" messageId="nav.contact" className="lg:mr-7" />
                <div className="flex flex-row gap-4 mr-7">
                    {[...locales].sort().map((locale) => (
                        <Link key={locale} href="" locale={locale}>
                            <div>{locale}</div>
                        </Link>
                    ))}
                </div>
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
        );
    };

    const MobileMenu = () => {
        const [isAboutOpen, setIsAboutOpen] = useState(false);
        const [isDivisionOpen, setIsDivisionOpen] = useState(false);

        const toggleAboutDropdown = () => {
            setIsAboutOpen(!isAboutOpen);
        };

        const toggleDivisionDropdown = () => {
            setIsDivisionOpen(!isDivisionOpen);
        };

        return (
            <nav className="fixed items-center justify-center bg-white z-20 font-mono font-black">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <div className="relative group mb-4">
                        <button
                            onClick={toggleAboutDropdown}
                            className={`flex items-center ${isAboutOpen ? "text-blue-500" : "text-black"
                                } focus:outline-none`}
                        >
                            <FormattedMessage id="nav.about" />
                            {isAboutOpen ? "▲" : "▼"}
                        </button>
                        {isAboutOpen && (
                            <div className="block py-2 w-56 bg-white rounded shadow-lg z-10">
                                {/* Dropdown menu items */}
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
                        )}
                    </div>
                    <div className="relative group mb-4">
                        <button
                            onClick={toggleDivisionDropdown}
                            className={`flex items-center ${isDivisionOpen ? "text-blue-500" : "text-black"
                                } focus:outline-none`}
                        >
                            <FormattedMessage id="nav.division" />
                            {isDivisionOpen ? "▲" : "▼"}
                        </button>
                        {isDivisionOpen && (
                            <div className="block py-2 w-56 bg-white rounded shadow-lg text-left z-10">
                                {/* Dropdown menu items */}
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
                        )}
                    </div>
                    {/* Other menu items */}
                    <CustomLink href="/" messageId="nav.news" className="mb-4" />
                    <CustomLink href="/" messageId="nav.contact" className="mb-4" />
                    <CustomLink href="/" messageId="nav.register" className="mb-4" />
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
  };

    return (
        <>
            <header
                dir={dir}
                className="flex flex-row justify-between lg:px-28 px-12 py-8 font-montserrat font-black relative lg:sticky top-0 z-20 bg-lightbg"
            >
                <Link href="/" className="flex flex-row items-center">
                    <CustomImage src="sjv.svg" width={50} height={50} className="mr-4" />
                    <h2>TNTT Vancouver</h2>
                </Link>

                <nav
                    className={`lg:flex lg:flex-row lg:items-center ${isMobileMenuOpen ? "fixed inset-0 items-center justify-center bg-white z-20" : "hidden lg:flex"
                        }`}
                >
                    <DesktopMenu />
                </nav>
                {isMobileMenuOpen && <MobileMenu />}
                <button
                    className="flex flex-col justify-center items-center lg:hidden z-50"
                    onClick={toggleMobileMenu}
                >
                    <span
                        className={`bg-black block h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                            }`}
                    ></span>
                    <span
                        className={`bg-black block h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
                            }`}
                    ></span>
                    <span
                        className={`bg-black block h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                            }`}
                    ></span>
                </button>

            </header>
        </>
    );
}