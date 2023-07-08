import React from "react";
import Nav from "@/components/nav";
import Image from "next/image";
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

                <div className="lg:px-28 px-8 py-8">
                    <h1 className="text-4xl lg:text-5xl font-raleway font-bold text-center pb-8">Who Are We?</h1>
                    {/*mobile*/}
                    <div className="lg:hidden flex flex-col">
                        <Image src="/about/group.jpg" width={585} height={375} />
                        <p className="text-xs py-8">The Vietnamese Eucharistic Youth Movement is a non-profit organization, under the leadership of the Catholic Church. Its aim is to teach youths to be virtuous people and good Christians. It also offers apostolate services for the youth. Throughout its years of service, the Movement has kept pace with social and cultural changes of the day in an attempt to reach out to the youth of all times.</p>
                    </div>
                    {/*desktop*/}
                    <div className="hidden lg:flex lg:flex-row lg:justify-between py-9">
                        <p className="w-128">The Vietnamese Eucharistic Youth Movement is a non-profit organization, under the leadership of the Catholic Church. Its aim is to teach youths to be virtuous people and good Christians. It also offers apostolate services for the youth. Throughout its years of service, the Movement has kept pace with social and cultural changes of the day in an attempt to reach out to the youth of all times.</p>
                        <Image src="/about/group.jpg" width={585} height={375} />
                    </div>
                    <div className="bg-gray-100 rounded p-4 mt-8">
                        <p className="italic text-gray-700">
                            "We believe in the power of youth to create positive change and make a difference in the world."
                        </p>
                        <span className="block text-right text-gray-500 text-sm mt-2">
                            - Eucharistic Youth Movement
                        </span>
                    </div>
                </div>
                <section className="bg-lightgrey px-4 py-8 lg:px-28">
                    <div className="flex lg:flex-row flex-col lg:px-16 px-8 lg:pb-52 pb-24 justify-between">
                        <h1 className="lg:text-4xl font-raleway font-bold lg:pb-0 pb-8">Our Mission</h1>
                        <p className="lg:w-152 lg:text-base text-sm">TNTT is committed to guiding and nurturing children and youth, empowering them as exemplary Christians and responsible citizens. We instill values like love, kindness, honesty, and a commitment to helping others. Our programs focus on fostering spiritual growth, establishing a meaningful connection with Jesus, and encouraging positive life changes.</p>
                    </div>
                    <div className="lg:px-16 px-8">
                        <h1 className="lg:text-4xl font-raleway font-bold lg:pb-8 pb-8">Our Purpose</h1>
                        <div className="flex lg:flex-row flex-col justify-between">
                            <p className="lg:w-108 lg:text-base text-xs lg:pb-0 pb-8">To educating and training youths to become better individuals and exemplary Christians, we embark on a comprehensive approach that goes beyond mere academic instruction.</p>
                            <p className="lg:w-108 lg:text-base text-xs">To organize and to guide all youths in spreading the Good News of the Gospel and to actively be involved in working for the good of society through charitable services and helping others.</p>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-8 lg:px-28">
                    <h1 className="lg:text-4xl font-raleway font-bold py-8">TNTT FAQS</h1>
                </section>

            </main >
            <Footer />
        </>
    );
}
