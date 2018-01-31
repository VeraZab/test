import React from 'react';

import styled, { css } from 'styled-components';

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

const Switch = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 48px;
  width: 360px;
  height: 48px;
  background: white;
  border: 1px solid #dce4ed;
  box-shadow: rgba(80, 103, 132, 0.2) 0 2px 8px 0;
`;

const hoverSyles = css`
  &:hover {
    cursor: pointer;
    color: rgba(81, 103, 131, 1);
    font-weight: 400;

    span {
      &::before {
        transform: none;
      }
    }
  }
`;

const SwitchItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 50%;
  cursor: default;
  background-color: ${props => (props.active ? 'transparent' : 'transparent')};
  color: ${props => (props.active ? '#ffffff' : 'rgba(81, 103, 131, 0.75)')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  text-shadow: ${props =>
    props.active ? '0 1px 2px rgba(42, 63, 95, 0.5)' : 'none'};
  ${props => (props.active ? null : hoverSyles)};

  user-select: none;
  transition: 0.1s all ease-in-out;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 120%;
    height: 100%;
    opacity: ${props => (props.active ? '1' : '0')};
    background-color: #00cc96;
    top: 0;
    left: ${props => (props.second ? 'auto' : '-20%')};
    right: ${props => (props.second ? '-20%' : 'auto')};
    transform-origin: center center;
    will-change: transform;
    transition: 0.2s transform ease-in-out;
    transform: ${props =>
      props.active
        ? props.second ? 'skewX(-30deg)' : 'skewX(30deg)'
        : props.second ? 'skewX(30deg)' : 'skewX(-30deg)'};
  }

  span {
    display: inline-block;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      border-radius: 4px;
      background-color: #00cc96;
      top: 100%;
      transform-origin: center center;
      transform: scaleX(0);
      transition: 0.1s all ease-in-out;
    }
  }
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

export { SwitchContainer, HeadingContainer, Switch, SwitchItem, H1, H2 };
