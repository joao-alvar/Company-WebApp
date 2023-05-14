import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  min-height: calc(100vh - 40px);
  background: ${({theme}) => theme.colors.white};
`

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 76%;
  min-height: 100%;
  height: auto;
  overflow: hidden;
  flex-shrink: 0;
  padding: 0 1em;
  margin: 0 auto;
  line-height: initial;
  color: #425466;

  .modal {
    &.open {
      display: flex;
    }
  }

  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    width: 100%;
    padding-right: 1.5em;
    padding-left: 1.5em;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: ${({theme}) => theme.size.xs}) {
    padding: 1em;
  }
`

export const Content = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  padding: 4em 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 2em;
  }
`

export const FormControl = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4em 2em;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  gap: 2em;
  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    width: 95%;
  }
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    width: 100%;
  }

  .regular_input,
  textarea {
    border-radius: 0.45rem;
    background-clip: padding-box;
    outline: none;
    border: 1px solid #ced4da;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
      box-shadow: 0 0 1px #101010;
      border: 1px solid #425466;
    }
  }

  label {
    font-size: 1.2em;
    font-weight: 600;
  }

  .link {
    text-decoration: none;
    color: #880707;
    &:hover {
      text-decoration: underline;
    }
  }

  textarea {
    resize: none;
    padding: 5px;
  }

  .regular_input {
    padding: 4px;
  }

  .wrapper {
    border: none;
    h2 {
      margin-bottom: 1em;
    }
  }

  .got_error {
    color: ${({theme}) => theme.colors.primary};
  }

  .got_error_message {
    color: #b30808;
    font-weight: 600;
    margin-top: 0.2em;
  }

  .button {
    padding: 6px 12px;
    width: 8em;
    display: flex;
    justify-content: center;
    font-size: 1.4em;
    border-radius: 6px;
    font-weight: 600;
    margin: 0 auto;
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.black};
    &:hover {
      background: ${({theme}) => theme.colors.primaryTextColor};
    }
  }
`

export const Title = styled.div`
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.4em;
  color: ${({theme}) => theme.colors.black};
`

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  @media screen and (max-width: 648px) {
    flex-direction: column;
    gap: 2em;
  }
`

export const Field = styled.fieldset`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: none;

  input {
    width: 100%;
  }
`

export const Checkbox = styled.div`
  display: flex;
  gap: 5px;
  label {
    margin-top: -1px;
  }

  fieldset {
border: none;
  }

  .mail_policy_checkbox {
    margin-top: .3em;
    margin-right: .4em;
    float: left;
}
  }
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;
  flex-wrap: wrap;

  @media screen and (max-width: 775px) {
    gap: 2em;
  }
`
