import Cards from '../cards/Cards'
import {ContentContainer, Wrapper} from './HeaderContentElements'

const HeaderContent = () => {
  return (
    <>
      <ContentContainer>
        <Wrapper>
          <h1>We&apos;re here to help.</h1>
          <p>
            We appreciate your interest in Atalaso. Please fill out the form or
            contact us at{' '}
            <a href="mailto:contact@atalaso.com">contact@atalaso.com</a>.
          </p>
          <Cards />
        </Wrapper>
      </ContentContainer>
    </>
  )
}

export default HeaderContent
