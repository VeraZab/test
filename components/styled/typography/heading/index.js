import styled, { injectGlobal, css } from 'styled-components';
import H1 from './h1'
import H2 from './h2'
import H3 from './h3'
import H4 from './h4'
import H5 from './h5'
import H6 from './h6'

const Heading = styled.div`

`;

Heading.h1 = H1;
Heading.h2 = H2;
Heading.h3 = H3;
Heading.h4 = H4;
Heading.h5 = H5;
Heading.h6 = H6;

export default Heading;
