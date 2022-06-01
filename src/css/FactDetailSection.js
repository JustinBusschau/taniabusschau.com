import styled from 'styled-components'

const FactDetailSection = styled.div`
  display: grid;
  grid-template-rows: auto;
  align-items: left;
  justify-items: center;
  word-break: normal;

  @media screen and (min-width: 576px) {
    padding: 0 2rem;
  }

  @media screen and (min-width: 992px) {
    margin-top: 1.5rem;
    grid-template-columns: 1fr 1fr;
  }
`

export default FactDetailSection
