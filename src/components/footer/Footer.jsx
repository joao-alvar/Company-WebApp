import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import {FaLinkedin, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'

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
            (router?.pathname === '/terms') && (
            <div className="call_to_action">
              {/* <h3>Ready to start?</h3> */}
              <Link href="/contact">
                Get in touch <IconArrow />
              </Link>
            </div>
          )}
          <div className="socials_icons">
            <a
              href="https://en.wikipedia.org/wiki/Next.js"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              title="Linkedin"
              data-clog-click
            >
              <Icon as={FaLinkedin} />
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Next.js"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              data-clog-click
            >
              <Icon as={FaFacebookSquare} />
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Next.js"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
              data-clog-click
            >
              <Icon as={FaTwitterSquare} />
            </a>
          </div>
        </SocialsContainer>
        <FooterNav>
          <LinksContainer>
            <Link href="/terms" data-clog-click>
              Terms of service
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
