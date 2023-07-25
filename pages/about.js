import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import TransitionEffect from "@/components/transitionEffect";
import { motion as m } from 'framer-motion'
import { FormattedMessage } from "react-intl";

const CustomLink = ({ href, messageId, className = "" }) => {
    return (
        <Link href={href} className={className}>
            <FormattedMessage id={messageId} />
        </Link>
    );
};

export default function Home({ dir }) {
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
                    {/* Header */}
                    <header className="py-12 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold">
                            <FormattedMessage id="overview.who" />
                        </h1>
                    </header>

                    {/* About Section */}
                    <section className="px-8 py-6 lg:px-28">
                        <div className="lg:flex lg:flex-row-reverse flex flex-col-reverse">
                            <div className="lg:w-2/3 lg:px-8">
                                <p className="text-base leading-relaxed">
                                    VEYM stands for Phong Trào Thiếu Nhi Thánh Thể Việt Nam (TNTT),
                                    which is translated as "The Vietnamese Eucharistic Youth
                                    Movement." It is a Catholic youth organization for Vietnamese
                                    youth, following the spirituality of the Eucharist. VEYM aims to
                                    educate and form Vietnamese youth to become holy Christians and to
                                    evangelize and contribute to society through youth apostolate.
                                </p>
                                <p className="text-base mt-4 leading-relaxed">
                                    The structure of VEYM consists of three levels: National
                                    Headquarters, Leagues of Chapters (corresponding to regions or
                                    provinces), and Chapters (typically at the parish level). Within
                                    chapters, there are four divisions based on age: Ấu Nhi (ages
                                    5-9), Thiếu Nhi (ages 10-12), Nghĩa Sĩ (ages 13-15), and Hiệp Sĩ
                                    (ages 16-17).
                                </p>
                                <p className="text-base mt-4 leading-relaxed">
                                    The leadership of VEYM consists of Youth Leaders and Lay Chaplain
                                    Assistants, who are trained and appointed to their roles. The
                                    chaplains provide spiritual guidance and oversee the Christian
                                    formation of VEYM members.
                                </p>
                            </div>
                            <div className=" sm:mb-8 md:mb-8 lg:mt-0 flex justify-center">
                                <Image src="/about/group.jpg" alt="VEYM Group" width={785} height={575} />
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded p-4 mt-8">
                            <p className="italic text-gray-700">
                                <FormattedMessage id="overview.quote" />
                            </p>
                            <span className="block text-right text-gray-500 text-sm mt-2">
                                - <FormattedMessage id="veym" />
                            </span>
                        </div>
                    </section>

                    {/* Mission Section */}
                    <section className="px-8 py-12 lg:px-32">
                        <div className="lg:flex lg:flex-row lg:justify-between">
                            <div className="lg:w-1/2">
                                <h2 className="text-2xl lg:text-4xl font-bold py-8">Our Mission</h2>
                                <p className="leading-relaxed">
                                    At VEYM, we strive to empower the next generation by nurturing their spiritual growth and guiding them to become compassionate Christians and responsible global citizens. Our mission revolves around instilling core values such as love, integrity, and empathy, while fostering a deep connection with Jesus Christ. Through our transformative programs, we aim to inspire positive life changes and a commitment to serving others.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="px-8 py-12 lg:px-32">
                        <div className="lg:w-1/2 mt-8 lg:mt-0">
                            <h2 className="text-2xl lg:text-4xl font-bold py-8">Our Purpose</h2>
                            <div className="lg:flex lg:flex-row lg:justify-between">
                                <div className="lg:w-1/2">
                                    <p className="leading-relaxed">
                                        <FormattedMessage id="propose.1" />
                                    </p>
                                </div>
                                <div className="lg:w-1/2 mt-4 lg:mt-0">
                                    <p className="leading-relaxed">
                                        <FormattedMessage id="propose.2" />
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-xl font-bold">In summary, the main purposes of VEYM are:</h3>
                                <ul className="list-disc list-inside mt-4 leading-relaxed">
                                    <li>To nurture and guide youth to embody holiness and virtue</li>
                                    <li>To evangelize and contribute to building a more compassionate society through youth apostolate</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Our Foundation Section */}
                    <section className="px-8 py-12 lg:px-32">
                        <h2 className="text-2xl lg:text-4xl font-bold py-8">Our Foundation</h2>
                        <p className="text-lg leading-relaxed pb-4">
                            <FormattedMessage id="foundation" />
                        </p>
                        <p>In summary, VEYM's foundations are:</p>
                        <ul className="list-disc list-inside mt-4 leading-relaxed">
                            <li>The Word of God in the Bible</li>
                            <li>The teachings and doctrines of the Catholic Church</li>
                        </ul>
                        <p className="mt-4 leading-relaxed">
                            These provide the basis for educating and guiding youth in VEYM's activities and programs.
                        </p>
                    </section>


                    {/* FAQs Section */}
                    <section className="px-4 py-8 lg:px-28">
                        <h2 className="text-2xl lg:text-4xl font-bold py-8">VEYM FAQs</h2>
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div className="border border-gray-300 rounded p-6">
                                <h3 className="text-lg lg:text-xl font-semibold mb-4">What’s the difference between VEYM and TNTT?</h3>
                                <p className="text-base lg:text-lg leading-relaxed">The Vietnamese Eucharistic Youth Movement (VEYM) is simply the English translation of Thiếu Nhi Thánh Thể (TNTT), which is the original Vietnamese name of our organization.</p>
                            </div>
                            <div className="border border-gray-300 rounded p-6">
                                <h3 className="text-lg lg:text-xl font-semibold mb-4">Can I join VEYM if I am not Vietnamese?</h3>
                                <p className="text-base lg:text-lg leading-relaxed">Vietnamese culture and language are an integral part of VEYM, so you would be missing out on a lot when engaging with our lessons and activities.</p>
                            </div>
                            <div className="border border-gray-300 rounded p-6">
                                <h3 className="text-lg lg:text-xl font-semibold mb-4">Do I have to be Catholic?</h3>
                                <p className="text-base lg:text-lg leading-relaxed">Nope! But don’t be surprised if you experience a conversion!</p>
                            </div>
                            <div className="border border-gray-300 rounded p-6">
                                <h3 className="text-lg lg:text-xl font-semibold mb-4">What if I attend a different parish, but want to attend VEYM here?</h3>
                                <p className="text-base lg:text-lg leading-relaxed">You are absolutely welcome to be a part of VEYM here while remaining a parishioner at your original parish.</p>
                            </div>
                            <div className="border border-gray-300 rounded p-6">
                                <h3 className="text-lg lg:text-xl font-semibold mb-4">Is uniform mandatory?</h3>
                                <p className="text-base lg:text-lg leading-relaxed">Yes, the uniform is mandatory as it demonstrates unity in VEYM.</p>
                            </div>
                            <div className="border border-gray-300 rounded p-6">
                                <h3 className="text-lg lg:text-xl font-semibold mb-4">How often do you meet?</h3>
                                <p className="text-base lg:text-lg leading-relaxed">We meet regularly every Saturday from 4:30pm-6:30pm, followed by Holy Mass at 7pm.</p>
                            </div>
                            <div className="border border-gray-300 rounded p-6">
                                <h3 className="text-lg lg:text-xl font-semibold mb-4">Do you organize any special events?</h3>
                                <p className="text-base lg:text-lg leading-relaxed">Yes! Throughout the year, we participate in the parish through fundraising and performing for events (e.g., dancing, singing, acting), as well as Summer Camp and the occasional out-of-province events with VEYM Canada.</p>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </main>
            </m.div>
        </>

    );
}
