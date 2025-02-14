
import styled from 'styled-components'

const NavbarWrapper = styled.nav`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
  }

  .nav-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .nav-icon {
    font-size: 1.5rem;
    color: ${props => props.theme.primaryColor};
  }

  .nav-links {
    list-style-type: none;
    transition: ${props => props.theme.mainTransition};
    height: ${props => (props.isOpen ? 'auto' : '0')};
    overflow: hidden;

    a {
      display: block;
      text-decoration: none;
      padding: 1rem 1.25rem;
      color: ${props => props.theme.mainBlack};
      transition: ${props => props.theme.mainTransition};
      font-weight: bold;
      text-transform: capitalize;
      letter-spacing: ${props => props.theme.mainSpacing};

      &:hover {
        color: ${props => props.theme.primaryColor};
      }
    }

    @media screen and (min-width: 576px) {
      height: auto;
      display: flex;
      margin-left: 2rem;

      a {
        padding: 0.5rem 1rem;
      }
    }
  }

  @media screen and (min-width: 576px) {
    padding: 0 2rem;
    flex-wrap: wrap;
  }
`

export default NavbarWrapper
