// Import necessary modules
import { createClient } from "next-sanity";
import Image from "next/image";
import urlBuilder from "@sanity/image-url";

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
        <div className="max-w-2xl mx-auto mt-8 p-4">
            {/* Display the post title */}
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

            {/* Render the HTML content of the post */}

            {/* Display the main image of the post if available */}
            {post?.mainImage?.asset && (
                <div className="mt-8">
                    <Image
                        src={urlFor(post.mainImage.asset).url()}
                        alt={post.title}
                        width={200}
                        height={100}
                        className="rounded-lg"
                    />
                </div>
            )}

            <div className="prose" dangerouslySetInnerHTML={{ __html: post.body[0].children[0].text }} />
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
