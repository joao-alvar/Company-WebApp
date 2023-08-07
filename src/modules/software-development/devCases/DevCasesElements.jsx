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
  /* padding: 2em 0; */
  margin: 0 auto;
  line-height: initial;
  background-color: ${({theme}) => theme.colors.white};
`

export const Content = styled.div`
  display: flex;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    img {
      width: 100%;
    }
  }

  img {
    object-fit: cover;
    width: 33.33%;
    pointer-events: none;
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      width: 100%;
      height: 100%;
    }
  }
`
