import {IoIosArrowForward} from 'react-icons/io'

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  min-height: 35em;
  line-height: initial;
`
export const Content = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 700px) {
    text-align: start;
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }

  h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 3.6em;
    padding-bottom: 2rem;
  }

  .button {
    position: relative;
    font-size: 1.6em;
    margin-top: 1em;
    padding: 0;
    border: none;
  }
`

export const Icon = styled(IoIosArrowForward)`
  position: absolute;
  top: 4px;
  margin-left: 2px;
  font-size: 1em;
`
