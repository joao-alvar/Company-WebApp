import {ButtonPrimary} from '@/components/button/ButtonElements'
import styled from 'styled-components'

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
  padding-bottom: 4em;
  line-height: initial;
  background-color: rgb(243, 244, 245);
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    .bottom_wrapper {
      margin-top: 4em;
    }
    .bottom_content {
      padding-bottom: 4em;
  }

  @media screen and (max-width: 410px) {
    .bottom_wrapper {
      margin-top: 2em;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  padding: 8em 0;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    padding: 0;
  }
`

export const ImageWrap = styled.div`
  display: flex;
  flex: 1 0 50%;
  width: calc(50% - 50px);
  text-align: center;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex: none;
    width: 100%;
  }

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
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    padding-top: 5em;
  }

  @media screen and (max-width: 410px) {
    padding: 4em 1em;
  }

  span {
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: 600;
    color: rgb(80, 90, 99);
  }
  h2 {
    font-size: 3em;
    font-family: var(--font-heading);
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
    @media screen and (max-width: 410px) {
      width: 100%;
    }
  }
`

export const StyledButton = styled(ButtonPrimary)`
  margin-top: 1em;
  padding: 0.6rem 1.2rem;

  @media screen and (max-width: 410px) {
    width: 100%;
  }
`
