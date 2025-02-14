
import styled from 'styled-components'

const NavbarWrapper = styled.nav`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-center {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
  }

  .logo-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    @media screen and (min-width: 992px) {
      display: none;
    }
  }

  .logo-icon {
    color: var(--primaryColor);
    font-size: 1.5rem;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-icon {
    font-size: 1.5rem;
    color: ${props => props.theme.primaryColor};
  }

  .nav-links {
    list-style-type: none;
    transition: var(--mainTransition);
    height: 0;
    overflow: hidden;

    &.show-nav {
      height: auto;
    }

    a {
      display: block;
      text-decoration: none;
      padding: 1rem 1.25rem;
      color: var(--mainBlack);
      transition: var(--mainTransition);
      font-weight: bold;
      text-transform: capitalize;
      letter-spacing: var(--mainSpacing);

      &:hover {
        color: var(--primaryColor);
      }
    }

    @media screen and (min-width: 992px) {
      height: auto;
      display: flex;
      margin-left: auto;

      a {
        padding: 0.5rem 1rem;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .nav-center {
      display: flex;
      align-items: center;
    }
  }

  @media screen and (min-width: 576px) {
    padding: 0 2rem;
    flex-wrap: wrap;
  }
`

export default NavbarWrapper
