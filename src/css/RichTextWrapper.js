import styled from 'styled-components'

const RichTextWrapper = styled.div`
  word-break: normal;
  max-width: 80%;
  margin: auto;
  padding: 1.2em;
  border: 1px solid ${(props) => props.theme.mainBlack};
  background: ${(props) => props.theme.mainGrey};

  .content-image {
    display: block;
    margin: 0 auto;
  }
`

export default RichTextWrapper
