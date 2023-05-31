import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  min-height: 60em;
  height: auto;
  width: 100%;
  padding-top: 1pc;
  padding-bottom: 2pc;
  gap: 4em;
`

export const TitleContainer = styled.div`
  text-align: center;
  margin: 2em;

  p {
    font-size: 1.6em;
    color: rgb(80, 90, 99);
    font-weight: 600;
  }

  h2 {
    font-size: 5em;
    font-weight: 600;
    color: rgb(25, 28, 31);
    margin: 0.71rem 0 0;
    padding: 0;
  }

  h3 {
    font-size: 1.6em;
    font-weight: 600;
    color: rgb(25, 28, 31);
    word-break: break-word;
    margin: 1.2rem 0 0;
    padding: 0px;
  }

  @media screen and (max-width: 970px) {
    text-align: start;
    margin: 0 auto;
    width: 90%;
    margin-top: 1pc;
  }

  @media screen and (max-width: 700px) {
    h2 {
      font-size: 3em;
    }

    h3 {
      font-size: 1.5em;
    }
  }
`

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 970px) {
    flex-direction: column;
  }

  ul {
    width: 50%;
    height: 100%;
    @media screen and (max-width: 970px) {
      margin: 0 auto;
      width: 90%;
    }
  }

  li {
    width: 80%;
    margin: 0 auto;
    font-weight: 600;
    font-size: 2em;
    padding: 0.8em 0;
    @media screen and (max-width: 970px) {
      margin: 0;
    }

    @media screen and (max-width: 700px) {
      width: 92%;
    }
    button {
      color: rgba(0, 0, 0, 0.5);
      display: flex;
      text-align: start;
    }
  }

  .active {
    color: ${({theme}) => theme.colors.black};
    text-decoration: underline;
  }
`

export const ListContent = styled.div`
  width: 50%;
  height: 100%;
  @media screen and (max-width: 970px) {
    padding-top: 2em;
    width: 90%;
    margin: 0 auto;
  }
  @media screen and (max-width: 700px) {
    width: 92%;
  }

  .image_container {
    width: 100%;
  }

  img {
    border-top-left-radius: 1pc;
    border-bottom-left-radius: 1pc;
    pointer-events: none;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 970px) {
      object-fit: cover;
    }

    @media screen and (max-width: 700px) {
      border-radius: 8px;
    }

    @media screen and (max-width: 550px) {
      object-fit: contain;
    }
  }

  .text_container {
    margin-top: 1.8em;
  }

  .title {
    font-size: 2em;
    font-weight: 600;
    color: ${({theme}) => theme.colors.black};
  }

  .text_content {
    font-weight: 600;
    font-size: 1.4em;
    margin: 0.5em 0 0;
  }
`
