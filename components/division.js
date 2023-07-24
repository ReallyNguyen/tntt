import React from "react";
import Image from "next/image";
import TransitionEffect from "@/components/transitionEffect";
import { motion as m } from "framer-motion";
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
                className="lg:px-28 px-8 py-8"
            >
                <h1 className="text-4xl lg:text-5xl font-raleway font-bold text-center lg:pb-20 pb-12">
                    {header}
                </h1>
                <section className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="lg:w-1/2">
                        <h1 className="lg:text-3xl font-raleway font-bold pb-8">{smheader}</h1>
                        <p className="pb-8">{description}</p>
                    </div>
                    <div className="lg:w-1/2 lg:pl-16">
                        <Image src={image} width={578} height={388} />
                    </div>
                </section>

                <section>
                    <h1 className="text-xl lg:text-5xl font-raleway font-bold text-center py-16">
                        Huynh Truong
                    </h1>
                </section>

            </m.div>
        </>
    );
}
