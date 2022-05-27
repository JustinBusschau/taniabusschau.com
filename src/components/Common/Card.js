import React from 'react'
import { CardWrapper } from '../../css'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Card = ({ node, type }) => {
  const { slug, title, image, date } = node
  const gi = getImage(image)

  return (
    <CardWrapper>
      <div className="img-container">
        <GatsbyImage
          image={gi}
          className="img"
          style={{ height: '100%' }}
          alt="art"
        />
        <Link className="link" to={`/${type}/${slug}`}>
          open
        </Link>
        {date && <h6 className="date">{date}</h6>}
      </div>
      <div className="footer">
        <h4>{title}</h4>
      </div>
    </CardWrapper>
  )
}

export default Card
