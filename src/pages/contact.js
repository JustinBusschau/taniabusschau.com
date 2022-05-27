import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import EmailContact from '../components/Contact/EmailContact'
import styled from 'styled-components'
import CurrentExhibit from '../components/Contact/CurrentExhibit'
import SearchEngineOptimiser from '../components/SEO'

const ContactLayout = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOptimiser
        title="Contact"
        description="Contact us to request a quote!"
      />
      <StyledHero image={data.contactImage} alt={data.contactImage.title} />
      <ContactWrapper>
        <CurrentExhibit />
        <EmailContact />
      </ContactWrapper>
    </Layout>
  )
}

export default ContactLayout

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;

  padding: 2rem;
`

export const getContactImage = graphql`
  query {
    contactImage: contentfulAsset(
      contentful_id: { eq: "7nHV7ETDHkTQhDIjJFF5dZ" }
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
