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
  //1 call client to connect the sanity
}

export default async function Home() {
  const data: blogCard[] = await getData();
  console.log(data)
  return (
    <div className="flex flex-col justify-center">
      <h1>Next.js + Sanity</h1>
      {data.map((post, idx) => (
        <div key={idx}>
          <Image
            src={urlForImage(post.mainImage).toString()}
            alt='main image'
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}
