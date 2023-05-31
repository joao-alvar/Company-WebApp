import {MdOutlineKeyboardArrowDown} from 'react-icons/md'

import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  min-height: calc(100vh - 40px);

  .toast {
    border: 1px solid ${({theme}) => theme.colors.error};
    font-family: var(--font-heading);
    font-size: 1.3rem;
    font-weight: 600;
  }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  max-width: 100%;
  width: 92%;
  min-height: 100%;
  height: auto;
  overflow: hidden;
  flex-shrink: 0;
  margin: 0 auto;
  line-height: initial;
  color: ${({theme}) => theme.colors.black};

  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    width: 100%;
  }

  @media screen and (max-width: 965px) {
    flex-direction: column;
    justify-content: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`

export const FormWrap = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  padding: 4em 0;

  @media screen and (max-width: 965px) {
    width: 100%;
    padding-top: 1em;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3em 2em;
  border-radius: 18px;
  background: ${({theme}) => theme.colors.white};
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  gap: 2em;
  @media screen and (max-width: ${({theme}) => theme.size.lg}) {
    width: 95%;
  }
  @media screen and (max-width: 965px) {
    width: 100%;
  }

  .regular_input,
  textarea {
    border-radius: 0.45rem;
    background-clip: padding-box;
    outline: none;
    border: 1px solid #ced4da;
    background: ${({theme}) => theme.colors.white};
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
      box-shadow: 0 0 3px 1px rgba(13, 157, 218, 0.5),
        inset 0 0 3px 1px rgba(13, 157, 218, 0.5);
      border-color: #0d9dda;
    }
  }

  label {
    font-size: 1.4rem;
    font-family: var(--font-heading);
    font-weight: 600;
    line-height: 2.4rem;
  }

  .link {
    color: ${({theme}) => theme.colors.link};
    cursor: pointer;
    text-decoration: none;
    border-bottom: 1px solid ${({theme}) => theme.colors.link};
    word-break: break-word;
    &:hover {
      border-width: 2px;
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
  }

  .services_title {
    margin-bottom: 1em;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.7rem;
  }

  .got_error {
    border-color: ${({theme}) => theme.colors.error};
    &:focus {
      border-color: ${({theme}) => theme.colors.error};
      box-shadow: 0 0 3px 1px rgba(194, 57, 52, 0.5),
        inset 0 0 3px 1px rgba(194, 57, 52, 0.5);
    }
  }

  .got_error_message {
    color: ${({theme}) => theme.colors.error};
    font-weight: 600;
    margin-top: 0.4em;
  }

  .button {
    padding: 0.6rem 1.2rem;
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

    @media screen and (max-width: 965px) {
      width: 100%;
    }
  }

  .select_wrap {
    position: relative;
    display: flex;
    width: 100%;
  }

  select {
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }
`

export const ArrowIcon = styled(MdOutlineKeyboardArrowDown)`
  position: absolute;
  font-size: 2.2rem;
  top: 0.2rem;
  right: 0.2rem;
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

  .statement {
    font-size: 1.23rem;
    font-weight: 600;
  }
`

export const Checkbox = styled.div`
  display: flex;
  gap: 5px;

  label {
    margin-bottom: -1px;
  }

  fieldset {
    border: none;
  }

  .mail_policy_checkbox {
    float: left;
  }

  .mail_policy_label {
    margin-left: 0.8rem;
  }

  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    display: inline-block;
    margin: 0;
    width: 16px;
    height: 16px;
    border: 1px solid #7f7d7d;
    overflow: hidden;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 3px;
    transform: translateY(3px);
    display: grid;
    place-content: center;
  }

  input[type='checkbox']::before {
    content: '';
    width: 12px;
    height: 12px;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    background-color: ${({theme}) => theme.colors.link};
  }

  input[type='checkbox']:active {
    box-shadow: 0 0 3px 1px rgba(13, 157, 218, 0.5),
      inset 0 0 3px 1px rgba(13, 157, 218, 0.5);
    border-color: #0d9dda;
  }

  input[type='checkbox']:checked::before {
    transform: scale(1);
  }
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.1em;
  flex-wrap: wrap;
`
