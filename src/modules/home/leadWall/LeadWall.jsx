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
            <TextWrap className="home_wall">
              <p>Case studies</p>
              <header>
                <h2>
                  We continually improve our expertise to better serve our
                  costumers
                </h2>
              </header>
              <h3>
                Adding value and partnering with companies to elevate operations
                and overcome challenges.
              </h3>
            </TextWrap>
            <StyledList className="home_wall_list">
              <List>
                <h4>15%</h4>
                <p>
                  estimated only a minority of companies is fully embracing
                  digital today.
                </p>
              </List>
              <List>
                <h4>77%</h4>
                <p>
                  of companies say their relationship with technology is average
                  or above average.
                </p>
              </List>
              <List>
                <h4>79%</h4>
                <p>
                  of digitally mature companies have achieved above-average
                  revenue growth.
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
