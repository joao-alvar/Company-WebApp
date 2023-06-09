import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  min-height: 40rem;
  height: auto;
  margin: 0 auto;
  line-height: initial;
  padding-bottom: 2pc;
`
export const Wrapper = styled.div`
  display: block;
  padding: 3rem;
  width: inherit;
  height: 100%;

  @media only screen and (max-width: 500px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`
export const TitleWrap = styled.header`
  display: block;
  margin-bottom: 1rem;

  h2 {
    font-family: var(--font-heading);
    font-size: 4.2rem;
    font-weight: 600;

    @media only screen and (max-width: 768px) {
      font-size: 4rem;
    }
    @media only screen and (max-width: 550px) {
      font-size: 3.2rem;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;

  @media only screen and (max-width: 965px) {
    flex-direction: column;
  }
`

export const FloatLeft = styled.div`
  /* display: flex; */
  float: left;
  padding-right: 4rem;

  p {
    font-size: 1.6rem;
    line-height: 2.5rem;
    font-weight: 400;
    font-family: var(--font-heading);
  }
`

export const FloatRight = styled.div`
  display: flex;
  float: right;
  border-left: 1px solid #000;
  padding-left: 3rem;

  h3 {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 400;
  }

  @media only screen and (max-width: 965px) {
    margin-top: 2.5rem;

    h3 {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding-left: 1rem;
  }
`
