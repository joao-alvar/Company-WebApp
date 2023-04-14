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
  height: 77rem;
  line-height: initial;
`
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.3em;
  grid-auto-rows: minmax(200px, auto);
  padding: 3em;
`
export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding: 1em;
  cursor: default;
  &:hover {
    transform: scale(1.03);
  }

  h2 {
    font-size: 1.5em;
    padding: 10px 0 0;
  }

  p {
    font-size: 1.2em;
  }
`
export const Icon = styled.span`
  color: #000;
  font-size: 5em;
  ${Grid}:hover & {
    color: ${({theme}) => theme.colors.primary};
  }
`
