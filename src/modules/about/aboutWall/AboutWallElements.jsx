import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  min-height: 65em;
  height: auto;
  width: 100%;
  background: ${({theme}) => theme.colors.black};

  @media screen and (max-width: 960px) {
    padding-top: 5pc;
    padding-bottom: 5pc;
  }

  ul {
    margin-top: 5em;
  }

  .cogwheels_icon {
    width: 17em;
  }
`

export const IconTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 2.5em;
  font-weight: 600;
`

export const Icon = styled.div`
  width: 15em;
  height: 15em;

  img {
    width: 100%;
    height: 100%;
  }
`
