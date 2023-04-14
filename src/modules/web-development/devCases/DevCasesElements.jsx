import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 2em 0;
  margin: 0 auto;
  line-height: initial;
`

export const Content = styled.div`
  display: flex;

  img {
    object-fit: cover;
    width: 33%;
    pointer-events: none;
  }
`
