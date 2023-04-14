import {HiArrowRight} from 'react-icons/hi'

import styled from 'styled-components'
export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100px;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: 35rem;
  line-height: initial;
  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.white};

  h2 {
    font-size: 3.4em;
    font-family: Inter;
    font-weight: 600;
    padding-bottom: 0.3em;
  }

  p {
    font-size: 1.5em;
    padding-bottom: 0.5em;
  }

  a {
    text-decoration: none;
  }
`

export const Button = styled.button`
  color: ${({theme}) => theme.colors.white};
  margin-top: 1em;
  font-size: 1.6em;
  font-weight: 600;
  padding: 4px 12px;
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
