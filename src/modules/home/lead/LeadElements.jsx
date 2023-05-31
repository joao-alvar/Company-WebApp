import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: auto;
  height: 35em;
  @media screen and (max-width: 1060px) {
    display: none;
  }
`

export const LeadInformation = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  h2 {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 4.4em;
    margin-bottom: 0.5em;
  }
`
