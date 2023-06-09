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
                Innovation is the catalyst that drives growth, propels
                industries forward, and allows businesses to stay ahead of the
                competition. It has the potential to disrupt traditional models,
                challenge the status quo, and unlock new opportunities that were
                previously unimaginable.
              </p>
              <p>
                Atalaso helps companies in the transformation process, creating
                new paths, overcoming challenges, and adopting new technologies.
                We are convinced that embracing innovation is not just a
                strategic choice, but a mindset that is essential for long-term
                success. It is the key that unlocks new possibilities, propels
                businesses forward, and enables individuals to thrive in an
                ever-changing world.
              </p>
            </FloatLeft>
            <FloatRight>
              <h3>
                By continuously evolving and staying at the forefront of
                industry trends, we ensure that our clients always have access
                to the latest tools and strategies to stay ahead.
              </h3>
            </FloatRight>
          </Wrapper>
        </AboutContainer>
      </AboutSection>
    </>
  )
}

export default Mission
