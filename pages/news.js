// pages/index.js
import { createClient } from "next-sanity";
import Nav from "@/components/nav";
import NextLink from "next/link";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";

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
                <iframe src="https://calendar.google.com/calendar/embed?src=jordannguyen704%40gmail.com&ctz=America%2FVancouver" width="800" height="600" frameborder="0" scrolling="no"></iframe>
                <Nav />
                <div className="container px-4 mx-auto max-w-4xl py-10">
                    <h2 className="text-4xl font-bold mb-8 text-center">Latest Posts</h2>
                    {posts.length > 0 ? (
                        <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <li key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                                    <NextLink href={`/news/${post?.slug?.current}`} passHref>
                                        <div className="block cursor-pointer">
                                            {post?.mainImage?.asset && (
                                                <Image
                                                    src={urlFor(post.mainImage.asset).url()}
                                                    alt={post.title}
                                                    width={300}
                                                    height={200}
                                                    className="object-cover w-full h-40 rounded-t-lg"
                                                />
                                            )}
                                            <div className="p-6">
                                                <p className="text-xl font-semibold mb-2">{post?.title}</p>
                                                <p className="text-gray-600">
                                                    {new Date(post?._updatedAt).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric"
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </NextLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center">
                            <p className="text-2xl font-semibold mb-2">No posts to show</p>
                            <div className="mb-4">¯\_(ツ)_/¯</div>
                            <p className="text-gray-600">
                                Your data will show up here when you've configured everything correctly
                            </p>
                        </div>
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
