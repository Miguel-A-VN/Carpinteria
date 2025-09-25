export interface ArticleInterface {
    id: number;
    title: string;
    text: string;
    image: string;
    categories: {titleCategory: string, urlImage?: string}[];
    active?: boolean,
    views: number,
    createdAt: Date
  }
