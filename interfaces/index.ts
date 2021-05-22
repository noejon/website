export type Post = {
  date: string;
  coverImage: string;
  excerpt: string;
  slug: string;
  title: string;
};

export type OgImage = {
  url: string;
};

export type PostItem = {
  content?: string;
  date?: string;
  coverImage?: string;
  excerpt?: string;
  ogImage?: OgImage;
  slug: string;
  title?: string;
};
