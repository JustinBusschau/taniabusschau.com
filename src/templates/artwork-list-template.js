import React from 'react'
import Layout from '../components/Layout'
import SearchEngineOptimiser from '../components/SEO'
import StyledHero from '../components/StyledHero'
import Title from '../components/Title'
import PortfolioList from '../components/Portfolio/PortfolioList'
import Pagination from '../components/Pagination'
import { graphql } from 'gatsby'

const PortfolioLayout = ({ data, pageContext }) => {
  const { currentPage, numGalleryPages } = pageContext
  const itemNodes = data.items.edges.map((x) => x.node)

  return (
    <Layout>
      <SearchEngineOptimiser title="Artworks" />
      <StyledHero image={data.portfolioImage} alt={data.portfolioImage.title} />
      <section>
        <Title title="My" subtitle="art" />
        <PortfolioList items={itemNodes} type="artwork" />
      </section>
      <Pagination
        prefix="artworks"
        currentPage={currentPage}
        numPages={numGalleryPages}
      />
    </Layout>
  )
}

export default PortfolioLayout

export const getPortfolio = graphql`
  query getArtworksPortfolio($limit: Int!, $skip: Int!) {
    items: allContentfulArtwork(
      skip: $skip
      limit: $limit
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id: contentful_id
          slug
          title
          image {
            gatsbyImageData
          }
          date(formatString: "MMM YYYY")
        }
      }
    }
    portfolioImage: contentfulAsset(
      contentful_id: { eq: "BVtxNntDZPtKBnRB0Fd23" }
    ) {
      title
      gatsbyImageData(
        width: 1250
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
        cropFocus: CENTER
      )
    }
  }
`
