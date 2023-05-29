import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  min-height: 55rem;
  overflow: hidden;
  flex-shrink: 0;
  line-height: initial;
  padding-top: 4pc;
  background: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    padding-bottom: 3pc;
  }
`

export const TitleWrap = styled.header`
  width: 80%;

  h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 3.6em;
    text-align: center;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    padding-left: 2em;
    h2 {
      text-align: start;
    }
  }
`

export const Content = styled.div`
  width: 70%;
  height: 100%;
  margin-top: 5pc;
  display: grid;
  grid-auto-columns: 1fr;
  align-items: start;
  justify-items: start;
  grid-column-gap: 7rem;
  grid-row-gap: 4.5rem;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    grid-template-columns: none;
    padding-left: 2em;
    padding-right: 2em;
    margin-top: 4em;
  }
`

export const ImageContent = styled.div`
  h3 {
    font-family: var(--font-heading);
    font-weight: 400;
    font-size: 2.6em;
  }
`

export const ImageWrap = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2pc;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }

  img {
    object-fit: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
    cursor: default;
  }
`

export const Listed = styled.ol`
  list-style: none;
`

export const ListItems = styled.li`
  display: flex;
  align-items: flex-start;
  margin-top: 0.5em;
  padding-bottom: 2rem;

  .number {
    font-family: var(--font-heading);
    font-weight: 400;
    font-size: 1.8em;
    flex: none;
    margin-right: 1.5rem;
  }
`

export const TextWrap = styled.div`
  h4 {
    font-family: var(--font-heading);
    font-weight: 400;
    font-size: 1.8em;
    padding-bottom: 1.5rem;
  }

  p {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 1.3em;
    line-height: 1.4em;
    color: #999999;
  }
`
