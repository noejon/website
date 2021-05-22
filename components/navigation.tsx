import { useState } from 'react';
import Link from 'next/link';
import { Navigation, NavLinks } from './navigation.styled';
import Burger from './burger';
import Heading from './heading';
import Logo from './logo';

const Nav: React.FunctionComponent = () => {
  const [navLinksVisible, toggleNavLinks] = useState(false);
  return (
    <Navigation role="navigation">
      <Logo />
      <Burger
        onClick={(): void => {
          toggleNavLinks(!navLinksVisible);
        }}
        toggled={navLinksVisible}
      />
      <NavLinks visible={navLinksVisible}>
        <li>
          <Link href="#" passHref>
            <Heading as="a">About me</Heading>
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            <Heading as="a">Blog</Heading>
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            <Heading as="a">Tips</Heading>
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            <Heading as="a">/uses</Heading>
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            <Heading as="a">Contact me</Heading>
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            <Heading as="a">My experience</Heading>
          </Link>
        </li>
      </NavLinks>
    </Navigation>
  );
};

export default Nav;
