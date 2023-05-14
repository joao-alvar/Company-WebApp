import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 50rem;
  line-height: initial;
  margin-top: 6em;

  color: ${({theme}) => theme.colors.black};
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    padding: 5em 0 4em;
    height: auto;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    flex-direction: column;
  }
`

export const ImageWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 98%;
  }
  @media screen and (max-width: 700px) {
    width: 98%;
  }
  img {
    width: 90%;
    height: 75%;
    object-fit: cover;
    border-radius: 12px;
  }
`

export const ContentContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding-top: 4.5em;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 89%;
    padding-top: 5.5em;
  }
`

export const Content = styled.div`
  width: 90%;
  @media screen and (max-width: 700px) {
    width: 98%;
  }
`
export const Header = styled.header`
  h2 {
    font-size: 3.8em;
    font-weight: 600;
    font-family: var(--font-heading);
    margin: -0.6em 0 0.7em 0.1em;
    @media screen and (max-width: ${({theme}) => theme.size.xs}) {
      font-size: 2.5em;
    }
  }
`

export const List = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export const ListItem = styled.li`
  display: inline-flex;
  justify-content: center;
  /* margin: 0 0 1.5em; */
  padding-bottom: 2em;
  gap: 2em;

  h3 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 1.4em;
    color: ${({theme}) => theme.colors.black};
  }

  p {
    font-weight: 400;
    font-size: 1.3em;
  }
`

export const Icon = styled.div`
  font-size: 4em;
  margin: auto 0;
  color: ${({theme}) => theme.colors.black};
`
