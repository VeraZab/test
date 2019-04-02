import styled, {css} from 'styled-components';

const Label = styled.div`
  color: currentColor;
`;

const StyledButton = styled.a`
  padding: 8px 24px;
  text-transform: uppercase;
  font-weight: 500 !important;
  letter-spacing: 1px;
  font-size: 14px;
  border-radius: 5px;
  user-select: none;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  text-decoration: none !important;
  ${({primary}) =>
    primary &&
    css`
      background: #119dff;
      box-shadow: 0 2px 8px rgba(#506784, 0.4);
      ${Label} {
        color: white;
        text-shadow: 0 1px 2px rgba(#506784, 0.5);
      }
      &:hover {
        background: #0f89df;
        cursor: pointer;
      }
      &:visited {
        color: white !important;
      }
      &:active {
        background: #0d76bf;
        box-shadow: 0 2px 2px rgba(#506784, 0.4);
      }
    `};
`;

StyledButton.Label = Label;

const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

export {StyledButton, Buttons};
