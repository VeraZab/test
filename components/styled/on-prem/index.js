import styled from 'styled-components';

const SwitchContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 120px;
  background: #ffffff
    url(https://images-plotly.imgix.net/static/marketing/dash/section-bg-demos@2x.png?auto=compress&auto=format)
    center top no-repeat !important;
  background-size: 1290px !important;
  @include media('<=800px') {
    padding-top: $unit * 6;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
 
const H1 = styled.h1`
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  will-change: opacity, transform;
`;

const H2 = styled.h2`
  margin: 70px;
  font-size: 18px;
  line-height: 36px;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  color: rgba(81, 103, 131, 1);
  font-weight: 300;
  will-change: opacity, transform;
`;

export {SwitchContainer, HeadingContainer, H1, H2};
