import {useEffect, useState, useRef} from 'react'

import Dropdown from '../dropdown/Dropdown'
import {
  ArrowIconDown,
  DropdownButton,
  ListItems,
  NavLink,
} from './MenuItemsElements'

export const menuItems = [
  {
    title: 'Services',
    url: '/Services',
    submenu: [
      {
        title: 'Cloud',
        url: '/services/cloud',
      },
      {
        title: 'SEO',
        url: '/services/seo',
      },
    ],
  },
  {
    title: 'Who we are',
    url: '/about',
  },
]

const MenuItems = ({items, onClick, linkClick}) => {
  const [dropdown, setDropdown] = useState(false)

  function useOutsideAlerter(ref) {
    useEffect(() => {
      // function to close dropdown menu on click outside
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropdown(false)
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

  function MouseOver() {
    window.innerWidth > 910 && setDropdown(true)
  }

  function MouseOut() {
    window.innerWidth > 910 && setDropdown(false)
  }

  function ClickOn() {
    window.innerWidth <= 910 && setDropdown((prev) => !prev)
  }

  return (
    <ListItems ref={wrapperRef}>
      {items.submenu ? (
        <>
          <DropdownButton
            as="button"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={ClickOn}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
          >
            {items.title} <ArrowIconDown className={dropdown && 'show'} />
          </DropdownButton>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            ref={wrapperRef}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            linkClick={linkClick}
          />
        </>
      ) : (
        <NavLink href={items.url} onClick={onClick}>
          {items.title}
        </NavLink>
      )}
    </ListItems>
  )
}

export default MenuItems
