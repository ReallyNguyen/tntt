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

      <div className="flex flex-col justify-center px-28 py-8 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center justify-between lg:items-start">
          <div className="flex flex-col text-center lg:text-left">
            <h1 className="text-5xl font-raleway font-bold">Ignite the Spirit</h1>
            <p className="py-9 lg:w-96 w-112">Join TNTT and be part of an extraordinary community! Experience the unique spirit and camaraderie that TNTT offers. Get involved in our exciting activities and make lifelong friendships. Don't miss out on this incredible opportunity. Join TNTT today!</p>
          </div>
          <button className="w-72 py-4 bg-red rounded-md transform transition-all duration-300 hover:scale-105 hover:bg-red-500">
            <CustomLink href="https://docs.google.com/forms/d/e/1FAIpQLSfSQHe-nDfkHKwMZJ0RSeSlrqnjYMImU9IzRlwUOuuJxJe82w/viewform" messageId="nav.register" className="text-white font-bold" />
          </button>
        </div>

        <div className="flex justify-center py-8 lg:py-0">
          <Carousel />
        </div>

      </div>

      {/*Testimonies*/}

      <section className="bg-lightgrey px-28 py-12">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-raleway font-bold">Testimonies</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card1 */}
            <div className="bg-white h-full p-8 rounded-lg shadow">
              <h2 className="text-2xl font-extrabold pb-3">Great community!</h2>
              <p className="pb-3">
                "Lorem ipsum dolor sit amet consectetur. Eget odio blandit aliquet massa urna sit non gravida. Penatibus pellenteue scelerisque felis viverra lorem amet netus. Arcu rhoncus nibh dictumst ac posuere."
              </p>
              <div className="flex items-center">
                <div className="rounded-full h-12 w-12 bg-black"></div>
                <h2 className="pl-5">name name</h2>
              </div>
            </div>
            {/* Card2 */}
            <div className="bg-white h-full p-8 rounded-lg shadow">
              <h2 className="text-2xl font-extrabold pb-3">Great community!</h2>
              <p className="pb-3">
                "Lorem ipsum dolor sit amet consectetur. Eget odio blandit aliquet massa urna sit non gravida. Penatibus pellenteue scelerisque felis viverra lorem amet netus. Arcu rhoncus nibh dictumst ac posuere."
              </p>
              <div className="flex items-center">
                <div className="rounded-full h-12 w-12 bg-black"></div>
                <h2 className="pl-5">name name</h2>
              </div>
            </div>
            {/* Card3 */}
            <div className="bg-white h-full p-8 rounded-lg shadow">
              <h2 className="text-2xl font-extrabold pb-3">Great community!</h2>
              <p className="pb-3">
                "Lorem ipsum dolor sit amet consectetur. Eget odio blandit aliquet massa urna sit non gravida. Penatibus pellenteue scelerisque felis viverra lorem amet netus. Arcu rhoncus nibh dictumst ac posuere."
              </p>
              <div className="flex items-center">
                <div className="rounded-full h-12 w-12 bg-black"></div>
                <h2 className="pl-5">name name</h2>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="px-28 py-10">
        <div className="flex flex-row justify-around">
          {/*canadian chapters*/}
          <div className="flex flex-col items-center">
            <h2>
              <Counter endNumber={13} speed={940} /> {/* Slow counting */}
            </h2>
            <h2>
              canadian chapters
            </h2>
          </div>

          <div className="flex flex-col items-center">
            <h2>
              <Counter endNumber={1000} speed={10} /> {/* Fast counting */}
            </h2>
            <h2>
              canadian members
            </h2>

          </div>

          <div className="flex flex-col items-center">
            <h2>
              <Counter endNumber={90} speed={130} /> {/* Medium counting */}
            </h2>
            <h2>
              doan members
            </h2>
          </div>
        </div>
      </section>

      <section className="px-28 py-8 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-raleway font-bold text-center pb-10" >
            Join Us Today!
          </h1>
          <p className="w-144 text-center text-xl pb-10">
            Join us today for a transformative journey of faith, growth, and community. Strengthen beliefs, connect with Jesus, contribute to society, embrace Vietnamese culture, unite in prayer, and experience the joy of spiritual growth.
          </p>
          <button className=" bg-red w-72 py-4 rounded-md transform transition-all duration-300 hover:scale-105 hover:bg-red-500">
            <CustomLink href="https://docs.google.com/forms/d/e/1FAIpQLSfSQHe-nDfkHKwMZJ0RSeSlrqnjYMImU9IzRlwUOuuJxJe82w/viewform" messageId="nav.register" className="text-white font-bold" />
          </button>
        </div>
      </section>

      <Footer />
    </main>

  )
}