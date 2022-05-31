import React from 'react'
import styled from 'styled-components'
import Card from '../Common/Card'
import PropTypes from 'prop-types'

const PortfolioList = ({ items, type }) => {
  return (
    <ArtworksWrapper>
      {items &&
        items.map((node) => {
          node.image = node.image ? node.image : null
          return <Card key={node.id} node={node} type={type} />
        })}
    </ArtworksWrapper>
  )
}

PortfolioList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const ArtworksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;

  padding: 1rem;

  @media (min-width: 780px) {
    padding: 3rem;
  }
`

export default PortfolioList
