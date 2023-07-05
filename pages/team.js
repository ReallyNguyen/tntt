import React from "react";
import Nav from "@/components/nav";
import Card from "@/components/card";
import Footer from "@/components/footer";

export default function Team() {
    return (
        <>
            <main>
                <Nav />

                <section className="flex flex-row px-28 py-8">
                    <Card
                        name="TR. MICHAEL"
                        role="Chapter President"
                        image="/card/michael.JPG"
                    />

                    <Card
                        name="TR. GABRIEL"
                        role="Vice President of Training"
                        image="/card/gabriel.JPG"
                    />

                    <Card
                        name="TR. TERESA"
                        role="Vice President of Administration"
                        image="/card/teresa.JPG"
                    />

                    <Card
                        name="TR. JESSICA"
                        role="Chapter Secretary"
                        image="/card/jessica.JPG"
                    />

                    <Card
                        name="TR. ROSA"
                        role="Chapter Treasurer"
                        image="/card/rosa.JPG"
                    />

                </section>

                <Footer />
            </main>
        </>
    )
}