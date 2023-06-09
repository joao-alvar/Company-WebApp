import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: auto;
  height: 35em;
  @media screen and (max-width: 768px) {
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
    font-size: 4.8rem;
    margin-bottom: 0.5em;

    @media screen and (max-width: 980px) {
      font-size: 4.2rem;
    }

    @media screen and (max-width: 850px) {
      font-size: 3.8rem;
    }
  }
`
