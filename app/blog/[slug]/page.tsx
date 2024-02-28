import { fullBlogCard } from "@/app/components/interface";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
// import {PortableText} from '@portabletext/react'



export const revalidate = 60; 

async function getData(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"]{
      "currentSlug": slug.current,
      title,
      "text": body[0].children[0].text,
      "mainImage": mainImage.asset->url,
      "alt": mainImage.alt,
    }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlogCard = await getData(params.slug);
  console.log(data);
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="flex items-center justify-center text-2xl md:text-4xl font-bold  py-5">
        <span className="text-primary">L</span>u
        <span className="text-primary">c</span>&apos;s
        <span className="text-primary pl-3">b</span>l
        <span className="text-primary">o</span>g
      </h1>
      <span className="mt-2 block text-xl md:text-3xl text-center leading-8 font-semibold tracking-tite sm:text-4xl">
        {data.title}
      </span>
      <Image
        src={data.mainImage}
        alt={data.alt}
        width={800}
        height={800}
        priority
        className="rounded-lg h-[400px] object-cover mx-auto p-1 border-2 border-primary mt-8"
      />
      <div className=" ">
        <p className="mt-8 text-sm md:text-base leading-8 -tracking-tight text-wrap max-w-4xl text-center">
          {/* <PortableText value={data.text} />  */}

          {data.text}
        
        </p>
      </div>
    </div>
  );
}
