import {AboutSection} from '../hero/AboutHeroElements'
import {
  AboutContainer,
  TitleWrap,
  Wrapper,
  FloatLeft,
  FloatRight,
} from './StoryElements'

const Mission = () => {
  return (
    <>
      <AboutSection>
        <AboutContainer>
          <TitleWrap>
            <h2>We are here to help</h2>
          </TitleWrap>
          <Wrapper>
            <FloatLeft>
              <p>
                Run a business is hard, we know, but lucky you don&apos;t have
                to do it alone. Your growth and development is our purpose. We
                want our clients to set new heights and metrics and achieve
                greatness Our mission is to grown together We take pride in our
                work and are dedicated to providing our clients with the best
                digital solutions. We are committed to delivering projects on
                time and on budget.
              </p>
            </FloatLeft>
            <FloatRight>
              <h3>
                Our people platform helps businesses take care of their
                hardworking teams.
              </h3>
            </FloatRight>
          </Wrapper>
        </AboutContainer>
      </AboutSection>
    </>
  )
}

export default Mission
