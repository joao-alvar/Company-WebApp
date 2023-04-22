import styled from 'styled-components'

import {Button} from '@/modules/home/lead/LeadElements'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0 auto;
  line-height: initial;
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  padding: 8em 0;
`

export const ImageWrap = styled.div`
  display: flex;
  flex: 1 0 50%;
  width: calc(50% - 50px);
  text-align: center;

  img {
    width: 100%;
    object-fit: cover;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  padding: 0 5em;

  span {
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: 600;
    color: rgb(80, 90, 99);
  }
  h2 {
    font-size: 3em;
    font-family: Inter;
    font-weight: 600;
  }

  p {
    font-size: 1.6em;
    font-weight: 600;
    color: #24292f;
    padding-top: 0.81em;
  }

  a {
    width: max-content;
  }
`

export const StyledButton = styled(Button)`
  margin-top: 1em;
`
