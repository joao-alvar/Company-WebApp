import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  min-height: 65em;
  height: auto;
  width: 100%;
  background: ${({theme}) => theme.colors.black};

  @media screen and (max-width: 960px) {
    padding-top: 5pc;
    padding-bottom: 5pc;
  }

  ul {
    margin-top: 5em;
  }

  .cogwheels_icon {
    width: 17em;
  }
`

export const HeaderWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  color: ${({theme}) => theme.colors.white};
  text-align: center;

  p {
    font-size: 1.13em;
    letter-spacing: 0.6px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.8em;
  }

  h2 {
    font-size: 3.4em;
    font-family: var(--font-heading);
    font-weight: 600;
    margin-bottom: 0.4em;

    @media screen and (max-width: ${({theme}) => theme.size.sm}) {
      font-size: 3rem;
    }
  }

  h3 {
    font-size: 1.54em;
    line-height: 2.2rem;
    font-weight: 600;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 90%;
    font-size: 83%;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    text-align: start;
  }
`

export const IconTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 2.5em;
  font-weight: 600;

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    font-size: 2.3rem;
  }
`

export const Icon = styled.div`
  width: 15em;
  height: 15em;

  img {
    width: 100%;
    height: 100%;
  }
`
