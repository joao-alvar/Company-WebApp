import Link from 'next/link'

import {Section} from '../home/hero/HeroElements'
import {Container, Content, List, ListItems, Title} from './TermsOfUseElements'

const TermsOfUse = () => {
  return (
    <Section>
      <Container>
        <Title>
          <header>
            <h1>Terms of Use</h1>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </header>
        </Title>
        <Content>
          <h2>General</h2>
          <p>
            Please read these Terms of Use (&quot;Terms&quot;) carefully before
            using our website. By accessing and using this site, you acknowledge
            and accept the following terms and conditions. If you do not agree
            with any part of these Terms, please refrain from using the website.
          </p>
          <List>
            <li>
              <h2>1. Intellectual property</h2>
              <ol>
                <ListItems>
                  All content on this website, including but not limited to
                  text, graphics, logos, images, videos, and software, is the
                  property of Atalaso or its licensors and is protected by
                  copyright laws.
                </ListItems>
                <ListItems>
                  No part of this site may be copied, reproduced, republished,
                  uploaded, posted, transmitted, or distributed without prior
                  written consent from Atalaso, except for personal,
                  non-commercial use.
                </ListItems>
              </ol>
            </li>
            <li>
              <h2>2. User conduct</h2>
              <ol>
                <ListItems>
                  You agree to use the website only for lawful purposes and in a
                  manner that does not violate any applicable laws or
                  regulations.
                </ListItems>
                <ListItems>
                  You are solely responsible for any content you post or
                  transmit on the website. You must not post or transmit any
                  content that is defamatory, obscene, offensive, or infringing
                  upon any intellectual property rights or privacy rights of
                  others.
                </ListItems>
              </ol>
            </li>
            <li>
              <h2>3. Third-Party websites and content</h2>
              <ol>
                <ListItems>
                  The website may contain links to third-party websites or
                  resources. These links are provided for your convenience and
                  do not imply any endorsement or responsibility for the content
                  or services provided on these websites.
                </ListItems>
                <ListItems>
                  Atalaso does not guarantee the accuracy, completeness, or
                  reliability of any content on third-party websites.
                </ListItems>
              </ol>
            </li>
            <li>
              <h2>4. Warranty disclaimer</h2>
              <ol>
                <ListItems>
                  This site and its contents are provided on an &quot;as
                  is&quot; basis without any warranties, express or implied.
                </ListItems>
                <ListItems>
                  Atalaso does not warrant the accuracy, completeness, or
                  reliability of the information provided on this site.
                </ListItems>
              </ol>
            </li>
            <li>
              <h2>5. Submission of Information</h2>
              <ol>
                <ListItems>
                  Any information submitted through this site shall be deemed
                  non-confidential and non-proprietary.
                </ListItems>
                <ListItems>
                  By submitting information, you represent that you have the
                  lawful right to do so and agree that Atalaso is not obligated
                  to treat such submissions as confidential.
                </ListItems>
              </ol>
            </li>
            <li>
              <h2>6. Unauthorized idea submissions</h2>
              <ol>
                <ListItems>
                  Atalaso does not accept unauthorized idea submissions outside
                  of established business relationships.
                </ListItems>
                <ListItems>
                  Any ideas disclosed without a pre-existing and documented
                  confidential business relationship are not confidential and
                  may be used by Atalaso without compensation or accountability.
                </ListItems>
              </ol>
            </li>
            <li>
              <h2>7. Limitation of liability</h2>
              <ol>
                <ListItems>
                  Atalaso shall not be liable for any direct, indirect,
                  incidental, consequential, or punitive damages arising out of
                  or in connection with your use of the website or any content
                  on it.
                </ListItems>
                <ListItems>
                  Atalaso shall not be liable for any loss or damage resulting
                  from the use of third-party websites or resources linked to
                  from our website.
                </ListItems>
              </ol>
            </li>
            <li>
              <h2>8. Governing law</h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of New Mexico/U.S.A., without regard to its
                conflict of laws provisions.
              </p>
            </li>
            <li>
              <h2>9. Modifications</h2>
              <p>
                Atalaso reserves the right to modify or update these Terms at
                any time without prior notice. It is your responsibility to
                review these Terms periodically for any changes.
              </p>
            </li>
            <li>
              <h2>10. Severability</h2>
              <p>
                If any provision of these Terms is found to be invalid, illegal,
                or unenforceable, the remaining provisions shall continue in
                full force and effect.
              </p>
            </li>
          </List>
          <p>
            By using our website, you acknowledge that you have read,
            understood, and agreed to these Terms of Use. This site is
            maintained by Atalaso in New Mexico, U.S.A. By using this site, you
            agree that any legal action or proceeding related to this site shall
            be governed by the laws of the State of New Mexico, without
            reference to its choice of law rules. In the event of any legal
            proceedings against Atalaso, you acknowledge that Atalaso is free to
            choose the jurisdiction of our preference for the legal action. By
            using this site, you have agreed to the laws of the State of New
            Mexico governing any such proceedings. You are responsible for
            complying with the laws of the jurisdiction from which you access
            this site, and you agree not to use the information on this site in
            violation of such laws. Regardless of your location or the location
            from where you accessed this site, Atalaso reserves the right to
            defend any legal action in New Mexico as it deems appropriate.
            Please ensure that you carefully review and comply with the laws of
            your jurisdiction when accessing this site. If you have any
            questions or concerns regarding these Terms, please contact us at{' '}
            <a href="mailto:contact@atalaso.com">contact@atalaso.com</a>.
          </p>
        </Content>
      </Container>
    </Section>
  )
}

export default TermsOfUse
