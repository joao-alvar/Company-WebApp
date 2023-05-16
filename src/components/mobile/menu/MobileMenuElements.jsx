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

  // Burger animation
  .menu__btn {
    &.open .menu__btn__bar_one {
      transform: translateX(-50px);
      background: transparent;
      pointer-events: none;
      box-shadow: none;
    }
  }

  .menu__btn {
    &.open .menu__btn__bar_two {
      transform: rotate(45deg);
    }
  }

  .menu__btn {
    &.open .menu__btn__bar_three {
      transform: rotate(-45deg);
    }
  }
`

export const Burger = styled.button`
  padding: 0.6em;
  border-radius: 8px;

  .menu__btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 20px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  .menu__btn__bar_one {
    display: flex;
    width: 30px;
    height: 2px;
    background: #000;
    border-radius: 5px;
    /* box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2); */
    transition: all 0.5s ease-in-out;
  }

  .menu__btn__bar_two,
  .menu__btn__bar_three {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background: #000;
    border-radius: 5px;
    /* box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2); */
    transition: all 0.5s ease-in-out;
  }

  .menu__btn__bar_two {
    transform: translateY(-8px);
  }

  .menu__btn__bar_three {
    transform: translateY(8px);
  }
`
