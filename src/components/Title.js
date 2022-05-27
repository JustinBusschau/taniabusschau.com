import React from 'react'
import styled from 'styled-components'

const Title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h2>
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </h2>
    </div>
  )
}

export default styled(Title)`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

  h2 {
    text-align: center;
  }

  .title {
    color: #14110f;
  }
  .subtitle {
    color: #d9c5b2;
  }
  span {
    display: block;
  }

  @media (min-width: 576px) {
    font-size: 2.3rem;
    span {
      display: inline;
      margin: 0 0.35rem;
    }
  }
`
