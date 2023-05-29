import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  min-height: 42rem;
  height: auto;
  line-height: initial;
  /* padding-top: 3pc;
  padding-bottom: 3pc; */
  @media screen and (max-width: 1040px) {
    flex-direction: column;
    height: auto;
    padding-top: 3em;
    padding-bottom: 3em;
  }
`

export const Content = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 5rem;
  padding-right: 5rem;
  color: ${({theme}) => theme.colors.black};
  @media screen and (max-width: 1040px) {
    width: 100%;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding: 0 2em 2em;
  }
`

export const Title = styled.h1`
  font-size: 4.6rem;
  font-family: var(--font-heading);
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 0.5em;
  color: ${({theme}) => theme.colors.black};
  @media screen and (max-width: 710px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 3.4rem;
  }
`

export const HeroText = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2.41rem;
  line-height: 2.5rem;
  color: ${({theme}) => theme.colors.black};

  @media screen and (max-width: 500px) {
    font-size: 1.7rem;
  }
`
