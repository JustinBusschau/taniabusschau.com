import React from 'react'
import Title from '../Title'
import RichTextDisplay from '../Common/RichTextDisplay'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'

const CurrentExhibit = () => {
  const { nextExhibit } = useStaticQuery(getNextOrCurrentExhibition)
  const {
    spaceType,
    name,
    startDate,
    endDate,
    url,
    location,
    description,
    slug,
  } = nextExhibit
  const subtitle = `in the ${spaceType}`
  const linkDestination = `/exhibition/${slug}`
  const desc = JSON.parse(description.raw)

  return (
    <section>
      <Title title="See my work" subtitle={subtitle} />
      <NextEventWrapper>
        <h2>{name}</h2>
        <p>
          {startDate} to {endDate}
        </p>
        <p>
          Exhibition details can be found at{' '}
          <a href={url} target="__ext">
            {url}
          </a>
        </p>
        <h3>{location}</h3>
        <RichTextDisplay json={desc} />
        <Link to={linkDestination}>More information here</Link>
      </NextEventWrapper>
    </section>
  )
}

const NextEventWrapper = styled.div`
  border: 1px solid white;
  padding: 0.5rem;
  box-shadow: ${(props) => props.theme.lightShadow};
  transition: ${(props) => props.theme.mainTransition};

  &:hover {
    box-shadow: ${(props) => props.theme.darkShadow};
  }
`

const getNextOrCurrentExhibition = graphql`
  query {
    nextExhibit: contentfulExhibition(useForContact: { eq: true }) {
      spaceType
      name
      startDate(formatString: "DD MMM YYYY")
      endDate(formatString: "DD MMM YYYY")
      url
      location
      description {
        raw
      }
      slug
    }
  }
`

export default CurrentExhibit
