import {IoIosArrowDown} from 'react-icons/io'

import styled from 'styled-components'

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
`

export const ContentLeft = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding: 0 6em;
  flex-direction: column;
  color: ${({theme}) => theme.colors.black};
`

export const ContentRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 40%;
  height: 100%;

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
  /* padding: 0 4em; */
  margin: 0 0 2.41em;
`

export const ButtonContainer = styled.div`
  display: flex;
  /* gap: 2em; */
  /* align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative; */
`

export const HeroBtn = styled.button`
  background: transparent;
  color: ${({theme}) => theme.colors.black};
  border: 2px solid ${({theme}) => theme.colors.black};
  font-family: Inter;
  font-size: 1.2em;
  border-radius: 4px;
  padding: 7px 12px;
  font-weight: 500;

  &:hover {
    background: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
    transition: all 0.2s ease-in-out;
  }
`

export const HeroBtnRight = styled.button`
  color: ${({theme}) => theme.colors.black};
  font-family: 'Overpass';
  margin-left: 1em;
  font-size: 1.3em;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`

// export const ArrowIcon = styled(AiOutlineArrowRight)`
//   transform: translateY(2px);
// `

export const ArrowIconWrap = styled.div`
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
  -webkit-animation: jump 1s infinite;
  -moz-animation: jump 1s infinite;
  animation: jump 1s infinite;
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
