// Import necessary modules
import { createClient } from "next-sanity";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import Nav from "@/components/nav";
import TransitionEffect from "@/components/transitionEffect";
import { PortableText } from "@portabletext/react";

// Create a Sanity client instance
const client = createClient({
    projectId: "5fs1b3fp",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true
});

// Function to build URLs for Sanity images
const urlFor = source =>
    urlBuilder({ projectId: '5fs1b3fp', dataset: 'production' }).image(source);

// React component to display a single post
export default function Post({ post }) {
    return (
        <div className="font-montserrat min-h-screen bg-gray-50">
            <TransitionEffect />
            <Nav />
            <div className="max-w-2xl mx-auto mt-16 p-4">
                {/* Display the post title */}
                <h1 className="text-4xl font-black mb-4 text-center">{post.title}</h1>

                {/* Display the publication date */}
                <p className="text-gray-500 text-center mb-8">
                    {new Date(post._updatedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}
                </p>

                {/* Display the main image of the post if available */}
                {post?.mainImage?.asset && (
                    <div className="my-8 flex justify-center">
                        <Image
                            src={urlFor(post.mainImage.asset).url()}
                            alt={post.title}
                            width={800} // Increase width
                            height={533} // Adjust height proportionally
                            className="rounded-lg"
                        />
                    </div>
                )}

                {/* Render the HTML content of the post */}
                <div className="prose prose-lg max-w-none">

                    <PortableText
                        value={post.body}
                    />
                </div>
            </div>
        </div>
    );
}

// Fetch static paths for all posts
export async function getStaticPaths() {
    // Fetch all posts from the Sanity dataset
    const posts = await client.fetch(`*[_type == "post"]`);

    // Create an array of paths for each post's slug
    const paths = posts.map((post) => ({
        params: { slug: post?.slug?.current || "no-slug" } // Use "no-slug" as a fallback
    }));

    // Return the paths and set fallback to "blocking"
    return { paths, fallback: "blocking" };
}

// Fetch static props for a specific post based on its slug
export async function getStaticProps({ params }) {
    // Destructure the slug from the parameters
    const { slug } = params;

    // Fetch the post with the matching slug
    const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug });

    // Return the post as props
    return {
        props: {
            post
        }
    };
}
