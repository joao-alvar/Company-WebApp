import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 55rem;
  line-height: initial;

  video {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(40%);
    z-index: -1;
  }
`

export const Content = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  color: ${({theme}) => theme.colors.white};
  gap: 2em;
  text-shadow: 0.07em 0 black, 0 0.07em black, -0.07em 0 black, 0 -0.07em black;
`

export const TypeContainer = styled.div`
  height: 5em;
  width: auto;

  .typedText {
    font-family: 'Inter';
    font-size: 4em;
  }
`

export const HeroText = styled.h1`
  font-family: 'Overpass';
  font-size: 1.6em;
  font-weight: 200;
  padding: 0 4em;
  margin-bottom: 0.41em;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  gap: 2em;
`

export const HeroBtn = styled.button`
  background: transparent;
  border: 2px solid ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.white};
  text-transform: uppercase;
  font-family: Inter;
  font-size: 1.2em;
  border-radius: 4px;
  padding: 7px 12px;
  font-weight: 500;

  &:hover {
    background: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.black};
    transition: all 0.2s ease-in-out;
    font-weight: 700;
  }
`

// export const ArrowIcon = styled(AiOutlineArrowRight)`
//   transform: translateY(2px);
// `

export const ArrowIconWrap = styled.div`
  position: absolute;
  top: 3.2em;
  display: none;
  ${ButtonContainer}:hover & {
    display: block;
    transition: all 0.2s ease-in-out;
  }

  .m_scroll_arrows {
    display: block;
    width: 5px;
    height: 5px;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);

    border-right: 2px solid white;
    border-bottom: 2px solid white;
    margin: 0 0 3px 4px;

    width: 16px;
    height: 16px;
  }

  .one {
    margin-top: 1px;
  }

  .one,
  .two,
  .three {
    -webkit-animation: mouse-scroll 1s infinite;
    -moz-animation: mouse-scroll 1s infinite;
    animation: mouse-scroll 1s infinite;
  }

  .one {
    -webkit-animation-delay: 0.1s;
    -moz-animation-delay: 0.1s;
    -webkit-animation-direction: alternate;

    animation-direction: alternate;
    animation-delay: alternate;
  }

  .two {
    -webkit-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    -webkit-animation-direction: alternate;

    animation-delay: 0.2s;
    animation-direction: alternate;

    margin-top: -6px;
  }

  .three {
    -webkit-animation-delay: 0.3s;
    -moz-animation-delay: 0.3s;
    -webkit-animation-direction: alternate;

    animation-delay: 0.3s;
    animation-direction: alternate;

    margin-top: -6px;
  }

  @-webkit-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`
