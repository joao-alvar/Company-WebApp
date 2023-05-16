import {AiFillCheckCircle} from 'react-icons/ai'

import ImageComponent from '@/components/imageComponent/ImageComponent'

import {Section} from '@/modules/home/hero/HeroElements'

import {
  Container,
  ListWrap,
  ImageWrap,
  StyledList,
  Wrapper,
  Icon,
} from './AdsFeaturesElements'

import Ads_2 from '/public/images/Optimized.jpeg'
import Ads_1 from '/public/images/Trend.jpeg'

const AdsFeatures = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <ListWrap>
            <span>What and how</span>
            <h2>What is Ultium?</h2>
            <StyledList>
              <li>
                <Icon as={AiFillCheckCircle} />
                <h3>Ultium is a game-changing electric vehicle platform</h3>
              </li>
              <li>
                <Icon as={AiFillCheckCircle} />
                <h3>Built on a flexible battery architecture</h3>
              </li>
              <li>
                <Icon as={AiFillCheckCircle} />
                <h3>
                  For the production of EVs across different vehicle types
                </h3>
              </li>
              <li>
                <Icon as={AiFillCheckCircle} />
                <h3>With outstanding power, range and performance</h3>
              </li>
            </StyledList>
          </ListWrap>
          <ImageWrap>
            <ImageComponent
              src={Ads_1}
              alt=""
              style={{
                borderBottomRightRadius: '8px',
                borderTopRightRadius: '8px',
              }}
            />
          </ImageWrap>
        </Wrapper>
        <Wrapper>
          <ListWrap>
            <h2>What is Ultium?</h2>
            <StyledList>
              <li>
                <Icon as={AiFillCheckCircle} />
                <h3>Ultium is a game-changing electric vehicle platform</h3>
              </li>
              <li>
                <Icon as={AiFillCheckCircle} />
                <h3>Built on a flexible battery architecture</h3>
              </li>
              <li>
                <Icon as={AiFillCheckCircle} />
                <h3>
                  For the production of EVs across different vehicle types
                </h3>
              </li>
              <li>
                <Icon as={AiFillCheckCircle} />
                <h3>With outstanding power, range and performance</h3>
              </li>
            </StyledList>
          </ListWrap>
          <ImageWrap>
            <ImageComponent
              src={Ads_2}
              alt=""
              style={{
                borderBottomRightRadius: '8px',
                borderTopRightRadius: '8px',
              }}
            />
          </ImageWrap>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default AdsFeatures
