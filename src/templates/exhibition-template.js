import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Title from '../components/Title'
import SearchEngineOptimiser from '../components/SEO'
import StyledHero from '../components/StyledHero'
import PortfolioList from '../components/Portfolio/PortfolioList'
import FactDetailEntry from '../components/Common/FactDetailEntry'
import { DataHeaderStructure, DescriptiveBlurbWrapper } from '../css'

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
  const webUrl = (
    <a href={url} target="__ext">
      {url}
    </a>
  )

  return (
    <Layout>
      <SearchEngineOptimiser title={name} description={content} />
      <StyledHero image={image} className="post-image" alt={name} />
      <Title title={name} />
      <DataHeaderStructure>
        <FactDetailEntry fact="Location" detail={location} />
        <FactDetailEntry fact="Website" detail={webUrl} />
        <FactDetailEntry fact="Start Date" detail={startDate} />
        <FactDetailEntry fact="End Date" detail={endDate} />
        <FactDetailEntry fact="Online?" detail={onlineOnly ? 'Yes' : 'No'} />
        <FactDetailEntry fact="Space type" detail={spaceType} />
      </DataHeaderStructure>
      {desc && (
        <DescriptiveBlurbWrapper>
          <p className="desc">{desc}</p>
        </DescriptiveBlurbWrapper>
      )}
      <Title subtitle="My art on display" />
      <PortfolioList items={itemNodes} type="artwork" />
    </Layout>
  )
}

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
