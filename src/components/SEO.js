import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const SearchEngineOptimiser = ({ title, description }) => {
  const { site } = useStaticQuery(getData)
  const { siteDesc, siteTitle, siteUrl, author, twitterUsername } =
    site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: 'en' }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="author" content={author} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />

      <link rel="apple-touch-icon-precomposed" href="apple-touch.png" />
      <link rel="icon" type="image/png" href="favicon.png" />
      <meta name="application-name" content="taniabusschau.com" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="mstile.png" />
    </Helmet>
  )
}

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        twitterUsername
      }
    }
  }
`

export default SearchEngineOptimiser
