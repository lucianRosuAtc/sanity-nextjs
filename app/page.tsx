import { client } from "@/sanity/lib/client";
import PostList from "./components/PostList";
import Image from "next/image";
import { blogCard } from "./components/interface";
import { urlForImage } from '@/sanity/lib/image'
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const revalidate = 60;

async function getData() {
  const query = `*[_type == "post"] | order(desc){
    title,
      author->{
        name,
        nickname,
      }, 
      "currentSlug": slug.current,
      publishedAt,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      "alt": mainImage.alt
      "text": body[0].children[0].text,
    }`;
    
  const data = await client.fetch(query);
  return data;

  // 1) call client to connect the sanity
}

export default async function Home() {
  const data: blogCard[] = await getData();
  console.log(data)
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <h1 className="my-6 text-xl md:text-2xl">Next.js + Sanity</h1>
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {data.map((post, idx) => (
        <div key={idx} className="border p-4 rounded-xl max-w-[400px]">
          <Image
            // src={urlForImage(post.mainImage).toString()}
            src={post.mainImage}
            alt={post.alt}
            width={400}
            height={400}
            className="rounded-t-lg h-[400px] object-cover"
            />
         <p className="text-xl md:text-2xl line-clamp-2 py-3 font-bold">{post.title}</p>
         <p className="text-xl md:text-2xl line-clamp-2 py-3 font-semibold">{post.categories}</p>
         <p className="text-sm md:text-base line-clamp-3 py-3 ">{post.text}</p>
         <p className="text-xl md:text-2xl line-clamp-2 py-3">author: {post.author.name}({post.author.nickname})</p>
         <p className="text-sm md:text-base text-wrap">published at: {post.publishedAt}</p>
         <Button asChild className="w-full mt-7">
          <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
          </Button>
        </div>
      ))}
      </div>
    </div>
  );
}

