import React from 'react'
import styled from 'styled-components'
import Shevy from 'shevyjs'
const shevy = new Shevy()
const {
  baseSpacing: bs,
  h3: {
    fontSize,
    lineHeight,
    marginBottom
  }
} = shevy

const H3 = styled.h3`
  font-size: ${fontSize};
  line-height: ${lineHeight};
  margin-bottom: ${marginBottom};
`


export default H3
