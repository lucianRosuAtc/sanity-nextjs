import { client } from "@/sanity/lib/client";
import PostList from "./components/PostList";
import Image from "next/image";
import { blogCard } from "./components/interface";
import { urlForImage } from '@/sanity/lib/image'

export const revalidate = 60;

async function getData() {
  const query = `*[_type == "post"] | order(asc){
    title,
      author->{
        name,
        nickname,
      }, 
      "currentSlug": slug.current,
      publishedAt,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url
  }`;
  const data = await client.fetch(query);
  return data;
  // 1) call client to connect the sanity
}

export default async function Home() {
  const data: blogCard[] = await getData();
  console.log(data)
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-6">Next.js + Sanity</h1>
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {data.map((post, idx) => (
        <div key={idx}>
          <Image
            src={urlForImage(post.mainImage).toString()}
            alt='main image'
            width={400}
            height={400}
            className="rounded-t-lg h-[400px] object-cover"
            />
         <p className="text-xl md:text-2xl line-clamp-2 py-3">{post.title}</p>
         <p className="text-xl md:text-2xl line-clamp-2">{post.publishedAt}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

