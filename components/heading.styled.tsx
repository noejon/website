import styled from 'styled-components';
import { heading } from '../lib/fonts';

const scale = {
  h1: '3.375rem',
  h2: '2.25rem',
  h3: '1.5rem',
  h4: '1.125rem',
  h5: '1rem',
  h6: '.875rem',
  span: '3rem',
};

const fontWeight = {
  h1: 500,
  h2: 500,
  h3: 500,
  h4: 600,
  h5: 600,
  h6: 600,
  span: 500,
};

const lineHeight = {
  h1: 1.111,
  h2: 1.111,
  h3: 1.111,
  h4: 1.111,
  h5: 1.111,
  h6: 1.333,
  span: 1.111,
};

type HeadingProps = {
  as?: any;
};

const HeadingWrapper = styled.h1<HeadingProps>`
  font-size: ${scale.h1};
  font-weight: ${fontWeight.h1};
  line-height: ${lineHeight.h1};
  font-size: ${({ as }) => as && `${scale[as]}`};
  font-weight: ${({ as }) => as && `${fontWeight[as]}`};
  line-height: ${({ as }) => as && `${lineHeight[as]}`};
  position: relative;
  z-index: 1;
  ${({ as }) =>
    as === 'span' &&
    `
    font-family: ${heading};
    color: var(--darker-grey);
  `};

  &:before {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.7em 2em 0 0;
    border-color: ${({ theme }) => theme.colors.main} transparent transparent
      transparent;
    content: '';
    pointer-events: none;
    position: absolute;
    z-index: -1;
    ${({ as }) => as === 'span' && `visibility: hidden;`};
  }

  &:hover:before {
    visibility: visible;
  }
`;

const Heading: React.FunctionComponent<HeadingProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <HeadingWrapper {...otherProps}>
      <span>{children}</span>
    </HeadingWrapper>
  );
};

export default Heading;
