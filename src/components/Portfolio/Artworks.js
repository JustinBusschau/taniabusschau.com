import React from 'react'
import Title from '../Title'
import { graphql, useStaticQuery } from 'gatsby'
import PortfolioList from './PortfolioList'

const Artworks = () => {
  const { items } = useStaticQuery(getArtworks)
  const itemNodes = items.edges.map((x) => x.node)

  return (
    <section>
      <Title title="My" subtitle="art" />
      <PortfolioList items={itemNodes} type="artwork" />
    </section>
  )
}

const getArtworks = graphql`
  query {
    items: allContentfulArtwork {
      edges {
        node {
          id: contentful_id
          slug
          title
          image {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default Artworks
