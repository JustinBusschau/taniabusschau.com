import styled from 'styled-components'

const FooterWrapper = styled.footer`
  margin-top: auto;
  background: ${props => props.theme.mainBlack};
  padding: 2rem;
  text-align: center;
  color: ${props => props.theme.mainWhite};

  .links a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.mainWhite};
    margin: 0.5rem 1rem;
    letter-spacing: ${props => props.theme.mainSpacing};
    transition: ${props => props.theme.mainTransition};
    font-weight: bold;
  }
  .links a:hover {
    color: ${props => props.theme.primaryColor};
  }

  .copyright {
    letter-spacing: ${props => props.theme.closeSpacing};
    line-height: 1;
    margin-top: 1rem;
  }
`

export default FooterWrapper
