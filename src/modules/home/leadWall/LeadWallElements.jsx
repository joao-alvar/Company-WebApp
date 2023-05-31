import styled from 'styled-components'

export const LeadContainer = styled.div`
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
`

export const LeadContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  @media screen and (min-width: 961px) {
    gap: 3pc;
  }
`

export const TextWrap = styled.div`
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
  }

  h3 {
    font-size: 1.54em;
    line-height: 1.3em;
    font-weight: 600;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    font-size: 90%;
  }

  @media screen and (max-width: 440px) {
    width: 90%;
  }
`

export const StyledList = styled.ul`
  margin: 0 auto;
  width: 90%;
  list-style: none;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (1fr) [12];
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2pc;
  -moz-column-gap: 2pc;
  column-gap: 2pc;
  grid-row-gap: 2pc;
  grid-auto-rows: minmax(200px, auto);
  row-gap: 2pc;
  -ms-grid-column: 1;
  -ms-grid-column-span: 12;
  grid-column: 1 / span 12;
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({theme}) => theme.colors.white};
  gap: 0.8em;

  h4 {
    font-size: 6em;
  }

  p {
    font-family: var(--font-heading);
    font-size: 1.4em;
    font-weight: 500;
  }
`
