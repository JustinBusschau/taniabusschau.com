import React from 'react'
import { DetailLabel } from '../../css'

const FactDetailEntry = ({ fact, detail }) => {
  return (
    <p>
      <DetailLabel>{fact}</DetailLabel> {detail}
    </p>
  )
}

export default FactDetailEntry
