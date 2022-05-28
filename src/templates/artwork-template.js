import React from 'react'
import { graphql as gatsbyql } from 'gatsby'
import Layout from '../components/Layout'
import { ArtworkWrapper } from '../css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import SearchEngineOptimiser from '../components/SEO'

const ArtworkTemplate = ({ data }) => {
  const {
    title,
    media,
    size,
    price,
    framed,
    sold,
    date,
    image,
    thumbnail,
    content,
  } = data.artwork
  const { desc } = content || {}
  const gi = getImage(image)
  const tn = getImage(thumbnail)

  return (
    <Layout>
      <SearchEngineOptimiser title={title} description={content} />
      <ArtworkTitle>
        <h1>{title}</h1>
      </ArtworkTitle>
      <HeaderStructureWrapper>
        <DetailWrapper>
          <p>
            <DetailLabel>Completed</DetailLabel> {date}
          </p>
          <p>
            <DetailLabel>Media</DetailLabel> {media}
          </p>
          <p>
            <DetailLabel>Size</DetailLabel> {size}
          </p>
          <p>
            <DetailLabel>Price</DetailLabel> £{price}.00
          </p>
          <p>
            <DetailLabel>Framed</DetailLabel> {framed ? 'Yes' : 'No'}
          </p>
          <p>
            <DetailLabel>Sold</DetailLabel> {sold ? 'Yes' : 'No'}
          </p>
        </DetailWrapper>
        <ImageWrapper>
          <div className="img-container">
            <GatsbyImage image={tn} alt={title} />
          </div>
        </ImageWrapper>
      </HeaderStructureWrapper>
      {desc && (
        <DescWrapper>
          <p className="desc">{content.desc}</p>
        </DescWrapper>
      )}
      <ArtworkWrapper>
        <div className="center">
          <GatsbyImage image={gi} alt={title} className="image" />
        </div>
      </ArtworkWrapper>
    </Layout>
  )
}

export default ArtworkTemplate

const ArtworkTitle = styled.div`
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

const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-items: left;
  gap: 1rem;
`

const DetailLabel = styled.span`
  font-weight: bold;
`

const DescWrapper = styled.div`
  display: grid;
  margin: auto;
  padding: 2rem 0 0 0;
  width: 60vw;
`

const ImageWrapper = styled.article`
  width: 30vw;
  position: relative;
  display: block;
  box-shadow: var(--lightShadow);
  margin: 3rem 0;

  img {
    width: 100%;
    display: block;
    box-shadow: var(--lightShadow);
  }
  div {
    box-shadow: var(--lightShadow);
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    img {
      max-height: 500px;
    }
    .img-container {
      max-height: 500px;
    }
  }
  @media screen and (min-width: 992px) {
    .img-container::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid var(--primaryColor);
      box-sizing: border-box;
      top: -16px;
      left: -16px;
      z-index: -1;
    }
  }
`

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
      date(formatString: "MMMM YYYY")
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
  }
`
