import styled from 'styled-components';

const scale = {
  h1: '3.375rem',
  h2: '2.25rem',
  h3: '1.5rem',
  h4: '1.125rem',
  h5: '1rem',
  h6: '.875rem',
  a: '2rem',
};

const fontWeight = {
  h1: 500,
  h2: 500,
  h3: 500,
  h4: 600,
  h5: 600,
  h6: 600,
  a: 900,
};

const lineHeight = {
  h1: 1.111,
  h2: 1.111,
  h3: 1.111,
  h4: 1.111,
  h5: 1.111,
  h6: 1.333,
  a: 1.111,
};

type HeadingProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
};

const HeadingWrapper = styled.h1<HeadingProps>`
  font-size: ${scale.h1};
  font-weight: ${fontWeight.h1};
  line-height: ${lineHeight.h1};
  font-size: ${({ as }): string | undefined => as && `${scale[as]}`};
  font-weight: ${({ as }): string | undefined => as && `${fontWeight[as]}`};
  line-height: ${({ as }): string | undefined => as && `${lineHeight[as]}`};
  position: relative;
  z-index: 1;
  font-family: ${({ as, theme }): string =>
    as === 'a' && `${theme.fonts.heading}`};
  color: ${({ as, theme }): string =>
    as === 'a' && `${theme.colors.darkerGrey}`};

  &:before {
    width: 0.75em;
    height: 1em;
    background: ${({ theme }): string => theme.colors.main};
    content: '';
    pointer-events: none;
    position: absolute;
    z-index: -1;
    transform: translateY(0.05rem);
    ${({ as }): string | undefined => as === 'a' && `visibility: hidden;`};
  }

  &:hover:before {
    visibility: visible;
  }
`;

const Heading: React.FunctionComponent<HeadingProps> = ({
  children,
  ...otherProps
}) => {
  return <HeadingWrapper {...otherProps}>{children}</HeadingWrapper>;
};

export default Heading;
