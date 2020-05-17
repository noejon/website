import styled from 'styled-components';
import { ThemeType } from '../lib/theme';

export const Ingredient = styled.div<{ theme: ThemeType }>`
  width: 1.5rem;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.colors.main};
  margin: 0.3rem;
`;

type HamburgerProps = {
  show: boolean;
};

export const Hamburger = styled.div<HamburgerProps>`
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

Hamburger.defaultProps = {
  show: false,
};

Hamburger.displayName = 'Hamburger';
