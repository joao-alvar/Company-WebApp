import Link from 'next/link'
import {useRouter} from 'next/router'
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
  const [isOpen, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const router = useRouter()

  function useOutsideAlerter(ref) {
    useEffect(() => {
      // function to close dropdown menu on click outside
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
            >
              <NavigationLink as="span">Solutions</NavigationLink>
              <ArrowIconDown
                style={{
                  transform: show ? 'rotate(179deg)' : '',
                }}
              />

              <DropdownMenu
                onClick={remove_hash_from_url}
                className={`${show ? 'drop' : ''}`}
                show={show}
              >
                <li>
                  <Link href="/#overview">Overview</Link>
                </li>
                <li>
                  <Link href="/advertising#paid-search">Paid Search</Link>
                </li>
                <li>
                  <Link href="/advertising#seo">SEO</Link>
                </li>
                <li>
                  <Link href="/web-development#optimization">Optimization</Link>
                </li>
              </DropdownMenu>
            </LinkTitle>

            <NavigationLink
              href="/advertising"
              className={router.pathname == '/advertising' ? 'active' : ''}
            >
              Advertising
            </NavigationLink>

            <NavigationLink
              href="/web-development"
              className={router.pathname == '/web-development' ? 'active' : ''}
            >
              Web development
            </NavigationLink>

            <NavigationLink
              href="/about"
              className={router.pathname == '/about' ? 'active' : ''}
            >
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
