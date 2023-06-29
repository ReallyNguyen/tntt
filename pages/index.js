import React from "react"
import Navbar from "@/components/nav"
import Footer from "@/components/footer";
import Carousel from "@/components/carousel";
import { FormattedMessage, useIntl } from "react-intl";
import Counter from "@/components/counter";
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
    <main className="font-montserrat">
      <Navbar />
      <div className="flex flex-row justify-between px-28 py-8">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <h1 className="text-5xl font-raleway font-bold">Ignite the Spirit</h1>
            <p className="w-98 py-9"> Join TNTT and be part of an extraordinary community! Experience the unique spirit and camaraderie that TNTT offers. Get involved in our exciting activities and make lifelong friendships. Don't miss out on this incredible opportunity. Join TNTT today!</p>
          </div>
          <button className=" bg-red w-72 py-4 rounded-md transform transition-all duration-300 hover:scale-105 hover:bg-red-500">
            <CustomLink href="https://docs.google.com/forms/d/e/1FAIpQLSfSQHe-nDfkHKwMZJ0RSeSlrqnjYMImU9IzRlwUOuuJxJe82w/viewform" messageId="nav.register" className="text-white font-bold" />
          </button>
        </div>
        <Carousel />
      </div>
      {/*Testimonies*/}

      <section className="bg-lightgrey h-132 px-28 py-8">
        <div className="h-full">
          <h1 className="text-5xl font-raleway font-bold text-center pb-10">Testimonies</h1>
          <div className="flex flex-row justify-between">
            {/*Card1*/}
            <div className="bg-white w-88 h-80 p-8">
              <h2 className="text-2xl font-extrabold pb-3">Great community!</h2>
              <p className="pb-3">”Lorem ipsum dolor sit amet consectetur. Eget odio blandit aliquet massa urna sit non gravida. Penatibus pellenteue scelerisque felis viverra lorem amet netus. Arcu rhoncus nibh dictumst ac posuere.”</p>
              <div className="flex items-center">
                <div className="rounded-full h-12 w-12 bg-black"></div>
                <h2 className="pl-5">name name</h2>
              </div>
            </div>
            {/*Card2*/}
            <div className="bg-white w-88 h-80 p-8">
              <h2 className="text-2xl font-extrabold pb-3">Great community!</h2>
              <p className="pb-3">”Lorem ipsum dolor sit amet consectetur. Eget odio blandit aliquet massa urna sit non gravida. Penatibus pellenteue scelerisque felis viverra lorem amet netus. Arcu rhoncus nibh dictumst ac posuere.”</p>
              <div className="flex items-center">
                <div className="rounded-full h-12 w-12 bg-black"></div>
                <h2 className="pl-5">name name</h2>
              </div>
            </div>
            {/*Card3*/}
            <div className="bg-white w-88 h-80 p-8">
              <h2 className="text-2xl font-extrabold pb-3">Great community!</h2>
              <p className="pb-3">”Lorem ipsum dolor sit amet consectetur. Eget odio blandit aliquet massa urna sit non gravida. Penatibus pellenteue scelerisque felis viverra lorem amet netus. Arcu rhoncus nibh dictumst ac posuere.”</p>
              <div className="flex items-center">
                <div className="rounded-full h-12 w-12 bg-black"></div>
                <h2 className="pl-5">name name</h2>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <h1 className="text-center text-3xl font-bold mt-8">Scroll Counter</h1>

          </div>
        </div>
      </section>
      <Counter />
      <Footer />
    </main>

  )
}