import React from 'react'
import Layout from '../components/Layout'
import SearchEngineOptimiser from '../components/SEO'
import StyledHero from '../components/StyledHero'
import Title from '../components/Title'
import RichTextDisplay from '../components/Common/RichTextDisplay'
import { ContentSection } from '../css'
import socialIcons from '../constants/social-icons.js'
import { graphql } from 'gatsby'

const BioLayout = ({ data }) => {
  const { artistData } = data
  const artist = artistData.edges[0].node
  const bio = JSON.parse(artist.artistBio.raw)
  const fbLink = `${socialIcons.facebook.url}${artist.facebook}`
  const igLink = `${socialIcons.instagram.url}${artist.instagram}`
  const twLink = `${socialIcons.twitter.url}${artist.twitter}`
  return (
    <Layout>
      <SearchEngineOptimiser title="About" />
      <StyledHero image={artist.image} alt={artist.name} />
      <section>
        <Title title="My" subtitle="bio" />
        <div>
          <h2 style={{ textAlign: 'center' }}>Hi, I'm {artist.name}</h2>
          <RichTextDisplay json={bio} />
        </div>
      </section>
      <div className="social-links">
        <a href={fbLink} className="social-link">
          <span className="icon">{socialIcons.facebook.icon}</span>
          <span className="text">{artist.facebook}</span>
        </a>
        <a href={igLink} className="social-link">
          <span className="icon">{socialIcons.instagram.icon}</span>
          <span className="text">{artist.instagram}</span>
        </a>
      </div>
    </Layout>
  )
}

export default BioLayout

export const getBio = graphql`
  query {
    artistData: allContentfulPerson(
      filter: { useAsFeaturedArtist: { eq: true } }
      limit: 1
      sort: { fields: createdAt, order: ASC }
    ) {
      edges {
        node {
          id: contentful_id
          name
          artistBio {
            raw
          }
          facebook
          instagram
          twitter
          image {
            gatsbyImageData
          }
        }
      }
    }
  }
`
