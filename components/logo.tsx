import { Title, Subtitle } from './logo.styled';
import Link from 'next/link';

const Logo: React.FunctionComponent = () => {
  return (
    <>
      <Title>
        <Link href="/">
          <a>noejon.dev</a>
        </Link>
      </Title>
      <Subtitle>Hello friends!</Subtitle>
    </>
  );
};

export default Logo;
