import React from 'react'
import { Link } from 'gatsby'
import links from '../constants/links'
import { FooterWrapper } from '../css'

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="links">
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className="copyright">
        All content and images copyright &copy; Tania Busschau{' '}
        {new Date().getFullYear()} All rights reserved
      </div>
      <div id="wcb" className="wcb carbonbadge wcb-d"></div>
    </FooterWrapper>
  )
}

export default Footer
