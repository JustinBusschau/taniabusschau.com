
import styled from 'styled-components'

const DescriptiveBlurbWrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${props => props.theme.mainWhite};
  border-radius: 10px;
  box-shadow: ${props => props.theme.lightShadow};

  .desc {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${props => props.theme.mainBlack};
    font-style: italic;
  }

  @media screen and (min-width: 992px) {
    margin: 3rem auto;
  }
`

export default DescriptiveBlurbWrapper
