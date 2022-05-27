import styled from 'styled-components'

const ExhibitionWrapper = styled.article`
  .post-image {
    margin: 0 auto;
    width: 90%;
  }

  .post-container {
    padding: 1rem;
    margin: 0 auto;

    a.btn-primary {
      font-size: 0.8rem;
      display: block;
      text-align: center;
    }

    .content-container {
      margin-top: 3rem;

      .content-title {
        font-size: 2.3rem;
        font-weight: 600;
        text-align: center;
        word-break: break-all;
      }

      .content-published {
        text-transform: capitalize;
      }

      .post {
        margin: 2rem 0;
      }

      .post img {
        max-width: 70vw;
      }
    }
  }

  @media (min-width: 760px) {
    .post-container {
      padding: 4rem;
      width: 80vw;

      a.btn-primary {
        font-size: 1rem;
        display: inline;
      }
    }
  }
`

export default ExhibitionWrapper
