import React from 'react'
import Layout from '../components/Layout'

import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import SearchEngineOptimiser from '../components/SEO'

const Index = ({ data }) => {
  const heroImage = data.homeImage.edges[0].node
  return (
    <Layout>
      <SearchEngineOptimiser
        title="Home"
        description={data.site.siteMetadata.description}
      />
      <StyledHero home image={heroImage.image} alt={heroImage.title} />
    </Layout>
  )
}

export const getIndexData = graphql`
  query {
    homeImage: allContentfulArtwork(
      filter: { home: { eq: true } }
      sort: { fields: date, order: DESC }
      limit: 1
    ) {
      edges {
        node {
          title
          image {
            gatsbyImageData(
              width: 1250
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              cropFocus: CENTER
            )
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default Index
