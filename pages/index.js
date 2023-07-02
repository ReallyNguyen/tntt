import React from "react";
import Nav from "@/components/nav";
import Carousel from "@/components/carousel";
import Counter from "@/components/counter";
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
                  Join TNTT and be part of an extraordinary community! Experience
                  the unique spirit and camaraderie that TNTT offers. Get involved
                  in our exciting activities and make lifelong friendships. Don't
                  miss out on this incredible opportunity. Join TNTT today!
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

          {/* Testimonies */}

          <section className="bg-lightgrey px-4 py-8 lg:px-28 lg:py-12">
            <div className="container mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl lg:text-5xl font-raleway font-bold">
                  Testimonies
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card1 */}
                <div className="bg-white h-full p-6 lg:p-8 rounded-lg shadow">
                  <h2 className="text-2xl font-extrabold pb-2">Great community!</h2>
                  <p className="pb-2">
                    "Lorem ipsum dolor sit amet consectetur. Eget odio blandit
                    aliquet massa urna sit non gravida. Penatibus pellenteue
                    scelerisque felis viverra lorem amet netus. Arcu rhoncus nibh
                    dictumst ac posuere."
                  </p>
                  <div className="flex items-center">
                    <div className="rounded-full h-8 w-8 lg:h-12 lg:w-12 bg-black"></div>
                    <h2 className="pl-3 lg:pl-5">name name</h2>
                  </div>
                </div>
                {/* Card2 */}
                <div className="bg-white h-full p-6 lg:p-8 rounded-lg shadow">
                  <h2 className="text-2xl font-extrabold pb-2">Great community!</h2>
                  <p className="pb-2">
                    "Lorem ipsum dolor sit amet consectetur. Eget odio blandit
                    aliquet massa urna sit non gravida. Penatibus pellenteue
                    scelerisque felis viverra lorem amet netus. Arcu rhoncus nibh
                    dictumst ac posuere."
                  </p>
                  <div className="flex items-center">
                    <div className="rounded-full h-8 w-8 lg:h-12 lg:w-12 bg-black"></div>
                    <h2 className="pl-3 lg:pl-5">name name</h2>
                  </div>
                </div>
                {/* Card3 */}
                <div className="bg-white h-full p-6 lg:p-8 rounded-lg shadow">
                  <h2 className="text-2xl font-extrabold pb-2">Great community!</h2>
                  <p className="pb-2">
                    "Lorem ipsum dolor sit amet consectetur. Eget odio blandit
                    aliquet massa urna sit non gravida. Penatibus pellenteue
                    scelerisque felis viverra lorem amet netus. Arcu rhoncus nibh
                    dictumst ac posuere."
                  </p>
                  <div className="flex items-center">
                    <div className="rounded-full h-8 w-8 lg:h-12 lg:w-12 bg-black"></div>
                    <h2 className="pl-3 lg:pl-5">name name</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-28 py-10">
            <div className="flex lg:flex-row flex-col justify-around">
              {/* Canadian Chapters */}
              <div className="flex flex-col items-center lg:pb-0 pb-8">
                <h2>
                  <Counter endNumber={13} speed={940} /> {/* Slow counting */}
                </h2>
                <h2>
                  Canadian Chapters
                </h2>
              </div>

              <div className="flex flex-col items-center lg:pb-0 pb-8">
                <h2>
                  <Counter endNumber={1000} speed={10} /> {/* Fast counting */}
                </h2>
                <h2>
                  Canadian Members
                </h2>
              </div>

              <div className="flex flex-col items-center">
                <h2>
                  <Counter endNumber={90} speed={130} /> {/* Medium counting */}
                </h2>
                <h2>
                  Doan Members
                </h2>
              </div>
            </div>
          </section>

          <section className="px-28 py-8 flex flex-col items-center">
            <div className="flex flex-col items-center">
              <h1 className="lg:text-5xl text-4xl font-raleway font-bold text-center pb-10" >
                Join Us Today!
              </h1>
              <p className="lg:w-144  text-center lg:text-xl text-sm pb-10">
                Join us today for a transformative journey of faith, growth, and community. Strengthen beliefs, connect with Jesus, contribute to society, embrace Vietnamese culture, unite in prayer, and experience the joy of spiritual growth.
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
