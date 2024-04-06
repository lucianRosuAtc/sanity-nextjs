import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface blogCard {
  title: string;
  author: {
    name: string;
    nickname: string;
    authorImg: string | StaticImport;
  };
  currentSlug: string;
  publishedAt: string;
  categories: string[];
  mainImage: any;
  text: string;
  alt: string;
  line: string;
}

// 2) create the interface for fullBlogCard

export interface fullBlogCard {
  title: string;
  author: {
    authorImg: string | StaticImport;
    name: string;
    nickname: string;
  };
  currentSlug: string;
  publishedAt: string;
  categories: string[];
  mainImage: any;
  text: any;
  alt: string;
  line: string;
}
