import React from 'react'

import {MobileMenuContainer} from './MobileMenuElements'

import {Divide as Hamburger} from 'hamburger-react'
import {bool, func} from 'prop-types'

const MobileMenu = ({onClick}) => {
  // const [isOpen, setOpen] = useState(false)

  return (
    <MobileMenuContainer onClick={onClick}>
      <Hamburger distance="md" size={28} label="Show menu" />
    </MobileMenuContainer>
  )
}

// MobileMenu.propTypes = {
//   isOpen: bool.isRequired,
//   setOpen: func.isRequired,
// }
export default MobileMenu
