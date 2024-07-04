// Import necessary dependencies from React and Next.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

// CustomImage component for displaying images with Next.js Image

const getImagePath = (src) => {
    const { locale } = useRouter();
    return `/${locale}/${src}`;
};

const CustomImage = ({ src, width, height, className = "" }) => {
    const imagePath = getImagePath(src);
    return <Image src={imagePath} width={width} height={height} className={className} />;
};


// CustomLink component for rendering links with internationalization support
const CustomLink = ({ href, messageId, className = "" }) => {
    const router = useRouter()
    const isActive = router.asPath === href;
    return (
        <Link href={href} className={`${className} ${isActive ? "underline" : ""} hover:underline`}>
            <FormattedMessage id={messageId} />
        </Link>
    );
};

// The main Nav component
export default function Nav({ dir }) {
    const { locales } = useRouter();
    const intl = useIntl();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Add or remove "overflow-hidden" class from the body based on mobile menu state
        const body = document.querySelector("body");
        if (isMobileMenuOpen) {
            body.classList.add("overflow-hidden");
        } else {
            body.classList.remove("overflow-hidden");
        }
    }, [isMobileMenuOpen]);

    // Function to toggle the mobile menu state
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // DesktopMenu component representing the menu items for larger screens
    const DesktopMenu = () => {
        return (
            <div className="hidden lg:flex lg:flex-row lg:items-center flex-col items-center">
                {/* Dropdown for "About" */}
                <div className="relative group">
                    <div className="lg:mr-7 group-hover:underline">
                        <CustomLink href="/about" messageId="nav.about" />
                        <div className="absolute hidden group-hover:block py-2 w-56 bg-white rounded shadow-lg z-10">
                            <CustomLink href="/about" messageId="about.overview" className="block px-4 py-2" />
                            <CustomLink href="/resources" messageId="about.resource" className="block px-4 py-2" />
                            <CustomLink href="/team" messageId="about.team" className="block px-4 py-2" />
                        </div>
                    </div>
                </div>
                {/* Dropdown for "Division" */}
                {/* <div className="relative group">
                    <div className="lg:mr-7 group-hover:underline">
                        <CustomLink href="/division" messageId="nav.division" />
                        <div className="absolute hidden group-hover:block py-2 w-56 bg-white rounded shadow-lg text-left z-10">
                            <CustomLink href="/seedling" messageId="division.seedling" className="block px-4 py-2" />
                            <CustomLink href="/search" messageId="division.search" className="block px-4 py-2" />
                            <CustomLink href="/companion" messageId="division.companion" className="block px-4 py-2" />
                            <CustomLink href="/eucharistic" messageId="division.eucharistic" className="block px-4 py-2" />
                            <CustomLink href="/youth" messageId="division.youth" className="block px-4 py-2" />
                        </div>
                    </div>
                </div> */}
                {/* Other menu items */}
                <CustomLink href="/news" messageId="nav.news" className="lg:mr-7" />
                <CustomLink href="/schedule" messageId="nav.schedule" className="lg:mr-7" />
                <CustomLink href="/contact" messageId="nav.contact" className="lg:mr-7" />
                {/* Locale selection */}
                <div className="flex flex-row gap-4 mr-7">
                    {[...locales].sort().map((locale) => (
                        <Link key={locale} href="" locale={locale}>
                            <div>{locale}</div>
                        </Link>
                    ))}
                </div>
                {/* Registration button */}
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

    // MobileMenu component representing the menu items for smaller screens
    const MobileMenu = () => {
        const [isAboutOpen, setIsAboutOpen] = useState(false);
        const [isDivisionOpen, setIsDivisionOpen] = useState(false);

        // Functions to toggle the visibility of "About" and "Division" dropdowns
        const toggleAboutDropdown = () => {
            setIsAboutOpen(!isAboutOpen);
        };

        const toggleDivisionDropdown = () => {
            setIsDivisionOpen(!isDivisionOpen);
        };

        return (
            <nav className={`fixed top-0 left-0 w-full h-full bg-white ${isMobileMenuOpen ? "block" : "hidden"} z-20`}>
                <div className="flex flex-col items-center justify-center h-full">
                    {/* Main "Home" link */}
                    <CustomLink href="/" messageId="nav.home" className="text-xl block pt-4" />

                    {/* Dropdown for "About" */}
                    <div className="relative mt-8">
                        <button
                            onClick={toggleAboutDropdown}
                            className={`flex flex-col items-center w-full px-6 py-4 text-xl font-semibold border-t border-b border-gray-200 focus:outline-none transition-colors ${isAboutOpen ? "text-blue-500" : "text-black"}`}
                        >
                            <FormattedMessage id="nav.about" />
                            {isAboutOpen ? " ▲" : " ▼"}
                        </button>
                        {isAboutOpen && (
                            <div className={`block text-base py-2 px-6 transition-opacity ${isAboutOpen ? "opacity-100" : "opacity-0"} text-center`}>
                                {/* Dropdown menu items */}
                                <CustomLink href="/about" messageId="about.overview" className="block py-1" />
                                <CustomLink href="/resources" messageId="about.resource" className="block py-1" />
                                <CustomLink href="/team" messageId="about.team" className="block py-1" />
                            </div>
                        )}
                    </div>

                    {/* Dropdown for "Division" */}
                    {/* <div className="relative">
                        <button
                            onClick={toggleDivisionDropdown}
                            className={`flex flex-col items-center w-full px-0 py-4 text-xl font-semibold border-t border-b border-gray-200 focus:outline-none transition-colors ${isDivisionOpen ? "text-blue-500" : "text-black"}`}
                        >
                            <FormattedMessage id="nav.division" />
                            {isDivisionOpen ? " ▲" : " ▼"}
                        </button>
                        {isDivisionOpen && (
                            <div className={`block text-base py-2 px-6 transition-opacity ${isDivisionOpen ? "opacity-100" : "opacity-0"} text-center`}>
                         
                                <CustomLink href="/seedling" messageId="division.seedling" className="block py-1" />
                                <CustomLink href="/search" messageId="division.search" className="block py-1" />
                                <CustomLink href="/companion" messageId="division.companion" className="block py-1" />
                                <CustomLink href="/eucharistic" messageId="division.eucharistic" className="block py-1" />
                                <CustomLink href="/youth" messageId="division.youth" className="block py-1" />
                            </div>
                        )}
                    </div> */}

                    {/* Other menu items */}
                    <CustomLink href="/news" messageId="nav.news" className="text-xl block py-4 border-t border-gray-200" />
                    <CustomLink href="/schedule" messageId="nav.schedule" className="text-xl block py-4 border-t border-b border-gray-200" />
                    <CustomLink href="/contact" messageId="nav.contact" className="text-xl block py-4 border-t border-b border-gray-200" />
                    {/* Locale selection */}
                    <div className="flex flex-row justify-center py-4 border-b border-gray-200">
                        {[...locales].sort().map((locale) => (
                            <Link key={locale} href="" locale={locale}>
                                <div className="px-4 py-2">{locale}</div>
                            </Link>
                        ))}
                    </div>

                    {/* Registration button */}
                    <div className="mt-auto mb-8">
                        <button className="bg-red px-6 py-4 rounded-lg text-white font-semibold text-xl shadow-lg">
                            <CustomLink
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfSQHe-nDfkHKwMZJ0RSeSlrqnjYMImU9IzRlwUOuuJxJe82w/viewform"
                                messageId="nav.register"
                            />
                        </button>
                    </div>
                </div>
            </nav>
        );
    };


    // Return the complete navigation bar with the DesktopMenu and MobileMenu components
    return (
        <>
            <header
                dir={dir}
                className="flex flex-row justify-between lg:px-28 px-8 py-8 font-montserrat font-black sticky top-0 z-20 bg-lightbg"
            >
                {/* Site logo and title */}
                <Link href="/" className="flex flex-row items-center">
                    <CustomImage src="sjv.svg" alt="sjv" width={50} height={50} className="mr-4" />
                    <h2>TNTT Vancouver</h2>
                </Link>

                {/* Desktop navigation */}
                <nav
                    className={`lg:flex lg:flex-row lg:items-center ${isMobileMenuOpen ? "fixed inset-0 items-center justify-center bg-white z-20" : "hidden lg:flex"
                        }`}
                >
                    <DesktopMenu />
                </nav>

                {/* Mobile menu toggle button */}
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
