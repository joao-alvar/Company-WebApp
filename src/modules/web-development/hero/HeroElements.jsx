import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  min-height: 54rem;
  line-height: initial;
  background: ${({theme}) => theme.colors.white};
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    height: auto;
    padding-top: 2em;
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
    font-size: 1.1em;
    font-weight: 500;
    text-transform: uppercase;
  }

  h1 {
    font-family: var(--font-heading);
    font-size: 4rem;
    font-weight: 700;
    color: rgb(25, 28, 31);
    margin-top: 1rem;
  }

  .title_secondary_text {
    font-size: 1.4em;
    font-weight: 500;
    word-break: break-word;
    margin-top: 1rem;
    padding: 0px;
    line-height: 1.6em;
  }
  .button {
    margin-top: 1.2em;
    margin-right: auto;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
`
