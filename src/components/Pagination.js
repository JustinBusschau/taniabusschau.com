import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Pagination = ({ prefix, currentPage, numPages }) => {
  const prevPage = currentPage === 2 ? '' : currentPage - 1
  const prevLink = `/${prefix}/${prevPage}`
  const nextLink = `/${prefix}/${currentPage + 1}`

  return (
    <PaginationStyle>
      <span>
        {currentPage > 1 && (
          <h1>
            <Link to={prevLink}>
              <FaAngleLeft />
            </Link>
          </h1>
        )}
      </span>
      <span>
        <h2>
          {currentPage} of {numPages}
        </h2>
      </span>
      <span>
        {currentPage < numPages && (
          <h1>
            <Link to={nextLink}>
              <FaAngleRight />
            </Link>
          </h1>
        )}
      </span>
    </PaginationStyle>
  )
}

const PaginationStyle = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr;
  gap: 0.5rem;
  height: 3rem;
  margin: auto;

  span {
    margin: auto;
  }
`

export default Pagination
