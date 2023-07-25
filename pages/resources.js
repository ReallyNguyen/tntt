import React from "react"
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import TransitionEffect from "@/components/transitionEffect";
import { FormattedMessage, useIntl } from "react-intl";
import { motion as m } from 'framer-motion'

export default function Resources({ dir }) {
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
                    <h1 className="text-4xl lg:text-5xl text-center font-raleway font-bold pb-8">Resources</h1>
                    <div className="flex flex-col justify-center lg:px-32 py-8 px-8" >

                        <div className="hidden lg:flex flex-col">
                            <section className="flex flex-row pb-16">
                                <Image src="/resource/stjoseph.png" width={600} height={600} />
                                <div className="flex flex-col justify-between">
                                    <div className="pl-36">
                                        <h1 className="text-3xl font-raleway pb-10">St Joseph Parish</h1>
                                        <p className="w-full"><FormattedMessage id="resource.veym" /></p>
                                    </div>
                                    <Link href="https://stjosephvancouver.ca/" target="_blank" rel="noopener noreferrer" className="pl-36">
                                        <button className=" flex flex-start border-2 border-black py-4 px-8 transition-all duration-300 hover:bg-black hover:text-white hover:border-white">Learn More</button>
                                    </Link>
                                </div>
                            </section>
                        </div>

                        <div className="lg:hidden flex">
                            <section className="flex flex-col pb-16">
                                <h1 className="text-3xl font-raleway pb-10">St Joseph Parish</h1>
                                <div className="pb-8">
                                    <Image src="/resource/stjoseph.jpg" width={600} height={600} />
                                </div>

                                <div className="flex flex-col justify-between">
                                    <div>
                                        <p className="w-68 pb-8"><FormattedMessage id="resource.joseph" /></p>
                                    </div>
                                    <Link href="https://stjosephvancouver.ca/" target="_blank" rel="noopener noreferrer">
                                        <button className=" flex flex-start border-2 border-black py-4 px-8 transition-all duration-300 hover:bg-black hover:text-white hover:border-white">Learn More</button>
                                    </Link>
                                </div>
                            </section>
                        </div>

                        {/* VEYM */}

                        <div className="hidden lg:flex flex-col">
                            <section className="flex flex-row pb-16">
                                <Image src="/resource/veym.png" width={600} height={600} />
                                <div className="flex flex-col justify-between">
                                    <div className="pl-36">
                                        <h1 className="text-3xl font-raleway pb-10">VEYM</h1>
                                        <p className="w-68"><FormattedMessage id="resource.veym" /></p>
                                    </div>
                                    <Link href="https://stjosephvancouver.ca/" target="_blank" rel="noopener noreferrer" className="pl-36">
                                        <button className=" flex flex-start border-2 border-black py-4 px-8 transition-all duration-300 hover:bg-black hover:text-white hover:border-white">Learn More</button>
                                    </Link>
                                </div>
                            </section>
                        </div>

                        <div className="lg:hidden flex">
                            <section className="flex flex-col pb-16">
                                <h1 className="text-3xl font-raleway pb-10">VEYM</h1>
                                <div className="pb-8">
                                    <Image src="/resource/veym.png" width={600} height={600} />
                                </div>

                                <div className="flex flex-col justify-between">
                                    <div>
                                        <p className="w-68 pb-8">To learn more about TNTT in Canada, visit their website by clicking on "learn more" below.</p>
                                    </div>
                                    <Link href="https://stjosephvancouver.ca/" target="_blank" rel="noopener noreferrer">
                                        <button className=" flex flex-start border-2 border-black py-4 px-8 transition-all duration-300 hover:bg-black hover:text-white hover:border-white">Learn More</button>
                                    </Link>
                                </div>
                            </section>
                        </div>

                    </div >
                    <Footer />
                </main >
            </m.div>
        </>


    )
}