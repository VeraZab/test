import React from 'react';
import styled, { css } from 'styled-components';

const StyledPricing = styled.div`
  margin-right: 40px;
  position: relative;
  z-index: 100;

  * {
    box-sizing: border-box;
  }
`;
const Rows = styled.div`
  transform: translateY(-185px);
  background: #f3f6fa;
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
  overflow: hidden;

  flex-direction: column;
  &:last-of-type {
  }
  &:not(:last-of-type) {
  }
  ${({ spacer }) =>
    spacer &&
    css`
      border-right: 0 !important;
      border-bottom: 0 !important;
    `};
  ${({ label }) =>
    label &&
    css`
      background: white;
      padding-left: 100px;
      border-right: 1px solid #dfe8f3;

      align-items: flex-end;
      text-align: right;
    `};

  ${({ heading }) =>
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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  ${({ row }) =>
    row &&
    css`
      &:hover {
        background: white;
        ${Item} {
          border-bottom-color: #c8d4e3;
        }
      }
    `};
  ${({ header }) =>
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
        &:not(:first-child) {
          background: white;
          padding: 30px;
        }
        &:nth-of-type(2) {
          border-top-left-radius: 20px;
        }
        &:last-of-type {
          border-top-right-radius: 20px;
          border-right: 0;
        }
      }
    `};
`;

const Plan = styled.div``;

const Price = styled.div`
  padding-top: 0;
  padding-bottom: 20px;
`;

const Subtitle = styled.div`
  padding-top: 20px;
  opacity: 0.5;
`;

StyledPricing.Rows = Rows;
StyledPricing.Line = StyledLine;
StyledPricing.Line.Item = Item;

Plan.Name = PlanName;
Plan.Content = PlanHeadingContent;
Plan.Content.Price = Price;
Plan.Content.Subtitle = Subtitle;
export { StyledPricing, Plan };
