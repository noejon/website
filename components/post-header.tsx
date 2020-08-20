import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';

type Props = {
  coverImage: string;
  date: string;
  title: string;
};

const PostHeader: React.FunctionComponent<Props> = ({
  title,
  coverImage,
  date,
}) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
