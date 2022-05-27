import React from 'react'
import Layout from '../components/Layout'

import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import SearchEngineOptimiser from '../components/SEO'

const Index = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimiser
        title="Home"
        description={data.site.siteMetadata.description}
      />
      <StyledHero home image={data.homeImage} alt={data.homeImage.title} />
    </Layout>
  )
}

export const getIndexData = graphql`
  query {
    homeImage: contentfulAsset(
      contentful_id: { eq: "7HVZTCGzQ0u6mVcMJth5dj" }
    ) {
      title
      gatsbyImageData(
        width: 1250
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
        cropFocus: CENTER
      )
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
