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
  flex-shrink: 0;
  width: 100%;
  height: 57rem;
  line-height: initial;

  @media screen and (max-width: 1040px) {
    height: auto;
    padding-top: 3em;
    padding-bottom: 3em;
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;

  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const Content = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  padding-top: 9em;
  padding-left: 2rem;
  padding-right: 2rem;
  flex-direction: column;
  font-family: var(--font-heading);
  color: ${({theme}) => theme.colors.black};

  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    width: 100%;
    padding-bottom: 4em;
    padding-top: 0;
  }

  @media screen and (max-width: 500px) {
    padding-left: 0;
    padding-right: 0;
  }

  .pre_title {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    width: max-content;
    padding: 1px 5px;
    border: 1px solid #000;
    border-radius: 5px;
    margin-bottom: 0.3rem;
  }
`

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1.8rem;
  color: ${({theme}) => theme.colors.black};

  @media screen and (max-width: 710px) {
    font-size: 4rem;
  }
`

export const HeroText = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.5rem;
  margin-bottom: 2rem;
  width: 65%;
  color: ${({theme}) => theme.colors.black};

  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    width: 80%;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.7rem;
    width: 90%;
  }
`

export const LinkWrap = styled.div`
  display: flex;
  gap: 0.5rem;

  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    a {
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const ImageContainer = styled.div`
  width: 40%;
  height: 80%;
  margin: 0 auto;
  flex: 1;
  /* padding-right: 1em; */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    width: 80%;
  }
`
