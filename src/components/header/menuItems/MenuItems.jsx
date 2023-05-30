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
    title: 'Solutions',
    url: '/solutions',
    submenu: [
      {
        title: 'Paid search',
        url: '/advertising#paid-search',
      },
      {
        title: 'SEO',
        url: '/solutions/seo',
      },
      {
        title: 'Optimization',
        url: '/web-development#optimization',
      },
    ],
  },
  {
    title: 'Advertising',
    url: '/advertising',
  },
  {
    title: 'Web development',
    url: '/web-development',
  },
  {
    title: 'Who we are',
    url: '/about',
  },
]

const MenuItems = ({items, onClick}) => {
  const [dropdown, setDropdown] = useState(false)
  // const ref = useRef()

  function useOutsideAlerter(ref) {
    useEffect(() => {
      // function to close dropdown menu on click outside
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropdown(false)
          // alert('working')
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
    <ListItems ref={wrapperRef}>
      {items.submenu ? (
        <>
          <DropdownButton
            as="button"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
            className="dropdown_button"
          >
            {items.title} <ArrowIconDown className={dropdown && 'show'} />
          </DropdownButton>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            ref={wrapperRef}
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
