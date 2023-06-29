import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Image from "next/image";

const CustomLink = ({ href, messageId, className = "" }) => {
    return (
        <Link href={href} className={className}>
            <FormattedMessage id={messageId} />
        </Link>
    );
};

export default function Footer({ dir }) {

    const { locales } = useRouter();
    const intl = useIntl();

    return (
        <>
            <footer dir={dir} className="bg-darkbg text-white flex flex-col px-28 pt-4 pb-1 font-montserrat text-9x1">
                <div className="flex flex-row justify-between">
                    <ul className="flex flex-col">
                        <li className="mb-4">TNTT Vancouver - Đoàn Thánh Giuse</li>
                        <li className="mb-4">3261 Fleming St, Vancouver, BC V5N 3V6</li>
                        <li className="mb-4">sjvchapter@gmail.com</li>
                    </ul>
                    <div className="flex flex-col text-right">
                        <CustomLink href="/about" messageId="nav.about" className="mb-4" />
                        <CustomLink href="/news" messageId="nav.news" className="mb-4" />
                        <CustomLink href="/contact" messageId="nav.contact" className="mb-4" />
                        <button className=" bg-red px-2.5 py-1.5 rounded-md transform transition-all duration-300 hover:scale-105 hover:bg-red-500">
                            <CustomLink href="https://docs.google.com/forms/d/e/1FAIpQLSfSQHe-nDfkHKwMZJ0RSeSlrqnjYMImU9IzRlwUOuuJxJe82w/viewform" messageId="nav.register" className="text-white" />
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-center mx-5 my-8">
                    <div className="w-100 h-0.5 bg-white"></div>
                    <Image src='./icons/facebook.svg' width={40} height={40} style={{ filter: 'brightness(0) invert(1)' }} />
                    <Image src='./icons/instagram.svg' width={40} height={40} style={{ filter: 'brightness(0) invert(1)' }} />
                    <Image src='./icons/youtube.svg' width={40} height={40} style={{ filter: 'brightness(0) invert(1)' }} />
                    <div className="w-100 h-0.5 bg-white"></div>
                </div>
                <h2 className="text-center">© 2023 TNTT - Vietnamese Eucharistic Youth Movement</h2>
            </footer>
        </>
    )
}