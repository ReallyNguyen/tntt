import React from "react";
import Nav from "@/components/nav";
import Carousel from "@/components/carousel";
import Counter from "@/components/counter";
import HomeCard from "@/components/homeCard";
import Footer from "@/components/footer";
import TransitionEffect from "@/components/transitionEffect";
import { motion as m } from 'framer-motion'
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
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 1, ease: "easeInOut" }}
      >
        <main className="font-montserrat">
          <Nav />

          <section className="flex flex-col justify-center px-7 lg:px-28 lg:flex-row lg:justify-between">
            <div className="flex flex-col items-center justify-between lg:items-start">
              <div className="flex flex-col text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-raleway font-bold">
                  Ignite the Spirit
                </h1>
                <p className="py-6 lg:py-9 lg:w-96 lg:text-base text-sm">
                  <FormattedMessage id="home.intro" />
                </p>
              </div>
              <div className="pb-8">
                <button className="w-60 lg:w-72 py-4 bg-red rounded-md transform transition-all duration-300 hover:scale-105 hover:bg-red-500">
                  <CustomLink
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfSQHe-nDfkHKwMZJ0RSeSlrqnjYMImU9IzRlwUOuuJxJe82w/viewform"
                    messageId="nav.register"
                    className="text-white font-bold"
                  />
                </button>
              </div>

            </div>

            <div className="flex justify-center lg:py-8 py-6">
              <Carousel />
            </div>
          </section>

          <section className="px-28 py-10">
            <div className="flex lg:flex-row flex-col justify-around">
              {/* Canadian Chapters */}
              <div className="flex flex-col items-center lg:pb-0 pb-8">
                <h2>
                  <Counter endNumber={13} speed={20} />
                </h2>
                <h2 className="text-xs md:text-base">
                  Canadian Chapters
                </h2>
              </div>

              <div className="flex flex-col items-center lg:pb-0 pb-8">
                <h2>
                  <Counter endNumber={1000} speed={10} />
                </h2>
                <h2 className="text-xs md:text-base">
                  Canadian Members
                </h2>
              </div>

              <div className="flex flex-col items-center">
                <h2>
                  <Counter endNumber={90} speed={20} />
                </h2>
                <h2 className="text-xs md:text-base">
                  Doan Members
                </h2>
              </div>
            </div>
          </section>

          <section className="px-28 py-16 flex flex-row flex-wrap items-center justify-center gap-20">
            <HomeCard img="/home/stjoseph.png" name="St Joseph" link="https://stjosephvancouver.ca/" />
            <HomeCard img="/home/veym.webp" name="Veym" link="http://veym.net/" />
            <HomeCard img="/home/pope.png" name="Popes Prayer" link="https://www.popesprayer.va/" />
            <HomeCard img="/home/mej.png" name="Mej International" link="https://www.facebook.com/mej.internacional" />
          </section>

          <section className="px-28 py-8 flex flex-col items-center">
            <div className="flex flex-col items-center">
              <h1 className="lg:text-5xl text-4xl font-raleway font-bold text-center pb-10" >
                Join Us Today!
              </h1>
              <p className="lg:w-144  text-center lg:text-xl text-sm pb-10">
                <FormattedMessage id="home.join" />
              </p>
              <button className="bg-red w-72 py-4 rounded-md transform transition-all duration-300 hover:scale-105 hover:bg-red-500">
                <CustomLink href="https://docs.google.com/forms/d/e/1FAIpQLSfSQHe-nDfkHKwMZJ0RSeSlrqnjYMImU9IzRlwUOuuJxJe82w/viewform" messageId="nav.register" className="text-white font-bold" />
              </button>
            </div>
          </section>

          <Footer dir={dir} />
        </main>
      </m.div>
    </>
  );
}
