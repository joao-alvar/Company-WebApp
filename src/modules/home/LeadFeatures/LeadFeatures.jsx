import {AiOutlineGlobal} from 'react-icons/ai'
import {IoPhonePortraitOutline} from 'react-icons/io5'
import {RiComputerLine} from 'react-icons/ri'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {
  Section,
  Container,
  Wrapper,
  ImageWrap,
  ContentContainer,
  Header,
  List,
  ListItem,
  Icon,
} from './LeadFeaturesElements'

import featuredImage from '/public/images/Results.jpg'

const LeadFeatures = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <ImageWrap>
            <ImageComponent src={featuredImage} alt="Board meeting" />
          </ImageWrap>
          <ContentContainer>
            <Header>
              <h2>Relax we take care of you</h2>
            </Header>
            <List>
              <ListItem>
                <Icon as={IoPhonePortraitOutline} />
                <div>
                  <h3>A super easy and functional mobile application</h3>
                  <p>
                    The application S-net Mobile won the German Design Awards in
                    2023
                  </p>
                </div>
              </ListItem>
              <ListItem>
                <Icon as={RiComputerLine} />
                <div>
                  <h3>A super easy and functional mobile application</h3>
                  <p>
                    The application S-net Mobile won the German Design Awards in
                    2023
                  </p>
                </div>
              </ListItem>
              <ListItem>
                <Icon as={AiOutlineGlobal} />
                <div>
                  <h3>A super easy and functional mobile application</h3>
                  <p>
                    The application S-net Mobile won the German Design Awards in
                    2023
                  </p>
                </div>
              </ListItem>
            </List>
          </ContentContainer>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default LeadFeatures
