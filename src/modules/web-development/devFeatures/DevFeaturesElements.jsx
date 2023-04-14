import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  overflow: hidden;
  flex-shrink: 0;
  width: 90%;
  height: auto;
  padding: 4em 0 8em;
  margin: 0 auto;
  line-height: initial;
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
`

export const ImageContainer = styled.div`
  display: flex;
  flex: 1 0 50%;
  width: calc(50% - 50px);
  text-align: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  padding-right: 7em;

  h2 {
    font-size: 3em;
    font-family: Inter;
    font-weight: 600;
  }

  p {
    font-size: 1.6em;
    font-weight: 600;
    color: #24292f;
    padding-top: 0.81em;
  }
`
