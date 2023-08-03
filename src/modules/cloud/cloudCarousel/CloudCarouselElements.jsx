import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: start;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  /* min-height: 43rem; */
  padding-top: 6pc;
  padding-bottom: 3.5pc;
  line-height: initial;
  background-color: ${({theme}) => theme.colors.black};

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding-top: 0;
    padding-bottom: 2pc;
  }

  .item {
    display: flex;

    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      flex-direction: column-reverse;
      gap: 3rem;
    }
  }

  .alice-carousel__dots-item {
    /* background-color: #bec2c8; */
    background-color: #5e636e;
    border-radius: 0;
    width: 20px;
    height: 5px;

    &.__active {
      background-color: ${({theme}) => theme.colors.white};
    }
  }

  .alice-carousel__dots {
    margin-top: 5rem;
  }
`

export const Content = styled.div`
  width: 50%;
  padding-right: 2em;
  padding-left: 3em;
  color: ${({theme}) => theme.colors.white};

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
    padding-left: 2rem;
  }

  h2 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 4.2rem;
    margin-bottom: 0.4em;

    @media only screen and (max-width: 768px) {
      font-size: 4rem;
    }
    @media only screen and (max-width: 550px) {
      font-size: 3.2rem;
    }
  }

  p {
    font-family: var(--font-heading);
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.5rem;
  }
`

export const ImageWrap = styled.div`
  display: block;
  width: 45%;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 1pc;
    border: 1px solid #0000001f;

    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      border-radius: 0;
    }
  }
`
