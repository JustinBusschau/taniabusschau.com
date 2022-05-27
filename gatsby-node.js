const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      artworks: allContentfulArtwork {
        edges {
          node {
            id: contentful_id
            slug
          }
        }
      }
      exhibitions: allContentfulExhibition {
        edges {
          node {
            id: contentful_id
            slug
          }
        }
      }
    }
  `)

  data.artworks.edges.forEach(({ node }) => {
    createPage({
      path: `/artwork/${node.slug}`,
      component: path.resolve('./src/templates/artwork-template.js'),
      context: {
        id: node.id,
      },
    })
  })

  const artworks = data.artworks.edges
  const artworksPerPage = parseInt(process.env.ITEMS_PER_PAGE)
  const numGalleryPages = Math.ceil(artworks.length / artworksPerPage)

  Array.from({ length: numGalleryPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/artworks` : `/artworks/${i + 1}`,
      component: path.resolve('./src/templates/artwork-list-template.js'),
      context: {
        limit: artworksPerPage,
        skip: i * artworksPerPage,
        numGalleryPages,
        currentPage: i + 1,
      },
    })
  })

  data.exhibitions.edges.forEach(({ node }) => {
    createPage({
      path: `/exhibition/${node.slug}`,
      component: path.resolve('./src/templates/exhibition-template.js'),
      context: {
        id: node.id,
      },
    })
  })

  const exhibitions = data.exhibitions.edges
  const exhibitionsPerPage = parseInt(process.env.ITEMS_PER_PAGE)
  const numExhibitionPages = Math.ceil(exhibitions.length / exhibitionsPerPage)

  Array.from({ length: numExhibitionPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/exhibitions` : `/exhibitions/${i + 1}`,
      component: path.resolve('./src/templates/exhibition-list-template.js'),
      context: {
        limit: exhibitionsPerPage,
        skip: i * exhibitionsPerPage,
        numExhibitionPages,
        currentPage: i + 1,
      },
    })
  })
}
