import Link from 'next/link'
import {IoIosArrowDown} from 'react-icons/io'

import styled, {css} from 'styled-components'

export const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
`

export const Container = styled.div`
  background: #f5f5f5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 57rem;
  line-height: initial;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 3em 0;
  }
`

export const ContentLeft = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0 6em;
  flex-direction: column;
  color: ${({theme}) => theme.colors.black};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    padding: 0 2em 2em;
  }
`

export const ContentRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 40%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .image_container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  img {
    background-position: center;
    object-fit: cover;
    margin-bottom: 5em;
  }
`

export const Title = styled.h1`
  font-size: 2em;
  font-family: 'Inter';
  font-weight: 600;
  margin: 0 0 1.2em;
`

export const HeroText = styled.h2`
  font-family: 'Overpass';
  font-size: 1.4em;
  font-weight: 600;
  margin: 0 0 2.41em;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding-bottom: 1em;
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    gap: 1em;
  }
  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    flex-direction: column;
  }
  a {
    text-decoration: none;
  }
`

// export const ButtonSecondary = styled(Link)`
//   color: ${({theme}) => theme.colors.black};
//   text-decoration: none;
//   text-align: center;
//   font-family: 'Overpass';
//   margin-left: 1em;
//   font-size: 1.3em;
//   font-weight: 600;
//   @media screen and (max-width: ${({theme}) => theme.size.sm}) {
//     margin-left: 0;
//     border: 2px solid ${({theme}) => theme.colors.black};
//     border-radius: 8px;
//     padding: 5px 12px;
//   }

//   &:hover {
//     text-decoration: underline;
//   }
// `

export const ArrowIconWrap = styled.button`
  position: absolute;
  bottom: 1.2em;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`

export const ArrowDown = styled(IoIosArrowDown)`
  position: relative;
  transition: all 0.2s ease-in-out;
  color: ${({theme}) => theme.colors.black};
  font-size: 2.2em;
  -webkit-animation: jump 0.6s infinite;
  -moz-animation: jump 0.6s infinite;
  animation: jump 0.6s infinite;
  -webkit-animation-delay: 0.1s;
  -moz-animation-delay: 0.1s;
  -webkit-animation-direction: alternate;

  animation-direction: alternate;
  animation-delay: alternate;
  @-webkit-keyframes jump {
    0% {
      top: 0;
    }
    50% {
      top: 50px;
    }
    100% {
      top: 0;
    }
  }
  @-moz-keyframes jump {
    0% {
      top: 0;
    }
    50% {
      top: 50px;
    }
    100% {
      top: 0;
    }
  }
  @-o-keyframes jump {
    0% {
      top: 0;
    }
    50% {
      top: 50px;
    }
    100% {
      top: 0;
    }
  }
  @keyframes jump {
    0% {
      top: 0;
    }
    50% {
      top: 5px;
    }
    100% {
      top: 11px;
    }
  }
`
