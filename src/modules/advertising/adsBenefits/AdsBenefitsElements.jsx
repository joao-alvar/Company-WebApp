import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  padding: 8em 0 4em;
  line-height: initial;
  gap: 8.5em;
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
`
export const Banner = styled.div`
  display: flex;
  width: 80%;
  height: 37em;
  /* background-color: #; */
  /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.2); */
  border-radius: 18px;
  margin: 0 auto;
  transition: all 0.3s;
  cursor: default;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  height: 100%;
  padding: 2em;
  gap: 1.2em;

  h2 {
    font-size: 1.8em;
    font-family: Inter;
    font-weight: 600;
  }

  p {
    font-size: 1.4em;
  }
`

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 40%;
  height: 100%;
  /* background-color: #20f; */
`
