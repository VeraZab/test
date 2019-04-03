import styled from 'styled-components';
import Shevy from 'shevyjs';
const shevy = new Shevy();
const {
  h6: {fontSize, lineHeight, marginBottom},
} = shevy;

const H6 = styled.h6`
  font-size: ${fontSize};
  line-height: ${lineHeight};
  margin-bottom: ${marginBottom};
`;

export default H6;
