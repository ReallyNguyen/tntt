import React from "react";
import TransitionEffect from "@/components/transitionEffect";
import { motion as m } from 'framer-motion'
import Nav from "@/components/nav";
import Card from "@/components/card";
import Footer from "@/components/footer";
import { FormattedMessage, useIntl } from "react-intl";

export default function Team({ dir }) {
    const intl = useIntl();
    return (
        <>
            <TransitionEffect />
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 1, ease: "easeInOut" }}
            >
                <main>
                    <Nav />
                    <h1 className="text-4xl lg:text-5xl font-raleway font-bold text-center">Meet The Team</h1>
                    <section className="flex lg:flex-row flex-col lg:px-28 px-8 py-8 justify-evenly">
                        <Card
                            name="TR. MICHAEL"
                            role={
                                <FormattedMessage
                                    id="michael.role"
                                    defaultMessage="Default Role Text"
                                />
                            }
                            image="/card/michael.JPG"
                        />
                        <Card
                            name="TR. TERESA"
                            role={
                                <FormattedMessage
                                    id="teresa.role"
                                    defaultMessage="Default Role Text"
                                />
                            }
                            image="/card/teresa.JPG"
                        />
                        <Card
                            name="TR. GABRIEL"
                            role={
                                <FormattedMessage
                                    id="gabriel.role"
                                    defaultMessage="Default Role Text"
                                />
                            }
                            image="/card/gabriel.JPG"
                        />
                        <Card
                            name="TR. JESSICA"
                            role={
                                <FormattedMessage
                                    id="jessica.role"
                                    defaultMessage="Default Role Text"
                                />
                            }
                            image="/card/jessica.JPG"
                        />
                        <Card
                            name="TR. ROSA"
                            role={
                                <FormattedMessage
                                    id="rosa.role"
                                    defaultMessage="Default Role Text"
                                />
                            }
                            image="/card/rosa.JPG"
                        />
                    </section>

                    <Footer />
                </main>
            </m.div>
        </>
    )
}