export interface blogCard{
    title: string;
    author: {
        name: string;
        nickname: string;
        };
    currentSlug: string;
    publishedAt: string;
    categories: string[];
    mainImage: any;
}

 // 2) create the interface