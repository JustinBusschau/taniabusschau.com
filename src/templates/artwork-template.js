import React from 'react'
import { graphql as gatsbyql } from 'gatsby'
import Layout from '../components/Layout'
import Title from '../components/Title'
import { ArtworkWrapper } from '../css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import SearchEngineOptimiser from '../components/SEO'
import StyledHero from '../components/StyledHero'
import FactDetailEntry from '../components/Common/FactDetailEntry'
import {
  DataHeaderStructure,
  DescriptiveBlurbWrapper,
  FactDetailSection,
  ThumbnailSection,
} from '../css'

const ArtworkTemplate = ({ data }) => {
  const [showModal, setShowModal] = React.useState(false);
  const { title, media, size, price, framed, sold, image, thumbnail, content } =
    data.artwork
  const { desc } = content || {}
  const bannerImage = data.portfolioImage.edges[0].node
  const gi = getImage(image)
  const tn = getImage(thumbnail)

  const artPrice = `£${price}.00`
  return (
    <Layout>
      <SearchEngineOptimiser title={title} description={content} />
      <StyledHero image={bannerImage.image} alt={bannerImage.title} />
      <Title title={title} />
      <DataHeaderStructure>
        <FactDetailSection>
          {media && <FactDetailEntry fact="Media" detail={media} />}
          {size && <FactDetailEntry fact="Size" detail={size} />}
          {artPrice && <FactDetailEntry fact="Price" detail={artPrice} />}
          {framed && (
            <FactDetailEntry fact="Framed" detail={framed ? 'Yes' : 'No'} />
          )}
          {sold && <FactDetailEntry fact="Sold" detail={sold ? 'Yes' : 'No'} />}
        </FactDetailSection>
        <ThumbnailSection>
          <div className="img-container">
            <GatsbyImage image={tn} alt={title} />
          </div>
        </ThumbnailSection>
      </DataHeaderStructure>
      {desc && (
        <DescriptiveBlurbWrapper>
          <p className="desc">{content.desc}</p>
        </DescriptiveBlurbWrapper>
      )}
      <ArtworkWrapper>
        <div className="thumbnail-container" onClick={() => setShowModal(!showModal)}>
          <GatsbyImage image={gi} alt={title} className="thumbnail" />
          <div className="overlay">
            <span>Click to {showModal ? 'close' : 'enlarge'}</span>
          </div>
        </div>
        {showModal && (
          <div className="modal" onClick={() => setShowModal(false)}>
            <GatsbyImage image={gi} alt={title} className="modal-image" />
          </div>
        )}
      </ArtworkWrapper>
    </Layout>
  )
}

export default ArtworkTemplate

export const getArtwork = gatsbyql`
  query getArtwork($id: String!) {
    artwork: contentfulArtwork(contentful_id: { eq: $id }) {
      title
      media
      size
      price
      framed
      sold
      content {
        desc: content
      }
      image {
        gatsbyImageData(
          placeholder: BLURRED
          cropFocus: CENTER
          formats: [AUTO, WEBP, AVIF]
          cornerRadius: 10
        )
      }
      thumbnail: image {
        gatsbyImageData(
          width: 250
          height: 200
          resizingBehavior: PAD
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          cropFocus: CENTER
        )
      }
    }
    portfolioImage: allContentfulArtwork(
      filter: { useAsPortfolioCover: { eq: true } }
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
  }
`
