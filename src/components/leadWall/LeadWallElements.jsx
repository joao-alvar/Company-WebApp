import styled from 'styled-components'
import theme from '../../styles/Theme'

export const LeadContainer = styled.div`
  height: 40em;
  width: 100%;
  display: flex;
  background: ${({theme}) => theme.colors.black};
`

export const LeadContentText = styled.div`
  position: relative;
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.colors.white};

  h2 {
    padding: 0 1.2em;
    margin-top: 2em;
    font-size: 2em;
  }

  p {
    padding: 0.9em 1.5em;
    font-family: Overpass;
    font-size: 1.4em;
    font-weight: 300;
  }

  .lead_content_p {
    padding-top: 0.5em;
  }

  button {
    background: transparent;
    color: ${({theme}) => theme.colors.white};
    border: 2px solid ${({theme}) => theme.colors.white};
    font-size: 1.2em;
    font-weight: 700;
    padding: 0.8em 1em 0.4em 1em;
    margin-top: 0.8em;
    margin-left: 1.9em;
    text-transform: uppercase;
    font-family: Overpass;
    &:hover {
      color: ${({theme}) => theme.colors.black};
      background: ${({theme}) => theme.colors.white};
    }
  }
`
export const LeadImageWrap = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
