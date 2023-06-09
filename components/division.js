import React from "react";
import Image from "next/image";
import TransitionEffect from "@/components/transitionEffect";
import { motion as m } from 'framer-motion'
import { FormattedMessage, useIntl } from "react-intl";

export default function Division(props, { dir }) {

    const { header, smheader, description, image } = props;

    return (
        <>
            <TransitionEffect />
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 1, ease: "easeInOut" }}
            >
                <div className="lg:px-28 px-8 py-8">
                    <h1 className="text-4xl lg:text-5xl font-raleway font-bold text-center lg:pb-20 pb-12">{header}</h1>
                    <section className="hidden lg:flex lg:flex-row lg:justify-between">
                        <div>
                            <h1 className="lg:text-3xl font-raleway font-bold pb-24">{smheader}</h1>
                            <p>{description}</p>
                        </div>
                        <Image src={image} width={578} height={388} />
                    </section>
                    <div className="lg:hidden">
                        <section className="flex flex-col justify-between">
                            <div className="flex justify-center pb-8">
                                <Image src={image} width={578} height={20} />
                            </div>

                            <div>
                                <h1 className="lg:text-3xl font-raleway font-bold pb-8">{smheader}</h1>
                                <p className="pb-16">{description}</p>
                            </div>
                        </section>
                    </div>
                    <section>
                        <h1 className="text-xl lg:text-5xl font-raleway font-bold text-center">Huynh Truong</h1>
                    </section>
                </div>
            </m.div>
        </>
    )
}