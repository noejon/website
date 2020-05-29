import { HeaderWrapper } from './header.styled';
import Navigation from './navigation';

const Header: React.FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <Navigation />
    </HeaderWrapper>
  );
};

export default Header;
