import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  min-height: 100px;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 12em 2em;
  line-height: initial;
  gap: 1.5em;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    padding: 5em 2em;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding: 5em 10px;
  }
`

export const Banner = styled.div`
  display: flex;
  width: 50%;
  min-height: 60em;
  height: auto;
  flex-direction: column;
  padding: 1em 0;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 18px;
  margin: 0 auto;
  transition: all 0.3s;
  cursor: default;
  background-color: ${({theme}) => theme.colors.white};

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 99%;
    height: auto;
  }
`

export const BannerRight = styled(Banner)`
  position: relative;
  box-shadow: none;
  background-color: transparent;

  img {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 18px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: grayscale(100%) brightness(30%);
  }

  h2 {
    color: #ffffff;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 4em;
  gap: 1.2em;

  span {
    font-family: var(--font-heading);
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: 600;
    color: rgb(80, 90, 99);
  }

  h2 {
    font-size: 2.4em;
    font-family: var(--font-heading);
    font-weight: 600;
  }

  p {
    font-size: 1.4em;
    font-weight: 600;
    color: #5d5c5c;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding: 2em 1.5em;
  }
`

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
