import Image from 'next/image'

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  overflow: hidden;
  flex-shrink: 0;
  width: 90%;
  height: auto;
  padding: 4em 0 8em;
  margin: 0 auto;
  line-height: initial;

  h2 {
    font-size: 4em;
    font-family: Inter;
    font-weight: 600;
    margin-top: 1.5em;
    text-align: center;
  }

  p {
    font-size: 1.7em;
    padding-top: 0.7em;
    text-align: center;
  }
`

export const StyledList = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5em;

  .active {
    border-color: ${({theme}) => theme.colors.primary};
  }
`

export const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1em 2em;
  border-bottom: 2px solid #cdcdcd;
  cursor: pointer;

  span {
    padding-top: 0.7em;
    font-size: 1.6em;
  }

  .show {
    filter: none;
  }
`

export const Icon = styled(Image)`
  filter: grayscale(90%);
  transition: ease-out;
  ${List}:hover & {
    filter: none;
  }
`

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: auto;
  padding: 2em 0;

  h2 {
    font-size: 2.2em;
    text-align: start;
  }

  p {
    font-size: 1.5em;
    text-align: start;
    color: #2d2d2d;
  }
`
