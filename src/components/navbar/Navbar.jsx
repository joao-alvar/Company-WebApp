import {useState} from 'react'

import NavigationLink from '../link/Link'
import MobileMenu from '../mobile/menu/MobileMenu'
import {
  Header,
  Nav,
  NavLinks,
  NavBtn,
  NavBtnLink,
  LogoContainer,
  LogoImg,
} from './NavbarElements'

import logo from '/public/images/Atalaso_logo.png'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Header>
        <Nav>
          <LogoContainer href="/">
            <LogoImg src={logo} alt="Atalaso logo" quality="100" priority />
          </LogoContainer>
          <NavLinks
            role="navigation"
            aria-label="main navigation"
            isOpen={isOpen}
          >
            <NavigationLink
              type="router"
              href="/#solutions"
              title="Solutions"
            />
            <NavigationLink
              type="router"
              href="/web-development"
              title="Web development"
              className="active_link"
            />
            <NavigationLink type="router" href="/#branding" title="Branding" />
            <NavigationLink
              type="router"
              href="/about"
              title="Who we Are"
              className="active_link"
            />
          </NavLinks>
          <NavBtn>
            <NavBtnLink href="/contact-us">Contact Us</NavBtnLink>
          </NavBtn>
          <MobileMenu
            onClick={() => {
              setOpen(!isOpen)
            }}
          />
        </Nav>
      </Header>
    </>
  )
}

export default Navbar
