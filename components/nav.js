import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

const CustomImage = ({ src, width, height, href, className = "" }) => {
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

    const about = intl.formatMessage({ id: "nav.about" })

    return (
        <>
            <header dir={dir} className="flex flex-row justify-between py-8 font-montserrat font-bold">

                <Link href="/" className="flex flex-row items-center">
                    < CustomImage src="sjv.svg" width={50} height={50} className="mr-4" />
                    <h2>TNTT Vancouver</h2>
                </Link >
                <nav className="flex flex-row items-center">
                    <div className="flex flex-row items-center mr-7">
                        <div className="relative group">
                            <CustomLink href="/about" messageId="nav.about" className="mr-7 group-hover:underline" />
                            <div className="absolute hidden group-hover:block py-2 w-56 bg-white rounded shadow-lg">
                                <CustomLink href="/about" messageId="about.overview" className="block px-4 py-2" />
                                <CustomLink href="/resources" messageId="about.resource" className="block px-4 py-2" />
                                <CustomLink href="/our-team" messageId="about.team" className="block px-4 py-2" />
                            </div>
                        </div>
                        <div className="relative group">
                            <CustomLink href="/division" messageId="nav.division" className="mr-7 group-hover:underline" />
                            <div className="absolute hidden group-hover:block py-2 w-56 bg-white rounded shadow-lg text-left">
                                <CustomLink href="/" messageId="division.seedling" className="block px-4 py-2" />
                                <CustomLink href="/" messageId="division.search" className="block px-4 py-2" />
                                <CustomLink href="/" messageId="division.companion" className="block px-4 py-2" />
                                <CustomLink href="/" messageId="division.eucharistic" className="block px-4 py-2" />
                                <CustomLink href="/" messageId="division.youth" className="block px-4 py-2" />
                            </div>
                        </div>
                        <CustomLink href="/" messageId="nav.news" className="mr-7" />
                        <CustomLink href="/" messageId="nav.contact" className="mr-7" />
                        <CustomLink href="/" messageId="nav.register" className="mr-7" />
                        <div className="flex flex-row gap-4 mr-7">
                            {[...locales].sort().map((locale) => (
                                <Link key={locale} href="" locale={locale}>
                                    <div>{locale}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <button className=" bg-red px-2.5 py-1.5 rounded-md transform transition-all duration-300 hover:scale-105 hover:bg-red-500">
                            <CustomLink href="https://docs.google.com/forms/d/e/1FAIpQLSfSQHe-nDfkHKwMZJ0RSeSlrqnjYMImU9IzRlwUOuuJxJe82w/viewform" messageId="nav.register" className="text-white" />
                        </button>
                    </div>
                </nav>
            </header>

        </>
    );
}

