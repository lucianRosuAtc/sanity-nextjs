import { client } from "@/sanity/lib/client";
import PostList from "./components/PostList";
import Image from "next/image";
import { blogCard } from "./components/interface";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const revalidate = 60;

async function getData() {
  const query = `*[_type == "post"] | order(desc){
    title,
      author->{
        name,
        nickname,
        "authorImg": image.asset->url,
      }, 
      "currentSlug": slug.current,
      publishedAt,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      "alt": mainImage.alt,
      "text": body[0].children[0].text,
    }`;

  const data = await client.fetch(query);
  return data;

  // 1) call client to connect the sanity
}

export default async function Home() {
  const data: blogCard[] = await getData();
  // console.log(data)
  return (
    <div className="flex flex-col justify-center items-center px-4 mx-auto">
      <h1 className="my-8 text-xl md:text-4xl font-bold">Next.js & Sanity</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((post, idx) => (
          <div key={idx} className="border-2 p-4 rounded-xl max-w-[400px]">
            <Image
              src={post.mainImage}
              alt={post.alt}
              width={400}
              height={400}
              className="rounded-t-lg h-[350px] object-cover"
            />
            <p className="text-lg md:text-2xl line-clamp-2 py-3 font-bold">
              {post.title}
            </p>
            <p className="text-lg md:text-2xl line-clamp-2 py-6 font-semibold">
              category: {post.categories}
            </p>
            <p className="text-sm md:text-base line-clamp-3 py-3 border-b-2">
              {post.text}
            </p>
            <div className="border-2 mt-3 rounded-lg">
              <div className="p-2">
                <div className="flex items-center py-3">
                  <p className="text-lg md:text-2xl">author: </p>
                  <Image
                    src={post.author.authorImg}
                    alt={post.author.name}
                    width={60}
                    height={60}
                    className="rounded-full mx-2 border border-gray-200 p-1 object-contain"
                  />
                  <p className="text-lg md:text-2xl">
                    {post.author.name}({post.author.nickname})
                  </p>
                </div>

                {/* diffrent data DateTimeFormat */}

                {/* <p className="text-sm md:text-base text-wrap">
                  published at:{" "}
                  {new Date(post.publishedAt)
                    .toISOString()
                    .split(".")[0]
                    .slice(0, -3)
                    .replace("T", " T: ")}
                </p> */}
                <p className="text-sm md:text-base text-wrap">
                  published at:{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }).format(new Date(post.publishedAt))}
                </p>
              </div>
            </div>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
