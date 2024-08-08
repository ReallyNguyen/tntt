// pages/index.js
import { createClient } from "next-sanity";
import Nav from "@/components/nav";
import NextLink from "next/link";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import TransitionEffect from "@/components/transitionEffect";

const urlFor = source =>
    urlBuilder({ projectId: '5fs1b3fp', dataset: 'production' }).image(source);

const client = createClient({
    projectId: "5fs1b3fp",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true
});

export default function News({ posts }) {
    return (
        <>
            <main className="font-montserrat min-h-screen">
                <TransitionEffect />
                <Nav />
                <div className="container px-8 mx-auto xl:px-5 max-w-screen-xl py-5 lg:py-8">
                    <h2 className="text-4xl font-bold mb-16 text-center">Latest Posts</h2>
                    {posts.length > 0 ? (
                        <ul className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <li key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-110">
                                    <NextLink href={`/news/${post?.slug?.current}`} passHref>
                                        <div className="block cursor-pointer h-full">
                                            {post?.mainImage?.asset && (
                                                <Image
                                                    src={urlFor(post.mainImage.asset).url()}
                                                    alt={post.title}
                                                    width={450}
                                                    height={300}
                                                    className="object-cover w-full h-64 rounded-t-lg"
                                                />
                                            )}
                                            <div className="p-8">
                                                <p className="text-2xl font-semibold mb-4">{post?.title}</p>
                                                <p className="text-gray-600 mb-4">
                                                    {new Date(post?._updatedAt).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric"
                                                    })}
                                                </p>
                                                <p className="text-gray-700">{post?.excerpt}</p>
                                            </div>
                                        </div>
                                    </NextLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No posts available.</p>
                    )}
                </div>
            </main>
        </>
    );
}

export async function getStaticProps() {
    const posts = await client.fetch(`*[_type == "post"]`);

    return {
        props: {
            posts
        }
    };
}
