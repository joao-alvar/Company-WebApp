import styled from 'styled-components'

export const FeaturedSection = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  overflow: hidden;
`
export const FeaturedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  height: 70rem;
  margin: 0 0 4em;
  line-height: initial;
  color: ${({theme}) => theme.colors.black};

  h2 {
    font-size: 1.9em;
    font-weight: 400;
  }

  p {
    font-size: 1.7em;
    font-weight: 400;
  }
`

export const FeaturedWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 75%;
`

export const FeaturedContentLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FeaturedContentRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
`

export const ContentLeftWrap = styled.div`
  width: 90%;
  height: 32em;
  margin: 3.5em 0 1.5em;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: ${({theme}) => theme.colors.primary};

  img {
    height: 100%;
    border-radius: 8px;
  }
`

export const ContentRightWrap = styled.div`
  width: 90%;
  height: 85%;
  /* margin: 4em 0 2.5em; */

  h2 {
    font-size: 3.8em;
    font-weight: 600;
    font-family: 'Inter';
    margin: -0.6em 0 0.7em 0.1em;
  }
`

export const ContentRight = styled.div`
  display: inline-flex;
  justify-content: center;
  margin: 0 0 1.5em;
  padding-bottom: 2em;
  gap: 2em;

  h3 {
    font-weight: 600;
    font-size: 1.3em;
    color: ${({theme}) => theme.colors.primary};
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

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */

  a {
    margin-left: 30%;
  }
`

export const FeaturedButton = styled.button`
  margin-top: 1.2em;
  font-size: 1.5em;
  border-radius: 4px;
  padding: 10px 29px;
  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.white};
  outline: none;
  border: none;
  text-decoration: none;
  font-weight: 700;

  &:hover {
    background: ${({theme}) => theme.colors.black};
    transition: all 0.2s ease-in-out;
  }
`
