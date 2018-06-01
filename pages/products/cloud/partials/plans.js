import React from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const StyledPricing = styled.div`
  position: relative;
  z-index: 99;

  * {
    box-sizing: border-box;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 10px 20px;
  flex-shrink: 0;
  border-bottom: 1px solid #dfe8f3;
  border-right: 1px solid #dfe8f3;
  position: relative;
  z-index: 99;

  @media (max-width: 999px) {
    width: 100%;
  }

  ${({showing, label}) =>
  !showing &&
  !label &&
  css`
      @media (max-width: 999px) {
        display: none !important;
      }
    `};
  flex-direction: column;
  &:last-of-type {
  }
  &:not(:last-of-type) {
  }
  ${({spacer}) =>
  spacer &&
  css`
      border-right: 0 !important;
      border-bottom: 0 !important;
    `};
  ${({label}) =>
  label &&
  css`
      background: white;
      padding-left: 100px;
      border-right: 1px solid #dfe8f3;

      align-items: flex-end;
      text-align: right;
    `};

  ${({heading}) =>
  heading &&
  css`
      border-right: 0;
      display: flex !important;
      flex-direction: column !important;
      justify-content: flex-start !important;
      padding: 0 !important;
    `};
`;

const PlanName = styled.div`
  background: #2a3f5f;
  width: 100%;
  padding: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    padding-left: 8px;
    display: block;
  }
  * {
    color: white;
  }
`;

const PlanHeadingContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLine = styled.div`
  width: 100%;
  @media (min-width: 1000px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  ${({row}) =>
  row &&
  css`
      &:hover {
        background: white;
        ${Item} {
          border-bottom-color: #c8d4e3;
        }
      }
    `};
  ${({header}) =>
  header &&
  css`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
      }
      border-bottom: 0;
      position: sticky;
      top: 185px;
      transform: translateY(-185px);
      z-index: 99;

      ${Item} {
        &:not(:first-of-type) {
          ${PlanHeadingContent} {
            background: white;
            width: 100%;
            border-right: 1px solid #dfe8f3;
          }
          ${PlanName} {
            border: 1px solid ${lighten(0.04, '#2a3f5f')};
          }
          padding: 30px;
        }
        &:nth-of-type(3) {
          @media (min-width: 1000px) {
            border-top-left-radius: 20px;
            ${PlanName} {
              border-top-left-radius: 20px;
            }
          }
        }
        &:last-of-type {
          @media (min-width: 1000px) {
            border-top-right-radius: 20px;
            border-right: 0;
            ${PlanName} {
              border-right: 0;
              border-top-right-radius: 20px;
            }
          }
        }
      }
    `};
`;

const Plan = styled.div`
  position: relative;
`;

const Price = styled.div`
  padding-top: 0;
  padding-bottom: 20px;
`;

const Navigation = styled.div`
  @media (max-width: 999px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
    width: 100%;
  }
  display: none;
`;
const NavButton = styled.div`
  background: #2a3f5f;
  color: white;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  padding: 10px 20px;

  z-index: 9999999;
  position: absolute;
  top: 0;
  &:first-of-type {
    left: 0;
  }
  &:last-of-type {
    right: 0;
  }
`;

const Subtitle = styled.div`
  opacity: 0.5;
  position: relative;
  z-index: 9999;

  * {
    color: white !important;
  }
`;

const Rows = styled.div`
  transform: translateY(-185px);
  background: #f3f6fa;
  ${StyledLine} {
    @media (max-width: 999px) {
      display: flex !important;
      ${Item} {
        flex-shrink: 1;
        &:first-of-type {
          width: 50%;
          max-width: 50%;
          flex-shrink: 0;
          padding-left: 20px;
        }
      }
    }
  }
`;
StyledPricing.Rows = Rows;
StyledPricing.Navigation = Navigation;
StyledPricing.Navigation.Button = NavButton;
StyledPricing.Line = StyledLine;
StyledPricing.Line.Item = Item;

Plan.Name = PlanName;
Plan.Content = PlanHeadingContent;
Plan.Content.Price = Price;
Plan.Content.Subtitle = Subtitle;
export { StyledPricing, Plan };
