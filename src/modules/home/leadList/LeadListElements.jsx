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
  margin: 8em 0 0;
  gap: 4em;
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
    background: #fff;
    @media screen and (max-width: 970px) {
      width: 100%;
    }
  }

  li {
    width: 80%;
    margin: 0 auto;
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
    font-family: Overpass;
    font-weight: 600;
    font-size: 2em;
    cursor: pointer;
    @media screen and (max-width: 700px) {
      width: 98%;
    }
    button {
      color: rgba(0, 0, 0, 0.5);
      width: 100%;
      display: flex;
      padding: 0.8em 0;
      text-align: start;
    }
  }

  .active {
    color: ${({theme}) => theme.colors.primary};
  }
`

export const ListContent = styled.div`
  width: 50%;
  height: 100%;
  @media screen and (max-width: 970px) {
    padding-top: 3em;
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (max-width: 700px) {
    width: 98%;
  }

  .image_container {
    width: 100%;
    background: #fff;
  }

  img {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    pointer-events: none;
    @media screen and (max-width: 970px) {
      width: 100%;
    }
  }

  .text_container {
    margin: 1.8em 0 0;
  }

  .title {
    font-family: Inter;
    font-size: 2em;
    font-weight: 600;
    color: ${({theme}) => theme.colors.primary};
  }

  .text_content {
    font-family: Overpass;
    font-weight: 600;
    font-size: 1.4em;
    margin: 0.5em 0 0;
  }
`
