import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-top: 2em;
  padding-bottom: 2em;
  font-weight: 700;
  line-height: initial;
`

export const Title = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 15rem;
  font-family: var(--font-heading);
  border-bottom: 1px solid #d0d1d2;

  h1 {
    font-weight: 600;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.link};
    font-weight: 600;
    font-size: 1.4rem;
    margin-left: 0.6rem;
    border-bottom: 1px solid ${({theme}) => theme.colors.link};

    &:hover {
      border-width: 2px;
    }
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 95%;

    a {
      font-size: 1.5rem;
    }
  }
`

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 95%;
  }

  h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  p {
    font-family: var(--font-heading);
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
`
