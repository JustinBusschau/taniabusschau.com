import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const StyledHero = ({ image, className, alt }) => {
  const gi = getImage(image)
  return <GatsbyImage className={className} image={gi} alt={alt} />
}

export default styled(StyledHero)`
  height: ${(props) => (props.home ? '50vh' : '25vh')};
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: start;
  align-items: center;
`
