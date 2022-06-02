# taniabusschau.com

## Setup

Setup followed the process outlined at [Get Started with Contentful](https://www.contentful.com/developers/docs/tutorials/general/get-started/#explore-how-the-sample-website-is-built-with-contentful),
but we used [this Portfolio starter](https://github.com/escapemanuele/gatsby-contentful-blog-portfolio) rather than the one referenced in the article.
We upgraded to Gatsby 4.1.4 and React 16.8.0 and removed a lot of unneeded gubbins.
Also added Apollo GraphQL client for dynamic content (though the only thing this is used for now is the Visitor form submission)

## Dynamic API via Apollo GraphQL

- Apollo GraphQL client ^3.3.21
- Enables visitor entry add to spreadsheet via [sheets.best](https://sheets.best/)

## Preview site on Gatsby Cloud

- JustinBusschau GatsbyJS account via GitHub federated login
- preview at : https://taniabusschaucom.gtsb.io/ `lis-noir`
- make sure any required env vars are set in the gatsbyjs console
- _`NOTE`_ be very sure the `NODE_VERSION` environment variable is set correctly in the gatsbyjs console

## Hosting on Netlify

- deployed on successful build from Gatsby Cloud

## TODO

- we have a number of instances where we fetch specific entries from Contentful. These should be made more generic so that Tania can change them whenever she likes
  - `src/Components/Navbar.js` : currently fetching the "Tania In Paris" Asset using contentful_id: `x4PpkVtYfEyk5hyOfzQUm`
  - `src/pages/contact.js` : currently fetching the image of the envelopes as an Asset using contentful_id: `7nHV7ETDHkTQhDIjJFF5dZ`
- we are currently using the `useAsPortfolioCover` image for the artwork banner image as well. We might want to separate as two distinct banners
- we are currently using the `useAsExhibitionCover` image for the exhibition list banner image as well. We might want to separate as two distinct banners
- we are currently using a 'borrowed' image for the contact us page. Ask Tania to either do an artwork or take a photo of her own to replace this
