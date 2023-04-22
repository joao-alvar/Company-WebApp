import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: 45rem;
  line-height: initial;
  background: #252525;
`

export const ImageWrap = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    background-position: center;
    width: 80%;
    height: 100%;
    pointer-events: none;
    cursor: default;
  }
`

export const Content = styled.div`
  width: 50%;
  padding-right: 5em;
  color: ${({theme}) => theme.colors.white};

  h2 {
    font-size: 3.5em;
    font-family: Inter;
    font-weight: 600;
    margin-left: -8px;
  }

  p {
    font-size: 1.72em;
    padding: 0.41em 0 1em;
  }
`

export const Button = styled.button`
  padding: 6px 12px;
  font-size: 1.5em;
  border-radius: 8px;
  font-weight: 600;
  border: 2px solid #ffffff;
  color: #ffffff;
  transition: all 0.3s;
  &:hover {
    background: ${({theme}) => theme.colors.primaryTextColor};
    border-color: ${({theme}) => theme.colors.primaryTextColor};
  }
`
