import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { PostItem } from '../interfaces';

const postsDirectory = join(process.cwd(), '_posts');

export const getPostBySlug = (slug: string, fields?: string[]) => {
  const realSlug: string = slug.replace(/\.md$/, '');
  const fullPath: string = join(postsDirectory, `${realSlug}.md`);
  const fileContents: string = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: PostItem = {
    slug: '',
  };

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
};

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

export const getAllPosts = (fields?: string[]) => {
  const slugs = getPostSlugs();
  return slugs.map((slug) => getPostBySlug(slug, fields));
};
