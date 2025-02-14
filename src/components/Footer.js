import React from 'react'
import { FooterWrapper } from '../css'

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="copyright">
        All content and images copyright &copy; Tania Busschau{' '}
        {new Date().getFullYear()} All rights reserved
      </div>
      <div id="wcb" className="wcb carbonbadge wcb-d"></div>
    </FooterWrapper>
  )
}

export default Footer