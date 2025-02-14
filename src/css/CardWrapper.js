
import styled from 'styled-components'

const CardWrapper = styled.article`
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
  width: 300px;
  height: 300px;
  margin: 2rem 1rem;
  border-radius: 10px;
  overflow: hidden;

  .img-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &:hover .card-info-overlay {
      opacity: 1;
    }
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--mainTransition);
  }

  .card-info-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: var(--mainTransition);
    padding: 1rem;
    text-align: center;
  }

  .card-info-text {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
`

export default CardWrapper
