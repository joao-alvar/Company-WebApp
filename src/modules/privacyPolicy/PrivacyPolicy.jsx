import Link from 'next/link'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  Title,
  Content,
  List,
  ListItems,
} from './PrivacyPolicyElements'

const PrivacyPolicy = () => {
  return (
    <Section>
      <Container>
        <Title>
          <header>
            <h1>Privacy policy</h1>
            <Link href="/terms">Terms of Services</Link>
          </header>
        </Title>
        <Content>
          <p className="top_gap">
            Thank you for choosing Atalaso. At Atalaso, we are committed to
            protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy outlines how we collect, use,
            disclose, and protect the information you provide to us when using
            our website and services. By accessing and using our website, you
            consent to the terms and practices described in this Privacy Policy.
            If you have any questions or concerns about our policy, or our
            practices with regards to your personal information, please contact
            us at <a href="mailto:contact@atalaso.com">contact@atalaso.com</a>,
            When you visit our website{' '}
            <a href="https://www.atalaso.com">https://www.atalaso.com</a>, and
            use our services, you trust us with your personal information. We
            take your privacy very seriously. In this privacy policy, we seek to
            explain to you in the clearest way possible what information we
            collect, how we use it and what rights you have in relation to it.
          </p>
          <List>
            <li>
              <h2>1. Information we collect</h2>
              <ul>
                <ListItems>
                  Personal Information: We may collect personal information such
                  as your name, email address, contact details, and any other
                  information you voluntarily provide to us.
                </ListItems>
                <ListItems>
                  Usage Information: We may collect non-personal information
                  about your interactions with our website, such as IP address,
                  browser type, operating system, and browsing behavior.
                </ListItems>
              </ul>
            </li>
            <li>
              <h2>2. Use of information</h2>
              <ul>
                <ListItems>
                  We use the collected information to provide and improve our
                  services, respond to your inquiries, and personalize your
                  experience on our website.
                </ListItems>
                <ListItems>
                  We use the collected information to provide and improve our
                  services, respond to your inquiries, and personalize your
                  experience on our website.We may also use your information to
                  send you promotional emails or newsletters, but you have the
                  option to unsubscribe from such communications at any time.
                </ListItems>
              </ul>
            </li>
            <li>
              <h2>3. Disclosure of information</h2>
              <ul>
                <ListItems>
                  We may share your information with trusted third-party service
                  providers who assist us in delivering our services, but they
                  are obligated to keep your information confidential.
                </ListItems>
                <ListItems>
                  Legitimate Interests: We may process your data when it is
                  reasonably necessary to achieve our legitimate business
                  interests.
                </ListItems>
                <ListItems>
                  Performance of a Contract: Where we have entered into a
                  contract with you, we may process your personal information to
                  fulfill the terms of our contract.
                </ListItems>
                <ListItems>
                  We may also disclose your information when required by law or
                  to protect our rights, safety, or property, applicable law,
                  governmental requests, a judicial proceeding, court order, or
                  legal process, such as in response to a court order or a
                  subpoena (including in response to public authorities to meet
                  national security or law enforcement requirements).
                </ListItems>
              </ul>
            </li>
            <li>
              <h2>4. Data security</h2>
              <ul>
                <ListItems>
                  We implement industry-standard security measures to protect
                  your information from unauthorized access, disclosure,
                  alteration, or destruction.
                </ListItems>
                <ListItems>
                  However, please be aware that no method of transmission over
                  the internet or electronic storage is 100% secure, and we
                  cannot guarantee the absolute security of your information.
                </ListItems>
              </ul>
            </li>
            <li>
              <h2>5. Cookies and tracking technologies</h2>
              <ul>
                <ListItems>
                  We may use cookies and similar tracking technologies to
                  enhance your browsing experience and collect information about
                  how you use our website.
                </ListItems>
                <ListItems>
                  You have the option to disable cookies in your browser
                  settings, but this may limit certain functionalities of our
                  website.
                </ListItems>
              </ul>
            </li>
            <li>
              <h2>6. Third-party links</h2>
              <p>
                Our website may contain links to third-party websites that are
                not under our control. We are not responsible for the privacy
                practices or content of such websites.
                <a href="mailto:contact@atalaso.com">contact@atalaso.com</a>.
              </p>
            </li>
            <li>
              <h2>7. Do we collect information from minors?</h2>
              <p>
                We are committed to protecting the privacy of children. We do
                not knowingly collect personal information from or market to
                individuals under the age of 18. By using our services, you
                confirm that you are at least 18 years old or have the consent
                of a parent or guardian. If we become aware that we have
                collected personal information from a child under the age of 18,
                we will take immediate steps to delete that information from our
                records. If you believe that we have inadvertently collected
                information from a child under the age of 18, please contact us
                at <a href="mailto:contact@atalaso.com">contact@atalaso.com</a>.
              </p>
            </li>
            <li>
              <h2>8. Changes to the privacy policy</h2>
              <p>
                We reserve the right to update or modify this Privacy Policy at
                any time. Any changes will be effective upon posting the revised
                policy on our website.
              </p>
            </li>
            <li>
              <h2>9. How can you contact us about this Policy?</h2>
              <p>
                If you have any questions, concerns, or requests regarding our
                Privacy Policy or the handling of your personal information,
                please contact us at{' '}
                <a href="mailto:contact@atalaso.com">contact@atalaso.com</a> or
                through our website contact form.
              </p>
            </li>
          </List>
          <p className="privacy_statement">
            By using our website, you signify your acceptance of this Privacy
            Policy. Please review this policy periodically for any updates or
            changes.
          </p>
        </Content>
      </Container>
    </Section>
  )
}

export default PrivacyPolicy
