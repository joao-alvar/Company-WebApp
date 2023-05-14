import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 2em 0;
  font-weight: 700;
  line-height: initial;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 0;
  width: 80%;
  font-family: var(--font-secondary-text);
  font-weight: 400;
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 95%;
  }
  h1 {
    width: 50%;
    text-align: center;
    margin: 0 auto;
    font-size: 5em;
    font-family: var(--font-heading);
    font-weight: 600;
    padding: 0.7em 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      width: 100%;
    }
    @media screen and (max-width: ${({theme}) => theme.size.sm}) {
      font-size: 3.5em;
      border-bottom: none;
    }
  }

  .top_gap {
    margin-top: 2em;
  }

  p {
    font-size: 1.5em;
    line-height: 1.3em;
  }

  a {
    text-decoration: underline;
    color: #000000;
  }

  h2 {
    font-size: 2.4em;
    font-family: var(--font-heading);
    font-weight: 600;
    margin-top: 1em;
    padding-bottom: 1em;
  }
  .list_style {
    li {
      padding: 1em 2em;
      font-size: 1.5em;
      list-style-type: disc;
      list-style-position: inside;
      ::marker {
        unicode-bidi: isolate;
        font-variant-numeric: tabular-nums;
        text-transform: none;
        text-indent: 0px !important;
        text-align: start !important;
        text-align-last: start !important;
      }
    }
  }
`

export const list = styled.ul`
  display: flex;
  list-style: none;
`
