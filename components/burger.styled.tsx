import styled from 'styled-components';

const Ingredient = styled.div`
  width: 1.5rem;
  height: 3px;
  background-color: ${({ theme }): string => theme.colors.main};
  margin: 4px;
  transition: all 0.2s ease;
`;

type Props = {
  toggled?: boolean;
};

export const TopBread = styled(Ingredient)<Props>`
  ${({ toggled }): string | undefined =>
    toggled && 'transform: rotate(-45deg) translate(-5px, 5px)'};
`;

export const Patty = styled(Ingredient)<Props>`
  ${({ toggled }): string | undefined => toggled && 'opacity: 0'};
`;

export const BaseBread = styled(Ingredient)<Props>`
  ${({ toggled }): string | undefined =>
    toggled && 'transform: rotate(45deg) translate(-5px, -5px)'};
`;

export const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }): string =>
      theme.breakpoints.md}) {
    display: block;
    cursor: pointer;
  }
`;

Hamburger.displayName = 'Hamburger';
