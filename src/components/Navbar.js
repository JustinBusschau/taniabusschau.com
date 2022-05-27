import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import links from '../constants/links'
import { NavbarWrapper } from '../css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Navbar = () => {
  const data = useStaticQuery(getLogo)
  const gi = getImage(data.logo)

  return (
    <NavbarWrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" data-cy="logo">
            <GatsbyImage image={gi} alt={data.logo.title} />
          </Link>

          <button
            type="button"
            className="logo-btn"
            aria-label="Open Menu"
            data-cy="mobile-button"
          >
            <FaBars className="logo-icon" />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  data-cy={item.text}
                  activeClassName="navitem-active"
                >
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
    logo: contentfulAsset(contentful_id: { eq: "38HbP6SfXG3wgk54qTEK3H" }) {
      gatsbyImageData(
        width: 180
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
      title
    }
  }
`

export default Navbar
