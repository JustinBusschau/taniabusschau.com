import styled from 'styled-components'

const CardWrapper = styled.article`
  position: relative;
  box-shadow: var(--lightShadow);
  margin: 2rem 0;
  max-width: 100%;
  transition: var(--mainTransition);

  .img-container {
    position: relative;
    overflow: hidden;

    &:hover .card-info-overlay {
      opacity: 1;
    }
  }

  .card-image {
    transition: var(--mainTransition);
    display: block;
    width: 100%;
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

  @media screen and (min-width: 576px) {
    width: calc(50% - 1rem);
  }
`

export default CardWrapper