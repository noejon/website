import styled from 'styled-components';

const Page = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }): string => theme.colors.white};
  box-shadow: 0 2px 6px rgba(100, 100, 100, 0.3);
`;

export default Page;
