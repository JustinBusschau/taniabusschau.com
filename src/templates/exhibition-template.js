import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import SearchEngineOptimiser from '../components/SEO'
import StyledHero from '../components/StyledHero'
import PortfolioList from '../components/Portfolio/PortfolioList'

const ExhibitionTemplate = ({ data }) => {
  const {
    name,
    image,
    startDate,
    endDate,
    content,
    location,
    onlineOnly,
    url,
    myIncludedArtworks,
    spaceType,
  } = data.exhibition
  const desc = content.content
  const itemNodes = Object.entries(myIncludedArtworks).map(([id, prop]) => ({
    id,
    ...prop,
  }))

  return (
    <Layout>
      <SearchEngineOptimiser title={name} description={content} />
      <StyledHero image={image} className="post-image" alt={name} />
      <ExhibitionTitle>
        <h1>{name}</h1>
      </ExhibitionTitle>
      <HeaderStructureWrapper>
        <p>
          <DetailLabel>Location</DetailLabel> {location}
        </p>
        <p>
          <DetailLabel>Website</DetailLabel>{' '}
          <a href={url} target="__ext">
            {url}
          </a>
        </p>
        <p>
          <DetailLabel>Start Date</DetailLabel> {startDate}
        </p>
        <p>
          <DetailLabel>End Date</DetailLabel> {endDate}
        </p>
        <p>
          <DetailLabel>Online?</DetailLabel> {onlineOnly ? 'Yes' : 'No'}
        </p>
        <p>
          <DetailLabel>Space type</DetailLabel> {spaceType}
        </p>
      </HeaderStructureWrapper>
      {desc && (
        <DescWrapper>
          <p className="desc">{desc}</p>
        </DescWrapper>
      )}
      <ExhibitionTitle>
        <h2>My art on display</h2>
      </ExhibitionTitle>
      <PortfolioList items={itemNodes} type="artwork" />
    </Layout>
  )
}

const ExhibitionTitle = styled.div`
  display: grid;
  margin: auto;
`

const HeaderStructureWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  word-break: break-all;
  margin-top: 3rem;
`

const DetailLabel = styled.span`
  font-weight: bold;
`

const DescWrapper = styled.div`
  display: grid;
  margin: auto;
  padding: 2rem 0 0 0;
  max-width: 60vw;
`

export const getExhibition = graphql`
  query getExhibition($id: String!) {
    exhibition: contentfulExhibition(contentful_id: { eq: $id }) {
      name
      image {
        gatsbyImageData(
          width: 1250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          cropFocus: CENTER
        )
      }
      startDate(formatString: "DD MMMM YYYY")
      endDate(formatString: "DD MMMM YYYY")
      content {
        content
      }
      location
      onlineOnly
      url
      myIncludedArtworks {
        id: contentful_id
        title
        image {
          gatsbyImageData(
            width: 250
            height: 200
            resizingBehavior: PAD
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            cropFocus: CENTER
          )
        }
        slug
      }
      spaceType
    }
  }
`

export default ExhibitionTemplate
