import React from 'react'

import {Burger, MobileMenuContainer} from './MobileMenuElements'

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
      >
        <div className="menu__icon">
          <div className={className}>
            <div className="menu__btn__bar_one"></div>
            <div className="menu__btn__bar_two"></div>
            <div className="menu__btn__bar_three"></div>
          </div>
        </div>
      </Burger>
    </MobileMenuContainer>
  )
}
export default MobileMenu
