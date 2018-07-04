import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, Buttons } from './styled';

const Button = ({ label, children, labelProps, ...rest }) => (
  <StyledButton {...rest}>
    <StyledButton.Label {...labelProps}>{label || children}</StyledButton.Label>
  </StyledButton>
);

Button.propTypes = {
  label: PropTypes.node,
  children: PropTypes.node,
  labelProps: PropTypes.object,
  primary: PropTypes.bool,
};

export { Button, Buttons };
