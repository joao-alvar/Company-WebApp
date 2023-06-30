import {useEffect, useState} from 'react'

import ImageComponent from '@/components/imageComponent/ImageComponent'

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

import logo from '/public/images/logo-atalaso-horizontal.png'
import logoMobile from '/public/images/logo-atalaso.png'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => setOpen(false)

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
          onClick={() => setOpen(false)}
        >
          <ImageComponent
            src={logo}
            alt="Atalaso logo"
            width={160}
            quality={100}
            className="desktop"
            unoptimized={true}
          />
          <ImageComponent
            src={logoMobile}
            alt="Atalaso logo"
            width={50}
            quality={100}
            className="mobile"
            unoptimized={true}
          />
        </LogoContainer>
        <ContentContainer>
          <NavItemsWrap className={isOpen && 'open'}>
            <NavList className="no_select">
              {menuItems.map((menu, index) => {
                return (
                  <MenuItems
                    items={menu}
                    key={index}
                    onClick={toggle}
                    linkClick={toggle}
                  />
                )
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
          onClick={() => setOpen(!isOpen)}
          className={isOpen ? 'menu__btn open' : 'menu__btn'}
        />
      </Nav>
    </Header>
  )
}

export default Navbar
