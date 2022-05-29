import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import EmailContact from '../components/Contact/EmailContact'
import CurrentExhibit from '../components/Contact/CurrentExhibit'
import SearchEngineOptimiser from '../components/SEO'
import { ContactWrapper } from '../css'

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
