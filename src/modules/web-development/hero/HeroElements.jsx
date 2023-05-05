import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 54rem;
  line-height: initial;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    height: auto;
    padding: 2em 0 4em;
  }
`

export const ImgContainer = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
    z-index: -1;
  }
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }
`

export const Content = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2em;
  background: #ffffff;
  color: ${({theme}) => theme.colors.black};
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    align-items: start;
  }

  .pre_title {
    margin-right: auto;
    font-size: 1.35em;
    color: rgb(80, 90, 99);
    font-family: Overpass;
    font-weight: 700;
  }

  h1 {
    font-family: Overpass;
    font-size: 1.82em;
    font-weight: 600;
    color: rgb(25, 28, 31);
    margin: 1.71rem 0 0;
  }

  .title_secondary_text {
    font-size: 1.5em;
    font-weight: 600;
    color: rgb(25, 28, 31);
    word-break: break-word;
    margin: 1.2rem 0 0;
    padding: 0px;
  }
  .button {
    margin-top: 1.2em;
    margin-right: auto;
    @media screen and (max-width: ${({theme}) => theme.size.xs}) {
      width: 100%;
    }
  }
`
