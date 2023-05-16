import Link from 'next/link'
import {HiArrowRight} from 'react-icons/hi'

import styled from 'styled-components'
export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  width: 100%;
  min-height: 30rem;
  overflow: hidden;
  flex-shrink: 0;
  line-height: initial;
  background: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
  border-bottom: 1px solid ${({theme}) => theme.colors.primaryTextColor};

  @media screen and (max-width: 500px) {
    padding: 1em;
    text-align: start;
    align-items: start;
  }

  h2 {
    font-size: 3.4em;
    font-family: var(--font-heading);
    font-weight: 600;
    padding-bottom: 0.3em;
  }

  p {
    font-size: 1.5em;
    padding-bottom: 0.8em;
  }
`

export const Button = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.colors.white};
  font-size: 1.6em;
  font-weight: 600;
  border-radius: 8px;
  display: flex;
  &:hover {
    text-decoration: underline;
  }
`

export const IconArrow = styled(HiArrowRight)`
  font-size: 0.9em;
  transform: translateY(8px);
  margin-left: 4px;
`
