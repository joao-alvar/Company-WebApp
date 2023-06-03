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
  height: auto;
  padding-top: 2pc;
  padding-bottom: 2pc;
  line-height: initial;

  @media screen and (max-width: 965px) {
    padding-bottom: 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-shrink: 0;
  width: 97%;
  height: 100%;
  min-height: inherit;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2pc;
  padding-bottom: 2pc;
  @media screen and (max-width: 965px) {
    width: 100%;
  }
`

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding-top: 2rem;
`

export const Content = styled.div`
  width: 100%;
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
  list-style: none;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.3rem;
  grid-auto-rows: minmax(200px, auto);

  @media screen and (max-width: 965px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  padding: 1.5rem;
  font-family: var(--font-heading);
  font-weight: 600;
  border-left: 1px solid #000;
  box-shadow: rgba(24, 24, 24, 0.08) 0px 2px 8px -2px,
    rgba(24, 24, 24, 0.16) 0px 8px 12px -2px;

  h3 {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    color: ${({theme}) => theme.colors.black};
  }

  p {
    font-weight: 500;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 965px) {
    align-items: start;
    padding-top: 3rem;

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`
