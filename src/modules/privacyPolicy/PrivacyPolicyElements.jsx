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
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding-top: 0;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2em;
  padding-bottom: 2em;
  width: 80%;
  font-family: var(--font-secondary-text);
  font-weight: 400;
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding-top: 0;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  h1 {
    width: 50%;
    text-align: center;
    margin: 0 auto;
    font-size: 6rem;
    font-family: var(--font-heading);
    font-weight: 600;
    padding-top: 0.7em;
    padding-bottom: 0.7em;
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
    @media screen and (max-width: 1016px) {
      width: 80%;
    }

    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      text-align: start;
      width: 100%;
      font-size: 4.5rem;
    }
    @media screen and (max-width: ${({theme}) => theme.size.xs}) {
      font-size: 3.8rem;
    }
  }

  .top_gap {
    margin-top: 2em;
  }

  p {
    font-size: 1.65rem;
    line-height: 2.5rem;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.link};
    border-bottom: 1px solid ${({theme}) => theme.colors.link};

    &:hover {
      border-width: 2px;
    }
  }

  h2 {
    font-size: 2.9rem;
    font-family: var(--font-heading);
    font-weight: 600;
    margin-top: 1em;
    padding-bottom: 1em;
  }
  .list_style {
    li {
      padding-top: 1em;
      padding-bottom: 1em;
      padding-right: 2em;
      margin-left: 2em;
      font-size: 1.65rem;
      font-weight: 500;
      line-height: 164%;
      list-style: disc outside;
    }
  }
`

export const list = styled.ul`
  display: flex;
  list-style: none;
`
