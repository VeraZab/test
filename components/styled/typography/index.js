import styled, { injectGlobal, css } from 'styled-components';
import './global'

import Heading from './heading'
import Body from './body'


const Typography = styled.div`

`;

Typography.h1 = Heading.h1;
Typography.h2 = Heading.h2;
Typography.h3 = Heading.h3;
Typography.h4 = Heading.h4;
Typography.h5 = Heading.h5;
Typography.h6 = Heading.h6;
Typography.p = Body.p;
Typography.strong = Body.strong;
Typography.em = Body.em;
Typography.ul = Body.ul;
Typography.ol = Body.ol;
Typography.li = Body.li;
Typography.oli = Body.li;
Typography.pre = Body.pre;

export default Typography;
