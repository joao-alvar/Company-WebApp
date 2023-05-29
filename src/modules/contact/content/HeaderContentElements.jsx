import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    padding-left: 0.2em;
  }
`

export const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;
  padding-top: 4em;
  /* text-align: center; */
  color: ${({theme}) => theme.colors.black};

  h1 {
    font-size: 5.5rem;
    font-family: var(--font-heading);
    font-weight: 700;
    color: #191c1f;
  }

  p {
    font-size: 1.3em;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    padding-top: 2rem;
    text-align: start;
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    h1 {
      font-size: 4.2rem;
    }
  }
`
