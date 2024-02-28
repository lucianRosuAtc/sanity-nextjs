

import { client } from "@/sanity/lib/client";

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
  const data = await getData(params.slug);
  return <div className="max-w-3xl mx-auto">{params.slug}</div>;
}
