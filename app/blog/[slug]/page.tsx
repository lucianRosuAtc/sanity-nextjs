import { fullBlogCard } from "@/app/components/interface";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 60;

async function getData(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"]{
      "currentSlug": slug.current,
      title,
      "text": body[0].children[0].text,
      "mainImage": mainImage.asset->url,
      "alt": mainImage.alt,
      publishedAt,
      author->{
        name,
        nickname,
        "authorImg": image.asset->url,
      },
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
  // console.log(data);
  return (
    <div className="max-w-3xl mx-auto mt-8 px-4 text-wrap">
      <h1 className="flex items-center justify-center text-2xl md:text-4xl font-bold py-5">
        <span className="text-primary">L</span>u
        <span className="text-primary">c</span>&apos;s
        <span className="text-primary pl-3">b</span>l
        <span className="text-primary">o</span>g
      </h1>
      <h2 className="mt-2 block text-xl md:text-3xl text-center leading-8 font-semibold tracking-tite sm:text-4xl">
        {data.title}
      </h2>
      <Image
        src={data.mainImage}
        alt={data.alt}
        width={800}
        height={800}
        priority
        className="rounded-lg h-[400px] object-cover mx-auto p-1 border-2 border-primary mt-8 "
      />

      <p className="text-sm md:text-lg pt-6">
        published at:{" "}
        {new Intl.DateTimeFormat("en-US", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).format(new Date(data.publishedAt))}
      </p>

      <div className="text-left">
        <div className="mt-8 prose prose-primary prose-xl dark:prose-invert prose-li:marker:text-orange-500 leading-8 tracking-tight max-w-4xl prose-h3:first-letter:text-primary">
          {/* <PortableText value={data.text} />  */}

          <p className="">
            {data.text.split("\n").map((line: string) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <p className="text-xl md:text-2xl line-clamp-2 py-3 font-semibold">
          {data.categories}
        </p>
        <div className="flex items-center mb-8">
          <p className="text-sm md:text-2xl line-clamp-2 pr-2">author:</p>

          <Image
            src={data.author.authorImg}
            alt={data.alt}
            width={70}
            height={70}
            priority
            className="rounded-full object-contain p-1 border-2 border-primary"
          />

          <p className="text-sm md:text-2xl pl-2">
            {data.author.name} ({data.author.nickname})
          </p>
        </div>
      </div>
    </div>
  );
}
