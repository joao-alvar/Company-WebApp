import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from 'react-icons/ai'

import {
  FooterSection,
  FooterContainer,
  SocialsContainer,
  Icon,
  FooterNav,
  LinksContainer,
  AllRights,
  IconArrow,
} from './FooterElements'

function Footer() {
  const year = new Date().getFullYear()
  const router = useRouter()

  return (
    <FooterSection>
      <FooterContainer>
        <SocialsContainer
          className={router?.pathname === '/about' && 'is_border'}
        >
          {(router?.pathname === '/privacy-policy') |
          (router?.pathname === '/terms') ? (
            <div className="call_to_action">
              <Link href="/contact">
                Get in touch <IconArrow />
              </Link>
            </div>
          ) : (
            ''
          )}
          <div className="socials_icons">
            <a
              href="https://www.instagram.com/_atalaso/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              data-clog-click
            >
              <Icon as={AiOutlineInstagram} />
            </a>
            <a
              href="https://linkedin.com/company/atalaso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              title="Linkedin"
              data-clog-click
            >
              <Icon as={AiFillLinkedin} />
            </a>
            <a
              href="https://www.facebook.com/atalasohq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              data-clog-click
            >
              <Icon as={AiFillFacebook} />
            </a>
          </div>
        </SocialsContainer>
        <FooterNav>
          <LinksContainer>
            <Link href="/terms" data-clog-click>
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" data-clog-click>
              Privacy policy
            </Link>
            <Link href="/about" data-clog-click>
              About us
            </Link>
          </LinksContainer>
          <AllRights>
            <p>&copy; {year} Atalaso LLC. All Rights Reserved.</p>
          </AllRights>
        </FooterNav>
      </FooterContainer>
    </FooterSection>
  )
}

export default Footer
