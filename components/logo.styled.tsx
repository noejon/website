import styled from 'styled-components';

export const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 4px;
`;

export const Subtitle = styled.div`
  color: #999999;
  letter-spacing: 1px;

  @media screen and (max-width: ${({ theme }): string =>
      theme.breakpoints.md}) {
    display: none;
  }
`;

Subtitle.displayName = 'Subtitle';
