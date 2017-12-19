import React from 'react'
import styled from 'styled-components'
import Shevy from 'shevyjs'

const shevy = new Shevy()
const {
  baseSpacing: bs,
  h2: {
    fontSize,
    lineHeight,
    marginBottom
  }
} = shevy

const pretitleStyles = `
  font-family: 'Dosis', sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 26px;
  letter-spacing: 2px;
  font-weight: 400;
  text-transform: uppercase;
`

const subTitleStyles = `
  font-family: 'Dosis', sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 26px;
  letter-spacing: 2px;
  font-weight: 400;
  text-transform: uppercase;
`

const getVaritant = (props) => {

  const {pretitle, subtitle} = props;

  if (pretitle) {
    return pretitleStyles
  } else if (subtitle) {
    return subTitleStyles
  }
  return null;
}

const H2 = styled.h2`
  font-size: ${fontSize};
  line-height: ${lineHeight};
  ${props => getVaritant(props)}
`


export default H2
