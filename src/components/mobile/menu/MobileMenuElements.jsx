import styled from 'styled-components'

export const MobileMenuContainer = styled.div`
  display: none;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    top: 0;
    right: 2.5rem;
    z-index: 10;
  }

  /* Burger animation */
  .menu__btn {
    &.open .menu__btn__burger {
      transform: translateX(-50px);
      background: transparent;
      box-shadow: none;
    }
  }

  .menu__btn {
    &.open .menu__btn__burger::before {
      transform: rotate(45deg) translate(35px, -35px);
    }
  }

  .menu__btn {
    &.open .menu__btn__burger::after {
      transform: rotate(-45deg) translate(35px, 35px);
    }
  }
`

export const Burger = styled.button`
  .menu__btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 20px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    /* border: 3px solid #fff; */
  }

  .menu__btn__burger {
    display: flex;
    width: 30px;
    height: 2px;
    background: #000;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 2px;
      background: #000;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
      transition: all 0.5s ease-in-out;
    }

    &::before {
      transform: translateY(-8px);
    }

    &::after {
      transform: translateY(8px);
    }
  }
`
