import styled from 'styled-components'

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;
  padding-top: 3em;
  padding-right: 2rem;
  color: ${({theme}) => theme.colors.black};

  h1 {
    font-size: 5.5rem;
    font-family: var(--font-heading);
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #191c1f;
  }

  p {
    font-size: 1.65rem;
    font-weight: 600;
    line-height: 2.5rem;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.link};
    border-bottom: 1px solid ${({theme}) => theme.colors.link};
  }

  @media screen and (max-width: 965px) {
    padding-top: 2rem;
    padding-right: 0;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 4.2rem;
    }
  }
`
