import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Image from "next/image";

const getImagePath = (src) => {
    const { locale } = useRouter();
    return `/${locale}/${src}`;
};

const CustomImage = ({ src, style, width, height, className = "" }) => {
    const imagePath = getImagePath(src);
    return <Image src={imagePath} width={width} height={height} className={className} style={style} />;
};

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
            <footer
                dir={dir}
                className="bg-darkbg text-white flex flex-col lg:px-28 px-8 pt-4 pb-1 font-montserrat lg:text-base text-xs bottom-0"
            >
                <div className="flex flex-row justify-between flex-grow">
                    <ul className="flex flex-col">
                        <li className="mb-4">TNTT Vancouver - Đoàn Thánh Giuse</li>
                        <li className="mb-4">3261 Fleming St, Vancouver, BC V5N 3V6</li>
                        <li className="mb-4">sjvchapter@gmail.com</li>
                        {/* Hidden on small screens */}
                        <div className="lg:hidden flex flex-row">
                            <Link href="https://www.facebook.com/St.JosephTNTT/">
                                <Image
                                    src="./icons/facebook.svg"
                                    width={40}
                                    height={40}
                                    className="px-2"
                                    style={{ filter: "brightness(0) invert(1)" }}
                                />
                            </Link>
                            <Link href="https://www.instagram.com/tntt_vancouver/?hl=en">
                                <Image
                                    src="./icons/instagram.svg"
                                    width={40}
                                    height={40}
                                    className="px-2"
                                    style={{ filter: "brightness(0) invert(1)" }}
                                />
                            </Link>
                            <Link href="https://www.youtube.com/@tnttvancouver-oangiuse8427">
                                <Image
                                    src="./icons/youtube.svg"
                                    width={40}
                                    height={40}
                                    className="px-2"
                                    style={{ filter: "brightness(0) invert(1)" }}
                                />
                            </Link>
                        </div>
                    </ul>
                    <div className="flex flex-col text-right">
                        <CustomLink href="/about" messageId="nav.about" className="mb-4" />
                        <CustomLink href="/news" messageId="nav.news" className="mb-4" />
                        <CustomLink href="/contact" messageId="nav.contact" className="mb-4" />
                        <button className=" bg-red px-2.5 py-1.5 rounded-md transform transition-all duration-300 hover:scale-105 hover:bg-red-500">
                            <CustomLink
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfSQHe-nDfkHKwMZJ0RSeSlrqnjYMImU9IzRlwUOuuJxJe82w/viewform"
                                messageId="nav.register"
                                className="text-white"
                            />
                        </button>
                    </div>
                </div>
                {/* Hidden on small screens */}
                <div className="hidden lg:flex justify-between items-center mx-5 my-8">
                    <div className="w-100 h-0.5 bg-white"></div>
                    <Link href="https://www.facebook.com/St.JosephTNTT/">
                        <CustomImage
                            src="./icons/facebook.svg"
                            width={50}
                            height={50}
                            className="px-2"
                            style={{ filter: "brightness(0) invert(1)" }}
                        />
                    </Link>
                    <Link href="https://www.instagram.com/tntt_vancouver/?hl=en">
                        <CustomImage
                            src="./icons/instagram.svg"
                            width={50}
                            height={50}
                            className="px-2"
                            style={{ filter: "brightness(0) invert(1)" }}
                        />
                    </Link>
                    <Link href="https://www.youtube.com/@tnttvancouver-oangiuse8427">
                        <CustomImage
                            src="./icons/youtube.svg"
                            width={50}
                            height={50}
                            className="px-2"
                            style={{ filter: "brightness(0) invert(1)" }}
                        />
                    </Link>
                    <div className="w-100 h-0.5 bg-white"></div>
                </div>
                <h2 className="text-center lg:text-base text-xs py-6">
                    © 2023 TNTT - Vietnamese Eucharistic Youth Movement
                </h2>
            </footer>
        </>
    );
}
