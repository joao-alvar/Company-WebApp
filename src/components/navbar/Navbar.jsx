import Link from 'next/link'
import {useState, useEffect, useRef} from 'react'

import MobileMenu from '../mobile/menu/MobileMenu'
import {
  Header,
  Nav,
  NavLinks,
  NavigationLink,
  LinkTitle,
  NavBtn,
  NavBtnLink,
  LogoContainer,
  LogoImg,
  ArrowIconDown,
  DropdownMenu,
} from './NavbarElements'

import logo from '/public/images/Atalaso_logo.png'

const Navbar = () => {
  function remove_hash_from_url() {
    // Function to hide #elements in url hashNavLink
    setTimeout(() => {
      history.replaceState(
        '',
        document.title,
        window.location.origin +
          window.location.pathname +
          window.location.search
      )
    }, 5)
  }
  const [isOpen, setOpen] = useState(false)
  const [show, setShow] = useState(false)

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false)
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  return (
    <>
      <Header>
        <Nav>
          <LogoContainer href="/">
            <LogoImg
              src={logo}
              alt="Atalaso logo"
              height="94"
              width="128"
              quality="100"
              priority
            />
          </LogoContainer>
          <NavLinks
            role="navigation"
            aria-label="main navigation"
            isOpen={isOpen}
          >
            <LinkTitle
              ref={wrapperRef}
              onClick={() => {
                setShow(!show)
              }}
              show={show}
            >
              <NavigationLink as="span">Solutions</NavigationLink>
              <ArrowIconDown show={show} />

              <DropdownMenu
                onClick={remove_hash_from_url}
                className={`${show ? 'drop' : ''}`}
                show={show}
              >
                <li>
                  <Link href="/#overview">Overview</Link>
                </li>
                <li>
                  <Link href="/#paid-search">Paid Search</Link>
                </li>
                <li>
                  <Link href="/#seo">SEO</Link>
                </li>
                <li>
                  <Link href="/#optimization">Optimization</Link>
                </li>
              </DropdownMenu>
            </LinkTitle>

            <NavigationLink href="/web-development" className="active_link">
              Web development
            </NavigationLink>

            <NavigationLink href="/#branding">Branding</NavigationLink>

            <NavigationLink href="/about" className="active_link">
              Who we Are
            </NavigationLink>
          </NavLinks>
          <NavBtn>
            <NavBtnLink href="/contact">Contact Us</NavBtnLink>
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
