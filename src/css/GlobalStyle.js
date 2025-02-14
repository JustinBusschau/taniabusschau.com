import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.mainWhite};
    color: ${(props) => props.theme.mainBlack};
    font-display: swap;
    font-family: 'Quicksand', sans-serif;
    font-size: 1.1rem;
    line-height: 1.6;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Impact", sans-serif;
    letter-spacing: ${(props) => props.theme.mainSpacing};
    font-display: swap;
    margin-bottom: 1.25rem;
  }

  p {
    margin-bottom: 1.25rem;
  }

  a {
    text-decoration: none;
    }

    .btn-white,
    .btn-primary {
        text-transform: uppercase;
        letter-spacing: ${(props) => props.theme.mainSpacing};
        color: ${(props) => props.theme.mainWhite};
        border: 2px solid ${(props) => props.theme.mainWhite};
        padding: 0.9rem 1.6rem;
        display: inline-block;
        transition: ${(props) => props.theme.mainTransition};
        cursor: pointer;
    }

    .btn-white:hover {
        background: ${(props) => props.theme.mainWhite};
        color: ${(props) => props.theme.primaryColor};
    }

    .btn-primary {
        background: ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.mainWhite};
        border: 2px solid ${(props) => props.theme.primaryColor};
    }

    .btn-primary:hover {
        background: transparent;
        color: ${(props) => props.theme.primaryColor};
    }

    main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
`
