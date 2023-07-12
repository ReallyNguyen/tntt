import React from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { useIntl } from "react-intl";
import TransitionEffect from "@/components/transitionEffect";
import { motion as m } from 'framer-motion'

export default function Contact({ dir }) {

    const intl = useIntl();
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "b10f91ad-44e8-430b-89a4-2f1a188e0bf2");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            // Redirect to a new page when there is no error
            // window.location.href = "/success-page";
            alert("Your message was successfully submitted. We will get back to you as soon as possible");
        } else {
            console.log(result);
            // Show an alert when there is an error
            alert("Error submitting the form. Please try again.");
        }
    }

    return (
        <>
            <TransitionEffect />
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 1, ease: "easeInOut" }}
            >
                <Nav />
                <main className="lg:px-40 px-4 py-8">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-2xl lg:text-5xl text-center font-raleway font-bold">
                            Send Us A Message!
                        </h1>
                        <p className="font-montserrat text-center lg:text-base text-sm py-7">
                            Please fill this out for general inquiries and we will get back to
                            you.
                        </p>
                    </div>

                    <form className="font-montserrat">
                        <div className="flex flex-col lg:flex-row justify-evenly md:px-28">
                            <section className="flex flex-col justify-between">
                                <div className="lg:w-76 w-full lg:pb-0 pb-4">
                                    <h1 className="lg:text-xl">Full Name</h1>
                                    <input
                                        type="text"
                                        name="name"
                                        className="border-b-2 border-black w-full lg:w-76 bg-lightbg"
                                        required
                                    />
                                </div>
                                <div className="lg:w-76 w-full lg:pb-0 pb-4">
                                    <h1 className="lg:text-xl">Email</h1>
                                    <input
                                        type="email"
                                        name="email"
                                        className="border-b-2 border-black w-full lg:w-76 bg-lightbg"
                                        required
                                    />
                                </div>
                                <div className="lg:w-76 w-full lg:pb-0 pb-4">
                                    <h1 className="lg:text-xl">Phone</h1>
                                    <input
                                        type="phone"
                                        name="phone"
                                        className="border-b-2 border-black w-full lg:w-76 bg-lightbg"
                                    />
                                </div>
                            </section>
                            <section className="lg:pl-10">
                                <div className="flex flex-col justify-between">
                                    <h1 className="lg:text-xl pb-5">Message</h1>
                                    <textarea
                                        name="message"
                                        required
                                        className="resize-none w-full lg:w-92 h-60 border-2 border-black"
                                    ></textarea>
                                </div>
                            </section>
                        </div>
                        <div className="flex justify-center mt-8">
                            <button
                                className="border-2 border-black py-4 px-8 transition-all duration-300 hover:bg-black hover:text-white hover:border-white"
                                type="submit"
                            >
                                Submit Form
                            </button>
                        </div>
                    </form>
                </main>
                <Footer />
            </m.div>
        </>
    );
}
