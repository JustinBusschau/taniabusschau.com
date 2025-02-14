
import styled from 'styled-components'

const ArtworkWrapper = styled.section`
  padding: 2rem 0;
  max-width: 1170px;
  margin: 0 auto;

  .thumbnail-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: ${props => props.theme.lightShadow};
    
    &:hover .overlay {
      opacity: 1;
    }
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

  @media screen and (min-width: 992px) {
    padding: 4rem 2rem;
  }
`

export default ArtworkWrapper
