import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  min-height: 37rem;
  height: auto;
  margin: 0 auto;
  line-height: initial;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 5rem;
  min-height: inherit;
  color: ${({theme}) => theme.colors.white};

  h1 {
    font-size: 5.8rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.9rem;
    padding-top: 2rem;
    width: 80%;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem;

    p {
      width: 100%;
    }
  }

  @media only screen and (max-width: ${({theme}) => theme.size.sm}) {
    h1 {
      font-size: 4.2rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`

export const ImageWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.376);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(75%);
  }
`
