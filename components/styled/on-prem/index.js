import React from 'react';

import styled from 'styled-components';

const SwitchContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 120px;
`;

const HeadingContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 40px;
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
  padding-bottom: 40px;
  will-change: opacity, transform;
`;

const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 18px;
  line-height: 36px;
  max-width: 460px;
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  color: rgba(81, 103, 131, 1);
  font-weight: 300;
  will-change: opacity, transform;
`;

export { SwitchContainer, HeadingContainer, H1, H2 };
