import React from "react"
import Nav from "@/components/nav";
import Carousel from "@/components/carousel";
import Counter from "@/components/counter";
import Footer from "@/components/footer";
import TransitionEffect from "@/components/transitionEffect";
import { FormattedMessage, useIntl } from "react-intl";

import Link from "next/link";

const CustomLink = ({ href, messageId, className = "" }) => {
    return (
        <Link href={href} className={className}>
            <FormattedMessage id={messageId} />
        </Link>
    );
};

export default function Home({ dir }) {

    const intl = useIntl();

    return (
        <>
            <TransitionEffect />
            <main className="font-montserrat">
                <Nav />

                <div className="flex flex-col justify-center px-28 py-8" >
                    <h1 className="text-4xl lg:text-5xl text-center font-raleway font-bold">Who Are We?</h1>

                </div>



                <Footer />
            </main>
        </>


    )
}