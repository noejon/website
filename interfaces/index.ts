export type Author = {
  name: string,
  picture: string
}

export type Post = {
  author: Author,
  date: string,
  coverImage: string,
  excerpt: string,
  slug: string,
  title: string
}

export type OgImage = {
  url: string  
}

export type PostItem = {
  author?: Author,
  content?: string,
  date?: string,
  coverImage?: string,
  excerpt?: string,
  ogImage?: OgImage,
  slug: string,
  title?: string
}