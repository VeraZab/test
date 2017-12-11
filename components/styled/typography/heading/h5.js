import React from 'react'
import styled from 'styled-components'
import Shevy from 'shevyjs'
const shevy = new Shevy()
const {
  baseSpacing: bs,
  h5: {
    fontSize,
    lineHeight,
    marginBottom
  }
} = shevy

const H5 = styled.h5`
  font-size: ${fontSize};
  line-height: ${lineHeight};
  margin-bottom: ${marginBottom};
`


export default H5
