import styled from 'styled-components';
import Shevy from 'shevyjs';
const shevy = new Shevy();
const {
  h1: {fontSize, lineHeight, marginBottom},
} = shevy;

const H1 = styled.h1`
  font-size: ${fontSize};
  line-height: ${lineHeight};
  margin-bottom: ${marginBottom};
`;

export default H1;
