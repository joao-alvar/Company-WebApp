import styled from 'styled-components'

export const MobileMenuContainer = styled.div`
  display: none;
  @media screen and (max-width: ${({theme}) => theme.size.md}) {
    display: block;
    z-index: 10;
    margin-right: 1.3rem;
  }
`

export const Burger = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  height: 2rem;

  .menu__btn__bar_one {
    display: flex;
    width: 22px;
    height: 2px;
    background: #000;
    border-radius: 1pc;
    transition: all 0.3s ease-in-out;
  }

  .menu__btn__bar_two,
  .menu__btn__bar_three {
    position: absolute;
    width: 22px;
    height: 2px;
    background: #000;
    border-radius: 1pc;
    transition: all 0.3s ease-in-out;
  }

  .menu__btn__bar_two {
    transform: translateY(-6px);
  }

  .menu__btn__bar_three {
    transform: translateY(6px);
  }

  &.open {
    // Burger animation

    .menu__btn__bar_one {
      transform: translateX(-50px);
      background: transparent;
      pointer-events: none;
      box-shadow: none;
      visibility: hidden;
    }

    .menu__btn__bar_two {
      transform: rotate(45deg);
    }

    .menu__btn__bar_three {
      transform: rotate(-45deg);
    }
  }
`
