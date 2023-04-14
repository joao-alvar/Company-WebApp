import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100px;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 6em 0 14.4em;
  line-height: initial;
  /* background: rgb(248 248 248); */
`

export const Content = styled.div`
  width: 90%;
  padding-right: 6em;

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

export const BtnWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: 2em 0;
  gap: 1em;

  .active {
    background: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
  }
`

export const Button = styled.button`
  padding: 4px 12px;
  font-size: 1.5em;
  transition: all 300ms ease-out;
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.colors.black};
  font-weight: 600;
  color: ${({theme}) => theme.colors.black};
  &:hover {
    background: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
  }
`

export const ActiveContent = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4em;
  height: auto;
  width: 90%;
  gap: 2em;

  .img_wrapp {
    display: flex;

    img {
      border-radius: 8px;
    }
  }

  .content_wrapp {
    width: 60%;
    display: flex;
    justify-content: start;
    padding-right: 7em;
    /* margin-left: auto; */
    flex-direction: column;
    font-weight: 600;
  }

  h2 {
    font-size: 2.4em;
    padding-bottom: 0.4em;
    font-family: Inter;
    font-weight: 600;
  }

  p {
    font-size: 1.5em;
    color: #2d2d2d;
    padding-bottom: 1em;
  }

  a {
    text-decoration: none;
    width: max-content;
  }
`

export const ButtonActive = styled.button`
  font-size: 1.6em;
  text-decoration: underline;
  &:hover {
    color: ${({theme}) => theme.colors.primary};
  }
`
