import React from "react";
import Nav from "@/components/nav";
import Image from "next/image";
import Footer from "@/components/footer";
import TransitionEffect from "@/components/transitionEffect";
import { FormattedMessage, useIntl } from "react-intl";
import { motion as m } from 'framer-motion'

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
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 1, ease: "easeInOut" }}
            >
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
                        <div className="flex lg:flex-row flex-col lg:px-16 px-8 lg:pb-28 pb-24 justify-between">
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
                        <div className="grid gap-6">
                            <div className="border border-gray-300 rounded p-6">
                                <h2 className="text-2xl font-semibold mb-4">What’s the difference between VEYM and TNTT?</h2>
                                <p>The Vietnamese Eucharistic Youth Movement (VEYM) is simply the English translation of Thiếu Nhi Thánh Thể (TNTT), which is the original Vietnamese name of our organization.</p>
                            </div>
                            <div className="border border-gray-300 rounded p-6">
                                <h2 className="text-2xl font-semibold mb-4">Can I join VEYM if I am not Vietnamese?</h2>
                                <p>Vietnamese culture and language are an integral part of VEYM, so you would be missing out on a lot when engaging with our lessons and activities.</p>
                            </div>
                            <div className="border border-gray-300 rounded p-6">
                                <h2 className="text-2xl font-semibold mb-4">Do I have to be Catholic?</h2>
                                <p>Nope! But don’t be surprised if you experience a conversion!</p>
                            </div>
                            <div className="border border-gray-300 rounded p-6">
                                <h2 className="text-2xl font-semibold mb-4">What if I attend a different parish, but want to attend VEYM here?</h2>
                                <p>You are absolutely welcome to be a part of VEYM here while remaining a parishioner at your original parish.</p>
                            </div>
                            <div className="border border-gray-300 rounded p-6">
                                <h2 className="text-2xl font-semibold mb-4">Is uniform mandatory?</h2>
                                <p>Yes, the uniform is mandatory as it demonstrates unity in VEYM.</p>
                            </div>
                            <div className="border border-gray-300 rounded p-6">
                                <h2 className="text-2xl font-semibold mb-4">How often do you meet?</h2>
                                <p>We meet regularly every Saturday from 4:30pm-6:30pm, followed by Holy Mass at 7pm.</p>
                            </div>
                            <div className="border border-gray-300 rounded p-6">
                                <h2 className="text-2xl font-semibold mb-4">Do you organize any special events?</h2>
                                <p>Yes! Throughout the year, we participate in the parish through fundraising and performing for events (e.g., dancing, singing, acting), as well as Summer Camp and the occasional out-of-province events with VEYM Canada.</p>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </m.div>
        </>
    );
}
