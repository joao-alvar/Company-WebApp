import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  min-height: 55rem;
  padding-top: 2pc;
  padding-bottom: 3pc;
  line-height: initial;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    gap: 2pc;
    padding-left: 1em;
    padding-right: 1em;
  }
`
export const TitleWrap = styled.header`
  display: block;
  padding-left: 4rem;
  padding-right: 2rem;
  margin-right: auto;
  margin-bottom: 1rem;

  h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 4rem;
  }

  @media screen and (max-width: 980px) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 580px) {
    padding-left: 1.8rem;
    padding-right: 2rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  display: -ms-flexbox;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  @media screen and (max-width: 980px) {
    gap: 2rem;
  }
`

export const FloatLeft = styled.div`
  max-width: 50%;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  padding-left: 4rem;
  padding-right: 4rem;

  @media screen and (max-width: 980px) {
    flex: none;
    max-width: 100%;
  }

  @media screen and (max-width: 580px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 2.3rem;
    font-weight: 500;
  }
`

export const FloatRight = styled(FloatLeft)`
  border-right: none;
  padding-left: 6rem;
  border-left: 2px solid #000;

  h3 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 4em;
    margin-bottom: 0.4em;
  }

  @media screen and (max-width: 980px) {
    padding-left: 4rem;
    border-left: none;

    h3 {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        /* top: 100%; */
        width: 2px;
        left: -2rem;
        height: 100%;
        border-radius: 2px;
        background: linear-gradient(
          130deg,
          #ff7a18,
          #af002d 41.07%,
          #319197 76.05%
        );
      }
    }
  }

  @media screen and (max-width: 580px) {
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 0.9rem;
  }
`
