import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';

type Props = {
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  title: string;
};

const PostPreview: React.FunctionComponent<Props> = ({
  coverImage,
  date,
  excerpt,
  slug,
  title,
}) => {
  return (
    <>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </>
  );
};

export default PostPreview;
