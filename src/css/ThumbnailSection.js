import styled from 'styled-components'

const ThumbnailSection = styled.article`
  width: 30vw;
  position: relative;
  display: block;
  box-shadow: var(--lightShadow);
  margin: 3rem 0;

  .img-container {
    position: relative;
    cursor: pointer;
    
    &:hover .overlay {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    display: block;
    box-shadow: var(--lightShadow);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    
    span {
      color: white;
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    cursor: pointer;
    padding: 2rem;
  }

  .modal-image {
    max-height: 90vh;
    width: auto;
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
