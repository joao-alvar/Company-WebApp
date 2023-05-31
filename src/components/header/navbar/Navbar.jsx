import Image from 'next/image'
import {useEffect, useState} from 'react'

import MobileMenu from '../../mobile/menu/MobileMenu'
import MenuItems, {menuItems} from '../menuItems/MenuItems'
import {
  LogoContainer,
  Nav,
  ContentContainer,
  NavList,
  ButtonContainer,
  Button,
  NavItemsWrap,
  Header,
} from './NavbarElements'

import logoImage from '/public/images/logo-atalaso.png'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => setOpen(!isOpen)

  useEffect(() => {
    // remove scroll when mobile menu is open
    if (isOpen === true) {
      document.querySelector('html').classList.add('mobile_nav_open')
    } else {
      document.querySelector('html').classList.remove('mobile_nav_open')
    }
  })

  return (
    <Header>
      <Nav
        role="navigation"
        arial-label="Primary Navigation"
        className={isOpen && 'open'}
      >
        <LogoContainer
          href="/"
          data-clog-click
          aria-label="Atalaso"
          data-qa="logo"
          onClick={toggle}
        >
          <Image
            src={logoImage}
            alt="Atalaso logo"
            width={55}
            quality={100}
            unoptimized={true}
            priority
          />
        </LogoContainer>
        <ContentContainer>
          <NavItemsWrap className={isOpen && 'open'}>
            <NavList>
              {menuItems.map((menu, index) => {
                return <MenuItems items={menu} key={index} onClick={toggle} />
              })}
            </NavList>
            <ButtonContainer>
              <Button href="/contact" onClick={toggle}>
                Contact us
              </Button>
            </ButtonContainer>
          </NavItemsWrap>
        </ContentContainer>
        <MobileMenu
          onClick={toggle}
          className={isOpen ? 'menu__btn open' : 'menu__btn'}
        />
      </Nav>
    </Header>
  )
}

export default Navbar
