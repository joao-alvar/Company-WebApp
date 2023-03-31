import React, {useState} from 'react'

import {LinkStyled, NavigationLink} from './LinkElements'

// import {bool, element, func, string} from 'prop-types'

const Link = ({type, scrollTo, href, style, className, title}) => {
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
    <LinkStyled>
      {(() => {
        switch (type) {
          case 'router':
            return (
              <NavigationLink
                href={href}
                onClick={remove_hash_from_url}
                style={style}
                className={className}
              >
                {title}
              </NavigationLink>
            )
          case 'scroll':
            return (
              <NavigationLink
                onClick={remove_hash_from_url}
                to={scrollTo}
                style={style}
                className={className}
              >
                {title}
              </NavigationLink>
            )
          default:
            return null
        }
      })()}
    </LinkStyled>
  )
}

// Link.propTypes = {
//   scrollId: string.isRequired,
//   setScrollId: func.isRequired,
// }

export default Link
