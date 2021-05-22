import styled from 'styled-components';
import { bodyBackground } from '../lib/colors';

const SectionSeparator = styled.hr`
  border-color: ${bodyBackground};
  border-style: solid none none;
  border-width: 1px 0 0;
  height: 0;
  margin: 2em 0;
`;

export default SectionSeparator;
