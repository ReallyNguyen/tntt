import React from "react";
import Link from "next/link";
import Image from "next/image";

const CustomImage = ({ src, width, height, href, className = "" }) => {
    return <Image src={src} width={width} height={height} className={`${className}`} />;
};

const CustomLink = ({ href, title, className = "" }) => {
    return (
        <Link href={href} className={`${className}`}>
            {title}
        </Link>
    )
}

export default function Navbar() {
    return (
        <>
            <header className="flex flex-row justify-between px-32 py-8">
                <Link href="/" className="flex flex-row items-center">
                    < CustomImage src="sjv.svg" width={50} height={50} className="mr-4" />
                    <h2>TNTT Vancouver</h2>
                </Link >
                <nav className="flex flex-row items-center">
                    <div className="flex flex-row items-center mr-7">
                        <div className="relative group">
                            <CustomLink href="/about" title="About" className="mr-7 group-hover:underline" />
                            <div className="absolute hidden group-hover:block py-2 w-56 bg-white rounded shadow-lg">
                                <CustomLink href="/overview" title="Overview" className="block px-4 py-2" />
                                <CustomLink href="/resources" title="Resources" className="block px-4 py-2" />
                                <CustomLink href="/our-team" title="Our Team" className="block px-4 py-2" />
                            </div>
                        </div>
                        <div className="relative group">
                            <CustomLink href="/nganh" title="Nganh" className="mr-7 group-hover:underline" />
                            <div className="absolute hidden group-hover:block py-2 w-56 bg-white rounded shadow-lg text-left">
                                <CustomLink href="/overview" title="Ấu Nhi" className="block px-4 py-2" />
                                <CustomLink href="/resources" title="Thiếu Nhi" className="block px-4 py-2" />
                                <CustomLink href="/our-team" title="Nghĩa Sĩ" className="block px-4 py-2" />
                                <CustomLink href="/overview" title="Hiệp Sĩ" className="block px-4 py-2" />
                                <CustomLink href="/resources" title="Huynh Trưởng" className="block px-4 py-2" />
                            </div>
                        </div>
                        <CustomLink href="/" title="News" className="mr-7" />
                        <CustomLink href="/" title="Schedule" className="mr-7" />
                        <CustomLink href="/" title="Contact" className="mr-7" />
                    </div>
                    <div className="flex flex-row items-center">
                        <h2 className="mr-4">English</h2>
                        <button className="bg-red px-2.5 py-1.5 rounded-md transform transition-all duration-300 hover:scale-105 hover:bg-red-500">
                            <CustomLink href="/" title="Register" className="text-white" />
                        </button>
                    </div>
                </nav>
            </header>

        </>
    );
}

