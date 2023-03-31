import React, {useState, useEffect} from 'react'
import {
  Header,
  Nav,
  NavLinks,
  NavBtn,
  NavBtnLink,
  LogoContainer,
  LogoImg,
} from './NavbarElements'
import logo from '../../assets/images/Atalaso_logo.png'
import NavigationLink from '../link/Link'
import MobileMenu from '../mobile/MobileMenu'
import {useInView} from 'react-intersection-observer'
import useScrollDirection from '../hooks'
import './styles.scss'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const isHidden = useScrollDirection()

  const header = document.querySelector('header')
  const section = document.querySelector('#solutions')

  const sectionOptions = {
    threShold: 0,
    rootMargin: '0px 0px -230px 0px',
  }

  function sectionObserver() {
    new IntersectionObserver(function (entries, sectionObserver) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          header.classList.remove('active')
        } else {
          header.classList.add('active')
        }
      })
    }, sectionOptions)
    sectionObserver.observe(section)
  }

  console.log(useScrollDirection)
  return (
    <>
      <Header className={
            `header ${isHidden ? "header-hide" : "header-show"}`
        }>
        <Nav>
          <LogoContainer to="/">
            <LogoImg src={logo} alt="Atalaso logo" />
          </LogoContainer>
          <NavLinks
            role="navigation"
            aria-label="main navigation"
            isOpen={isOpen}
          >
            <NavigationLink
              type="router"
              routerTo="/"
              title="Home"
              className="do_not_display"
            />
            <NavigationLink
              type="scroll"
              scrollTo="/#solutions"
              title="Solutions"
            />
            <NavigationLink
              type="router"
              routerTo="/web-development"
              title="Web development"
              className="active_link"
            />
            <NavigationLink
              type="scroll"
              scrollTo="/#branding"
              title="Branding"
            />
            <NavigationLink
              type="router"
              routerTo="/about-us"
              title="Who we Are"
              className="active_link"
            />
          </NavLinks>
          <NavBtn>
            <NavBtnLink to="/contact-us">Contact Us</NavBtnLink>
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
