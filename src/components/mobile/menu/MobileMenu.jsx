import React from 'react'

import {MobileMenuContainer} from './MobileMenuElements'

import {Divide as Hamburger} from 'hamburger-react'

const MobileMenu = ({onClick}) => {
  // const [isOpen, setOpen] = useState(false)

  return (
    <MobileMenuContainer onClick={onClick}>
      <Hamburger distance="md" size={28} label="Show menu" />
    </MobileMenuContainer>
  )
}
export default MobileMenu
