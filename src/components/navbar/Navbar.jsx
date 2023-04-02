import {useState, useEffect} from 'react'
import {useInView} from 'react-intersection-observer'

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
import {element} from 'prop-types'

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState(0)
  // const [ref, inView] = useInView({
  //   threshold: 0,
  // })
  // function scrollMotherfucker() {
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const currentScrollPosition = window.pageYOffset
  //       if (currentScrollPosition > lastScrollPosition) {
  //         setScrollDirection('down')
  //       } else {
  //         setScrollDirection('up')
  //       }

  //       lastScrollPosition = currentScrollPosition
  //     }

  //     let lastScrollPosition = window.pageYOffset

  //     window.addEventListener('scroll', handleScroll)
  //   }, [])
  // }

  useEffect(() => {
    const element = window.scrollY

    if (element > 0)
      return () => {
        console.log('true')
      }
  }, [])
  console.log(element)

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
              href="/"
              title="Home"
              className="do_not_display"
            />
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
            {/* {inView && <h1>Hello World!</h1>}
            {scrollDirection === 'down' && <p>Scrolling down!</p>} */}
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
