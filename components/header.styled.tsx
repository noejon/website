import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  border-bottom: 5px solid ${({ theme }): string => theme.colors.main};
  background-color: ${({ theme }): string => theme.colors.lighterGrey};

  @media screen and (max-width: ${({ theme }): string =>
      theme.breakpoints.md}) {
    padding: 0.5em 0.5em 0 0.5em;
    height: 7vh;
  }
`;

export const TitleContainer = styled.div`
  display: grid;
  justify-items: center;
  z-index: 2;

  @media screen and (max-width: ${({ theme }): string =>
      theme.breakpoints.md}) {
    justify-items: left;
  }
`;
