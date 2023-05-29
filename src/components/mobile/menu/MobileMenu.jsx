import React from 'react'

import {MobileMenuContainer, Burger} from './MobileMenuElements'

// import {Divide as Hamburger} from 'hamburger-react'

const MobileMenu = ({onClick, className}) => {
  // const [isOpen, setOpen] = useState(false)

  return (
    <MobileMenuContainer>
      <Burger
        onClick={onClick}
        aria-label="Menu toggle navigation"
        data-qa="menu"
        data-clog-click
        type="button"
        className={className}
      >
        <div className="menu__btn__bar_one"></div>
        <div className="menu__btn__bar_two"></div>
        <div className="menu__btn__bar_three"></div>
      </Burger>
    </MobileMenuContainer>
  )
}
export default MobileMenu
