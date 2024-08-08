import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
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
                    <Tabs>
                        <TabList>
                            <Tab>Tab 1</Tab>
                            <Tab>Tab 2</Tab>
                            <Tab>Tab 3</Tab>
                        </TabList>
                        <TabPanel>Content for Tab 1</TabPanel>
                        <TabPanel>Content for Tab 2</TabPanel>
                        <TabPanel>Content for Tab 3</TabPanel>
                    </Tabs>
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
                                <p className="text-base mt-4 leading-relaxed">
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

                    <Tabs className="px-8 py-6 lg:px-28">
                        <TabList className="flex flex-row">
                            <Tab>
                                <button className="m-5 p-5">English</button>
                            </Tab>
                            <Tab>
                                <button className="m-5 p-5">Vietnamese</button>
                            </Tab>
                        </TabList>
                        <TabPanel>
                            {/* Mission Section */}
                            <section className="py-12">
                                <div className="lg:flex lg:flex-row lg:justify-between">
                                    <div className="lg:w-1/2">
                                        <h2 className="text-2xl lg:text-4xl font-bold py-8">Our Mission</h2>
                                        <p className="leading-relaxed">
                                            At VEYM, we strive to empower the next generation by nurturing their spiritual growth and guiding them to become compassionate Christians and responsible global citizens. Our mission revolves around instilling core values such as love, integrity, and empathy, while fostering a deep connection with Jesus Christ. Through our transformative programs, we aim to inspire positive life changes and a commitment to serving others.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="py-12">
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
                            <section className="py-12">
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
                            <section className="py-8">
                                <h2 className="text-2xl lg:text-4xl font-bold py-8">VEYM FAQs</h2>
                                <div className="grid gap-8 lg:grid-cols-2">
                                    <div className="border border-gray-300 rounded p-6">
                                        <h3 className="text-lg lg:text-xl font-semibold mb-4"><FormattedMessage id="faq.1" /></h3>
                                        <p className="text-base lg:text-lg leading-relaxed"><FormattedMessage id="faq.1a" /></p>
                                    </div>
                                    <div className="border border-gray-300 rounded p-6">
                                        <h3 className="text-lg lg:text-xl font-semibold mb-4"><FormattedMessage id="faq.2" /></h3>
                                        <p className="text-base lg:text-lg leading-relaxed"><FormattedMessage id="faq.2a" /></p>
                                    </div>
                                    <div className="border border-gray-300 rounded p-6">
                                        <h3 className="text-lg lg:text-xl font-semibold mb-4"><FormattedMessage id="faq.3" /></h3>
                                        <p className="text-base lg:text-lg leading-relaxed"><FormattedMessage id="faq.3a" /></p>
                                    </div>
                                    <div className="border border-gray-300 rounded p-6">
                                        <h3 className="text-lg lg:text-xl font-semibold mb-4"><FormattedMessage id="faq.4" /></h3>
                                        <p className="text-base lg:text-lg leading-relaxed"><FormattedMessage id="faq.4a" /></p>
                                    </div>
                                    <div className="border border-gray-300 rounded p-6">
                                        <h3 className="text-lg lg:text-xl font-semibold mb-4"><FormattedMessage id="faq.5" /></h3>
                                        <p className="text-base lg:text-lg leading-relaxed"><FormattedMessage id="faq.5a" /></p>
                                    </div>
                                    <div className="border border-gray-300 rounded p-6">
                                        <h3 className="text-lg lg:text-xl font-semibold mb-4"><FormattedMessage id="faq.6" /></h3>
                                        <p className="text-base lg:text-lg leading-relaxed"><FormattedMessage id="faq.6a" /></p>
                                    </div>
                                    <div className="border border-gray-300 rounded p-6">
                                        <h3 className="text-lg lg:text-xl font-semibold mb-4"><FormattedMessage id="faq.7" /></h3>
                                        <p className="text-base lg:text-lg leading-relaxed"><FormattedMessage id="faq.7a" /></p>
                                    </div>
                                </div>
                            </section>

                        </TabPanel>
                        <TabPanel>Content for Tab 2</TabPanel>
                        <TabPanel>Content for Tab 3</TabPanel>
                    </Tabs>

                    <Footer />
                </main>
            </m.div>
        </>

    );
}
