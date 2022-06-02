import React from 'react'
import Layout from '../components/Layout'
import SearchEngineOptimiser from '../components/SEO'
import StyledHero from '../components/StyledHero'
import Title from '../components/Title'
import PortfolioList from '../components/Portfolio/PortfolioList'
import Pagination from '../components/Pagination'
import { graphql } from 'gatsby'

const PortfolioLayout = ({ data, pageContext }) => {
  const { currentPage, numExhibitionPages } = pageContext
  const itemNodes = data.items.edges.map((x) => x.node)
  const bannerImage = data.portfolioImage.edges[0].node

  return (
    <Layout>
      <SearchEngineOptimiser title="Exhibitions" />
      <StyledHero image={bannerImage.image} alt={bannerImage.title} />
      <section>
        <Title title="My art on" subtitle="exhibit" />
        <PortfolioList items={itemNodes} type="exhibition" />
      </section>
      <Pagination
        prefix="exhibitions"
        currentPage={currentPage}
        numPages={numExhibitionPages}
      />
    </Layout>
  )
}

export default PortfolioLayout

export const getPortfolio = graphql`
  query getExhibitionsPortfolio($limit: Int!, $skip: Int!) {
    items: allContentfulExhibition(
      skip: $skip
      limit: $limit
      sort: { fields: startDate, order: DESC }
    ) {
      edges {
        node {
          id: contentful_id
          slug
          image {
            gatsbyImageData
          }
          name
          date: startDate(formatString: "DD MMM YYYY")
        }
      }
    }
    portfolioImage: allContentfulExhibition(
      filter: { useAsExhibitionBanner: { eq: true } }
      limit: 1
      sort: { fields: startDate, order: DESC }
    ) {
      edges {
        node {
          name
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
  }
`
