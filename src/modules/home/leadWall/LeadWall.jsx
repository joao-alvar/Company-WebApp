import {Section} from '../hero/HeroElements'
import {
  LeadContainer,
  LeadContent,
  TextWrap,
  StyledList,
  List,
} from './LeadWallElements'

const LeadWall = () => {
  return (
    <>
      <Section>
        <LeadContainer>
          <LeadContent>
            <TextWrap>
              <p>Our scientific studies</p>
              <header>
                <h2>
                  We continually study our platform to understand the real-world
                  benefits
                </h2>
              </header>
              <h3>
                Collaborating with top mental health experts, we live our values
                by contributing to mental health knowledge and supporting
                academic research
              </h3>
            </TextWrap>
            <StyledList>
              <List>
                <h4>£5,049</h4>
                <p>
                  estimated annual productivity saving per employee experiencing
                  low mood or sleep difficulties
                </p>
              </List>
              <List>
                <h4>71%</h4>
                <p>of participants reported a reduction in stress levels.</p>
              </List>
              <List>
                <h4>30+</h4>
                <p>
                  minutes extra sleep a night for people with sleep
                  difficulties.
                </p>
              </List>
            </StyledList>
          </LeadContent>
        </LeadContainer>
      </Section>
    </>
  )
}

export default LeadWall
