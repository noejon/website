import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  border-bottom: 5px solid ${({ theme }) => theme.colors.main};
  display: grid;
  /* the nav takes the whole available space with 1fr (1 fraction of the space) */
  grid-template-columns: 1fr;
  background-color: ${({ theme }) => theme.colors.lighterGrey};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.5em 0.5em 0 0.5em;
  }
`;

export const TitleContainer = styled.div`
  display: grid;
  justify-items: center;
  z-index: 2;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-items: left;
  }
`;

export const Subtitle = styled.div`
  color: #999999;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
