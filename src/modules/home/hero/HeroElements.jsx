import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
`

export const Container = styled.div`
  background: #f5f5f5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 57rem;
  line-height: initial;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 3em 0;
  }
`

export const ContentLeft = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0 6em;
  flex-direction: column;
  color: ${({theme}) => theme.colors.black};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    padding: 0 2em 2em;
  }
`

export const ContentRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 40%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .image_container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  img {
    background-position: center;
    object-fit: cover;
    margin-bottom: 5em;
  }
`

export const Title = styled.h1`
  font-size: 2em;
  font-family: var(--font-heading);
  font-weight: 600;
  margin-bottom: 0.9em;
`

export const HeroText = styled.h2`
  font-size: 1.4em;
  font-weight: 600;
  margin: 0 0 2.41em;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding-bottom: 1em;
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    gap: 1em;
  }
  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    flex-direction: column;
  }
  a {
    text-decoration: none;
  }
`
