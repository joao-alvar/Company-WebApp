import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  height: 60em;
  width: 100%;
  margin: 8em 0 0;
  gap: 4em;
`

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  ul {
    width: 50%;
    height: 100%;
    background: #fff;
  }

  li {
    width: 80%;
    margin: 0 auto;
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
    padding: 0.8em 0;
    font-family: Overpass;
    font-weight: 600;
    font-size: 2em;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
  }

  .active {
    color: ${({theme}) => theme.colors.primary};
  }
`

export const ListContent = styled.div`
  width: 50%;
  height: 100%;
  /* background: #fff; */

  .image_container {
    width: 100%;
    background: #fff;
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

// export const ListDisplay = styled.div`

// `
