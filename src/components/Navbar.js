import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import links from '../constants/links'
import { NavbarWrapper } from '../css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Navbar = () => {
  const data = useStaticQuery(getLogo)
  const gi = getImage(data.logo.edges[0].node.siteBannerImage)

  const handleClick = () => {
    document.querySelector('.nav-links').classList.toggle('show-nav')
  }

  return (
    <NavbarWrapper>
      <div className="nav-center">
        <div className="nav-header">
          <div className="brand">
            <Link to="/">
              <GatsbyImage image={gi} alt={data.logo.edges[0].node.name} />
            </Link>
            <h1 className="artist-name">Tania Busschau</h1>
          </div>

          <button
            type="button"
            className="logo-btn"
            aria-label="Open Menu"
            onClick={handleClick}
          >
            <FaBars className="logo-icon" />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path} activeClassName="navitem-active">
                  {item.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </NavbarWrapper>
  )
}

const getLogo = graphql`
  query {
    logo: allContentfulPerson(
      filter: { useAsFeaturedArtist: { eq: true } }
      limit: 1
      sort: { fields: createdAt, order: ASC }
    ) {
      edges {
        node {
          name
          siteBannerImage {
            gatsbyImageData(
              width: 180
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

export default Navbar
