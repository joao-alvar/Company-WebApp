import {ArrowIconForward, DropdownLink, DropdownMenu} from './DropdownElements'

const Dropdown = ({submenus, dropdown}) => {
  return (
    <DropdownMenu className={`dropdown ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu, index) => (
        <li key={index}>
          <DropdownLink href={submenu.url}>
            {submenu.title} <ArrowIconForward />
          </DropdownLink>
        </li>
      ))}
    </DropdownMenu>
  )
}

export default Dropdown
