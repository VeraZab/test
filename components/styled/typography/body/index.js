import styled, { injectGlobal, css } from 'styled-components';

const Body = styled.div`

`;
const P = styled.p`

`

const Strong = styled.strong`
  font-weight:500;
`

const Em = styled.em`
  font-style: italic;
`
const Ul = styled.ul`
    margin-top: 20px;
`
const Ol = styled.ol`
    margin-top: 20px;
`

const Li = styled.li`


`

const Pre = styled.pre`
    margin-top: 20px;
`

Body.p = P;
Body.strong = Strong;
Body.em = Em;
Body.ul = Ul;
Body.ol = Ol;
Body.li = Li;
Body.oli = Li;
Body.pre = Pre;

export default Body;
