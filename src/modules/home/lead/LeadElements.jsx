import {IoIosArrowForward} from 'react-icons/io'

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
    height: auto;
    margin-bottom: 5pc;
    justify-content: start;
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
    font-weight: 600;
    font-size: 3.6em;
  }

  p {
    font-size: 1.6em;
    font-weight: 600;
    color: rgb(25, 28, 31);
    word-break: break-word;
    margin-top: 1.2rem;
    margin-bottom: 1em;
    padding: 0;
    @media screen and (max-width: 700px) {
      font-size: 1.4em;
    }
  }

  .button {
    position: relative;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 1060px) {
      border: none;
    }
  }

  @media screen and (max-width: 1060px) {
    align-items: start;
    text-align: start;
    width: 100%;
    padding-left: 2em;
    width: 30pc;
    max-width: 45em;

    h2 {
      font-size: 3em;
    }
  }
`

export const Icon = styled(IoIosArrowForward)`
  position: absolute;
  top: 3px;
  margin-left: 2px;
  font-size: 1em;
`
