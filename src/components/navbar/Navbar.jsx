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
  DropdownLink,
  ArrowIconForward,
} from './NavbarElements'

import logoImage from '/public/images/logo-atalaso.svg'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // remove scroll when mobile menu is open
    if (isOpen === true) {
      document.querySelector('html').classList.add('mobile_nav_open')
    } else {
      document.querySelector('html').classList.remove('mobile_nav_open')
    }
  })

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
            href="/"
            data-clog-click
            aria-label="Atalaso"
            data-qa="logo"
            onClick={() => {
              setOpen(false)
            }}
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
                  className="dropdown_list"
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
                  <DropdownLink
                    href="/advertising#paid-search"
                    data-clog-click
                    onClick={() => {
                      setOpen(false), setShow(false)
                    }}
                  >
                    Paid Search <ArrowIconForward />
                  </DropdownLink>
                  <DropdownLink
                    href="/solutions/seo"
                    data-clog-click
                    onClick={() => {
                      setOpen(false), setShow(false)
                    }}
                  >
                    SEO <ArrowIconForward />
                  </DropdownLink>
                  <DropdownLink
                    href="/web-development#optimization"
                    data-clog-click
                    onClick={() => {
                      setOpen(false), setShow(false)
                    }}
                  >
                    Optimization <ArrowIconForward />
                  </DropdownLink>
                </DropdownMenu>
              </li>
              <li>
                <NavLink
                  href="/advertising"
                  data-clog-click
                  onClick={() => {
                    setOpen(false)
                  }}
                >
                  Advertising
                </NavLink>
              </li>

              <li>
                <NavLink
                  href="/web-development"
                  data-clog-click
                  onClick={() => {
                    setOpen(false)
                  }}
                >
                  Web development
                </NavLink>
              </li>

              <li>
                <NavLink
                  href="/about"
                  data-clog-click
                  onClick={() => {
                    setOpen(false)
                  }}
                >
                  Who we are
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/contact"
                  data-clog-click
                  className="mobile_contact_link"
                  onClick={() => {
                    setOpen(false)
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
            onClick={() => {
              setOpen(!isOpen)
            }}
            className={isOpen ? 'menu__btn open' : 'menu__btn'}
          />
        </Nav>
      </Header>
    </>
  )
}

export default Navbar
