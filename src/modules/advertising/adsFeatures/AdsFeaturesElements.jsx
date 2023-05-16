import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  padding-top: 2pc;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  height: 30em;
  @media screen and (max-width: 1200px) {
    width: 92%;
  }

  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
    height: auto;
  }
`
export const ListWrap = styled.div`
  position: relative;
  width: max-content;
  padding-top: 4em;
  padding-bottom: 4em;
  @media screen and (max-width: 510px) {
    width: 100%;
  }

  span {
    font-size: 1.1em;
    font-weight: 600;
    color: #505a63;
    text-transform: uppercase;
  }

  h2 {
    font-size: 1.9em;
    padding-top: 0.31em;
  }
`

export const ImageWrap = styled.div`
  display: flex;
  flex: 1 0 50%;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  li {
    display: flex;
    padding-top: 1em;
    padding-left: 1em;
    align-items: flex-start;
    @media screen and (max-width: 510px) {
      padding-left: 0;
    }
  }

  h3 {
    font-family: var(--font-heading);
    font-size: 1.4em;
    font-weight: 500;
    /* flex-wrap: wrap; */
    /* padding-right: 2em; */
  }
`

export const Icon = styled.span`
  font-size: 1.6em;
  margin-right: 10px;
  flex-shrink: 0;
  flex: none;
  color: ${({theme}) => theme.colors.primary};
`
