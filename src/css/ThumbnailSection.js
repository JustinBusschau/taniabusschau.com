import styled from 'styled-components'

const ThumbnailSection = styled.article`
  width: 30vw;
  position: relative;
  display: block;
  box-shadow: var(--lightShadow);
  margin: 3rem 0;

  img {
    width: 100%;
    display: block;
    box-shadow: var(--lightShadow);
  }
  div {
    box-shadow: var(--lightShadow);
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    img {
      max-height: 500px;
    }
    .img-container {
      max-height: 500px;
    }
  }
  @media screen and (min-width: 992px) {
    .img-container::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid var(--primaryColor);
      box-sizing: border-box;
      top: -16px;
      left: -16px;
      z-index: -1;
    }
  }
`

export default ThumbnailSection
