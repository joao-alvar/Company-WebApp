import Link from 'next/link'

import {Section} from '../home/hero/HeroElements'
import {Container, Content, Title} from './TermsOfUseElements'

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
            These Payment Terms describe your agreement to pay for current and
            future goods and services, together with any charges or fees applied
            by us related to goods or services. In these Payment Terms, ‘we’ and
            ‘us’ mean the Tesla group entity supplying the goods and services in
            your country. In order to use certain services, such as
            Supercharging, authorized automatic or one-time payments, recurring
            payments and subscriptions, you allow Tesla to store, maintain, and
            recover funds from your specified payment method in accordance with
            these Payment Terms. Tesla may amend these terms from time to time
            and any changes are effective when posted to this page. When you add
            a payment method to your Tesla Account, such as a credit card,
            certain information including, but not limited to device location,
            device identification number, and card information may be sent to
            Tesla and shared with our payment processor. Card information is
            encrypted during the transmission and Tesla will not have access to
            the actual card number. When the stored payment method or a new
            credit card is used for purchasing goods and services on a Tesla
            hosted website or application, the necessary information to process
            payment will be shared with our global processors and our banking
            partners, to process your payment, comply with financial
            regulations, to prevent fraud, and for troubleshooting any payment
            issues. When you pay using your bank account details, those details
            are stored by Tesla in an encrypted format that prevents
            unauthorized access without specific permissions. For information on
            how we handle your payment information, please see Tesla’s Privacy
            Notice. You must maintain at least one valid payment method in your
            Tesla Account. Any services received may result in charges being
            applied to your saved payment method, and charges may include taxes
            as required by law. Your failure to maintain accurate, complete, and
            up-to-date payment information, including an invalid or expired
            payment method, may result in your inability to access or use
            services such as Supercharging. When you request a bank payment such
            as an Automated Clearing House (ACH) or Pre-Authorized Debit (PAD)
            payment transfer, and where required by law, we will inform you at
            least three days before the initial payment due date, and up to one
            day before payment is collected. You may amend or cancel this
            authorization at any time by providing us with thirty (30) days’
            notice. You have certain recourse rights if any debit does not
            comply with this agreement, such as the right to receive
            reimbursement in the event of an unauthorized debit inconsistent
            with these terms. To obtain more information on your recourse
            rights, contact your financial institution. For charges that support
            automatic or recurring payments, you understand that your payment
            method will be charged each time your service automatically renews
            at the end of the prescribed period, unless turned off at least
            twenty-four (24) hours prior to the end of the current billing
            period. You can manage or turn off automatic payments in your Tesla
            Account at any time. Persons authorized by you to use your vehicle
            can also make use of the services described in these Payment Terms.
            In this case, you will remain responsible to Tesla for payment of
            the applicable charges and Tesla will require payment from you using
            the payment method saved in your Tesla Account. You will be able to
            review a summary of transactions in your Tesla Account. In the event
            that any attempt to recover funds from you should fail using the
            payment method saved in your Tesla Account, you agree to allow Tesla
            to recover all or less than all of the amount owed for goods or
            services as set out in this clause. If we are unable to collect
            payment, we may contact you based on your information on file or may
            request payment when we are performing services for you. If you
            violate these Payment Terms, such as by not paying past due and
            unchallenged amounts, we may limit or block your vehicle's ability
            to use the related services until payment issues are resolved.
          </p>
        </Content>
      </Container>
    </Section>
  )
}

export default TermsOfUse
