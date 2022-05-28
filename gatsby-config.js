/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// eslint-disable-next-line
require('dotenv').config({
  path: `.env`,
})

// eslint-disable-next-line
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Tania Busschau SGFA',
    description: 'Portfolio site for Tania Busschau SGFA',
    author: 'Tania Busschau SGFA',
    twitterUsername: '@taniabusschau',
    siteUrl: 'https://taniabusschau.com/',
  },
  plugins: [
    { resolve: 'gatsby-plugin-typescript' },
    { resolve: 'gatsby-plugin-react-helmet' },
    { resolve: 'gatsby-plugin-styled-components' },
    { resolve: 'gatsby-plugin-image' },
    { resolve: 'gatsby-plugin-sharp' },
    { resolve: 'gatsby-transformer-sharp' },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        // eslint-disable-next-line
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // eslint-disable-next-line
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    { resolve: 'gatsby-plugin-sitemap' },
    { resolve: 'gatsby-plugin-gatsby-cloud' },
  ],
}
