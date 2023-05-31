import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100px;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding-top: 3pc;
  padding-bottom: 3pc;
  margin: 0 auto;
  line-height: initial;
  background-color: #f4efe8;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    .content_reverse {
      flex-direction: column-reverse;
    }
  }

  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    padding: 0 0 6em;
  }

  @media screen and (min-width: 911px) {
    .first_card {
      gap: 6rem;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  width: 90%;
  justify-content: space-between;

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }

  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    width: 100%;
  }
`

export const ImageContainer = styled.div`
  display: flex;

  img {
    object-fit: contain;
  }

  &.first_card_image {
    height: 40rem;
    width: 45rem;

    @media screen and (max-width: ${({theme}) => theme.size.md}) {
      height: 37rem;
    }

    @media screen and (max-width: 500px) {
      width: auto;
    }
  }

  .image_2 {
    width: 100%;
    height: 100%;
    border-radius: 1pc;
    object-fit: cover;
  }

  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    img {
      object-fit: contain;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  padding-right: 7em;
  font-family: var(--font-heading);
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 98%;
  }
  @media screen and (max-width: ${({theme}) => theme.size.sm}) {
    padding-left: 1em;
    padding-right: 1em;
  }

  h2 {
    font-size: 3em;
    font-weight: 600;
  }

  p {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.5em;
    padding-top: 0.81em;
  }
`
