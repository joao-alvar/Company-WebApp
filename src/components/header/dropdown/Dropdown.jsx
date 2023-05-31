import {ArrowIconForward, DropdownLink, DropdownMenu} from './DropdownElements'

const Dropdown = ({submenus, dropdown, linkClick, onMouseOver, onMouseOut}) => {
  return (
    <DropdownMenu
      className={`dropdown ${dropdown ? 'show' : ''}`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {submenus.map((submenu, index) => (
        <li key={index}>
          <DropdownLink href={submenu.url} onClick={linkClick}>
            {submenu.title} <ArrowIconForward />
          </DropdownLink>
        </li>
      ))}
    </DropdownMenu>
  )
}

export default Dropdown
