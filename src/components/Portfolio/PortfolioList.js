
import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import CardWrapper from '../../css/CardWrapper'

const PortfolioListWrapper = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  max-width: ${props => `${Math.floor(parseInt(process.env.ITEMS_PER_PAGE) / 2) * 300}px`};
  margin: 0 auto;
`

const PortfolioList = ({ items, type }) => {
  const prefix = type === 'artwork' ? '/artwork/' : '/exhibition/'
  
  return (
    <PortfolioListWrapper>
      {items.map(item => (
        <CardWrapper key={item.id}>
          <Link to={`${prefix}${item.slug}`}>
            <div className="img-container">
              <GatsbyImage 
                image={item.image.gatsbyImageData} 
                alt={item.title || item.name}
                className="card-image"
              />
              <div className="card-info-overlay">
                <div className="card-info-text">
                  {item.title || item.name}
                  {item.date && <div>{item.date}</div>}
                </div>
              </div>
            </div>
          </Link>
        </CardWrapper>
      ))}
    </PortfolioListWrapper>
  )
}

export default PortfolioList
