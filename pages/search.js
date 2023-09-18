import React from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Division from "@/components/division";
import Card from "@/components/card";
import { FormattedMessage, useIntl } from "react-intl";

export default function Search({ dir }) {
    const intl = useIntl();
    return (
        <>
            <Nav />
            <Division
                header={<FormattedMessage
                    id="division.search"
                />}
                description="Coming soon!"
                smheader="About"
                image="/about/group.jpg"
            />
            {/* Keep for card */}
            {/* <section className=" flex lg:flex-row flex-col lg:px-28 px-8">
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
            </section> */}

            <Footer />
        </>
    )
}