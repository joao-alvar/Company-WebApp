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
  line-height: initial;
`

export const Title = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 15rem;
  font-family: var(--font-heading);
  border-bottom: 1px solid #d0d1d2;

  h1 {
    font-weight: ${({theme}) => theme.values.secondaryWeight};
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.link};
    font-weight: ${({theme}) => theme.values.secondaryWeight};
    font-size: 1.4rem;
    margin-left: 0.6rem;
    border-bottom: 1px solid ${({theme}) => theme.colors.link};

    &:hover {
      border-width: 2px;
    }
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 92%;

    a {
      font-size: 1.5rem;
    }
  }
`

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2em;
  font-family: var(--font-heading);

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 92%;
  }

  p {
    font-size: 1.65rem;
    line-height: 2.7rem;
    font-weight: 400;
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
    font-weight: ${({theme}) => theme.values.secondaryWeight};
    margin-top: 1em;
    padding-bottom: 1em;
  }

  .privacy_statement {
    margin-top: 2rem;
  }
`

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  list-style: decimal;
`

export const ListItems = styled.li`
  padding-top: 1em;
  padding-bottom: 1em;
  padding-right: 2em;
  margin-left: 2em;
  font-size: 1.65rem;
  font-weight: 400;
  line-height: 164%;
  list-style: disc outside;
`
