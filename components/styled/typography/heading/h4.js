import React from 'react'
import styled from 'styled-components'
import Shevy from 'shevyjs'
const shevy = new Shevy()
const {
  baseSpacing: bs,
  h4: {
    fontSize,
    lineHeight,
    marginBottom
  }
} = shevy

const H4 = styled.h4`
  font-size: ${fontSize};
  line-height: ${lineHeight};
  margin-bottom: ${marginBottom};
`


export default H4
