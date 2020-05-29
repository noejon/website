import styled from 'styled-components';
import Link from 'next/link';

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }): string =>
      theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

Navigation.displayName = 'Navigation';

type NavLinksProps = {
  visible: boolean;
};

export const NavLinks = styled.ul<NavLinksProps>`
  display: flex;
  justify-content: space-around;
  width: 70%;

  @media screen and (max-width: ${({ theme }): string =>
      theme.breakpoints.md}) {
    position: absolute;
    right: 0px;
    height: 93vh;
    top: 7vh;
    background: ${({ theme }): string => theme.colors.lighterGrey};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    li {
      opacity: 0;
    }
    ${({ visible }): string | undefined =>
      !visible && 'transform: translateX(100%)'};
    ${({ visible }): string | undefined =>
      visible &&
      `
      li {
        animation: fade 0.5s ease forwards 0.5s;
      }`};
    transition: transform 0.5s ease-in;

    @keyframes fade {
      from {
        opacity: 0;
        transform: translateX(66px);
      }
      to {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  }
`;

NavLinks.displayName = 'NavLinks';
