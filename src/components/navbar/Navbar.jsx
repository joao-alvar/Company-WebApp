import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState, useEffect, useRef} from 'react'

import MobileMenu from '../mobile/menu/MobileMenu'
import {
  Header,
  Nav,
  NavList,
  List,
  NavLink,
  NavButtonContainer,
  NavButton,
  LogoContainer,
  LogoImg,
  ArrowIconDown,
  DropdownMenu,
} from './NavbarElements'

import logoImage from '/public/images/logo-atalaso.svg'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const router = useRouter()

  const openMenu = () => {
    setOpen(!isOpen)
    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    if (!isOpen) {
      document.querySelector('body').classList.add('scroll')
    } else {
      document.querySelector('body').classList.remove('scroll')
    }
  }

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
      <Header role="banner">
        <Nav role="navigation" aria-label="Primary Navigation">
          <LogoContainer
            href="https://atalaso.com/"
            data-clog-click
            aria-label="Atalaso"
            data-qa="logo"
          >
            <LogoImg
              src={logoImage}
              alt="Atalaso logo"
              height={0}
              width={100}
              quality={100}
              unoptimized={true}
              priority
            />
          </LogoContainer>
          <NavList
            role="navigation"
            aria-label="main navigation"
            isOpen={isOpen}
          >
            <List>
              <li className="dropdown_container" ref={wrapperRef}>
                <NavLink
                  as="button"
                  data-clog-click
                  className="dropdown_link"
                  onClick={() => {
                    setShow(!show)
                  }}
                >
                  Solutions
                  <ArrowIconDown show={show} />
                </NavLink>
                <DropdownMenu
                  onClick={remove_hash_from_url}
                  className={`${show ? 'drop' : ''}`}
                  show={show}
                >
                  <Link
                    href="/#overview"
                    data-clog-click
                    onClick={() => {
                      openMenu(false), setShow(!show)
                    }}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/advertising#paid-search"
                    data-clog-click
                    onClick={() => {
                      openMenu(false), setShow(!show)
                    }}
                  >
                    Paid Search
                  </Link>
                  <Link
                    href="/advertising#seo"
                    data-clog-click
                    onClick={() => {
                      openMenu(false), setShow(!show)
                    }}
                  >
                    SEO
                  </Link>
                  <Link
                    href="/web-development#optimization"
                    data-clog-click
                    onClick={() => {
                      openMenu(false), setShow(!show)
                    }}
                  >
                    Optimization
                  </Link>
                </DropdownMenu>
              </li>
              <li>
                <NavLink
                  href="/advertising"
                  data-clog-click
                  className={router.pathname == '/advertising' ? 'active' : ''}
                  onClick={() => {
                    openMenu(false)
                  }}
                >
                  Advertising
                </NavLink>
              </li>

              <li>
                <NavLink
                  href="/web-development"
                  data-clog-click
                  className={
                    router.pathname == '/web-development' ? 'active' : ''
                  }
                  onClick={() => {
                    openMenu(false)
                  }}
                >
                  Web development
                </NavLink>
              </li>

              <li>
                <NavLink
                  href="/about"
                  data-clog-click
                  className={router.pathname == '/about' ? 'active' : ''}
                  onClick={() => {
                    openMenu(false)
                  }}
                >
                  Who we Are
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/contact"
                  data-clog-click
                  className={
                    router.pathname == '/contact'
                      ? 'mobile_contact_link active'
                      : 'mobile_contact_link'
                  }
                  onClick={() => {
                    openMenu(false)
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </List>
          </NavList>
          <NavButtonContainer>
            <NavButton href="/contact" data-clog-click>
              Contact us
            </NavButton>
          </NavButtonContainer>
          <MobileMenu
            onClick={openMenu}
            className={isOpen ? 'menu__btn open' : 'menu__btn'}
          />
        </Nav>
      </Header>
    </>
  )
}

export default Navbar
