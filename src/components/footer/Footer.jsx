import Link from 'next/link'
import React from 'react'

import {
  FooterSection,
  FooterContainer,
  LinksContainer,
  AllRights,
  FooterLink,
  Heading,
  CopyIcon,
} from './FooterElements'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <FooterSection>
      <FooterContainer>
        <AllRights>
          <p>
            Copyright <CopyIcon /> {year} Atalaso LLC. All rights reserved.
          </p>
        </AllRights>
        <LinksContainer>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/about">About us</Link>
        </LinksContainer>
      </FooterContainer>
    </FooterSection>
  )
}

export default Footer
