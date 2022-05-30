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
